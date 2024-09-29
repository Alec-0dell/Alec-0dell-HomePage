import "./CodingProjects.css"
import { Dropdown } from './Dropdown.js'
import { Element } from './Element.js';


function CodingProjects(){
    return(
        <div className="CodingProjects"> 
            <header className="CodingProjects-header">
                Coding Projects 
            </header>
            <p className="Coding-Intro-Para">
                Here are the coding projects that I have created. There are projects from highschool classes, my personal passion projects, and some from my limited time so far in the computer science program at California Polytechnic University, San Luis Obispo. 
            </p>
            <div className='Coding-Container'>
                <p className="Coding-Para">
                    'route' Student Carpooling App
                </p>
                <Dropdown name={"route app"}>
                    <Element link={"https://route-app.com/"} skills={"JavaScript, HTML, CSS, React Native, React SQL, RestAPI"} description={"This app connects Cal Poly students that need to drive to the same location. Enabling students without cars to cheaply travel on weekends and breaks, and allows students with cars to make some extra gas money. Not to mention the enviormental impacts of enabling carpooling."}/>
                </Dropdown>
            </div>
            <div className='Coding-Container'>
                <p className="Coding-Para">
                    Meta Mobile and Web Development Certification (2023)
                </p>
                <Dropdown name={"Meta Final Project"}>
                    <Element link={"https://github.com/Alec-0dell/Meta-Final-Project"} skills={"JavaScript, HTML, CSS, React Native, UX/UI design"} description={"Little Lemon Food Ordering App: Satisfy your cravings effortlessly with the Little Lemon Food Ordering App. Streamlined registration and login lead you to a personalized home screen featuring menu categories and a search bar. Customize your profile, manage email notifications, and rest easy knowing your preferences are securely stored. Our SQLite-powered database ensures quick access to a diverse menu. Log out with confidence, and enjoy a seamless, tailored dining experience. Download now and relish the convenience of Little Lemon!"}/>
                </Dropdown>
                <Dropdown name={"Meta Practice Website"}>
                    <Element link={"https://github.com/Alec-0dell/Meta-Practice-Website"} skills={"JavaScript, HTML, CSS, React"} description={"Practiced many different tachniques within this website as I was teaching myself react. Used this file as a sandbox for many of the skill I used to create this website."}/>
                </Dropdown>
                <Dropdown name={"Meta Practice App"}>
                    <Element link={"https://github.com/Alec-0dell/Meta-Practice-App"} skills={"JavaScript, HTML, CSS, React "} description={"Practiced many different tachniques within this app as I was teaching myself react native. Used this file as a sandbox for much of my practice"}/>
                </Dropdown>
            </div>
            <div className='Coding-Container'>
                <p className="Coding-Para">
                    Post-AP Application Development (2023)
                </p>
                <Dropdown name={"Hello Toast (Project 1)"}>
                    <Element link={"https://github.com/Alec-0dell/project-1-hello-toast"} skills={"Java, Kotlin"} description={"This unit covers installing Android Studio, understanding project structure, building your first app, creating activities, testing your apps, and using the Android Support Library. First, I deployed a simple Hello Toast app, then changed it to function with a simple activity, and then you changed it again to a multi-screen app that passes data between activities."}/>
                </Dropdown>
                <Dropdown name={"Intro to Fragments (Project 2)"}>
                    <Element link={"https://github.com/Alec-0dell/project-2-intro-to-fragments"} skills={"Java, Kotlin"} description={"This unit covers the basics of fragments and how to implememnt them in android studio. I created an app that shows what I learned about fragments and how they work."}/>
                </Dropdown>
                <Dropdown name={"Navigation (Project 3)"}>
                    <Element link={"https://github.com/Alec-0dell/project-3-navigation"} skills={"Java, Kotlin"} description={"This unit covers how to get input from the user, implement navigation strategies, use themes and styles, test your user interface, and follow Material Design principles. I created an app that use menus and tabs for navigation, and input controls such as spinners and picker dialogs to get information from the user."}/>
                </Dropdown>
                <Dropdown name={"Android Trivia (Project 4)"}>
                    <Element link={"https://github.com/Alec-0dell/project-4-android-trivia"} skills={"Java, Kotlin"} description={"The AndroidTrivia app asks the user trivia questions about Android development. It makes use of the navigation component within Jetpack to move the user between screens. Each screen is implemented as a fragment. The app navigates using buttons, the app bar, and a navigation drawer. Because students haven't yet learned about saving data or the Android lifecycle, the app tries to eliminate bugs caused by configuration changes."}/>
                </Dropdown>
                <Dropdown name={"Stock Simulator (Final Project)"}>
                    <Element link={"https://github.com/Alec-0dell/project-5-final-project-stock-simulator"} skills={"Java, Kotlin, Databases"} description={"For our final project we are going to produce a stock watch list app that will let you practice with fake money. There will be a title fragemnt before entering the main body of the app. Then there will be a recycler page that will list the stocks the user has invested in and some other popular options. Clicking on a stock within the recyler view will allow the user to 'buy' or 'sell' their stock as well as providing more in depth information. Additionaly, there will be a summary page that will help summarize the effectiveness of the users stategy."}/>
                </Dropdown>
            </div>
            <div className='Coding-Container'>
                <p className="Coding-Para">
                    Post-AP Data Structures (2022)
                </p>
                <Dropdown name={"Letter Inventory (Project 1)"}>
                    <Element link={"https://github.com/Alec-0dell/project-1-letter-inventory"} skills={"Java, ArrayList"} description={"In this assessment, you will implement a class called LetterInventory that can be used to keep track of an inventory of letters of the English alphabet. The constructor for the class will take a String as a parameter and compute how many of each letter are in that String (i.e. how many as, how many bs, etc.). LetterInventory ignores any character that is not an English letter (such as punctuation or digits) and treats upper- and lowercase letters as the same."}/>
                </Dropdown>
                <Dropdown name={"Guitar Hero (Project 2)"}>
                    <Element link={"https://github.com/Alec-0dell/project-2-guitar-hero"} skills={"Java, Queue, Stack"} description={"Guitar Hero, tasks students with implementing a Java class called GuitarString to simulate vibrating guitar strings using the Karplus-Strong algorithm. Students must use a queue-based ring buffer while adhering to specific interface methods. They're also required to create a Guitar37 class to model a guitar with 37 strings. The assignment emphasizes code quality, encapsulation, exception handling, and documentation. Ultimately, it challenges students to apply their Java programming skills to create a virtual guitar simulation, focusing on data structures, algorithms, and coding best practices."}/>
                </Dropdown>
                <Dropdown name={"Assassin Game (Project 3)"}>
                    <Element link={"https://github.com/Alec-0dell/project-3-assassin"} skills={"Java, Linked List"} description={"Assassin Manager: students are tasked with creating a Java class called AssassinManager to manage a game known as Assassin. The game involves a circular chain of targets, and each player aims to assassinate their assigned target while avoiding being assassinated themselves. The AssassinManager class maintains two linked lists: one for the current players (kill ring) and another for eliminated players (graveyard). Students must implement methods to manipulate these lists, including printing them, checking for game over, identifying the winner, and processing assassinations. The game ends when only one player remains alive in the kill ring. The assessment emphasizes linked list manipulation, efficient coding practices, proper encapsulation, exception handling, and commenting."}/>
                </Dropdown>
                <Dropdown name={"Evil Hangman (Project 4)"}>
                    <Element link={"https://github.com/Alec-0dell/project-4-evil-hangman"} skills={"Java, Sets, Trees"} description={"The Evil Hangman assignment involves creating a Java class called HangmanManager to manage a game of hangman. In this game, one player (the computer) initially considers a set of words that could be the secret word, based on the length of the word. As the user guesses letters, the computer narrows down the possibilities and tries to keep the secret word ambiguous. The HangmanManager class maintains the state of the game, including the set of candidate words, the number of remaining wrong guesses, the guessed letters, and the current word pattern. Key methods include updating game state with each guess, providing access to game information, and following specific rules for word selection. The assignment emphasizes proper Java class design, efficient data structure usage, and adherence to coding standards."}/>
                </Dropdown>
                <Dropdown name={"Grammar Solver (Project 5)"}>
                    <Element link={"https://github.com/Alec-0dell/project-5-grammar-solver"} skills={"Java, Recursion"} description={"Students were required to create a Java class named GrammarSolver. This class aimed to generate random sentences or outputs from a set of input rules written in Backus-Naur Form (BNF), assessing students' abilities to design Java classes, implement recursive methods for solving naturally-recursive problems, work with public-private recursive pairs, choose suitable data structures for representing data, and adhere to coding standards. The GrammarSolver class had a constructor that accepted a list of BNF rules and implemented various public methods, including symbol existence checking, retrieval of sorted non-terminal symbols, and random symbol generation based on the provided rules. Students were also expected to handle exceptions correctly and reflect on their learning and challenges in response to provided reflection questions."}/>
                </Dropdown>
                <Dropdown name={"Anagrams (Project 6)"}>
                    <Element link={"https://github.com/Alec-0dell/project-6-anagrams"} skills={"Java, Recursion"} description={"Students were tasked with creating a Java class named AnagramSolver. The goal of this assignment was to assess students' abilities in several programming aspects, including implementing a well-designed Java class, employing recursive backtracking for exhaustive search, optimizing code for efficiency, and following coding conventions. The AnagramSolver class's purpose was to find anagrams of a given word or phrase by using a provided dictionary. Students were required to handle spaces and capitalization, and the class had a constructor that accepted a dictionary, computed inventories of words, and included a public method for printing anagrams within specific word limits. The assignment encouraged students to use a LetterInventory class and implement pruning to enhance performance. It was suggested to develop the code incrementally, first without pruning, then with non-zero and zero max, and finally adding pruning as optimization."}/>
                </Dropdown>
                <Dropdown name={"Twenty Questions (Project 7)"}>
                    <Element link={"https://github.com/Alec-0dell/project-7-twenty-questions"} skills={"Java, Binary Tree"} description={"The primary objectives of this assessment were to evaluate the students' ability to implement a well-designed Java class that could effectively handle the game of 20 Questions. In this game, one player thinks of a secret object, and the other player attempts to guess it by asking yes/no questions. In this version, the human is the chooser, and the computer is the guesser. The computer makes guesses based on a binary tree of questions and answers, and the game continues until the computer either correctly guesses the object or the human player wins. If the computer loses, it adds the chosen object to its knowledge base for future games. The students were required to create a class named QuestionsGame to represent the game and an inner-class named QuestionNode to represent nodes in the binary tree. The class needed to read and write the game tree to a text file, play a complete game with the user, and incorporate user interactions and questions to improve its knowledge base. The development strategy suggested incrementally building the program, starting with stubs for methods, defining class fields, and then implementing the methods and functionalities step by step, adhering to code quality guidelines and recursion principles."}/>
                </Dropdown>
                <Dropdown name={"Huffman Encoding (Project 8)"}>
                    <Element link={"https://github.com/Alec-0dell/project-8-huffman-encoding"} skills={"Java, Comparable, Binary Tree"} description={"Huffman Coding is a data compression algorithm that aims to reduce the size of data files by encoding characters differently based on their frequency of occurrence. In this project, students are tasked with creating a Java class called HuffmanCode and another class called HuffmanNode. The program assesses the mastery of various programming objectives, including designing Java classes, working with binary trees, implementing the Comparable interface, and following coding conventions for quality, documentation, and readability. Students are required to construct a Huffman code, compress and decompress data, and follow a specific file format for encoding and decoding messages. The final project includes building a priority queue based on character frequencies, creating a Huffman tree, and translating between binary and character representations based on the constructed tree. Additionally, students are encouraged to create a secret message using their implemented Huffman coding for the TA to decode during grading."}/>
                </Dropdown>
                <Dropdown name={"Exams"}>
                    <Element link={"https://github.com/TheOverlakeSchool/midterm-Alec-Odell"} skills={"Java, Array List, Stacks, Queues, Linked List"} description={"Midterm Exam: misc questions to test my knowledge in the class: given an hour to complete"}/>
                    <Element link={"https://github.com/TheOverlakeSchool/final-Alec-Odell"} skills={"Java, Array List, Stacks, Queues, Linked List, Sets, Maps, Sorting, Searching, Recusion, Binary Trees"} description={"Final Exam: misc questions to test my knowledge in the class: given an hour to complete"}/>
                </Dropdown>
                <Dropdown name={"Homeworks"}>
                    <Element link={"https://github.com/TheOverlakeSchool/summer-packet-Alec-Odell"} description={"Summer review HW"} skills={"Java basics"}/>
                    <Element link={"https://github.com/TheOverlakeSchool/homework-1-Alec-Odell"} description={"HW 1"} skills={"Java, Array List"}/>
                    <Element link={"https://github.com/TheOverlakeSchool/homework-2-Alec-Odell"} description={"HW 2"} skills={"Java, Array List"}/>
                    <Element link={"https://github.com/TheOverlakeSchool/homework-3-Alec-Odell"} description={"HW 3"} skills={"Java, Stakcs"}/>
                    <Element link={"https://github.com/TheOverlakeSchool/homework-4-Alec-Odell"} description={"HW 4"} skills={"Java, Queues"}/>
                    <Element link={"https://github.com/TheOverlakeSchool/homework-4p5-Alec-Odell"} description={"HW 4.5"} skills={"Java, Queues"}/>
                    <Element link={"https://github.com/TheOverlakeSchool/homework-7-Alec-Odell"} description={"HW 7"} skills={"Java, Linked List"}/>
                    <Element link={"https://github.com/TheOverlakeSchool/homework-8-Alec-Odell"} description={"HW 8"} skills={"Java, maps"}/>
                    <Element link={"https://github.com/TheOverlakeSchool/homework-9----comparable-Alec-Odell"} description={"HW 9"} skills={"Java, Comparables"}/>
                    <Element link={"https://github.com/TheOverlakeSchool/hashset-Alec-Odell/"} description={"HW 10"} skills={"Java, Hashset"}/>
                    <Element link={"https://github.com/TheOverlakeSchool/homework----mergesort-Alec-Odell"} description={"HW 10.5"} skills={"Java, Merge Sort"}/>
                    <Element link={"https://github.com/TheOverlakeSchool/homework-11-Alec-Odell"} description={"HW 11"} skills={"Java, Recursion"}/>
                    <Element link={"https://github.com/TheOverlakeSchool/homework-12-Alec-Odell"} description={"HW 12"} skills={"Java, Binary Trees"}/>
                    <Element link={"https://github.com/TheOverlakeSchool/homework-13-Alec-Odell"} description={"HW 13"} skills={"Java, Inheritance"}/>
                </Dropdown>
            </div>
            <div className="Coding-Container">
                <p className="Coding-Para">
                    AP Computer Sciecne A (2021-2022)
                </p>
                <Dropdown name={"Overlake Monopoly (Final Project)"}>
                    <Element link={"https://github.com/Alec-Odell/PostAPCSProject"} description={"Made a version on the board game monopoly that is played within the console. Final project for my AP CS class."} skills={"Java"}/>
                </Dropdown>
            </div>
        </div>

    );
}

export default CodingProjects;