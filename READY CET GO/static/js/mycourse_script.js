document.addEventListener('DOMContentLoaded', function() {
    const side_expand = document.querySelector('.sidebar-expand');
    const page_expand = document.querySelector('body');
    const side_disappear = document.querySelector('.side-bar');
    const menu_toggle = document.querySelector('.menu-toggle');
    
    if (menu_toggle) {
        menu_toggle.onclick = function() {
            this.classList.toggle('active');
            side_expand.classList.toggle('active');
            page_expand.classList.toggle('active');
            side_disappear.classList.toggle('active');
        };
    }

    const profile_dropdown = document.querySelector('.profile-dropdown');
    const profile_logo = document.querySelector('.profile-logo');
    
    if (profile_logo) {
        profile_logo.addEventListener('click', function() {
            this.classList.toggle('active');
            profile_dropdown.classList.toggle('active');
        });
    }

    const cont_page = document.querySelector('.content-page-2');
    const h_content = document.querySelector('#h-content');
    
    if (h_content) {
        h_content.addEventListener('click', function() {
            this.classList.toggle('active');
            cont_page.classList.toggle('active');
        });
    }

    const h_introElement = document.querySelector('#h-intro');
    const coursePage1Element = document.querySelector('.course-page-1');
    const coursePage2Element = document.querySelector('.course-page-2');
    
    if (h_introElement) {
        h_introElement.addEventListener('click', function() {
            coursePage1Element.classList.add('active');
            coursePage2Element.classList.remove('active');
        });
    }

    const h_contentElement = document.querySelector('#h-content');
    
    if (h_contentElement) {
        h_contentElement.addEventListener('click', function() {
            coursePage2Element.classList.add('active');
            coursePage1Element.classList.remove('active');
        });
    }

    // Add event listeners for modules (module1, module2, module3, module4) here...
});

function redirectJava() {
    window.location.href = "{{ url_for('java_course')}}";
    }
    
    function redirectPython() {
    window.location.href = "{{ url_for('python_course')}}";
    }
    
    function redirectJavaS() {
    window.location.href = "{{ url_for('java_course')}}";
    }
    
    function redirectCSS() {
    window.location.href = "{{ url_for('css_course')}}";
    }
    
    function redirectHTML() {
    window.location.href = "{{ url_for('html_course')}}";
    }
    
    function redirectMyCourses() {
    window.location.href = "{{ url_for('mycourses')}}";
    }


const m1Element = document.querySelector('#m1');
const m11Element = document.querySelector('#m11');
const m11_eElement = document.querySelector('#m11e');
const m12Element = document.querySelector('#m12');
const m12_eElement = document.querySelector('#m12e');
const module1Element = document.querySelector('#m1cont');

//module1
m1Element.addEventListener('click', function() {
    module1Element.classList.toggle('active');
});

m11Element.addEventListener('click', function() {
    this.classList.toggle('active');
});

m11_eElement.addEventListener('click', function() {
    this.classList.toggle('active');
});

m12Element.addEventListener('click', function() {
    this.classList.toggle('active');
});

m12_eElement.addEventListener('click', function() {
    this.classList.toggle('active');
});

//module2
const m2Element = document.querySelector('#m2');
const m21Element = document.querySelector('#m21');
const m21_eElement = document.querySelector('#m21e');
const m22Element = document.querySelector('#m22');
const m22_eElement = document.querySelector('#m22e');
const module2Element = document.querySelector('#m2cont');

m2Element.addEventListener('click', function() {
    module2Element.classList.toggle('active');
});

m21Element.addEventListener('click', function() {
    this.classList.toggle('active');
});

m21_eElement.addEventListener('click', function() {
    this.classList.toggle('active');
});

m22Element.addEventListener('click', function() {
    this.classList.toggle('active');
});

m22_eElement.addEventListener('click', function() {
    this.classList.toggle('active');
});

//module3
const m3Element = document.querySelector('#m3');
const m31Element = document.querySelector('#m31');
const m31_eElement = document.querySelector('#m31e');
const m32Element = document.querySelector('#m32');
const m32_eElement = document.querySelector('#m32e');
const module3Element = document.querySelector('#m3cont');

m3Element.addEventListener('click', function() {
    module3Element.classList.toggle('active');
});

m31Element.addEventListener('click', function() {
    this.classList.toggle('active');
});

m31_eElement.addEventListener('click', function() {
    this.classList.toggle('active');
});

m32Element.addEventListener('click', function() {
    this.classList.toggle('active');
});

m32_eElement.addEventListener('click', function() {
    this.classList.toggle('active');
});

//module4
const m4Element = document.querySelector('#m4');
const m41Element = document.querySelector('#m41');
const m41_eElement = document.querySelector('#m41e');
const m42Element = document.querySelector('#m42');
const m42_eElement = document.querySelector('#m42e');
const module4Element = document.querySelector('#m4cont');

m4Element.addEventListener('click', function() {
    module4Element.classList.toggle('active');
});

m41Element.addEventListener('click', function() {
    this.classList.toggle('active');
});

m41_eElement.addEventListener('click', function() {
    this.classList.toggle('active');
});

m42Element.addEventListener('click', function() {
    this.classList.toggle('active');
});

m42_eElement.addEventListener('click', function() {
    this.classList.toggle('active');
});
