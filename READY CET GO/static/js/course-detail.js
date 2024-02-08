// Function to extract course details from the URL parameters
function getCourseDetailsFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get("name");
    const video = urlParams.get("video")
    const description = urlParams.get("description")

    return { name, video, description };
}

// Function to display course details
function displayCourseDetails() {
    const courseDetail = document.getElementById('courseDetail');
    const coursePreview = document.getElementById('coursePreview')
    const courseTitle = document.getElementById('courseTitle')
    const courseDescription = document.getElementById('courseDescription')
    const { name, video, description } = getCourseDetailsFromURL();

    // Create HTML elements to display course details
    const courseName = document.createElement('p');
    courseName.className = 'page-text course-title';
    courseName.textContent = `${name}`;

    const courseVideo = document.createElement('video')
    courseVideo.className = 'course-video'
    courseVideo.src = video
    courseVideo.controls = true

    const descContent = document.createElement('p');
    descContent.className = 'description';
    descContent.textContent = `${description}`;

    // Not working yet
    // const descriptionLines = description.split('\n');
    //     descriptionLines.forEach((line, i) => {
    //         description.innerHTML += line;
    //         if (i < descriptionLines.length - 1) {
    //             description.appendChild(document.createElement('br'));
    //         }
    //     });

    // Append elements to the course detail container
    courseTitle.appendChild(courseName);
    coursePreview.appendChild(courseVideo)
    courseDescription.appendChild(descContent)
    
}

// Call the displayCourseDetails function when the page loads
window.onload = displayCourseDetails;
