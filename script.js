// Sample course data (Replace with actual data fetched from a server)
const courses = [
    { id: 1, title: "React Fundamentals", category: "web", description: "Master the basics of modern web development with React.", instructor: "John Doe" },
    { id: 2, title: "Python for Data Science", category: "data", description: "Analyze data and build models using Python and popular libraries.", instructor: "Jane Smith" },
    { id: 3, title: "UI/UX Design Principles", category: "design", description: "Learn user-centric design principles for better product interfaces.", instructor: "Alice Johnson" },
    { id: 4, title: "Full Stack Node.js", category: "web", description: "Build scalable backends using Node.js, Express, and MongoDB.", instructor: "John Doe" },
    { id: 5, title: "Machine Learning Basics", category: "data", description: "An introduction to supervised and unsupervised learning algorithms.", instructor: "Jane Smith" },
    { id: 6, title: "Figma Mastery", category: "design", description: "Become proficient in the industry-leading design tool, Figma.", instructor: "Alice Johnson" },
];

const courseListContainer = document.getElementById('course-list');
const filterSelect = document.getElementById('course-filter');
const searchInput = document.getElementById('course-search');

// Function to render a single course card
function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.setAttribute('data-category', course.category);
    
    // Simple image placeholder (in a real app, this would be an <img> tag)
    const categoryText = course.category.toUpperCase();
    
    card.innerHTML = `
        <div class="card-image">${categoryText}</div>
        <div class="card-content">
            <p class="card-category">${course.category.replace(/^\w/, c => c.toUpperCase())} | ${course.instructor}</p>
            <h2 class="card-title">${course.title}</h2>
            <p class="card-description">${course.description}</p>
            <a href="#" class="card-button">View Course</a>
        </div>
    `;
    return card;
}

// Function to render the filtered/searched list of courses
function renderCourses(courseArray) {
    courseListContainer.innerHTML = ''; // Clear existing cards
    if (courseArray.length === 0) {
        courseListContainer.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; padding: 50px;">No courses found matching your criteria.</p>';
        return;
    }
    courseArray.forEach(course => {
        courseListContainer.appendChild(createCourseCard(course));
    });
}

// Function to apply filters and search
function applyFilters() {
    const selectedCategory = filterSelect.value;
    const searchTerm = searchInput.value.toLowerCase();

    const filteredCourses = courses.filter(course => {
        // 1. Filter by category
        const categoryMatch = selectedCategory === 'all' || course.category === selectedCategory;
        
        // 2. Filter by search term (check title or description)
        const searchMatch = course.title.toLowerCase().includes(searchTerm) || 
                            course.description.toLowerCase().includes(searchTerm);

        return categoryMatch && searchMatch;
    });

    renderCourses(filteredCourses);
}

// Event Listeners for controls
filterSelect.addEventListener('change', applyFilters);
searchInput.addEventListener('input', applyFilters);

// Initial render when the page loads
document.addEventListener('DOMContentLoaded', () => {
    renderCourses(courses);
});
