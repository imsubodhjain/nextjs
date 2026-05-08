export async function GET() {
  try {
    const response = await fetch('https://leetcode.com/graphql/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query {
          matchedUser(username: "imsubodhjain") {
            username
            submitStats {
              acSubmissionNum {
                difficulty
                count
                submissions
              }
            }
            userCalendar(year: 2026) {
              streak
              totalActiveDays
              submissionCalendar
            }
          }
        }`,
      }),
    });

    const json = await response.json();
    const userData = json.data?.matchedUser;

    if (!userData) {
      return Response.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    const submitStats = userData.submitStats.acSubmissionNum;
    const calendar = JSON.parse(userData.userCalendar.submissionCalendar);

    // Convert submission calendar to contribution data
    const contributionData = Object.entries(calendar).map(([timestamp, count]) => ({
      date: new Date(parseInt(timestamp) * 1000).toISOString().split('T')[0],
      count: Math.min(count, 5), // Cap at 5 for heatmap color intensity
    }));

    // Also add empty days for the past year to show complete calendar
    const today = new Date();
    for (let i = 365; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];

      if (!contributionData.find(d => d.date === dateStr)) {
        contributionData.push({ date: dateStr, count: 0 });
      }
    }

    return Response.json({
      currentStreak: userData.userCalendar.streak,
      totalSolved: submitStats.find(s => s.difficulty === 'All')?.count || 0,
      easy: submitStats.find(s => s.difficulty === 'Easy')?.count || 0,
      medium: submitStats.find(s => s.difficulty === 'Medium')?.count || 0,
      hard: submitStats.find(s => s.difficulty === 'Hard')?.count || 0,
      totalActiveDays: userData.userCalendar.totalActiveDays,
      contributionData: contributionData.sort((a, b) => new Date(a.date) - new Date(b.date)),
    });
  } catch (error) {
    console.error('Error fetching LeetCode data:', error);
    return Response.json(
      { error: 'Failed to fetch LeetCode data' },
      { status: 500 }
    );
  }
}
