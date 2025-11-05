export const metadata = { title: 'CV' };


export default function CVPage() {
return (
<div>
<h1>CV</h1>
<p>Drop your PDF in <code>public/cv.pdf</code> and link it below.</p>
<p><a href="/cv.pdf" target="_blank" rel="noopener noreferrer">Download my CV (PDF)</a></p>
</div>
);
}