const problemStatements = [
    {
        id: 'PS01',
        title: 'Enhancing Campus Security: RFID I-Cards and Biometric Verification System',
        icon_path: 'images/ps/ps01.svg',
        modal_id: 'ps01Modal',
        modal_body: `<strong>Problem statement: </strong> Security remains a top priority for educational institutions. To address this concern, we aim to develop a comprehensive solution that ensures the safety of students during their entry and exit from campus. Our proposed prototype integrates RFID technology, utilizing RFID cards as students' identification. The process involves placing the RFID card on a scanner, followed by biometric verification using fingerprint or facial recognition. Successful identification triggers the opening of a small gate for entry. The same procedure applies when exiting the premises. 
        <br> 
        <strong>Desired solution: </strong>
        <br>
        <ul>
            <li>
                <strong> Web Portal for Biometric Configuration: </strong> Develop an intuitive web portal for easy configuration and management of students' biometric data. 
            </li>
            <li>
                <strong>RFID Cards for Identification: </strong> Design RFID cards for quick and secure identification when placed on dedicated scanners.
            </li>
            <li>
                <strong>Biometric Scanner/Facial Recognition System: </strong>Integrate a robust biometric scanner or facial recognition system to accurately verify student identity.
            </li>
            <li>
                <strong>Automated Entry Gates: </strong>Install small entry gates that open upon successful verification and remain closed for unrecognized identities.
            </li>
        </ul>
        <br>
        <strong> Brownie points: </strong> <br>
        <ul>
            <li> 
                <strong> Entry and Exit Tracking:
                </strong> Implement a feature in the web portal to record and monitor individuals' entry and exit times, enhancing security and administrative oversight.
            </li>
            <li>
                <strong> In-House RFID Reader Development: </strong> As an extra feather in your cap, we challenge you to build your own RFID readers instead of relying on ready-made hardware. This initiative aims to showcase your innovation and technical prowess in creating customized solutions for enhanced security.
            </li>
        </ul>
        `,
        modal_footer: `By implementing this system, our goal is to establish a secure and efficient entry-exit process, allowing only authorized individuals access to the premises. The combination of RFID technology and biometric verification not only enhances security but also provides a convenient means of monitoring campus access.`
    },
    {
        id: 'PS02',
        title: 'Smart Lights for Saving Energy in Washrooms',
        icon_path: 'images/ps/ps02.svg',
        modal_id: 'ps02Modal',
        modal_body: `<strong>Problem statement: </strong> Sometimes, lights in places like washrooms stay on even when no one is using them, wasting energy. We need a clever solution to make lights turn on only when people are around, and off when the place is empty. 
            <br> 
            <strong>Expected solution: </strong>
            <br>
            <ul>
                <li>
                    <strong> Magic Sensors: </strong> Create a system that can sense when people are in the washroom.
                </li>
                <li>
                    <strong> Automatic Lights: </strong> Make the lights turn on by themselves when someone is there and turn off when nobody is around.
                </li>
            </ul>
            <br>
            <strong> Brownie points: </strong> <br>
            <ul>
                <li> 
                    <strong> Savings for Everyone:
                    </strong> Find a way to make this solution not cost too much, so everyone can use it.
                </li>
                <li>
                    <strong> Easy Changes: </strong> Make sure the solution works with the lights we already have, without needing big changes.
                </li>
            </ul>
            `,
        modal_footer: `The goal is to stop wasting energy by making lights in washrooms smart – turning on only when needed. This not only helps save money but also makes sure we're being kind to our planet. The plan is to keep it simple, affordable, and easy to use with the lights we already have.`
    },
    {
        id: 'PS03',
        title: 'Unified Faculty-Student Management Portal',
        icon_path: 'images/ps/ps03.svg',
        modal_id: 'ps03Modal',
        modal_body: `<strong>Problem statement: </strong> Communication and information sharing between faculty and students often involve multiple platforms, creating complexity. We aim to streamline this process by creating a single platform for both faculties and students. This platform should allow faculty to share notes, create classrooms, release notices, update test scores, and even involve parents seamlessly.
            <br> 
            <strong>Expected solution: </strong>
            <br>
            <ul>
                <li>
                    <strong> Student App or Website: </strong> Develop a user-friendly app or website for students to access all course-related information.
                </li>
                <li>
                    <strong> Faculty App or Website: </strong> Create a dedicated app or website for faculty members to manage course content and communication.
                </li>
                <li>
                    <strong> Classroom Creation: </strong> Implement a feature that enables faculty to create virtual classrooms for effective communication. (Similar to Google Classroom)
                </li>
                <li>
                    <strong> Note Sharing: </strong> Enable faculty to share notes efficiently with specific classrooms or individual students.
                </li>
                <li>
                    <strong> Notice Board: </strong> Provide a notice board feature for faculty to release important announcements to students.
                </li>
                <li>
                    <strong> Test Score Updates: </strong> Integrate a system for faculty to update and students to view their test scores.
                </li>
                <li>
                    <strong> Parent Notifications: </strong> Establish a mechanism to notify parents about their child's test scores, enhancing parent-teacher communication.
                </li>
                <li>
                    <strong> In-App Course Exit Form: </strong> Develop an in-app or in-website course exit form, eliminating the need for external platforms like Google Forms.
                </li>
            </ul>
            <br>
            <strong> Brownie points: </strong> <br>
            <ul>
                <li> 
                    <strong> Interactive Features: </strong> Incorporate additional interactive features for engaging student-faculty interaction.
                </li>
                <li>
                    <strong> User Feedback Mechanism: </strong> Include a feedback system for continuous improvement based on user suggestions.
                </li>
            </ul>
            `,
        modal_footer: `The envisioned Faculty-Student Management Portal aims to simplify communication and information sharing in educational settings. By providing a comprehensive platform for both faculty and students, we aim to enhance collaboration, improve accessibility, and foster a more efficient educational environment. Beyond the expected features, we aspire to include interactive elements and user feedback mechanisms for continuous refinement. This initiative strives to create a unified and user-friendly space that benefits the entire educational community.`
    },
    {
        id: 'PS04',
        title: 'Seamless Event Registration System Inspired by BookMyShow',
        icon_path: 'images/ps/ps04.svg', // Add the correct imagesvgth
        modal_id: 'ps04Modal',
        modal_body: `<strong>Problem statement: </strong> Managing registrations for events, particularly those like Alumni Meet or Business Connect Meets, can be a logistical challenge. To simplify this, we aim to develop an in-house software similar to platforms like Bookmyshow or Paytm Insider. This application or web portal will streamline event registration, provide QR codes for entry, and offer efficient admin tools for event management.
            <br>
            <strong>Expected solution: </strong>
            <br>
            <ul>
                <li>
                    <strong> User Application or Website: </strong> Develop an intuitive application or website for users to easily register for listed events and receive QR codes for entry.
                </li>
                <li>
                    <strong> Admin Web Portal: </strong> Create a web portal for administrators to manage events, set conditions, specify registration details, and access a list of registered members.
                </li>
                <li>
                    <strong> Database Management: </strong> Implement a database within the admin portal, enabling CRUD operations for alumni details and event notifications.
                </li>
            </ul>
            <br>
            <strong> Brownie points: </strong> <br>
            <ul>
                <li> 
                    <strong> Integration with Existing Database: </strong> Provide a feature to seamlessly integrate the event registration database with the organization's existing database. This allows for the annual addition of recent alumni, ensuring an up-to-date record.
                </li>
            `,
        modal_footer: `The envisioned Event Registration System seeks to simplify the often complex process of managing event registrations, especially for gatherings like Alumni Meet and Business Connect Meets. By adopting a user-friendly application for attendees and a robust web portal for administrators, we aim to enhance the overall efficiency of event management. The integration with existing databases ensures that the system stays updated, making it a comprehensive and valuable tool for organizations hosting various events.`
    },
    {
        id: 'PS05',
        title: 'Comprehensive Online Proctored Exam System for Enhanced Security',
        icon_path: 'images/ps/ps05.svg', // Add the correct imagesvgth
        modal_id: 'ps05Modal',
        modal_body: `<strong>Problem statement: </strong> With the increasing prevalence of online exams, the need for a robust Online Proctoring system has become crucial. Managing exams online poses challenges for invigilators, necessitating the creation of an in-house system. We aim to develop a Website/Desktop software for students and a multi-tiered admin system for faculty and super admin, ensuring secure and efficient online examinations.
            <br> 
            <strong>Expected solution: </strong>
            <br>
            <ul>
                <li>
                    <strong> Student Examination Software: </strong> Develop a user-friendly Website/Desktop software for students to access scheduled tests, view past and upcoming exams, and review results.
                </li>
                <li>
                    <strong> Super Admin Web Portal: </strong> Create a centralized web portal with super admin rights to manage individual faculty members, tests, and overall database maintenance.
                </li>
                <li>
                    <strong> Faculty Web Portal: </strong> Design a portal for faculty members to create tests, assign them to students, and grade the exams.
                </li>
                <li>
                    <strong> Auto-Generate Test Scores: </strong> Implement an automated grading system where faculty provides questions and correct answers, and the software generates detailed reports for each student.
                </li>
                <li>
                    <strong> Student Report Generation: </strong> Create detailed reports for each subject, including questions, provided options, selected options, correct options, and overall scores.
                </li>
                <li>
                    <strong> Enhanced Proctoring Features: </strong> Implement advanced proctoring measures to disable potential threats such as screen sharing, tab switching, and other malpractices.
                </li>
                <li>
                    <strong> Integration with Existing Camera: </strong> Integrate with existing cameras to monitor and track students' behavior during exams, enhancing security measures.
                </li>
            </ul>
            <br>
            <strong> Brownie points: </strong> <br>
            <ul>
                <li> 
                    <strong> Two-Step Verification: </strong> Incorporate a two-step verification process, allowing faculty-created tests to be verified by the admin before being made live.
                </li>
                <li>
                    <strong> Continuous Proctoring Enhancement: </strong> Explore additional methods to further enhance proctoring capabilities, reducing the risk of malpractices.
                </li>
            </ul>
            `,
        modal_footer: `The envisioned Online Proctored Exam System aims to address the challenges associated with online exams by providing a secure and user-friendly platform for both students and faculty. Through a multi-tiered admin system, automated grading, and advanced proctoring features, we aim to create an efficient and trustworthy environment for conducting online examinations. The system's additional security measures and continuous improvement initiatives make it a comprehensive solution for the evolving landscape of online education.`
    },
    {
        id: 'PS06',
        title: 'Modernizing Attendance Tracking: Mobile-Enabled System',
        icon_path: 'images/ps/ps06.svg',
        modal_id: 'ps06Modal',
        modal_body: `<strong>Problem statement: </strong> The conventional method of paper-based attendance tracking is due for an upgrade. We aim to develop an innovative attendance system that empowers faculty members to mark attendance using their mobile phones. The system should efficiently record attendance, provide real-time tracking, and generate comprehensive reports by the end of each month.
        <br> <br> 
        <strong>Expected solution: </strong>
        <br>
        <ul>
            <li>
                <strong> Mobile Application for Faculty Members: </strong> Develop a user-friendly mobile application for faculty members, granting them access to classrooms and subjects. Faculty can mark attendance by designating students as present or absent using their mobile app.
            </li>
            <li>
                <strong> Class Teacher's Account: </strong> Provide class teachers with a dedicated account to manage students, subjects, and faculty members for their respective classes. Features include creating virtual classrooms, adding students to the database, and generating monthly attendance records. Identify defaulters easily.
            </li>
            <li>
                <strong> Admin Portal: </strong> Establish an admin portal with essential features, including adding class teachers, conducting CRUD operations on student and faculty databases, and overseeing system-wide management.
            </li>
        </ul>
        <br> <br>
        <strong> Brownie Point: </strong> <br>
        <ul>
            <li> 
                <strong> Student Self-Attendance Feature: </strong> Integrate a feature allowing students to mark their own attendance using their cell phones, but only if they are physically present in the classroom. Implement measures to prevent proxy attendance.
            </li>
        </ul>
        `,
        modal_footer: `The proposed attendance system aims to modernize the traditional process, providing faculty members with a mobile-enabled solution for efficient attendance tracking. With features like real-time marking, class teacher management, and an admin portal, the system ensures comprehensive control and monitoring. The addition of a student self-attendance feature further enhances accuracy and transparency, making it a reliable solution for streamlined attendance management.`
    },
    {
        id: 'PS07',
        title: 'Affordable Smartboard Prototype for Modern Education',
        icon_path: 'images/ps/ps07.svg',
        modal_id: 'ps07Modal',
        modal_body: `<strong>Problem statement: </strong> The rising demand for technology in education has brought smartboards to the forefront, revolutionizing the learning experience. However, the increasing cost of smartboards poses a challenge. We seek to develop a low-cost prototype for a smartboard to make this transformative technology accessible to a wider range of educational institutions.
        <br> <br> 
        <strong>Expected solution: </strong>
        <br>
        <ul>
            <li>
                <strong> Basic Smartboard Prototype: </strong> Create a functional smartboard prototype that includes touch-screen capabilities, interactive features, and compatibility with educational software.
            </li>
            <li>
                <strong> Cost-Effective Components: </strong> Identify and incorporate cost-effective materials and components without compromising functionality, ensuring affordability without sacrificing performance.
            </li>
            <li>
                <strong> Open-Source Software Integration: </strong> Integrate open-source software solutions to minimize licensing costs and make the smartboard compatible with various educational applications.
            </li>
        </ul>
        <br> <br>
        <strong> Brownie Points: </strong> <br>
        <ul>
            <li> 
                <strong> Sustainable Materials: </strong> Explore the use of sustainable and environmentally friendly materials in the construction of the smartboard, aligning with modern eco-conscious practices.
            </li>
            <li>
                <strong> Wireless Connectivity: </strong> Consider adding wireless connectivity features to enhance the prototype's flexibility and reduce the need for complex wiring.
            </li>
        </ul>
        `,
        modal_footer: `The envisioned low-cost smartboard prototype aims to bridge the gap between the increasing demand for technology in education and budget constraints faced by many institutions. By utilizing cost-effective components and open-source software, we aim to create an affordable solution without compromising on the essential features of a modern smartboard. The incorporation of sustainable materials and wireless connectivity options adds value to the prototype, making it an innovative and eco-friendly option for educational settings.`
    },
    {
        id: 'PS08',
        title: 'Unified Project Repository for Polytechnic Students',
        icon_path: 'images/ps/ps08.svg',
        modal_id: 'ps08Modal',
        modal_body: `<strong>Problem statement: </strong> Polytechnic students engage in numerous projects throughout their academic journey, often resulting in redundant efforts. To address this, we aim to develop a common platform for all polytechnic colleges in Mumbai, fostering collaboration and preventing duplication of projects. This platform should allow colleges to showcase their projects, enabling students to explore, learn, and potentially build on existing ideas.
        <br> <br> 
        <strong>Expected solution: </strong>
        <br>
        <ul>
            <li>
                <strong> Super Admin Portal: </strong> Establish a centralized admin portal with super admin rights, facilitating the addition of institutions across Mumbai and managing access permissions.
            </li>
            <li>
                <strong> Individual Polytechnic College Account: </strong> Provide each polytechnic college with a dedicated account, allowing the Point of Contact (POC) to add departments and grant access to Heads of Departments (HODs). HODs can then add detailed project information, including titles, descriptions, multimedia demonstrations, and the names of contributing students.
            </li>
            <li>
                <strong> Students Account: </strong> Enable students to view projects from all polytechnic colleges in Mumbai, fostering cross-institutional collaboration and providing valuable insights for choosing final year project topics.
            </li>
        </ul>
        <br> <br>
        <strong> Brownie Points: </strong> <br>
        <ul>
            <li> 
                <strong> User-Friendly Interface: </strong> Design a seamless and user-friendly interface to streamline the process of adding and accessing projects, encouraging widespread adoption among institutions.
            </li>
        </ul>
        `,
        modal_footer: `The envisioned unified project repository aims to eliminate redundancy in project development among polytechnic students in Mumbai. By providing a central platform accessible to colleges, HODs, and students, the initiative encourages collaboration and knowledge sharing. The emphasis on simplicity ensures that the platform becomes a go-to resource for all polytechnic colleges in the Mumbai region, fostering a culture of innovation and efficiency in project development.`
    },
    {
        id: 'PS09',
        title: 'Enhancing the Mahadbt Process for User-Friendly Experience',
        icon_path: 'images/ps/ps09.svg',
        modal_id: 'ps09Modal',
        modal_body: `<strong>Problem Statement: </strong> Mahadbt, the Maharashtra Direct Benefit Transfer scheme, is a government initiative to streamline the distribution of various scholarships and benefits to eligible residents of Maharashtra. The scheme operates through an online portal, providing a platform for citizens to apply for and receive financial aid through direct benefit transfer programs.
            <br><br>
            The current Mahadbt process has proven to be a source of frustration and headaches for students navigating the application and benefit disbursement procedures. Recognizing the need for improvement, we aim to revamp the Mahadbt system to create a more streamlined, user-friendly, and efficient experience specifically tailored to alleviate the challenges faced by students.
            <br><br>
            <strong>Expected Solution:</strong>
            <br>
            <ul>
                <li><strong>Student-Centric User Interface:</strong> Redesign the Mahadbt portal with a focus on a student-centric user interface, ensuring simplicity, and ease of navigation to enhance the overall experience.</li>
                <li><strong>Expedited Application Processing:</strong> Implement technological enhancements to significantly reduce the processing time for applications, minimizing delays in the disbursement of benefits to deserving students.</li>
                <li><strong>Clear and Comprehensive Guidance:</strong> Provide clear and comprehensive guidance within the portal to assist students throughout the application process, reducing the likelihood of errors and ensuring accurate submissions.</li>
            </ul>
            <br><br>
            <strong>Brownie Points:</strong>
            <br>
            <ul>
                <li><strong>Mobile Accessibility:</strong> Develop a dedicated mobile application for Mahadbt, empowering students to conveniently apply for benefits using their smartphones.</li>
                <li><strong>Multilingual Support:</strong> Incorporate multilingual support to cater to the diverse linguistic preferences of students, ensuring language barriers do not hinder the application process.</li>
            </ul>
            <br>
            `,
        modal_footer: `The proposed improvements to the Mahadbt process are driven by a commitment to enhancing the overall experience for students who have found the current system challenging. By focusing on a student-centric user interface, faster application processing, and improved guidance, we aim to transform Mahadbt into a more user-friendly platform that addresses the specific needs and concerns of students, ultimately making the application process smoother and more accessible.`
    },
    {
        id: 'PS10',
        title: 'Advanced Body Scanner for Enhanced Security Screening',
        icon_path: 'images/ps/ps10.svg',
        modal_id: 'ps10Modal',
        modal_body: `<strong>Problem Statement:</strong> The current security screening methods, particularly at crowded venues like malls, rely heavily on manual checks, leading to inefficiencies and potential security gaps. To address this, we aim to introduce an advanced body scanner that not only streamlines the security screening process but also enhances its effectiveness. The objective is to create a system that minimizes human efforts while maximizing security measures for a safer public environment.
            <br><br>
            <strong>Expected Solution:</strong>
            <br>
            <ul>
                <li><strong>Automated Body Scanner:</strong> Develop a cutting-edge body scanner system that individuals can pass through, creating a seamless and non-intrusive security check. This technology should be capable of detecting potential threats efficiently.</li>
                <li><strong>Screening Software:</strong> Implement a sophisticated software solution to analyze the body scan results in real-time. This software empowers security personnel to quickly and accurately identify potential threats, ensuring a rapid response to security concerns.</li>
                <li><strong>Efficient Screening Area:</strong> Design a dedicated screening area equipped with the advanced body scanner. This area should be optimized for smooth operations, providing an accessible and user-friendly experience for both security personnel and visitors.</li>
            </ul>
            <br><br>
            <strong>Brownie Points:</strong>
            <br>
            <ul>
                <li><strong>Targeted Alert System:</strong> Integrate an alert system into the software that highlights the specific body area where unauthorized items or metal objects are detected, accompanied by an audible beep for quick identification of security breaches.</li>
                <li><strong>User-Friendly Interface:</strong> Design an intuitive and user-friendly interface for security personnel to navigate the software efficiently, ensuring quick decision-making during screenings.</li>
                <li><strong>Privacy Safeguards:</strong> Implement privacy features that prioritize the anonymity of individuals being scanned, ensuring compliance with privacy regulations.</li>
            </ul>
            <br>
           `,
        modal_footer: ` The envisioned advanced body scanner represents a significant leap forward in security screening technology. By combining an automated and non-intrusive body scanner with sophisticated software, we aim to create an efficient and effective security screening process. The inclusion of features such as targeted alert systems, user-friendly interfaces, and privacy safeguards ensures a holistic solution that not only enhances security measures but also prioritizes the overall experience for both security personnel and visitors in public spaces.`
    },
    {
        id: 'PS11',
        title: 'Portable Anytime Iron Machine for On-the-Go Wrinkle-Free Clothes',
        icon_path: 'images/ps/ps11.svg',
        modal_id: 'ps11Modal',
        modal_body: `<strong>Problem Statement:</strong> Maintaining well-ironed clothes is essential for individuals, but the challenge arises when one is on the move. Carrying a conventional iron during travel is impractical. Hence, we envision the development of an "Anytime Iron Machine" - a portable, compact device that ensures travelers and tourists can conveniently iron their clothes on the go.
            <br><br>
            <strong>Expected Solution:</strong>
            <br>
            <ul>
                <li><strong>Portable Iron Device:</strong> Design a small, lightweight, and portable iron machine that can be easily carried by individuals during their outdoor visits or travels. The device should be user-friendly and suitable for a variety of fabrics.</li>
                <li><strong>Quick Heating and Cooling:</strong> Incorporate innovative heating technology to enable the device to heat up within minutes, providing users with a rapid solution for on-the-spot ironing. Additionally, the device should cool down in less than a minute for safe and convenient usage.</li>
            </ul>
            <br><br>
            <strong>Brownie Points:</strong>
            <br>
            <ul>
                <li><strong>Rapid Heating and Cooling Technology:</strong> Focus on developing a device that not only heats up quickly but also cools down in less than one minute, adding an extra layer of convenience and safety for users.</li>
                <li><strong>Energy-Efficient Design:</strong> Implement energy-efficient features to ensure the device consumes minimal power, making it environmentally friendly and suitable for use in various settings.</li>
            </ul>
            <br>
            `,
        modal_footer: `The "Anytime Iron Machine" aims to revolutionize the way individuals maintain their clothes while on the move. By providing a compact and portable solution, this device ensures that users can enjoy the convenience of wrinkle-free clothes during their outdoor visits or travels. The incorporation of rapid heating and cooling technology, along with energy-efficient design considerations, makes this innovative ironing solution an ideal companion for individuals with a dynamic and on-the-go lifestyle.`
    },
    {
        id: 'PS12',
        title: 'Development of Smart Toilet for Enhanced Public Hygiene',
        icon_path: 'images/ps/ps12.svg',
        modal_id: 'ps12Modal',
        modal_body: `<strong>Problem Statement:</strong> Even in contemporary times, individuals, particularly women, face challenges regarding the availability of hygienic toilets while traveling or being outdoors. To address this, we propose the development of a cutting-edge smart toilet system. The emphasis lies on creating an automatic, self-cleaning toilet that utilizes ultraviolet disinfection, hot air drying, and intelligent water conservation. The objective is to provide users with a restroom experience comparable to the hygiene standards of their homes.
            <br><br>
            <strong>Expected Solution:</strong>
            <br>
            <ul>
                <li><strong>Automatic Self-Cleaning System:</strong> Develop an innovative smart toilet system that integrates ultraviolet disinfection and hot air drying mechanisms, ensuring automatic and thorough cleaning after each use.</li>
                <li><strong>Water Conservation Technology:</strong> Implement smart water-saving features to optimize water usage while maintaining cleanliness standards. This technology should contribute to sustainable practices in toilet operations.</li>
            </ul>
            <br><br>
            <strong>Brownie Points:</strong>
            <br>
            <ul>
                <li><strong>Built-in Air Freshener:</strong> Incorporate a built-in air freshener system within the smart toilet to maintain a consistently fresh and clean ambiance, enhancing the overall restroom experience.</li>
                <li><strong>Motion Sensor Technology:</strong> Integrate motion sensor technology to automate toilet functions such as flushing and opening the lid when a user approaches, ensuring a touch-free and hygienic interaction.</li>
                <li><strong>Built-in Bidet Feature:</strong> Include a built-in bidet for a more hygienic and efficient method of post-toilet cleansing, offering users an additional level of comfort and cleanliness.</li>
            </ul>
            <br>
           `,
        modal_footer: ` The envisioned smart toilet solution aims to redefine public restroom standards by introducing cutting-edge features for enhanced hygiene and user experience. Through the integration of automatic cleaning, water-saving technologies, air fresheners, motion sensors, and built-in bidets, this smart toilet addresses the longstanding issue of inadequate hygiene in public restrooms. The inclusion of additional features such as smart analytics and user-centric interfaces further contributes to creating a sophisticated and user-friendly restroom solution.`
    },
    {
        id: 'PS13',
        title: 'Open Innovation Challenge: Empowering Student Innovators',
        icon_path: 'images/ps/ps13.svg',
        modal_id: 'ps13Modal',
        modal_body: `<strong>Problem statement: </strong> Calling All Student Innovators: Hey future problem solvers! Get ready for the Open Innovation Challenge, where you have the chance to take the driver's seat in solving real-world problems. This is your time to shine by identifying a problem that matters to you, and then bringing your A-game to devise a solution that’s as unique as you are!
                <br> <br>
                <strong>Your Mission: </strong>
                <br>
                <ul>
                    <li>
                        <strong>Spot Your Own Problem: </strong> Think about the things that bug you or issues in your community that need fixing. Your task is to pick a problem that speaks to you—something real, something important.
                    </li>
                    <li>
                        <strong>Craft an Awesome Solution: </strong> Now comes the fun part! Dream up a cool, innovative solution to your chosen problem. We want to see your creativity in action, so think outside the box and let those ideas flow.
                    </li>
                    <li>
                        <strong>Show Us the Wow Factor: </strong> What makes your solution stand out? We're on the lookout for freshness and impact. Give us the 'wow' factor that sets your idea apart from the rest.
                    </li>
                </ul>
                <br>
                <strong>Scoring Secrets: </strong> <br>
                <ul>
                    <li>
                        <strong>Dive Deep into the Problem: </strong> How well do you understand the problem you’ve chosen? We're looking for that 'aha' moment where you show us you get it.
                    </li>
                    <li>
                        <strong>Originality is King: </strong> We love problems that make us go, "Hmm, I never thought of that!" Show us the uniqueness in your chosen problem—what makes it your own?
                    </li>
                    <li>
                        <strong>Innovation Explosion: </strong> Your solution is the star of the show. Does it sparkle with innovation? Does it bring something new and exciting to the table?
                    </li>
                    <li>
                        <strong>Make It Happen: </strong> Imagine if your idea could become a reality. How feasible is your solution? Can it actually make a difference in the real world?
                    </li>
                    <li>
                        <strong>Talk the Talk: </strong> How well can you tell your story? Make sure your presentation is clear, organized, and highlights the brilliance of your problem-solving journey.
                    </li>
                </ul>
                `,
        modal_footer: `This Open Innovation Challenge is all about YOU and your amazing ideas. It's your chance to be the hero, solving problems and making a mark. So, gear up, dream big, and let your creativity run wild. We can’t wait to see what incredible innovations you bring to the table! 🚀

            `
    }

];

