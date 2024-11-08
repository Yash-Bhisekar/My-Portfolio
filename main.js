// Add event listener to the navbar links to smooth scroll to the corresponding section
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const sectionId = link.getAttribute('href');
        const section = document.querySelector(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add event listener to the lightbox to display the image
document.querySelectorAll('.lightbox').forEach(lightbox => {
    lightbox.addEventListener('click', event => {
        const image = lightbox.querySelector('img');
        const imageUrl = image.src;
        const lightboxImage = document.createElement('img');
        lightboxImage.src = imageUrl;
        lightboxImage.style.maxWidth = '80%';
        lightboxImage.style.maxHeight = '80%';
        lightboxImage.style.objectFit = 'contain';
        lightbox.innerHTML = '';
        lightbox.appendChild(lightboxImage);
    });
});

// Add event listener to the lightbox to close it when clicked outside
document.addEventListener('click', event => {
    if (event.target.classList.contains('lightbox')) {
        const lightbox = event.target;
        lightbox.innerHTML = '';
    }
});

// Add event listener to the contact form to send an email
document.querySelector('.Contact-content form').addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const message = formData.get('message');
    const subject = 'Message from Personal Portfolio Website';
    const body = `Name: ${formData.get('name')}\nEmail: ${email}\nMessage: ${message}`;
    window.location.href = `mailto:yashbhisekar@example.com?subject=${subject}&body=${body}`;
});