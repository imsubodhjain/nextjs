import { writeFile, readFile, mkdir } from 'fs/promises';
import { join } from 'path';

export async function POST(request) {
  try {
    const data = await request.json();
    const csvDir = join(process.cwd(), 'public', 'data');
    const csvFile = join(csvDir, 'submissions.csv');

    // Create directory if it doesn't exist
    try {
      await mkdir(csvDir, { recursive: true });
    } catch (e) {
      console.error('Directory creation error:', e);
    }

    // Read existing data
    let csvContent = '';
    try {
      csvContent = await readFile(csvFile, 'utf-8');
    } catch {
      // File doesn't exist, create with headers
      csvContent = 'Timestamp,Name,Email,Subject,Message\n';
    }

    // Add new submission
    const timestamp = new Date().toLocaleString('en-US');
    const escapedMessage = `"${data.message.replace(/"/g, '""')}"`;
    const newRow = `${timestamp},"${data.name}","${data.email}","${data.subject}",${escapedMessage}\n`;
    csvContent += newRow;

    // Write back
    await writeFile(csvFile, csvContent, 'utf-8');

    return Response.json({ success: true, message: 'Submission saved' }, { status: 200 });
  } catch (error) {
    console.error('Error saving submission:', error);
    return Response.json({ error: 'Failed to save submission', details: error.message }, { status: 500 });
  }
}
