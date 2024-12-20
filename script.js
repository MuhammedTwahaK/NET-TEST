// List of questions provided by the user
const allQuestions = [
    {
        question: "Verbal code for communication is:",
        options: ["Colour", "Picture", "Language", "None of the above"],
        correct: 2
    },
    {
        question: "First newspaper printed in an Indian language:",
        options: ["Kesari", "Samachar Sudhavarshan", "Digdarshan", "Bengal Guzette"],
        correct: 1
    },
    {
        question: "Verbal code for communication is:",
        options: ["Colour", "Picture", "Language", "None of the above"],
        correct: 2
    },
    {
        question: "First newspaper which was printed in an Indian language:",
        options: ["Kesari", "Samachar Sudhavarshan", "Digdarshan", "Bengal Guzette"],
        correct: 1
    },
    {
        question: "______ is a brief and catchy piece of music, composed to advertise a product or to identify a station or a presenter.",
        options: ["Karaoke", "Joystick", "Jingle", "Melodrama"],
        correct: 2
    },
    {
        question: "Who is the father of the mathematical theory of communication?",
        options: ["Marshall McLuhan", "Wilbur Schramm", "Shannon and Weaver", "Osgood"],
        correct: 2
    },
    {
        question: "Traditional media have fallen in disuse. How would we revive their old glory?",
        options: [
            "Forcibly teaching music and dance to little children so that they develop a habit to consume such media.",
            "Use digital and social media to execute a pull strategy with the USP of our old cultural values and ethics.",
            "Use academic curricula in educational institutions, that essentially include the study of such media.",
            "None of the above"
        ],
        correct: 1
    },
    {
        question: "Which approach is most appropriate to develop an advertisement for the development of a communication campaign in rural areas?",
        options: ["Different approach", "Participatory approach", "Non-Participatory approach", "None of the above"],
        correct: 1
    },
    {
        question: "Goal Number 16 of Sustainable Development Goals (SDG) is based on:",
        options: ["Participation for all goals", "Peace, justice, and strong institutions", "Life in water", "Life on Earth"],
        correct: 1
    },
    {
        question: "\"Resource Mobilization theory has been considered as a good starting point for the interpretation of utility and impact of social media technologies in social movements.\" This statement is related to which of the following?",
        options: ["Boodly, Limproos, and Oliver", "Wireman and Forst", "Eltantvi and Veest", "Fuug, Gilman, and Shakabtur"],
        correct: 2
    },
    {
        question: "A newspaper 'Mirat-ul-Akhbar' was introduced by Raja Ram Mohan Roy in which language?",
        options: ["English", "Bengali", "Persian", "Hindi"],
        correct: 2
    },
    {
        question: "In which year did the Government of India approve the policy for licensing to establish Community Radio Station (CRS) in educational institutes of the country?",
        options: ["2000", "2001", "2002", "2004"],
        correct: 2
    },
    {
        question: "Which of the following elements creates news?",
        options: ["Time limit", "Prominency", "Closeness", "All of the above"],
        correct: 3
    },
    {
        question: "Emojis:",
        options: ["Big images used in digital platforms", "Little images used in digital platforms", "Text and images used in digital platforms", "None of the above"],
        correct: 1
    },
    {
        question: "Broadcasting of 'Swaraj' serial began from:",
        options: ["14 August 2022", "15 August 2022", "25 August 2022", "26 August 2022"],
        correct: 1
    },
    {
        question: "What was the foundation year of the Reuters news agency?",
        options: ["1841", "1851", "1861", "1871"],
        correct: 1
    },
    {
        question: "A device for preventing loud audio from exceeding the system's upper limit, by progressively reducing amplification for louder sounds is called:",
        options: ["Neutral density filter", "Fader", "Limiter", "Audio filter"],
        correct: 2
    },
    {
        question: "The New World Information and Communication Order (NWICO), which has been mentioned in the clauses of the International Principles of Professional Ethics in Journalism, lays stress on:",
        options: [
            "The need to set up news agencies like the NANAP and CANA.",
            "Respect for the people of underprivileged classes of the west.",
            "The need for decolonization and democratization of Information and Communication.",
            "None of these."
        ],
        correct: 2
    },
    {
        question: "A metaphoric abstraction for the online world of computer networks, especially the Internet, is:",
        options: ["Cyberspace", "Cyber Security", "Cyber booting", "Cybernetics"],
        correct: 0
    },
    {
        question: "Which type of advertising is 'Point of Sale'?",
        options: ["Mobile Advertising", "Transport Advertising", "Direct Advertising", "Window Display Advertising"],
        correct: 3
    },
    {
        question: "Variables are events between the treatment and the post-test measurement that might affect the outcomes:",
        options: ["Background variable", "Intervening variables", "Extraneous variable", "Alternative variable"],
        correct: 1
    },
    {
        question: "The problem of 'Research Ethics' is concerned with which aspect of research activities?",
        options: ["Defining of population of research.", "Evidence-based research reporting.", "Prescribed format of a thesis.", "Data analysis through qualitative or quantitative techniques."],
        correct: 1
    },
    {
        question: "Which approach is taken into account while selecting a research problem in research?",
        options: ["Researcher's approach", "Researcher's interest", "Social relevance", "Financial availability"],
        correct: 2
    },
    {
        question: "Fundamental Rights are given in _________.",
        options: ["Indian Penal Code", "Constitution of India", "Mumbai Police Act", "All of the above"],
        correct: 1
    },
    {
        question: "'Randanka', 'Chingari', 'Hunkar', 'Toofan' are the names of those letters which had given important contributions by their own content in India's heart by providing vigour to the people for independence. These letters were:",
        options: ["Professional letters", "Private (Individual) letters", "Underground letters", "None of the above"],
        correct: 2
    },
    {
        question: "Which of the functions of Public Relations is not included?",
        options: ["Press Release", "Press Tour", "News Reporting", "Press Contact"],
        correct: 2
    },
    {
        question: "The first online newspaper of Hindi is:",
        options: ["Navbharat Times", "Hindustan", "Dainik Jagran", "Nai Duniya"],
        correct: 3
    },
    {
        question: "Lens which is thin at center and thick at edges is _________.",
        options: ["Convex lens", "Biconvex lens", "Both (A) and (B)", "Concave lens"],
        correct: 3
    },
    {
        question: "Which of these organizations released Central Government's Ads?",
        options: ["PIB", "ABC", "DAVP", "Enforcement Directorate"],
        correct: 2
    },
    {
        question: "Which of these streams has been mentioned in the Court's contempt?",
        options: ["Section 2 of 1971", "Section 5 of 1985", "Section 23 of 1898", "Section 95 of 1973"],
        correct: 2
    },
    {
        question: "Who is considered as a father of the Public Interest litigation in India?",
        options: ["Justice Altmas Kabir", "Justice H.L. Dattu", "Justice R.C. Lohta", "Justice P.N. Bhagwati"],
        correct: 3
    },
    {
        question: "Mark Zuckerberg launched first Facebook live broadcast in ______.",
        options: ["August 2015", "December 2015", "April 2016", "July 2016"],
        correct: 2
    },
    {
        question: "NBC in New York city established the first regular TV broadcasts in United States in the year:",
        options: ["1936", "1939", "1945", "1959"],
        correct: 1
    },
    {
        question: "Full form of G.P.S. is:",
        options: ["General Packet System", "Global Positioning System", "Gold Positioning System", "Gaming Positioning System"],
        correct: 1
    },
    {
        question: "Who coined term 'cyberspace'?",
        options: ["Michael Eisner", "William Gibson", "G. Dominik", "Lehaman Hilzig"],
        correct: 1
    },
    {
        question: "Human ear is most sensitive to noise in the frequency range:",
        options: ["100 - 500 Hz", "20 - 20 KHz", "13-16 KHz", "10-12 KHz"],
        correct: 1
    },
    {
        question: "'World Radio Day' is celebrated on:",
        options: ["13th March", "13th February", "23rd April", "23rd June"],
        correct: 1
    },
    {
        question: "Research 'NOIR' is:",
        options: ["Natural, Ordinary, Informational, Research", "Non-functional, Ordinal, Interval, Research", "Nominal, Ordinal, Interval, Ratio", "National, Ordinary, Informational, Ratio"],
        correct: 2
    },
    {
        question: "In which approach hypothesis or theory not applied?",
        options: ["Narrative Analysis", "Discourse Analysis", "Ground theory", "None of these"],
        correct: 2
    },
    {
        question: "Code of Ethics for Media Research is:",
        options: ["Integrity", "Responsibility", "Professional Competences", "All of the above"],
        correct: 3
    },
    {
        question: "Imprint lines means",
        options: ["Type Size", "A Printing Method", "Details of Registration", "Lead Story"],
        correct: 2
    },
    {
        question: "The First Advertising Agency was set up in the year:",
        options: ["1840", "1749", "1841", "1845"],
        correct: 2
    },
    {
        question: "Which of the following Newspapers was edited by Dr. Bhimrao Ambedkar?",
        options: ["Young India", "Mooknayak", "Bharat", "Bahishkrit Bharat", "Kesari"],
        correct: 1
    },
    {
        question: "Marketing concept is:",
        options: ["Production-oriented", "Advertisement-oriented", "Sale-oriented", "Customer-oriented", "Market-oriented"],
        correct: 4
    },
    {
        question: "In the constitutional assembly, the Anglo Indian and Parsis were represented by:",
        options: ["Rajendra Prasad", "Sarojini Naidu", "Frank Anthony", "H.P. Modi", "Abdul Kalam Azad"],
        correct: 2
    },
    {
        question: "Audio Editing terminology are:",
        options: ["Stand-by", "Fade out", "Monaural", "Dissolve", "Reverberation"],
        correct: 3
    },
    {
        question: "Gramophone Record Disc was played at following speeds:",
        options: ["45 rpm", "60 rpm", "331/3 rpm", "78 rpm", "30 rpm"],
        correct: 2
    },
    {
        question: "Which of the following Talk shows on TV channels and their anchors are correctly matched?",
        options: ["Face to Face - Karan Thapper", "Hard talk - Shekhar Gupta", "Cover Story - Vir Sanghavi", "We the people - Nalini Singh", "The South File - N. Ram, Sasi Kumar"],
        correct: 2
    },
    {
        question: "Which of the following papers were introduced or edited by Madan Mohan Malviya?",
        options: ["Hindustan", "Brahman", "Abhhyudaya", "Leader", "Malwa Akhbaar"],
        correct: 3
    },
    {
        question: "Match List I with List II:",
        options: [
            "Kathakali - Entertainment Education, Street Play - Development Communication, Puppetry - Health Campaign, Bharatanatyam - National Integration",
            "Kathakali - Health Campaign, Street Play - Entertainment Education, Puppetry - National Integration, Bharatanatyam - Development Communication",
            "Kathakali - National Integration, Street Play - Health Campaign, Puppetry - Entertainment Education, Bharatanatyam - Development Communication",
            "Kathakali - Development Communication, Street Play - National Integration, Puppetry - Entertainment Education, Bharatanatyam - Health Campaign"
        ],
        correct: 1
    },
    {
        question: "After the emergency (1977) the following publications entered into the Indian Publication industry:",
        options: ["The Telegraph", "Mid-day", "Dainik Bhaskar", "Indian Express", "Frontline"],
        correct: 1
    },
    {
        question: "The book 'Diffusion of Innovation' presents the concept of innovation and argues:",
        options: [
            "34% people have the ability to face risks.",
            "Innovation means a new idea, behaviour or an object.",
            "Will power to acquire innovation depends on one's ability.",
            "50% people have information through inter-personal communication",
            "34% people are laggards"
        ],
        correct: 2
    },
    {
        question: "In 1986 Coca Cola introduced two slogans to differentiate brand, which was that?",
        options: ["The pause that refresh", "Red, White and You", "Enjoy thirst", "Catch the wave", "What you want is coke"],
        correct: 1
    },
    {
        question: "What are the amendment made in the Copyright Amendment Act, 2012?",
        options: [
            "The writer would be considered first owner",
            "It enables the writer to claim equal royalty in case of any use of sound recording and cine-art.",
            "It provides complete rights to the director.",
            "It provides original specific identify to the rights of artist.",
            "It enables especially to the owner."
        ],
        correct: 1
    },
    {
        question: "Some of the functions of the Press Council of India were amended in the year 1978.",
        options: [
            "Undertake studies of foreign newspapers.",
            "Promote functional relationships.",
            "Give opinion to Central Government regarding standard of Newspapers.",
            "Give developmental opinion.",
            "Build a code of conduct for Newspapers."
        ],
        correct: 1
    },
    {
        question: "Good Advertisement is expected to build a relationship with whom?",
        options: ["The Buyer", "The Brand", "The Advertiser", "The Loyal Customer", "The Retailer"],
        correct: 1
    },
    {
        question: "Denis McQuail's characterization of Mass Media includes:",
        options: [
            "The audience is part of a mass culture.",
            "Audiences are homogenous.",
            "They are directed toward large audiences.",
            "They are private and their content is open.",
            "The relationship between media personalities and audience members is mediated."
        ],
        correct: 2
    },
    {
        question: "Content Analysis is:",
        options: [
            "Study of how the mass media create their content",
            "Study why mass media do so",
            "Any statistical description of media content",
            "Study of meaning of a message",
            "Management of content material"
        ],
        correct: 3
    },
    {
        question: "Public Relations specialists create public image for:",
        options: ["Employee", "Employer", "Content writing", "Raise Funds", "Direct Public Relations"],
        correct: 3
    },
    {
        question: "Which of the following dances came under the category of traditional folk dance?",
        options: ["Bihu dance", "Raii dance", "Robot dance", "Contemporary dance", "Karma dance"],
        correct: 1
    },
    {
        question: "The main areas of Nonverbal Communication study are:",
        options: ["Face Expression", "Language", "Interpersonal zones", "Debate", "Tattoo"],
        correct: 3
    },
    {
        question: "According to Needs theory in Advertising, most commonly identified needs are:",
        options: ["Popularity", "Anger", "Achievement", "Laugh", "Novelty"],
        correct: 1
    },
    {
        question: "According to Indian 'Ras theory' accomplishment of Ras is related from the following:",
        options: ["Vibhav", "Kavya", "Anubhav", "Sanket (Indication)", "Vyabhichari Bhav"],
        correct: 2
    },
    {
        question: "Following are types of speech: (a) Madhyama (b) Paraa (c) Pashyanti (d) Akhchara (e) Vaikhari. Choose the correct answer from the options given below:",
        options: ["(a), (d), (e) only", "(b), (c), (e) only", "(b), (a), (d) only", "(b), (e), (a) only"],
        correct: 1
    },
    {
        question: "Tele-communication Department has included which of the following directives and main conditions regarding internet provider licence? (a) Licence Service Provision has to be limited only to the concerned area. (b) The way to connect intermediaries and the internet gateway is uncertain. (c) The nature and form can be conveyed. (d) Customer-centric protection and non-discriminatory service should be ensured. (e) The service should not be limited to the given area. Choose the correct answer from the options given below:",
        options: ["(a), (b) and (c) only", "(a), (b) and (d) only", "(b), (d) and (e) only", "(a), (b) and (e) only"],
        correct: 1
    },
    {
        question: "Print culture in India was dominated by mainly: (a) Nationalism (b) Colonialism (c) Social Reform (d) Feminism (e) Liberalism. Choose the correct answer from the options given below:",
        options: ["(a), (b) and (c) only", "(b), (c) and (e) only", "(a), (c) and (d) only", "(a), (b) and (e) only"],
        correct: 0
    },
    {
        question: "The main impact of TV advertising is on: (a) Women (b) Children (c) Youth (d) Old-aged People (e) Babies. Choose the correct answer from the options given below:",
        options: ["(a), (b) and (c) only", "(b), (c) and (d) only", "(a), (c) and (d) only", "(c), (d) and (e) only"],
        correct: 0
    },
    {
        question: "Assertion (A): Writing an editorial is considered to be the highest form of writing for a newspaper. Reason (R): An editorial writer expresses the policy of a newspaper on certain issues. Choose the correct answer from the options given below:",
        options: ["Both (A) and (R) are true and (R) is the correct explanation of (A).", "Both (A) and (R) are true but (R) is not the correct explanation of (A).", "(A) is true but (R) is false.", "(A) is false but (R) is true."],
        correct: 0
    },
    {
        question: "Who among the following theorists propounded the ‘Technological Determinism’ theory?",
        options: ["Stuart Hall", "Wilbur Schramm", "Harold Innis", "Marshall McLuhan"],
        correct: 3
    },
    {
        question: "The process of systematically analyzing the message content of written or transcribed text is called:",
        options: ["Content Analysis", "Discourse Analysis", "Narrative Analysis", "Thematic Analysis"],
        correct: 0
    },
    {
        question: "Which of the following is not a function of mass communication?",
        options: ["Surveillance", "Correlation", "Entertainment", "Personal Identity"],
        correct: 3
    },
    {
        question: "The ‘Spiral of Silence’ theory was propounded by:",
        options: ["Harold Lasswell", "Elisabeth Noelle-Neumann", "Paul Lazarsfeld", "Maxwell McCombs"],
        correct: 1
    },
    {
        question: "‘Mean World Syndrome’ is associated with which theory of mass communication?",
        options: ["Cultivation Theory", "Agenda-Setting Theory", "Uses and Gratifications Theory", "Dependency Theory"],
        correct: 0
    },
    {
        question: "The concept of ‘Global Village’ was introduced by:",
        options: ["Everett Rogers", "Denis McQuail", "Marshall McLuhan", "Wilbur Schramm"],
        correct: 2
    },
    {
        question: "The term ‘Fourth Estate’ refers to:",
        options: ["Judiciary", "Executive", "Legislature", "Press"],
        correct: 3
    },
    {
        question: "Correct the sequence of Public Relations process: (a) Action (b) Research (c) Communication (d) Evaluation. Choose the correct answer from the options given below:",
        options: ["(b), (a), (c), (d)", "(a), (b), (c), (d)", "(c), (a), (b), (d)", "(b), (d), (a), (c)"],
        correct: 0
    },
    {
        question: "Arrange the chronology of Radio programmes from All India Radio: (a) First National Programme of Music (b) Introduction of phone-in-programme (c) Mann Ki Baat (d) Kisan Vani (e) First News Bulletin. Choose the correct answer from the options given below:",
        options: ["(e), (b), (a), (c), (d)", "(a), (e), (b), (d), (c)", "(e), (a), (b), (d), (c)", "(a), (e), (d), (b), (c)"],
        correct: 2
    },
    {
        question: "Correct the sequence chronologically: (a) The Official Secrets Act (b) The Press and Registration of Books Act (c) The Right to Information Act (d) The Contempt of Court Act (e) The Prasar Bharti Act. Choose the correct answer from the options given below:",
        options: ["(a), (b), (c), (d), (e)", "(b), (a), (d), (e), (c)", "(c), (a), (b), (d), (e)", "(e), (a), (b), (c), (d)"],
        correct: 1
    },
    {
        question: "Identify the chronological order of International News Agencies: (a) Xinhua (b) UPI (c) TASS (d) Reuters (e) AP. Choose the correct answer from the options given below:",
        options: ["(e), (c), (d), (b), (a)", "(d), (c), (b), (a), (e)", "(d), (a), (b), (c), (e)", "(e), (d), (c), (b), (a)"],
        correct: 1
    },
    {
        question: "Identify the chronological order of communication theories: (a) Two Step Communication Theory (b) Semiotic Theory (c) Normative Theory (d) Public Opinion Theory (e) Dependence Theory. Choose the correct answer from the options given below:",
        options: ["(b), (d), (c), (e), (a)", "(d), (a), (e), (b), (c)", "(e), (b), (d), (c), (a)", "(b), (d), (a), (e), (c)"],
        correct: 1
    },
    {
        question: "Identify the chronological order of newspapers: (a) The Tribune (b) Indian Express (c) The Times of India (d) The Hindu (e) Hindustan Times. Choose the correct answer from the options given below:",
        options: ["(a), (c), (d), (b), (e)", "(c), (d), (a), (e), (b)", "(a), (d), (c), (b), (e)", "(c), (a), (d), (e), (b)"],
        correct: 1
    },
    {
        question: "Arrange the Press Committees and Commissions chronologically from the earliest to the most recent: (a) Sharad Pawar Committee (b) Verghese Committee (c) P.C. Joshi Committee (d) Kuldip Nayar Committee (e) Vidyalankar Committee. Choose the correct answer from the options given below:",
        options: ["(e), (d), (a), (b), (c)", "(a), (c), (d), (b), (e)", "(e), (d), (b), (c), (a)", "(D) (a), (d), (b), (c), (e)"],
        correct: 2
    },
    {
        question: "Identify the chronology of Press Councils' Chairmen: (a) Justice A.N. Sen (b) Justice G.N. Roy (c) Justice P.B. Sawant (d) Justice N. Rajagopala Ayyangar (e) Justice K. Jayachandra Reddy. Choose the correct answer from the options given below:",
        options: ["(d), (a), (c), (e), (b)", "(a), (d), (c), (b), (e)", "(d), (e), (c), (a), (b)", "(a), (d), (e), (c), (b)"],
        correct: 0
    },
    {
        question: "Write the correct sequence of Television events: (a) SITE programme started (b) Regular service started in Delhi (c) Commercial TV commenced (d) INSAT 1A became operational (e) Terrestrial Transmission started",
        options: [
            "(a), (b), (d), (c), (e)",
            "(b), (a), (c), (e), (d)",
            "(c), (d), (a), (b), (e)",
            "(b), (c), (e), (d), (a)"
        ],
        correct: 1
    },
    {
        question: "Arrange chronologically the films of famous actor Raj Kumar: (a) Mother India (b) Paigham (c) Dil Apna Aur Preet Parai (d) Godan (e) Gharana",
        options: [
            "(b), (c), (a), (e), (d)",
            "(a), (c), (d), (b), (e)",
            "(a), (b), (c), (d), (e)",
            "(b), (c), (e), (d), (a)"
        ],
        correct: 2
    },
    {
        question: "Given below are two statements: Assertion (A): The two main types of modulation of radio signals are called Amplitude Modulation and Frequency Modulation. Reason (R): Modulation is a system designed to decrease the frequency of signals.",
        options: [
            "Both (A) and (R) are correct and (R) is the correct explanation of (A).",
            "Both (A) and (R) are correct but (R) is NOT the correct explanation of (A).",
            "(A) is correct but (R) is incorrect.",
            "(A) is incorrect but (R) is correct."
        ],
        correct: 2
    },
    {
        question: "Given below are two statements: Statement (I): 'Language' word came from Greek word 'lingua' meaning 'tongue'. As such language can be defined as the 'use of the tongue' to create meaning bearing forms. Statement (II): Media dominance is a technique of buying a large amount of space or time in one medium for an advertisement or program.",
        options: [
            "Both Statement (I) and Statement (II) are correct.",
            "Both Statement (I) and Statement (II) are incorrect.",
            "Statement (I) is correct but Statement (II) is incorrect.",
            "Statement (I) is incorrect but Statement (II) is correct."
        ],
        correct: 2
    },
    {
        question: "Given below are two statements: Statement (I): Kuleshov effect theory proposed by Russian film theorist Lev Kuleshov says that a single shot can be given a different interpretation when shown next to another one. Statement (II): Those who already are knowledgeable receive more benefit from the media and new information technologies than those who are not.",
        options: [
            "Both Statement (I) and Statement (II) are correct.",
            "Both Statement (I) and Statement (II) are incorrect.",
            "Statement (I) is correct but Statement (II) is incorrect.",
            "Statement (I) is incorrect but Statement (II) is correct."
        ],
        correct: 0
    },
    {
        question: "Identify the correct sequence of newspaper types: (a) Daily Newspapers (b) Weekly Newspapers (c) Monthly Newspapers (d) Bi-weekly Newspapers (e) Quarterly Newspapers",
        options: [
            "(a), (b), (c), (d), (e)",
            "(b), (a), (d), (c), (e)",
            "(e), (c), (b), (d), (a)",
            "(d), (e), (c), (a), (b)"
        ],
        correct: 0
    },
    {
        question: "Arrange the order of following advertising theories: (a) AIDA Theory (b) FCB Grid Theory (c) DAGMAR Model (d) Hierarchy of Effects Model (e) The Elaboration Likelihood Model",
        options: [
            "(a), (d), (b), (c), (e)",
            "(d), (c), (a), (e), (b)",
            "(b), (e), (d), (a), (c)",
            "(c), (e), (b), (a), (d)"
        ],
        correct: 0
    },
    // Add more questions here to reach 1000+
];