function renderProblems() {
    const problemContainer = document.getElementById('problem-statements-container');
    problemContainer.innerHTML = '';
    problemStatements.forEach((problem) => {
        const problemCardHolder = document.createElement('div');
        problemCardHolder.classList.add('col-lg-3', 'col-md-6', 'col-sm-12', 'my-1');
        problemCardHolder.innerHTML = `
        <div class="card" id="${problem.id}">
            <div class="card-body text-center">
                <div class="mt-3 mb-4">
                    <img src="${problem.icon_path}" alt="${problem.tisvg}"
                        class="rounded-circle img-fluid" />
                </div>
                <h5 class="mb-2">
                    ${problem.title}
                </h5>
                <p class="mb-4 h6">
                    ${problem.id}
                </p>
                <button type="button" class="btn btn-light" data-bs-toggle="modal"
                    data-bs-target="#${problem.modal_id}">
                    View details
                </button>
            </div>
        </div>
        `;
        problemContainer.appendChild(problemCardHolder);
    });
}

function renderModals() {
    const modalHolder = document.getElementById('all-modals');
    modalHolder.innerHTML = '';
    problemStatements.forEach((problem) => {
        var modal = document.createElement('div');
        modal.classList.add('modal', 'fade', 'modal-lg');
        modal.id = problem.modal_id;
        modal.tabIndex = -1;
        modal.role = 'dialog';
        modal.setAttribute('aria-labelledby', 'exampleModalTitle');
        modal.setAttribute('aria-hidden', 'true');
        modal.innerHTML = `
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        ${problem.title}
                    </h5>
                    <button type="button" class="close btn-close" data-bs-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <div class="modal-body">
                    ${problem.modal_body}
                </div>
                <div class="modal-footer">
                    <p>
                        ${problem.modal_footer}
                    </p>
                </div>
            </div>
        </div>
        `;
        modalHolder.appendChild(modal);
    });
}

renderProblems();
renderModals();