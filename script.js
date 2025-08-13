// Replace with your Supabase URL and annon public key
const supabaseUrl = 'https://tdnrsxwyqbwxgnlqgbfy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkbnJzeHd5cWJ3eGdubHFnYmZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ5MTIxNSwiZXhwIjoyMDcwNTY3MjE1fQ.m9oqLndpEJnqNMW2Cr9gJp-Kqt5gJlHGp48hn6GrWvc';

const supabase = supabase.createClient(supabaseUrl, supabaseKey);

const form = document.getElementById('dataForm');
const statusParagraph = document.getElementById('status');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get values from the form
    const slNo = document.getElementById('slNo').value;
    const name = document.getElementById('name').value;

    // Insert data into the 'Login' table
    const { data, error } = await supabase
        .from('Login')
        .insert([{ "Sl No": slNo, Name: name }]);

    if (error) {
        statusParagraph.textContent = 'Error inserting data: ' + error.message;
        statusParagraph.style.color = 'red';
        console.error('Error:', error);
    } else {
        statusParagraph.textContent = 'Data inserted successfully!';
        statusParagraph.style.color = 'green';
        console.log('Success:', data);
        form.reset(); // Clear the form
    }
});