// Store the selected 100 random questions
let questionOrder = [];

function getRandomQuestions() {
    // Create a copy of the allQuestions array
    const questionsCopy = [...allQuestions];

    // Shuffle the questions array
    for (let i = questionsCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questionsCopy[i], questionsCopy[j]] = [questionsCopy[j], questionsCopy[i]];
    }

    // Select the first 100 questions
    return questionsCopy.slice(0, 100);
}

function shuffleQuestions() {
    // Get 100 random questions for the quiz
    questionOrder = getRandomQuestions();
}

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;
let timerInterval;
let correctAnswers = 0;
let wrongAnswers = 0;
let timeouts = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer");

function showQuestion() {
    resetTimer();

    const question = questionOrder[currentQuestionIndex];
    // Add question number to the question text
    questionElement.textContent = `Question ${currentQuestionIndex + 1}: ${question.question}`;
    answersElement.innerHTML = "";

    // Randomize options after each question starts
    const randomizedOptions = question.options
        .map((option, index) => ({ option, index }))
        .sort(() => Math.random() - 0.5);

    randomizedOptions.forEach(({ option, index }) => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => selectAnswer(index, button);
        li.appendChild(button);
        answersElement.appendChild(li);
    });

    startTimer();
}

function selectAnswer(index, button) {
    clearInterval(timerInterval); // Stop the timer
    const correctIndex = questionOrder[currentQuestionIndex].correct;

    if (index === correctIndex) {
        button.classList.add("correct");
        correctAnswers++;
        score++; // Increase score
        scoreElement.textContent = score; // Update score display
    } else {
        button.classList.add("wrong");
        wrongAnswers++;
        const correctButton = answersElement.querySelectorAll("button")[correctIndex];
        correctButton.classList.add("correct"); // Highlight correct answer
    }

    // Save progress to localStorage after each answer
    saveProgress();

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questionOrder.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 1000); // Move to next question after 1 second
}

