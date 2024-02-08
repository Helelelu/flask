// Courses
const courses = [
    { name: 'HTML for Beginners', type: 'Web Design Courses', image: 'static/img/HTML.webp', video: 'static/vid/HTML.mp4',
    description: "Embark on a journey into the heart of web development with our comprehensive HTML course. Whether you're a complete beginner or looking to solidify your understanding of the fundamentals, this course is designed to equip you with the essential skills to create and structure web content. \nBy the end of this course, you'll have the knowledge and confidence to create well-structured, responsive web pages. Whether you're aspiring to become a web developer or simply want to understand the language that powers the web, our HTML course is your gateway to a world of endless possibilities. Enroll today and start building the web of tomorrow!"},
    { name: 'CSS for Beginners', type: 'Web Design Courses', image: 'static/img/CSS.jpg', video: 'static/vid/CSS.mp4',
    description: "Unlock the power of style and design with our CSS Mastery course. Whether you're a budding web designer or a seasoned developer looking to enhance your styling skills, this course is your gateway to creating visually stunning and responsive websites. \nWhether you're aiming to become a front-end developer or enhance your web design skills, our CSS Mastery course empowers you to transform your ideas into visually captivating and well-styled websites. Join us on this creative journey and elevate your web design game. Enroll today!" },
    { name: 'JavaScript for Beginners', type: 'Web Design Courses', image: 'static/img/JavaScript.webp', video: 'static/vid/JavaScript.mp4',
    description: "Embark on a dynamic journey into the world of web development with our JavaScript Essentials course. Whether you're a novice coder or looking to amplify your front-end and back-end skills, this course is your key to mastering the language that breathes life into modern web applications. \nWhether you're aiming to become a full-stack developer or enhance your front-end capabilities, our JavaScript Essentials course equips you with the skills to build robust and interactive web applications. Join us on this transformative coding journey and bring your web development aspirations to life. Enroll today!"},
    { name: 'Python: Basics for Starters', type: 'Programming Courses', image: 'static/img/Python.png', video: 'static/vid/Python.mp4',
    description: "Embark on a journey into the world of programming excellence with our Python Programming course. Whether you're a complete beginner or an experienced developer looking to add a powerful language to your repertoire, this course is designed to unlock the full potential of Python. \nWhether you aspire to be a web developer, data scientist, or automation expert, our Python Programming course equips you with the skills to excel in a variety of domains. Join us on this dynamic coding journey and harness the versatility of Python. Enroll today!"},
    { name: 'Java: Basics for Starters', type: 'Programming Courses', image: 'static/img/Java.jpg', video: 'static/vid/Java.mp4',
    description: "Embark on a Java journey that transcends the realms of software development with our comprehensive Java Mastery course. Whether you're new to programming or a seasoned developer aiming to master Java, this course is designed to equip you with the skills to build robust, scalable, and versatile applications. \nWhether you aspire to be a backend developer, enterprise architect, or mobile app creator, our Java Mastery course provides the comprehensive knowledge and skills needed to excel in diverse development scenarios. Join us on this transformative coding journey and elevate your Java proficiency. Enroll today!"},
];

function loadCourses() {
    const courseSelection = document.getElementById('courseSelection');

    // Creating HTML Elements
    courses.forEach((course, index) => {
        const courseBox = document.createElement('div');
        courseBox.className = 'course-box';
        courseBox.setAttribute('data-index', index); 

        const courseImage = document.createElement('img');
        courseImage.className = 'course-image';
        courseImage.src = course.image;

        const courseName = document.createElement('div');
        courseName.className = 'course-name';

        const courseTitle = document.createElement('p');
        courseTitle.className = 'page-text course-title';
        courseTitle.textContent = course.name;

        const courseType = document.createElement('p');
        courseType.className = 'page-text course-type';
        courseType.textContent = course.type;

        // Adding elements to div class course-box
        courseBox.appendChild(courseImage);
        courseBox.appendChild(courseName);
        courseName.appendChild(courseTitle);
        courseName.appendChild(courseType);

        // Add click event listener to each course box
        courseBox.addEventListener('click', function () {
            navigateToCourseDetail(index);
        });

        // Append div class course-box to the div class course-selection
        courseSelection.appendChild(courseBox);
    });
}

// Function to navigate to another HTML file with course details
function navigateToCourseDetail(index) {
    const course = courses[index];
    window.location.href = `course-detail.html?name=${course.name}&video=${course.video}&description=${course.description}`;
}

window.onload = loadCourses;