function startTimer() {
    timeLeft = 60;
    timerElement.textContent = timeLeft;
    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;

        // Play sound after 10 seconds
        if (timeLeft === 50) {
            playSound();
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timeouts++;
            saveProgress();
            currentQuestionIndex++;
            if (currentQuestionIndex < questionOrder.length) {
                showQuestion();
            } else {
                showResult();
            }
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    timerElement.textContent = 60;
}

function showResult() {
    clearInterval(timerInterval);
    questionElement.style.display = "none";
    answersElement.style.display = "none";
    resultElement.style.display = "block";
    
    // Hide the timer when results are shown
    document.getElementById("timer-container").style.display = "none";
    
    const finalScoreElement = document.getElementById("final-score");
    finalScoreElement.textContent = `Your Score: ${score}`;

    // Update the scorecard table with details
    document.getElementById("correct-count").textContent = correctAnswers;
    document.getElementById("wrong-count").textContent = wrongAnswers;
    document.getElementById("timeout-count").textContent = timeouts;

    // Calculate the percentage
    const percentage = (score / questionOrder.length) * 100;

    // Show a professional pop-up message based on the score
    showCongratulationsMessage(percentage);
}

function showCongratulationsMessage(percentage) {
    let message = "";
    if (percentage > 80) {
        message = "Congratulations! You have successfully qualified for JRF (Junior Research Fellowship).";
    } else if (percentage >= 75) {
        message = "Well done! You are qualified for NET (National Eligibility Test).";
    } else if (percentage >= 70) {
        message = "Good job! You are eligible for Ph.D. admission.";
    } else {
        message = "Thank you for participating. Keep striving for excellence!";
    }

    // Create the pop-up message and show it
    alert(message);
}

function playSound() {
    const sound = new Audio('alarm-sound.mp3'); // Replace with your sound file path
    sound.play();
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    timeouts = 0;
    scoreElement.textContent = score;
    resultElement.style.display = "none";
    document.getElementById("timer-container").style.display = "block"; // Re-show the timer
    questionElement.style.display = "block";
    answersElement.style.display = "block";
    shuffleQuestions();
    showQuestion();
    // Clear saved progress from localStorage when restarting
    localStorage.removeItem("quizProgress");
}

function saveProgress() {
    const quizProgress = {
        currentQuestionIndex,
        score,
        correctAnswers,
        wrongAnswers,
        timeouts
    };
    localStorage.setItem("quizProgress", JSON.stringify(quizProgress));
}

function loadProgress() {
    const savedProgress = localStorage.getItem("quizProgress");
    if (savedProgress) {
        const progress = JSON.parse(savedProgress);
        currentQuestionIndex = progress.currentQuestionIndex;
        score = progress.score;
        correctAnswers = progress.correctAnswers;
        wrongAnswers = progress.wrongAnswers;
        timeouts = progress.timeouts;

        scoreElement.textContent = score;
    }
}

function initializeQuiz() {
    shuffleQuestions();
    loadProgress(); // Load progress from localStorage if it exists
    showQuestion();
}

shuffleQuestions();
initializeQuiz();
