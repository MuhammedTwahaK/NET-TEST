// List of questions provided by the user
const allQuestions = [
  {
    question: "Verbal code for communication is:",
    options: ["Colour", "Picture", "Language", "None of the above"],
    correct: 2,
  },
  {
    question: "First newspaper printed in an Indian language:",
    options: [
      "Kesari",
      "Samachar Sudhavarshan",
      "Digdarshan",
      "Bengal Guzette",
    ],
    correct: 1,
  },
  {
    question: "Verbal code for communication is:",
    options: ["Colour", "Picture", "Language", "None of the above"],
    correct: 2,
  },
  {
    question: "First newspaper which was printed in an Indian language:",
    options: [
      "Kesari",
      "Samachar Sudhavarshan",
      "Digdarshan",
      "Bengal Guzette",
    ],
    correct: 1,
  },
  {
    question:
      "______ is a brief and catchy piece of music, composed to advertise a product or to identify a station or a presenter.",
    options: ["Karaoke", "Joystick", "Jingle", "Melodrama"],
    correct: 2,
  },
  {
    question: "Who is the father of the mathematical theory of communication?",
    options: [
      "Marshall McLuhan",
      "Wilbur Schramm",
      "Shannon and Weaver",
      "Osgood",
    ],
    correct: 2,
  },
  {
    question:
      "Traditional media have fallen in disuse. How would we revive their old glory?",
    options: [
      "Forcibly teaching music and dance to little children so that they develop a habit to consume such media.",
      "Use digital and social media to execute a pull strategy with the USP of our old cultural values and ethics.",
      "Use academic curricula in educational institutions, that essentially include the study of such media.",
      "None of the above",
    ],
    correct: 1,
  },
  {
    question:
      "Which approach is most appropriate to develop an advertisement for the development of a communication campaign in rural areas?",
    options: [
      "Different approach",
      "Participatory approach",
      "Non-Participatory approach",
      "None of the above",
    ],
    correct: 1,
  },
  {
    question:
      "Goal Number 16 of Sustainable Development Goals (SDG) is based on:",
    options: [
      "Participation for all goals",
      "Peace, justice, and strong institutions",
      "Life in water",
      "Life on Earth",
    ],
    correct: 1,
  },
  {
    question:
      '"Resource Mobilization theory has been considered as a good starting point for the interpretation of utility and impact of social media technologies in social movements." This statement is related to which of the following?',
    options: [
      "Boodly, Limproos, and Oliver",
      "Wireman and Forst",
      "Eltantvi and Veest",
      "Fuug, Gilman, and Shakabtur",
    ],
    correct: 2,
  },
  {
    question:
      "A newspaper 'Mirat-ul-Akhbar' was introduced by Raja Ram Mohan Roy in which language?",
    options: ["English", "Bengali", "Persian", "Hindi"],
    correct: 2,
  },
  {
    question:
      "In which year did the Government of India approve the policy for licensing to establish Community Radio Station (CRS) in educational institutes of the country?",
    options: ["2000", "2001", "2002", "2004"],
    correct: 2,
  },
  {
    question: "Which of the following elements creates news?",
    options: ["Time limit", "Prominency", "Closeness", "All of the above"],
    correct: 3,
  },
  {
    question: "Emojis:",
    options: [
      "Big images used in digital platforms",
      "Little images used in digital platforms",
      "Text and images used in digital platforms",
      "None of the above",
    ],
    correct: 1,
  },
  {
    question: "Broadcasting of 'Swaraj' serial began from:",
    options: [
      "14 August 2022",
      "15 August 2022",
      "25 August 2022",
      "26 August 2022",
    ],
    correct: 1,
  },
  {
    question: "What was the foundation year of the Reuters news agency?",
    options: ["1841", "1851", "1861", "1871"],
    correct: 1,
  },
  {
    question:
      "A device for preventing loud audio from exceeding the system's upper limit, by progressively reducing amplification for louder sounds is called:",
    options: ["Neutral density filter", "Fader", "Limiter", "Audio filter"],
    correct: 2,
  },
  {
    question:
      "The New World Information and Communication Order (NWICO), which has been mentioned in the clauses of the International Principles of Professional Ethics in Journalism, lays stress on:",
    options: [
      "The need to set up news agencies like the NANAP and CANA.",
      "Respect for the people of underprivileged classes of the west.",
      "The need for decolonization and democratization of Information and Communication.",
      "None of these.",
    ],
    correct: 2,
  },
  {
    question:
      "A metaphoric abstraction for the online world of computer networks, especially the Internet, is:",
    options: ["Cyberspace", "Cyber Security", "Cyber booting", "Cybernetics"],
    correct: 0,
  },
  {
    question: "Which type of advertising is 'Point of Sale'?",
    options: [
      "Mobile Advertising",
      "Transport Advertising",
      "Direct Advertising",
      "Window Display Advertising",
    ],
    correct: 3,
  },
  {
    question:
      "Variables are events between the treatment and the post-test measurement that might affect the outcomes:",
    options: [
      "Background variable",
      "Intervening variables",
      "Extraneous variable",
      "Alternative variable",
    ],
    correct: 1,
  },
  {
    question:
      "The problem of 'Research Ethics' is concerned with which aspect of research activities?",
    options: [
      "Defining of population of research.",
      "Evidence-based research reporting.",
      "Prescribed format of a thesis.",
      "Data analysis through qualitative or quantitative techniques.",
    ],
    correct: 1,
  },
  {
    question:
      "Which approach is taken into account while selecting a research problem in research?",
    options: [
      "Researcher's approach",
      "Researcher's interest",
      "Social relevance",
      "Financial availability",
    ],
    correct: 2,
  },
  {
    question: "Fundamental Rights are given in _________.",
    options: [
      "Indian Penal Code",
      "Constitution of India",
      "Mumbai Police Act",
      "All of the above",
    ],
    correct: 1,
  },
  {
    question:
      "'Randanka', 'Chingari', 'Hunkar', 'Toofan' are the names of those letters which had given important contributions by their own content in India's heart by providing vigour to the people for independence. These letters were:",
    options: [
      "Professional letters",
      "Private (Individual) letters",
      "Underground letters",
      "None of the above",
    ],
    correct: 2,
  },
  {
    question: "Which of the functions of Public Relations is not included?",
    options: ["Press Release", "Press Tour", "News Reporting", "Press Contact"],
    correct: 2,
  },
  {
    question: "The first online newspaper of Hindi is:",
    options: ["Navbharat Times", "Hindustan", "Dainik Jagran", "Nai Duniya"],
    correct: 3,
  },
  {
    question: "Lens which is thin at center and thick at edges is _________.",
    options: [
      "Convex lens",
      "Biconvex lens",
      "Both (A) and (B)",
      "Concave lens",
    ],
    correct: 3,
  },
  {
    question: "Which of these organizations released Central Government's Ads?",
    options: ["PIB", "ABC", "DAVP", "Enforcement Directorate"],
    correct: 2,
  },
  {
    question:
      "Which of these streams has been mentioned in the Court's contempt?",
    options: [
      "Section 2 of 1971",
      "Section 5 of 1985",
      "Section 23 of 1898",
      "Section 95 of 1973",
    ],
    correct: 2,
  },
  {
    question:
      "Who is considered as a father of the Public Interest litigation in India?",
    options: [
      "Justice Altmas Kabir",
      "Justice H.L. Dattu",
      "Justice R.C. Lohta",
      "Justice P.N. Bhagwati",
    ],
    correct: 3,
  },
  {
    question:
      "Mark Zuckerberg launched first Facebook live broadcast in ______.",
    options: ["August 2015", "December 2015", "April 2016", "July 2016"],
    correct: 2,
  },
  {
    question:
      "NBC in New York city established the first regular TV broadcasts in United States in the year:",
    options: ["1936", "1939", "1945", "1959"],
    correct: 1,
  },
  {
    question: "Full form of G.P.S. is:",
    options: [
      "General Packet System",
      "Global Positioning System",
      "Gold Positioning System",
      "Gaming Positioning System",
    ],
    correct: 1,
  },
  {
    question: "Who coined term 'cyberspace'?",
    options: [
      "Michael Eisner",
      "William Gibson",
      "G. Dominik",
      "Lehaman Hilzig",
    ],
    correct: 1,
  },
  {
    question: "Human ear is most sensitive to noise in the frequency range:",
    options: ["100 - 500 Hz", "20 - 20 KHz", "13-16 KHz", "10-12 KHz"],
    correct: 1,
  },
  {
    question: "'World Radio Day' is celebrated on:",
    options: ["13th March", "13th February", "23rd April", "23rd June"],
    correct: 1,
  },
  {
    question: "Research 'NOIR' is:",
    options: [
      "Natural, Ordinary, Informational, Research",
      "Non-functional, Ordinal, Interval, Research",
      "Nominal, Ordinal, Interval, Ratio",
      "National, Ordinary, Informational, Ratio",
    ],
    correct: 2,
  },
  {
    question: "In which approach hypothesis or theory not applied?",
    options: [
      "Narrative Analysis",
      "Discourse Analysis",
      "Ground theory",
      "None of these",
    ],
    correct: 2,
  },
  {
    question: "Code of Ethics for Media Research is:",
    options: [
      "Integrity",
      "Responsibility",
      "Professional Competences",
      "All of the above",
    ],
    correct: 3,
  },
  {
    question: "Imprint lines means",
    options: [
      "Type Size",
      "A Printing Method",
      "Details of Registration",
      "Lead Story",
    ],
    correct: 2,
  },
  {
    question: "The First Advertising Agency was set up in the year:",
    options: ["1840", "1749", "1841", "1845"],
    correct: 2,
  },
  {
    question:
      "Which of the following Newspapers was edited by Dr. Bhimrao Ambedkar?",
    options: [
      "Young India",
      "Mooknayak",
      "Bharat",
      "Bahishkrit Bharat",
      "Kesari",
    ],
    correct: 1,
  },
  {
    question: "Marketing concept is:",
    options: [
      "Production-oriented",
      "Advertisement-oriented",
      "Sale-oriented",
      "Customer-oriented",
      "Market-oriented",
    ],
    correct: 4,
  },
  {
    question:
      "In the constitutional assembly, the Anglo Indian and Parsis were represented by:",
    options: [
      "Rajendra Prasad",
      "Sarojini Naidu",
      "Frank Anthony",
      "H.P. Modi",
      "Abdul Kalam Azad",
    ],
    correct: 2,
  },
  {
    question: "Audio Editing terminology are:",
    options: ["Stand-by", "Fade out", "Monaural", "Dissolve", "Reverberation"],
    correct: 3,
  },
  {
    question: "Gramophone Record Disc was played at following speeds:",
    options: ["45 rpm", "60 rpm", "331/3 rpm", "78 rpm", "30 rpm"],
    correct: 2,
  },
  {
    question:
      "Which of the following Talk shows on TV channels and their anchors are correctly matched?",
    options: [
      "Face to Face - Karan Thapper",
      "Hard talk - Shekhar Gupta",
      "Cover Story - Vir Sanghavi",
      "We the people - Nalini Singh",
      "The South File - N. Ram, Sasi Kumar",
    ],
    correct: 2,
  },
  {
    question:
      "Which of the following papers were introduced or edited by Madan Mohan Malviya?",
    options: ["Hindustan", "Brahman", "Abhhyudaya", "Leader", "Malwa Akhbaar"],
    correct: 3,
  },
  {
    question: "Match List I with List II:",
    options: [
      "Kathakali - Entertainment Education, Street Play - Development Communication, Puppetry - Health Campaign, Bharatanatyam - National Integration",
      "Kathakali - Health Campaign, Street Play - Entertainment Education, Puppetry - National Integration, Bharatanatyam - Development Communication",
      "Kathakali - National Integration, Street Play - Health Campaign, Puppetry - Entertainment Education, Bharatanatyam - Development Communication",
      "Kathakali - Development Communication, Street Play - National Integration, Puppetry - Entertainment Education, Bharatanatyam - Health Campaign",
    ],
    correct: 1,
  },
  {
    question:
      "After the emergency (1977) the following publications entered into the Indian Publication industry:",
    options: [
      "The Telegraph",
      "Mid-day",
      "Dainik Bhaskar",
      "Indian Express",
      "Frontline",
    ],
    correct: 1,
  },
  {
    question:
      "The book 'Diffusion of Innovation' presents the concept of innovation and argues:",
    options: [
      "34% people have the ability to face risks.",
      "Innovation means a new idea, behaviour or an object.",
      "Will power to acquire innovation depends on one's ability.",
      "50% people have information through inter-personal communication",
      "34% people are laggards",
    ],
    correct: 2,
  },
  {
    question:
      "In 1986 Coca Cola introduced two slogans to differentiate brand, which was that?",
    options: [
      "The pause that refresh",
      "Red, White and You",
      "Enjoy thirst",
      "Catch the wave",
      "What you want is coke",
    ],
    correct: 1,
  },
  {
    question:
      "What are the amendment made in the Copyright Amendment Act, 2012?",
    options: [
      "The writer would be considered first owner",
      "It enables the writer to claim equal royalty in case of any use of sound recording and cine-art.",
      "It provides complete rights to the director.",
      "It provides original specific identify to the rights of artist.",
      "It enables especially to the owner.",
    ],
    correct: 1,
  },
  {
    question:
      "Some of the functions of the Press Council of India were amended in the year 1978.",
    options: [
      "Undertake studies of foreign newspapers.",
      "Promote functional relationships.",
      "Give opinion to Central Government regarding standard of Newspapers.",
      "Give developmental opinion.",
      "Build a code of conduct for Newspapers.",
    ],
    correct: 1,
  },
  {
    question:
      "Good Advertisement is expected to build a relationship with whom?",
    options: [
      "The Buyer",
      "The Brand",
      "The Advertiser",
      "The Loyal Customer",
      "The Retailer",
    ],
    correct: 1,
  },
  {
    question: "Denis McQuail's characterization of Mass Media includes:",
    options: [
      "The audience is part of a mass culture.",
      "Audiences are homogenous.",
      "They are directed toward large audiences.",
      "They are private and their content is open.",
      "The relationship between media personalities and audience members is mediated.",
    ],
    correct: 2,
  },
  {
    question: "Content Analysis is:",
    options: [
      "Study of how the mass media create their content",
      "Study why mass media do so",
      "Any statistical description of media content",
      "Study of meaning of a message",
      "Management of content material",
    ],
    correct: 3,
  },
  {
    question: "Public Relations specialists create public image for:",
    options: [
      "Employee",
      "Employer",
      "Content writing",
      "Raise Funds",
      "Direct Public Relations",
    ],
    correct: 3,
  },
  {
    question:
      "Which of the following dances came under the category of traditional folk dance?",
    options: [
      "Bihu dance",
      "Raii dance",
      "Robot dance",
      "Contemporary dance",
      "Karma dance",
    ],
    correct: 1,
  },
  {
    question: "The main areas of Nonverbal Communication study are:",
    options: [
      "Face Expression",
      "Language",
      "Interpersonal zones",
      "Debate",
      "Tattoo",
    ],
    correct: 3,
  },
  {
    question:
      "According to Needs theory in Advertising, most commonly identified needs are:",
    options: ["Popularity", "Anger", "Achievement", "Laugh", "Novelty"],
    correct: 1,
  },
  {
    question:
      "According to Indian 'Ras theory' accomplishment of Ras is related from the following:",
    options: [
      "Vibhav",
      "Kavya",
      "Anubhav",
      "Sanket (Indication)",
      "Vyabhichari Bhav",
    ],
    correct: 2,
  },
  {
    question:
      "Following are types of speech: (a) Madhyama (b) Paraa (c) Pashyanti (d) Akhchara (e) Vaikhari. Choose the correct answer from the options given below:",
    options: [
      "(a), (d), (e) only",
      "(b), (c), (e) only",
      "(b), (a), (d) only",
      "(b), (e), (a) only",
    ],
    correct: 1,
  },
  {
    question:
      "Tele-communication Department has included which of the following directives and main conditions regarding internet provider licence? (a) Licence Service Provision has to be limited only to the concerned area. (b) The way to connect intermediaries and the internet gateway is uncertain. (c) The nature and form can be conveyed. (d) Customer-centric protection and non-discriminatory service should be ensured. (e) The service should not be limited to the given area. Choose the correct answer from the options given below:",
    options: [
      "(a), (b) and (c) only",
      "(a), (b) and (d) only",
      "(b), (d) and (e) only",
      "(a), (b) and (e) only",
    ],
    correct: 1,
  },
  {
    question:
      "Print culture in India was dominated by mainly: (a) Nationalism (b) Colonialism (c) Social Reform (d) Feminism (e) Liberalism. Choose the correct answer from the options given below:",
    options: [
      "(a), (b) and (c) only",
      "(b), (c) and (e) only",
      "(a), (c) and (d) only",
      "(a), (b) and (e) only",
    ],
    correct: 0,
  },
  {
    question:
      "The main impact of TV advertising is on: (a) Women (b) Children (c) Youth (d) Old-aged People (e) Babies. Choose the correct answer from the options given below:",
    options: [
      "(a), (b) and (c) only",
      "(b), (c) and (d) only",
      "(a), (c) and (d) only",
      "(c), (d) and (e) only",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Writing an editorial is considered to be the highest form of writing for a newspaper. Reason (R): An editorial writer expresses the policy of a newspaper on certain issues. Choose the correct answer from the options given below:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
      "(A) is true but (R) is false.",
      "(A) is false but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Who among the following theorists propounded the ‘Technological Determinism’ theory?",
    options: [
      "Stuart Hall",
      "Wilbur Schramm",
      "Harold Innis",
      "Marshall McLuhan",
    ],
    correct: 3,
  },
  {
    question:
      "The process of systematically analyzing the message content of written or transcribed text is called:",
    options: [
      "Content Analysis",
      "Discourse Analysis",
      "Narrative Analysis",
      "Thematic Analysis",
    ],
    correct: 0,
  },
  {
    question: "Which of the following is not a function of mass communication?",
    options: [
      "Surveillance",
      "Correlation",
      "Entertainment",
      "Personal Identity",
    ],
    correct: 3,
  },
  {
    question: "The ‘Spiral of Silence’ theory was propounded by:",
    options: [
      "Harold Lasswell",
      "Elisabeth Noelle-Neumann",
      "Paul Lazarsfeld",
      "Maxwell McCombs",
    ],
    correct: 1,
  },
  {
    question:
      "‘Mean World Syndrome’ is associated with which theory of mass communication?",
    options: [
      "Cultivation Theory",
      "Agenda-Setting Theory",
      "Uses and Gratifications Theory",
      "Dependency Theory",
    ],
    correct: 0,
  },
  {
    question: "The concept of ‘Global Village’ was introduced by:",
    options: [
      "Everett Rogers",
      "Denis McQuail",
      "Marshall McLuhan",
      "Wilbur Schramm",
    ],
    correct: 2,
  },
  {
    question: "The term ‘Fourth Estate’ refers to:",
    options: ["Judiciary", "Executive", "Legislature", "Press"],
    correct: 3,
  },
  {
    question:
      "Correct the sequence of Public Relations process: (a) Action (b) Research (c) Communication (d) Evaluation. Choose the correct answer from the options given below:",
    options: [
      "(b), (a), (c), (d)",
      "(a), (b), (c), (d)",
      "(c), (a), (b), (d)",
      "(b), (d), (a), (c)",
    ],
    correct: 0,
  },
  {
    question:
      "Arrange the chronology of Radio programmes from All India Radio: (a) First National Programme of Music (b) Introduction of phone-in-programme (c) Mann Ki Baat (d) Kisan Vani (e) First News Bulletin. Choose the correct answer from the options given below:",
    options: [
      "(e), (b), (a), (c), (d)",
      "(a), (e), (b), (d), (c)",
      "(e), (a), (b), (d), (c)",
      "(a), (e), (d), (b), (c)",
    ],
    correct: 2,
  },
  {
    question:
      "Correct the sequence chronologically: (a) The Official Secrets Act (b) The Press and Registration of Books Act (c) The Right to Information Act (d) The Contempt of Court Act (e) The Prasar Bharti Act. Choose the correct answer from the options given below:",
    options: [
      "(a), (b), (c), (d), (e)",
      "(b), (a), (d), (e), (c)",
      "(c), (a), (b), (d), (e)",
      "(e), (a), (b), (c), (d)",
    ],
    correct: 1,
  },
  {
    question:
      "Identify the chronological order of International News Agencies: (a) Xinhua (b) UPI (c) TASS (d) Reuters (e) AP. Choose the correct answer from the options given below:",
    options: [
      "(e), (c), (d), (b), (a)",
      "(d), (c), (b), (a), (e)",
      "(d), (a), (b), (c), (e)",
      "(e), (d), (c), (b), (a)",
    ],
    correct: 1,
  },
  {
    question:
      "Identify the chronological order of communication theories: (a) Two Step Communication Theory (b) Semiotic Theory (c) Normative Theory (d) Public Opinion Theory (e) Dependence Theory. Choose the correct answer from the options given below:",
    options: [
      "(b), (d), (c), (e), (a)",
      "(d), (a), (e), (b), (c)",
      "(e), (b), (d), (c), (a)",
      "(b), (d), (a), (e), (c)",
    ],
    correct: 1,
  },
  {
    question:
      "Identify the chronological order of newspapers: (a) The Tribune (b) Indian Express (c) The Times of India (d) The Hindu (e) Hindustan Times. Choose the correct answer from the options given below:",
    options: [
      "(a), (c), (d), (b), (e)",
      "(c), (d), (a), (e), (b)",
      "(a), (d), (c), (b), (e)",
      "(c), (a), (d), (e), (b)",
    ],
    correct: 1,
  },
  {
    question:
      "Arrange the Press Committees and Commissions chronologically from the earliest to the most recent: (a) Sharad Pawar Committee (b) Verghese Committee (c) P.C. Joshi Committee (d) Kuldip Nayar Committee (e) Vidyalankar Committee. Choose the correct answer from the options given below:",
    options: [
      "(e), (d), (a), (b), (c)",
      "(a), (c), (d), (b), (e)",
      "(e), (d), (b), (c), (a)",
      "(D) (a), (d), (b), (c), (e)",
    ],
    correct: 2,
  },
  {
    question:
      "Identify the chronology of Press Councils' Chairmen: (a) Justice A.N. Sen (b) Justice G.N. Roy (c) Justice P.B. Sawant (d) Justice N. Rajagopala Ayyangar (e) Justice K. Jayachandra Reddy. Choose the correct answer from the options given below:",
    options: [
      "(d), (a), (c), (e), (b)",
      "(a), (d), (c), (b), (e)",
      "(d), (e), (c), (a), (b)",
      "(a), (d), (e), (c), (b)",
    ],
    correct: 0,
  },
  {
    question:
      "Write the correct sequence of Television events: (a) SITE programme started (b) Regular service started in Delhi (c) Commercial TV commenced (d) INSAT 1A became operational (e) Terrestrial Transmission started",
    options: [
      "(a), (b), (d), (c), (e)",
      "(b), (a), (c), (e), (d)",
      "(c), (d), (a), (b), (e)",
      "(b), (c), (e), (d), (a)",
    ],
    correct: 1,
  },
  {
    question:
      "Arrange chronologically the films of famous actor Raj Kumar: (a) Mother India (b) Paigham (c) Dil Apna Aur Preet Parai (d) Godan (e) Gharana",
    options: [
      "(b), (c), (a), (e), (d)",
      "(a), (c), (d), (b), (e)",
      "(a), (b), (c), (d), (e)",
      "(b), (c), (e), (d), (a)",
    ],
    correct: 2,
  },
  {
    question:
      "Given below are two statements: Assertion (A): The two main types of modulation of radio signals are called Amplitude Modulation and Frequency Modulation. Reason (R): Modulation is a system designed to decrease the frequency of signals.",
    options: [
      "Both (A) and (R) are correct and (R) is the correct explanation of (A).",
      "Both (A) and (R) are correct but (R) is NOT the correct explanation of (A).",
      "(A) is correct but (R) is incorrect.",
      "(A) is incorrect but (R) is correct.",
    ],
    correct: 2,
  },
  {
    question:
      "Given below are two statements: Statement (I): 'Language' word came from Greek word 'lingua' meaning 'tongue'. As such language can be defined as the 'use of the tongue' to create meaning bearing forms. Statement (II): Media dominance is a technique of buying a large amount of space or time in one medium for an advertisement or program.",
    options: [
      "Both Statement (I) and Statement (II) are correct.",
      "Both Statement (I) and Statement (II) are incorrect.",
      "Statement (I) is correct but Statement (II) is incorrect.",
      "Statement (I) is incorrect but Statement (II) is correct.",
    ],
    correct: 2,
  },
  {
    question:
      "Given below are two statements: Statement (I): Kuleshov effect theory proposed by Russian film theorist Lev Kuleshov says that a single shot can be given a different interpretation when shown next to another one. Statement (II): Those who already are knowledgeable receive more benefit from the media and new information technologies than those who are not.",
    options: [
      "Both Statement (I) and Statement (II) are correct.",
      "Both Statement (I) and Statement (II) are incorrect.",
      "Statement (I) is correct but Statement (II) is incorrect.",
      "Statement (I) is incorrect but Statement (II) is correct.",
    ],
    correct: 0,
  },
  {
    question:
      "Identify the correct sequence of newspaper types: (a) Daily Newspapers (b) Weekly Newspapers (c) Monthly Newspapers (d) Bi-weekly Newspapers (e) Quarterly Newspapers",
    options: [
      "(a), (b), (c), (d), (e)",
      "(b), (a), (d), (c), (e)",
      "(e), (c), (b), (d), (a)",
      "(d), (e), (c), (a), (b)",
    ],
    correct: 0,
  },
  {
    question:
      "Arrange the order of following advertising theories: (a) AIDA Theory (b) FCB Grid Theory (c) DAGMAR Model (d) Hierarchy of Effects Model (e) The Elaboration Likelihood Model",
    options: [
      "(a), (d), (b), (c), (e)",
      "(d), (c), (a), (e), (b)",
      "(b), (e), (d), (a), (c)",
      "(c), (e), (b), (a), (d)",
    ],
    correct: 0,
  },
  {
    question: "Web Radio requires for transmission:",
    options: [
      "Amplitude Modulation",
      "Frequency Modulation",
      "Data streaming technology",
      "All of the above",
    ],
    correct: 2,
  },
  {
    question:
      "Arrange the following in correct chronological sequence: (a) Press and Registration of Book Act (b) Official Secrets Act (c) Copy right Act (d) R.N.I (e) Indian cinematography Act",
    options: [
      "(a), (e), (b), (c), (d)",
      "(a), (b), (e), (d), (c)",
      "(b), (e), (d), (c), (a)",
      "(b), (d), (e), (a), (c)",
    ],
    correct: 1,
  },
  {
    question:
      "Match List I with List II: List I | List II (a) Market Place | (I) Instagram (b) Lists | (II) Twitter (c) Boomrang | (III) Facebook (d) RSS | (IV) WordPress",
    options: [
      "(a)-(I), (b)-(III), (c)-(IV), (d)-(II)",
      "(a)-(III), (b)-(II), (c)-(I), (d)-(IV)",
      "(a)-(IV), (b)-(I), (c)-(II), (d)-(III)",
      "(a)-(II), (b)-(I), (c)-(IV), (d)-(III)",
    ],
    correct: 1,
  },
  {
    question:
      "Match List I with List II: List I (Organization) | List II (Years) (a) Prasar Bharati | (I) 1966 (b) Press Council Of India | (II) 1936 (c) All India Radio | (III) 1948 (d) The Film Division | (IV) 1997",
    options: [
      "(a)-(I), (b)-(IV), (c)-(II), (d)-(III)",
      "(a)-(IV), (b)-(I), (c)-(II), (d)-(II)",
      "(a)-(I), (b)-(III), (c)-(IV), (d)-(II)",
      "(a)-(IV), (b)-(I), (c)-(II), (d)-(III)",
    ],
    correct: 3,
  },
  {
    question:
      "The term of the members of the Press Council is of _______ years.",
    options: ["One", "Two", "Three", "Four"],
    correct: 2,
  },
  {
    question:
      "A variable that can take on any value over a range of values and can be meaningfully broken into subparts is known as:",
    options: [
      "Control Variable",
      "Confounding Variable",
      "Continuous Variable",
      "Independent Variable",
    ],
    correct: 2,
  },
  {
    question:
      "Bonadelli admits that there are the following barriers to people benefiting from today’s information society:",
    options: [
      "(b), (d) and (e) only",
      "(a), (b) and (c) only",
      "(c), (d) and (e) only",
      "(a), (d) and (e) only",
    ],
    correct: 0,
  },
  {
    question:
      "Which of the following are the strengths of Mass Society Theory?",
    options: [
      "(b), (d) and (e) only",
      "(a), (b) and (c) only",
      "(a), (c) and (e) only",
      "(b), (d) and (e) only",
    ],
    correct: 1,
  },
  {
    question: "The classification of Advertising Agencies:",
    options: ["Creative boutiques", "Reach", "Efficiency", "Hoardings"],
    correct: 0,
  },
  {
    question: "Who said the inverted Pyramid style has over-standardised?",
    options: [
      "Prof. William Metz",
      "Prof. William Wilson",
      "Prof. William John",
      "Prof. William Hez",
    ],
    correct: 0,
  },
  {
    question:
      "Which of the following are the market and advertising research types?",
    options: [
      "(a), (b) and (d) only",
      "(b), (c) and (e) only",
      "(a), (b) and (c) only",
      "(b), (d) and (e) only",
    ],
    correct: 1,
  },
  {
    question:
      "Acceptance of the null hypothesis when it should be rejected is:",
    options: [
      "Type I error",
      "Type II error",
      "Systematic variance",
      "Prestige bias",
    ],
    correct: 1,
  },
  {
    question:
      "The first episode of the Radio Programme 'Mann Ki Baat' was broadcast in:",
    options: ["August 2014", "September 2014", "October 2014", "December 2014"],
    correct: 2,
  },
  {
    question: "Members of the first Press Commission were:",
    options: [
      "(b), (c) and (e) only",
      "(b), (d) and (e) only",
      "(a), (b) and (d) only",
      "(a), (b) and (d) only",
    ],
    correct: 2,
  },
  {
    question: "Indian Penal Code came into force in the year:",
    options: ["1864", "1847", "1860", "1920"],
    correct: 2,
  },
  {
    question:
      "Match List I with List II:\n\nList I (Theory) | List II (Theorist)\n(a) Diffusion Theory | (I) Dolf Zillmann\n(b) Cultivation Analysis Theory | (II) Harold Lasswell\n(c) Propaganda Theory | (III) George Gerbner\n(d) Entertainment Theory | (IV) Everett Rogers\n\nChoose the correct answer:",
    options: [
      "(a)-(III), (b)-(IV), (c)-(I), (d)-(II)",
      "(a)-(II), (b)-(III), (c)-(IV), (d)-(I)",
      "(a)-(IV), (b)-(III), (c)-(II), (d)-(I)",
      "(a)-(IV), (b)-(II), (c)-(III), (d)-(I)",
    ],
    correct: 2,
  },
  {
    question: "Who wrote 'The Dynamics of Mass Communication'?",
    options: [
      "Joseph C. Dominick",
      "Joseph D. Dominick",
      "Joseph K. Dominick",
      "Joseph R. Dominick",
    ],
    correct: 0,
  },
  {
    question: "Public Relations Communication should be based on:",
    options: [
      "(a), (b) and (e) only",
      "(b), (d) and (e) only",
      "(a), (d) and (e) only",
      "(a), (b) and (d) only",
    ],
    correct: 1,
  },
  {
    question: "Which one of the following is not a propaganda device?",
    options: [
      "Control of information",
      "Name-calling",
      "Testimonial",
      "Yellow Journalism",
    ],
    correct: 3,
  },
  {
    question:
      "Which of the following fall under the definition of a newspaper?",
    options: [
      "(c), (d) and (e) only",
      "(b), (c) and (e) only",
      "(a), (c) and (d) only",
      "(b), (d) and (e) only",
    ],
    correct: 0,
  },
  {
    question:
      "Which of the following are the principles of ethical public relations?",
    options: [
      "(a), (c) and (e) only",
      "(b), (d) and (e) only",
      "(a), (b) and (e) only",
      "(a), (b) and (c) only",
    ],
    correct: 3,
  },
  {
    question: "Which is not a function of the communication process?",
    options: ["Surveillance", "Consensus", "Correlation", "Credibility"],
    correct: 3,
  },
  {
    question: "Who wrote the book 'Many Voices, One World'?",
    options: ["Sean McBride", "F. John", "Gerald McBride", "J. V. Vilson"],
    correct: 0,
  },
  {
    question:
      "Match List I with List II:\nList I (Book) | List II (Author)\n(a) Passing of Traditional Society | (I) Noam Chomsky\n(b) Public Opinion | (II) Harold Innis\n(c) Empire and Communication | (III) Daniel Lerner\n(d) Media Control | (IV) Walter Lippmann\nChoose the correct answer from the options given below:",
    options: [
      "(a)-(III), (b)-(IV), (c)-(II), (d)-(I)",
      "(a)-(II), (b)-(III), (c)-(IV), (d)-(I)",
      "(a)-(III), (b)-(I), (c)-(IV), (d)-(II)",
      "(a)-(IV), (b)-(III), (c)-(I), (d)-(II)",
    ],
    correct: 0,
  },
  {
    question:
      "Which of the following media sources is legally obliged to disclose its ownership structure in India?",
    options: ["Newspapers", "Cable operators", "Internet", "FM channels"],
    correct: 0,
  },
  {
    question: "Quality of Effective Layout is _________.",
    options: ["Co-ordination", "Adjustment", "Distribution", "Composition"],
    correct: 3,
  },
  {
    question:
      "Select the correct sequence of the following statutes in Advertising and law in India:\n(a) The young Persons (Harmful Publications) Act\n(b) The Indecent Representation of Women (Prohibition) Act\n(c) The Emblems and Names (Prevention of improper use)\n(d) The prevention of insults to the National Honour Act\n(e) The Prize Competitions Act",
    options: [
      "(c), (e), (a), (d), (b)",
      "(e), (a), (d), (b), (c)",
      "(a), (d), (b), (c), (e)",
      "(b), (a), (d), (e), (c)",
    ],
    correct: 0,
  },
  {
    question: "IANS stands for _________.",
    options: [
      "International Asian News Service",
      "Indo - Asian News Service",
      "Indo - Asiatic News Service",
      "Indo-Assam News Service",
    ],
    correct: 1,
  },
  {
    question:
      "Section _______ of Copy Right Act allows author to his exclusive rights for his intellectual property.",
    options: ["157", "55", "58", "50"],
    correct: 1,
  },
  {
    question:
      "Identify the true statements:\n(a) Advertising helps increase primary demand.\n(b) Advertising helps increase price hike.\n(c) Advertising helps to identify products.\n(d) Advertising helps increase loans.\n(e) Advertising helps in increasing the customer base of an organisation.",
    options: [
      "(a), (b) and (d) only",
      "(a), (c) and (e) only",
      "(b), (d) and (e) only",
      "(a), (b) and (c) only",
    ],
    correct: 1,
  },
  {
    question: "What is 'Page three publicity'?",
    options: [
      "Continuous publishing of advertisement or news items.",
      "Celebrities News published on page no. 3 of newspaper.",
      "Name of the publicity agency.",
      "All of the above",
    ],
    correct: 1,
  },
  {
    question:
      "Match List I with List II:\nList I (Editor):\n(a) Ram Bahadur Rai\n(b) Rajat Sharma\n(c) Ramkripal Singh\n(d) RajKamal Jha\nList II (Newspapers and News Agency):\n(I) Indian Express\n(II) NavBharat Times\n(III) India TV\n(IV) Hindustan Samachar",
    options: [
      "(a)-(II), (b)-(I), (c)-(IV), (d)-(III)",
      "(a)-(I), (b)-(III), (c)-(II), (d)-(IV)",
      "(a)-(IV), (b)-(III), (c)-(II), (d)-(I)",
      "(a)-(III), (b)-(I), (c)-(IV), (d)-(II)",
    ],
    correct: 2,
  },
  {
    question:
      "Which of the following is NOT suitable in 7 Cs of Communication?",
    options: ["Consideration", "Courtesy", "Capture", "Clarity"],
    correct: 2,
  },
  {
    question: "Which is NOT the social objective of Doordarshan?",
    options: [
      "To act as a catalyst for social change",
      "To create values of appraisal of art and cultural heritage",
      "To demote interest in games and sports",
      "To stimulate a scientific temper in the minds of the people",
    ],
    correct: 2,
  },
  {
    question:
      "According to Winer (2001), blog posts canonically encode in this formation:",
    options: [
      "(a), (c), (b), (e), (d)",
      "(a), (b), (c), (d), (e)",
      "(a), (d), (b), (e), (c)",
      "(c), (d), (a), (e), (b)",
    ],
    correct: 1,
  },
  {
    question: "What is the maximum unit for adding to a Telegram group?",
    options: [
      "(a) and (b) only",
      "(b) and (c) only",
      "(d) and (e) only",
      "(a) and (e) only",
    ],
    correct: 1,
  },
  {
    question: "The sequence of Media Production Process is as follows:",
    options: [
      "(d), (a), (c), (b), (e)",
      "(e), (c), (d), (b), (a)",
      "(c), (e), (a), (b), (d)",
      "(a), (b), (c), (d), (e)",
    ],
    correct: 1,
  },
  {
    question: "In the research for categorical variables you can construct:",
    options: [
      "(a), (b) and (e) only",
      "(b), (c) and (d) only",
      "(b), (d) and (e) only",
      "(a), (d) and (e) only",
    ],
    correct: 1,
  },
  {
    question: "Skyline is _________",
    options: [
      "(a), (b) and (e) only",
      "(a), (b) and (c) only",
      "(a), (d) and (e) only",
      "(b), (c) and (e) only",
    ],
    correct: 3,
  },
  {
    question: "Newspapers CANNOT be classified broadly on the basis of:",
    options: ["size", "intensive coverage", "frequency", "language"],
    correct: 1,
  },
  {
    question:
      "Given below are two statements:\nStatement (I): The Play Theory of Mass Communication is a book written by William Stephenson.\nStatement (II): The Play Theory of Mass Communication is a communication theory developed by Wilbur Schramm.",
    options: [
      "Both Statement (I) and Statement (II) are true.",
      "Both Statement (I) and Statement (II) are false.",
      "Statement (I) is true but Statement (II) is false.",
      "Statement (I) is false but Statement (II) is true.",
    ],
    correct: 2,
  },
  {
    question:
      "Arrange the following I & B Ministers of India in correct chronological order:\n(a) Indira Gandhi\n(b) Sardar Vallabh Bhai Patel\n(c) Lal Krishna Advani\n(d) Sushma Swaraj\n(e) Indra Kumar Gujral",
    options: [
      "(b), (e), (a), (d), (c)",
      "(b), (a), (e), (c), (d)",
      "(a), (b), (e), (c), (d)",
      "(a), (c), (b), (d), (e)",
    ],
    correct: 1,
  },
  {
    question:
      "Which of the following is NOT related to the website?\n(a) Search next\n(b) Search engine\n(c) Search directory\n(d) Search based advertising\n(e) Search costs",
    options: [
      "(c), (d) and (e) only",
      "(a), (b) and (c) only",
      "(b), (d) and (e) only",
      "(b), (c) and (d) only",
    ],
    correct: 1,
  },
  {
    question:
      "Given below are two statements:\nStatement (I): A printed statement that falsely impugns or defames a person's character is called slander.\nStatement (II): Yellow journalism is a style of news that lacks any sense of social responsibility and privileges sensational stories.",
    options: [
      "Both Statement (I) and Statement (II) are correct",
      "Both Statement (I) and Statement (II) are incorrect",
      "Statement (I) is correct but Statement (II) is incorrect",
      "Statement (I) is incorrect but Statement (II) is correct",
    ],
    correct: 3,
  },
  {
    question:
      "The concept of uses and gratification is NOT based on which research?",
    options: [
      "Study Quiz Programme",
      "Studying Music Programme's on the Radio",
      "Children's study of comics",
      "Study of Films",
    ],
    correct: 0,
  },
  {
    question:
      "Identify the correct sequence of the following top TV advertisers in terms of their Advertisement expenditure in India:\n(a) Pepsi Co India\n(b) Reckitt Benckiser\n(c) Bharti Airtel\n(d) ITC Ltd\n(e) Hindustan Unilever",
    options: [
      "(e), (b), (d), (a), (c)",
      "(a), (c), (b), (e), (d)",
      "(d), (e), (a), (c), (b)",
      "(b), (e), (a), (d), (c)",
    ],
    correct: 0,
  },
  {
    question:
      "The main roles of misleading advertisement are:\n(a) Communicate\n(b) False statement\n(c) Promote the product\n(d) Confuse consumer\n(e) Refuse the right of purchaser",
    options: [
      "(e), (b) and (a) only",
      "(a), (b) and (c) only",
      "(b), (d) and (e) only",
      "(b), (c) and (e) only",
    ],
    correct: 2,
  },
  {
    question:
      "Doob has propounded basic principles of propaganda which are:\n(a) Principle of Intention\n(b) Principle of Mass Society\n(c) Principle of Attitude\n(d) Principle of Persuasion\n(e) Principle of Balance\nChoose the correct answer from the options given below:",
    options: [
      "(a), (b) and (e) only",
      "(a), (c) and (d) only",
      "(a), (d) and (e) only",
      "(b), (d) and (e) only",
    ],
    correct: 1,
  },
  {
    question: "Fundamental Rights of Indian Constitution was adopted from:",
    options: [
      "British Constitution",
      "U.S. Constitution",
      "Australian Constitution",
      "None of the above",
    ],
    correct: 1,
  },
  {
    question:
      "Arrange the following in correct chronological sequence:\n(a) Frankfurt School Theory\n(b) Dependency Theory\n(c) Normative Theory\n(d) Toronto School Theory\n(e) Communist Media Theory\nChoose the correct answer from the options given below:",
    options: [
      "(e), (d), (a), (b), (c)",
      "(d), (c), (b), (a), (e)",
      "(d), (b), (e), (a), (c)",
      "(e), (a), (d), (c), (b)",
    ],
    correct: 3,
  },
  {
    question: "Who refers to the views of 'Vyadi'?",
    options: ["Bharti Muni", "Panini", "Narad Muni", "Patanjali"],
    correct: 3,
  },
  {
    question: "The current President of the Press Trust of India (PTI) is:",
    options: [
      "Justice G. S. Rajadhyaksha",
      "Keshav Chandra",
      "Aveek Sarkar",
      "N Ravi",
    ],
    correct: 2,
  },
  {
    question:
      "Match List I with List II:\nList I (News agency)\n(a) Tass\n(b) Reuter\n(c) AP\n(d) UNI\nList II (Year formation)\n(I) 1859\n(II) 1844\n(III) 1957\n(IV) 1961\nChoose the correct answer from the options given below:",
    options: [
      "(a)-(III), (b)-(I), (c)-(II), (d)-(IV)",
      "(a)-(III), (b)-(II), (c)-(I), (d)-(IV)",
      "(a)-(I), (b)-(II), (c)-(III), (d)-(IV)",
      "(a)-(II), (b)-(III), (c)-(IV), (d)-(I)",
    ],
    correct: 1,
  },
  {
    question: "Who developed the 'case study' Research Method?",
    options: ["Lipley", "Browne", "Berelson", "Pearson"],
    correct: 2,
  },
  {
    question:
      "PTI was incorporated on Aug. 1947 under the Indian Companies Act, 1913.",
    options: ["24", "25", "26", "27"],
    correct: 1,
  },
  {
    question: "Who introduced the Knowledge Gap Hypothesis?",
    options: ["P. J. Tichner", "Shoe Maker", "Walter Lipman", "George Gailup"],
    correct: 0,
  },
  {
    question: "Which of the following terms are NOT related to OTT platform?",
    options: [
      "(b), (c) and (d) only",
      "(a), (b) and (d) only",
      "(b), (d) and (e) only",
      "(a), (c) and (d) only",
    ],
    correct: 2,
  },
  {
    question:
      "Press Council Of India was established ________. Choose the correct answer from the options given below:",
    options: [
      "(a) and (c) only",
      "(b) and (c) only",
      "(d) and (e) only",
      "(a) and (d) only",
    ],
    correct: 0,
  },
  {
    question: "A Press run of a publication for one day is ___________",
    options: ["Edition", "Imprint", "Pre-print", "Publication"],
    correct: 0,
  },
  {
    question: "What is the screen ratio of H.D.T.V?",
    options: ["16:9", "14:6", "15:7", "18:9"],
    correct: 0,
  },
  {
    question: "The techniques of Propaganda are:",
    options: [
      "Personal contacts",
      "Negative",
      "Evasion of truth",
      "Arousing attitudes",
    ],
    correct: 2,
  },
  {
    question:
      "Match List I with List II: List I (Editor) (a) Prabhash Joshi (b) Vidhya Niwas Mishra (c) M. J. Akbar (d) Arun Shourie List II (Newspaper) (I) Indian Express (II) Times (III) Jansatta (IV) Asian Age Choose the correct answer from the options given below:",
    options: [
      "(a)-(II), (b)-(I), (c)-(IV), (d)-(III)",
      "(a)-(III), (b)-(IV), (c)-(I), (d)-(II)",
      "(a)-(III), (b)-(II), (c)-(IV), (d)-(I)",
      "(a)-(IV), (b)-(III), (c)-(I), (d)-(II)",
    ],
    correct: 2,
  },
  {
    question:
      "Which of the following are the sources of Media Information? (a) Audit Bureau of Circulation (b) Client (c) Sales promotion (d) Annual Economic Survey (e) Syndicate Research Choose the correct answer from the options given below:",
    options: [
      "(b), (c) and (e) only",
      "(a), (b) and (d) only",
      "(a), (c) and (d) only",
      "(a), (d) and (e) only",
    ],
    correct: 3,
  },
  {
    question:
      "Where was the first issue of the Spiritual Magazine Kalyan published?",
    options: ["Gorakhpur", "Jabalpur", "Ujjain", "Mumbai"],
    correct: 0,
  },
  {
    question:
      "The basic role of Mass Communication is: (a) Entertain (b) Mislead (c) Inform (d) Communicate (e) Educate Choose the correct answer from the options given below:",
    options: [
      "(b), (a) and (e) only",
      "(c), (b) and (d) only",
      "(c), (e) and (a) only",
      "(d), (e) and (b) only",
    ],
    correct: 2,
  },
  {
    question:
      "Match List I with List II: List I (Broadcasting Organisation) (a) All India Radio (b) Voice of America (c) British Broadcasting Corp. (d) Radio Ceylon List II (Year of origin) (I) 1922 (II) 1925 (III) 1936 (IV) 1942 Choose the correct answer from the options given below:",
    options: [
      "(a)-(III), (b)-(IV), (c)-(II), (d)-(I)",
      "(a)-(III), (b)-(II), (c)-(I), (d)-(IV)",
      "(a)-(III), (b)-(IV), (c)-(I), (d)-(II)",
      "(a)-(II), (b)-(III), (c)-(IV), (d)-(I)",
    ],
    correct: 1,
  },
  {
    question:
      "Identify the correct chronological sequence of mobile advertising spending in BRICS countries: (a) S. Africa (b) Russia (c) India (d) China (e) Brazil Choose the correct answer from the options given below:",
    options: [
      "(b), (a), (e), (c), (d)",
      "(a), (e), (c), (b), (d)",
      "(d), (c), (e), (b), (a)",
      "(e), (b), (c), (a), (d)",
    ],
    correct: 2,
  },
  {
    question: "Which is NOT a kind of Lead?",
    options: [
      "Comprehensive",
      "Contrast",
      "Imagination",
      "Blind Identification",
    ],
    correct: 2,
  },
  {
    question:
      "Arrange the following in chronological order: (a) DVD Player Invented (b) First TV Transmission (c) Introduction of Audio Cassettes (d) Microsoft Windows launched (e) Gmail was developed Choose the correct answer from the options given below:",
    options: [
      "(b), (d), (a), (c), (e)",
      "(b), (c), (a), (d), (e)",
      "(b), (c), (d), (a), (e)",
      "(b), (c), (e), (d), (a)",
    ],
    correct: 1,
  },
  {
    question:
      "Arrange the following Indian Journalists in seniority order based on their contribution: (a) Mahatma Gandhi (b) Dr. Ambedkar (c) Bal Gangadhar Tilak (d) Rajendra Mathur (e) Ganesh Shankar Vidhyarthi Choose the correct answer from the options given below:",
    options: [
      "(c), (b), (a), (e), (d)",
      "(b), (a), (c), (d), (e)",
      "(c), (a), (b), (e), (d)",
      "(b), (c), (a), (e), (d)",
    ],
    correct: 2,
  },
  {
    question:
      "As per the Shannon and Weaver model, _________ is important: (a) Mass Communication (b) Sender (c) Public Opinion (d) Receiver (e) Medium Choose the correct answer from the options given below:",
    options: [
      "(a), (b) and (c) only",
      "(a), (b) and (e) only",
      "(a), (c) and (e) only",
      "(b), (d) and (e) only",
    ],
    correct: 3,
  },
  {
    question:
      "Who can lodge a complaint against a Newspaper or Journalist to the Press Council?",
    options: ["Anybody", "Somebody", "General body", "None of the above"],
    correct: 0,
  },
  {
    question: '"Kumbh Mela" is an example of which type of communication?',
    options: [
      "Mass communication",
      "Traditional mass communication",
      "Group communication",
      "Traditional Group communication",
    ],
    correct: 3,
  },
  {
    question: "Four theories of Press were conceived by ________",
    options: ["W. Schramm", "D. Mcquail", "McLuhan", "J. Carey"],
    correct: 1,
  },
  {
    question: "Meta is a new name for ________",
    options: ["Twitter", "Facebook", "LinkedIn", "Instagram"],
    correct: 1,
  },
  {
    question: "The MOJO (Mobile Journalism) kit does NOT consist of-",
    options: ["Power bank", "Hard drive", "Kine Master", "Microphone"],
    correct: 1,
  },
  {
    question:
      "Assertion (A): A media company owns numerous companies involved in media enterprise. Reason (R): Conglomerates use their access in multiple areas to share various kinds of media content. Choose the correct answer:",
    options: [
      "Both (A) and (R) are correct and (R) is the correct explanation of (A)",
      "Both (A) and (R) are correct but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): The scientific method goes beyond the solution of practical problems. Reason (R): The scientific method of solution involves controlled experimentation. Choose the most appropriate answer:",
    options: [
      "Both (A) and (R) are correct and (R) is the correct explanation of (A)",
      "Both (A) and (R) are correct but (R) is NOT the correct explanation of (A)",
      "(A) is correct but (R) is not correct",
      "(A) is not correct but (R) is correct",
    ],
    correct: 0,
  },
  {
    question:
      "Identify the correct sequence of the following social reformer-journalists in India, in terms of their publications:",
    options: [
      "(A), (B), (E), (D), (C)",
      "(B), (D), (C), (A), (E)",
      "(C), (E), (B), (A), (D)",
      "(D), (A), (C), (E), (B)",
    ],
    correct: 2,
  },
  {
    question:
      "Match List I with List II:\nList I (Media Outlet)\n(A) The Hindu\n(B) The Times of India\n(C) CNN – TV 18\n(D) The Tribune\nList II (Ownership pattern)\n(I) Cross-media ownership\n(II) Trust\n(III) Family ownership\n(IV) Corporate ownership (external)",
    options: [
      "(A) – (I), (B) – (III), (C) – (IV), (D) – (II)",
      "(A) – (II), (B) – (III), (C) – (IV), (D) – (I)",
      "(A) – (III), (B) – (I), (C) – (IV), (D) – (II)",
      "(A) – (III), (B) – (IV), (C) – (I), (D) – (II)",
    ],
    correct: 3,
  },
  {
    question:
      "The sequence of logical questions in planning for public relations campaigns is:",
    options: [
      "(C), (B), (D), (A), (E)",
      "(A), (C), (E), (B), (D)",
      "(A), (C), (D), (E), (B)",
      "(D), (C), (A), (E), (B)",
    ],
    correct: 1,
  },
  {
    question:
      "The camera technique of directing the viewer to shift attention from one subject to another is called:",
    options: ["Manual focus", "Follow focus", "Deep focus", "Rack focus"],
    correct: 3,
  },
  {
    question: "A transmitter encodes messages into:",
    options: ["Artefacts", "Noise", "Models", "Signals"],
    correct: 3,
  },
  {
    question:
      "Which one of the following leads in the percentage of population on social media, as per the FICCI report 2020?",
    options: [
      "People’s Republic of China",
      "The United States",
      "The United Kingdom",
      "India",
    ],
    correct: 3,
  },
  {
    question:
      "Match List I with List II:\n\nList I (Country)\t\tList II (Information Legislation)\n(A) Canada\t\t(I) Right to Information Act, 2014\n(B) Australia\t\t(II) Access to Information Act, 1983\n(C) India\t\t(III) Freedom of Information Act, 1982\n(D) Bhutan\t\t(IV) Right to Information Act, 2005\n\nChoose the correct answer from the options given below:",
    options: [
      "(A) – (II), (B) – (III), (C) – (IV), (D) – (I)",
      "(A) – (III), (B) – (IV), (C) – (I), (D) – (II)",
      "(A) – (IV), (B) – (I), (C) – (II), (D) – (III)",
      "(A) – (I), (B) – (II), (C) – (III), (D) – (IV)",
    ],
    correct: 1,
  },
  {
    question:
      "Which of the following factors determine the relevance of the topic for communication research?",
    options: [
      "(A), (B), (C) only",
      "(B), (C), (D) only",
      "(C), (D), (E) only",
      "(A), (D), (E) only",
    ],
    correct: 0,
  },
  {
    question:
      "A commonly used and immensely valuable technique for analysing the external environment of an organisation is:",
    options: [
      "SWOT Analysis",
      "PEST Analysis",
      "MOST Analysis",
      "PESTLE Analysis",
    ],
    correct: 1,
  },
  {
    question: "Applied research aims at:",
    options: [
      "Constructing a theory",
      "Finding out a variable",
      "Solving a specific problem",
      "Testing a null hypothesis mathematically",
    ],
    correct: 2,
  },
  {
    question:
      "Which among the following communicologists usefully distinguished between the paradigms of interaction, which was called the ‘extractive’ and the ‘immersive’?",
    options: [
      "Alan Turing",
      "Peter Lunenfield",
      "Rosanne Allucquere",
      "P. Hayward",
    ],
    correct: 1,
  },
  {
    question:
      "Which among the following film critics developed a connection between mise-en-scene and realism on the one hand, and montage and expressionism on the other?",
    options: [
      "Andre Bazin",
      "Julia Kristeva",
      "Christian Metz",
      "Susan Sontag",
    ],
    correct: 0,
  },
  {
    question:
      "___________ is a paragraph that explains the point of the story when the lead is purposely vague.",
    options: ["Circle Kicker", "Nut graph", "Teaser Lead", "Mystery lead"],
    correct: 1,
  },
  {
    question:
      "“Eye track” studies of Poynter Institute and Stanford University, reveal which of the following online reader characteristics?",
    options: [
      "(A), (B), (D) only",
      "(B), (C), (E) only",
      "(C), (D), (E) only",
      "(A), (B), (C) only",
    ],
    correct: 3,
  },
  {
    question:
      "Given below are two statements: One is labelled as Assertion A and the other is labelled as Reason R.\n\nAssertion (A): The television news presentation is a disjointed narrative.\nReason (R): In the absence of alternative credible information, the media frames do matter for the audience.\n\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of A",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of A",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
    ],
    correct: 0,
  },
  {
    question:
      "According to Western Scholars of developmental communication, traditional societies are marked by:",
    options: [
      "Family focus",
      "Rural setting",
      "Customs and mores",
      "Participation",
      "Individuality",
    ],
    correct: 0,
  },
  {
    question:
      "Given below are two statements: One is labelled as Assertion A and the other is labelled as Reason R.\nAssertion (A): The classical functions of media represent their universal acceptance among media theorists.\nReason (R): The functional analysis theory of media has its dysfunctions listed by critics.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of A",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of A",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
    ],
    correct: 1,
  },
  {
    question: "Which of the following are the sources of artefacts?",
    options: [
      "Literal replication",
      "History",
      "Instrumentation",
      "Random sampling",
      "Experimental mortality",
    ],
    correct: 0,
  },
  {
    question:
      "Which common order is to be followed in a news story according to Carole Rich?",
    options: [
      "(B), (A), (C), (D), (E)",
      "(A), (D), (B), (C), (E)",
      "(A), (D), (B), (E), (C)",
      "(A), (B), (D), (E), (C)",
    ],
    correct: 1,
  },
  {
    question:
      "Which of the following are essential characteristics of a slogan?",
    options: [
      "It should be short, crisp and clear",
      "It should express the main idea in a few words",
      "It should contain a message to persuade readers to act",
      "It should be long enough to form an image",
    ],
    correct: 0,
  },
  {
    question: "Pop art as a style of art emerged in the United States in the:",
    options: ["1960s", "1970s", "1980s", "1990s"],
    correct: 0,
  },
  {
    question:
      "What is the basic principle of “Mass Communication” which is associated with the work of Harold Lasswell?",
    options: [
      "Gatekeeping",
      "Use and Gratification",
      "Magic Bullet",
      "Hypodermic Needle",
    ],
    correct: 2,
  },
  {
    question:
      "Which of the following strategies helps enhance the credibility of media practitioners and institutions?",
    options: [
      "By ensuring reliability in work",
      "By engaging in advocacy",
      "By having clarity of thought",
      "By treating all stakeholders equally",
      "By participating in mass media campaigns",
    ],
    correct: 0,
  },
  {
    question:
      "The area in which the null hypothesis is not accepted is known as:",
    options: [
      "The region of exclusion",
      "The region of seclusion",
      "The region of isolation",
      "The region of rejection",
    ],
    correct: 3,
  },
  {
    question: "Match List I with List II",
    options: [
      "Maya Entertainment – Chhota Bheem",
      "Toonz Animation – Karma Chakra",
      "Green Gold Animation – Mondo Yan",
      "Studio Durga – Aryan",
    ],
    correct: [1, 2, 0, 3],
  },
  {
    question: "A sceptical buyer is the one who:",
    options: [
      "makes impulsive purchase",
      "has negative image about the seller",
      "carefully weighs the cost, pros and cons of the product being offered",
      "is keen to return the product",
    ],
    correct: 2,
  },
  {
    question: "Paulo Friere described the top–down modernisation project as:",
    options: [
      "Existentialism",
      "Assistentialism",
      "Universalism",
      "Institutionalism",
    ],
    correct: 1,
  },
  {
    question: "Match List I with List II",
    options: [
      "The People’s choice – Paul Lazarsfeld",
      "Empire of communication – H.A. Innis",
      "The Mind Manager – Herbert Schiller",
      "World Politics and personal insecurity – H.D. Lasswell",
    ],
    correct: [3, 2, 0, 1],
  },
  {
    question: "Match List I with List II",
    options: [
      "Denis Mcquail and Gureviteh – Structural functionalism",
      "William Stephenson – Play and entertainment",
      "Donald and Virginia Fry – Meaning theory",
      "Patterson and Mcclure – Political socialisation",
    ],
    correct: [3, 2, 0, 1],
  },
  {
    question:
      "The technique where brief fragments of shots are cut to exact rhythm against a musical beat or sound is:",
    options: ["cold cuts", "flash cutting", "jump cutting", "pop cutting"],
    correct: 1,
  },
  {
    question: "The single sheet advertisement printed on one side is known as:",
    options: ["Brochures", "Leaflets", "Posters", "Flyers"],
    correct: 3,
  },
  {
    question: "Which are the basic functions of advertising in society?",
    options: [
      "Marketing function",
      "Education function",
      "Cultural function",
      "Political function",
      "Social function",
    ],
    correct: [0, 1, 4],
  },
  {
    question:
      "Which of the following are considered privileged documents by courts in India?",
    options: [
      "News copy prepared by the media",
      "Annual reports of private limited companies",
      "State secrets",
      "Correspondence between government and its officers regarding state security",
      "Sources of information collected and listed by government employees",
    ],
    correct: [2, 3, 4],
  },
  {
    question:
      "Longer period of exposure to an experimental stimulus minimises:",
    options: [
      "The simulatory effect",
      "The sleeper effect",
      "The replicatory effect",
      "The selectivity effect",
    ],
    correct: 1,
  },
  {
    question:
      "The social responsibility theory of mass communication includes:",
    options: [
      "Balanced opinion",
      "Imposing self-regulation",
      "Strict government control",
      "Reflection of public opinion",
      "Suppression of dissent",
    ],
    correct: [0, 1, 3],
  },
  {
    question:
      "In outdoor advertising, the term OTS (Opportunity to See) and OTR (Opportunity To Read) are referred to as:",
    options: ["Wall painting", "Posters", "Hoardings", "Balloons"],
    correct: 2,
  },
  {
    question: "Summative evaluation deals with:",
    options: [
      "Ability assessment",
      "Process evaluation",
      "Implementation",
      "Impact",
    ],
    correct: 3,
  },
  {
    question:
      "Identify the correct sequence of elements in a newspaper’s front page.",
    options: [
      "Headlines",
      "Nameplate",
      "Ears",
      "Anchor story",
      "Skyline banner",
    ],
    correct: [1, 2, 0, 3, 4],
  },
  {
    question:
      "Which of the following are the functions of research hypotheses?",
    options: [
      "Should produce negative correlation",
      "Should generate intervening variables",
      "Should provide direction for the study undertaken",
      "Should eliminate the trial and error method",
      "Must permit quantification of variables",
    ],
    correct: [2, 3, 4],
  },
  {
    question:
      "The main aim of professional sub-culture in media management is to:",
    options: [
      "Unite individuals",
      "Create divided groups",
      "Influence workers to be isolated",
      "Produce dissimilarities in work culture",
    ],
    correct: 0,
  },
  {
    question: "Match List I with List II",
    options: [
      "New Journalism (1960’s) – Tom Wolfe",
      "Collaborative Journalism – Bastian Obermayer",
      "Yellow Journalism – W.R. Hearst",
      "Muckracking – Upton Sinclair",
    ],
    correct: [0, 1, 3, 2],
  },
  {
    question: "Which of the following are the steps in content analysis?",
    options: [
      "Formulation of research question",
      "Defining the identified population",
      "Selecting an appropriate sample",
      "Excluding the quantitative methods",
      "Avoid defining the categories for data analysis",
    ],
    correct: [0, 1, 2],
  },
  {
    question:
      "General attributions to the sources like ‘Government official’ in news stories are referred to as:",
    options: [
      "Off the record",
      "Deep background",
      "Background",
      "On the record",
    ],
    correct: 2,
  },
  {
    question:
      "Which among the following journalists is associated with the developmental news portal PARI (People’s Archive of Rural India)?",
    options: ["Kalpana Sharma", "Gail Omvedt", "Ravish Kumar", "P. Sainath"],
    correct: 3,
  },
  {
    question:
      "Which of the following criticisms were accepted by the advocates of the dominant paradigm?",
    options: [
      "Individuals as the locus of change",
      "Social regularity",
      "Ignoring cultural specificity",
      "Rejection of empiricism",
      "Over–emphasis on the role of media",
    ],
    correct: [0, 1, 2],
  },
  {
    question:
      "Which among the following methods/models is used to make decisions related to ethical dilemmas in the media?",
    options: ["Fog index", "Flesch method", "Freytag Pyramid", "Potter box"],
    correct: 3,
  },
  {
    question:
      "Who directed the film ‘Sadgati’ based on the short story by Munshi Premchand?",
    options: ["Shyam Benegal", "Satyajit Ray", "Mani Kaul", "Govind Nihalani"],
    correct: 3,
  },
  {
    question:
      "Neo-Darwinian beliefs of social evolution were the basis of western theory of:",
    options: [
      "Modernisation",
      "Ethnic superiority",
      "De–politicisation",
      "Dominance of religion",
    ],
    correct: 0,
  },
  {
    question: "The concept of mean world syndrome is seen in",
    options: [
      "Spiral of silence",
      "Cultivation analysis",
      "Helical theory",
      "Transactional analysis",
    ],
    correct: 1,
  },
  {
    question: "What are the new trends in the designing of newspapers?",
    options: [
      "Application of traditional divisions",
      "Use of different software exclusively for designing",
      "More and more colourful pictures",
      "Adoption of total design concept",
      "Preference to bold type for text composition",
    ],
    correct: [1, 2, 3],
  },
  {
    question:
      "Who wrote the book about PR titled ‘Crystallising public opinion’?",
    options: [
      "Edward Bernays",
      "Ivy Ledbetter Lee",
      "J.P. Morgan",
      "George Creel",
    ],
    correct: 0,
  },
  {
    question:
      "The curricular model for mass media education by Sirkka Minkkienen was based on research in",
    options: [
      "Sociology and Psychology",
      "Political Science and Economics",
      "History and Philosophy",
      "Public Administration and Geography",
    ],
    correct: 0,
  },
  {
    question: "Which of the following lead to the contempt of parliament?",
    options: [
      "Abuse not related to the duties of the member of parliament.",
      "Personal attack of a member.",
      "Publication that affects the dignity of parliament.",
      "Publication reflecting upon the character and proceedings of parliament.",
      "Publication imputing contempt or ridicule of the house.",
    ],
    correct: [2, 3, 4],
  },
  {
    question: "The key elements in a successful annual report are:",
    options: [
      "(A), (B), (C) only",
      "(B), (C), (D) only",
      "(A), (B), (D) only",
      "(C), (D), (E) only",
    ],
    correct: 2,
  },
  {
    question:
      "James Webb Young in his model on how advertising works gave a five-part logical sequence. Identify the correct sequence:",
    options: [
      "(B), (C), (A), (E), (D)",
      "(A), (B), (C), (D), (E)",
      "(C), (E), (A), (B), (D)",
      "(E), (C), (D), (A), (B)",
    ],
    correct: 1,
  },
  {
    question:
      "Find out the correct chronological sequence of the following: (A) Tracts, (B) Newsbooks, (C) Corantos, (D) Diurnals, (E) Newspaper",
    options: [
      "(A), (C), (D), (B), (E)",
      "(B), (C), (D), (E), (A)",
      "(C), (D), (E), (A), (B)",
      "(D), (E), (A), (B), (C)",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Traditional developmental approaches of ‘understanding reality’ is a violation of the very idea of communication. Reason (R): A criticism is that the notion of mass communication itself is oxymoron leading to information oligarchy. In light of the above statements:",
    options: [
      "Both Statement (A) and Statement (R) are correct",
      "Both Statement (A) and Statement (R) are incorrect",
      "Statement (A) is correct but Statement (R) is incorrect",
      "Statement (A) is incorrect but Statement (R) is correct",
    ],
    correct: 0,
  },
  {
    question: "The different stages of Internet development in sequence are:",
    options: [
      "(A), (B), (C), (E), (D)",
      "(B), (C), (D), (E), (A)",
      "(C), (D), (E), (A), (B)",
      "(A), (C), (E), (D), (B)",
    ],
    correct: 3,
  },
  {
    question: "The major guidelines for the coverage of crime news are:",
    options: [
      "(A), (B), (D) only",
      "(B), (C), (D) only",
      "(C), (D), (E) only",
      "(A), (C), (E) only",
    ],
    correct: 0,
  },
  {
    question: "Lower level media management is also known as:",
    options: [
      "Staff management",
      "Branch management",
      "Motivational management",
      "Operative level management",
    ],
    correct: 3,
  },
  {
    question:
      "Cloud computing is a system delivering different types of services over:",
    options: [
      "The internet",
      "The Non-commercial space",
      "Identified networks of telephone",
      "Public corporation’s non-cyber platforms",
    ],
    correct: 0,
  },
  {
    question:
      "The success of public relations in any organisation depends upon:",
    options: [
      "(A), (B), (C) only",
      "(B), (C), (D) only",
      "(C), (D), (E) only",
      "(A), (B), (E) only",
    ],
    correct: 1,
  },
  {
    question: "Copyright is considered as:",
    options: [
      "Public property",
      "Industrial property",
      "Non-substantial property",
      "Non-intellectual property",
    ],
    correct: 1,
  },
  {
    question:
      "Tom Wolfe identified which of the following devices New Journalists borrowed from literary fiction?",
    options: [
      "(A), (B), (E) only",
      "(B), (D), (E) only",
      "(A), (C), (B) only",
      "(A), (C), (D) only",
    ],
    correct: 3,
  },
  {
    question: "The media sufficiency standards were first formulated by:",
    options: ["UNDP", "UNICEF", "UNESCO", "UNHRC"],
    correct: 2,
  },
  {
    question: "The Buddhist approach to communication emphasises:",
    options: [
      "(A), (B), (C) only",
      "(B), (C), (D) only",
      "(C), (D), (E) only",
      "(A), (D), (E) only",
    ],
    correct: 2,
  },
  {
    question: "Section 292 of the Indian Penal Code prescribes punishment for:",
    options: [
      "Copyright infringement",
      "Obscene publication",
      "Contempt of Court",
      "Prejudicing national integration through media",
    ],
    correct: 1,
  },
  {
    question:
      "Which among the following are the best understood phases of ‘Bollywoodization’, according to Rajyadhyaksha?",
    options: [
      "(A), (B), (D) only",
      "(B), (C), (E) only",
      "(A), (C), (D) only",
      "(C), (D), (E) only",
    ],
    correct: 2,
  },
  {
    question: "The correct sequence of basic steps in focus group research is:",
    options: [
      "(D), (C), (B), (A), (E)",
      "(A), (B), (D), (E), (C)",
      "(B), (C), (A), (D), (E)",
      "(E), (D), (C), (B), (A)",
    ],
    correct: 0,
  },
  {
    question:
      "Which among the following films were part of the French New Wave movement?",
    options: [
      "(A), (B), (D) only",
      "(A), (B), (E) only",
      "(B), (C), (E) only",
      "(B), (C), (D) only",
    ],
    correct: 1,
  },
  {
    question:
      "Match List I with List II: List I: 1. The Mother of All Media, 2. Who Said it’s all about the content?, 3. Father of the Advertising Industry, 4. The Whole World in a Single Frame; List II: (A) David Ogilvy, (B) Marshall McLuhan, (C) Sir Winston Churchill, (D) George Bernard Shaw",
    options: [
      "1 – B, 2 – A, 3 – D, 4 – C",
      "1 – C, 2 – A, 3 – D, 4 – B",
      "1 – D, 2 – A, 3 – C, 4 – B",
      "1 – B, 2 – A, 3 – C, 4 – D",
    ],
    correct: 0,
  },
  {
    question:
      "When a third variable, remaining unseen, causes an association of two variables, it is called:",
    options: [
      "Absentee variable",
      "Extraneous variable",
      "Spurious variable",
      "Third order variable",
    ],
    correct: 2,
  },
  {
    question:
      "Assertion (A): The law of copyright is also applied to advertisements in media.\nReason (R): The copyright in the advertising matter belongs to the advertiser, in the absence of any contract otherwise.\nChoose the correct answer:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of A",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of A",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
    ],
    correct: 0,
  },
  {
    question:
      "The theory of cognitive dissonance as related to advertising is based on the premise that:",
    options: [
      "People see what they expect to see",
      "People see what they are offered to see",
      "People see what they are made to see",
      "People see what they don’t get to see",
    ],
    correct: 0,
  },
  {
    question:
      "Match List I with List II:\nList I:\n(A) Soviet Montage\n(B) Neo realism\n(C) French New Wave\n(D) British New Cinema\n\nList II:\n(I) Rome, open city\n(II) Cleo from five to seven\n(III) A Taste of Honey\n(IV) Strike",
    options: [
      "(A) – (I), (B) – (III), (C) – (II), (D) – (IV)",
      "(A) – (III), (B) – (IV), (C) – (II), (D) – (I)",
      "(A) – (IV), (B) – (I), (C) – (II), (D) – (III)",
      "(A) – (IV), (B) – (II), (C) – (I), (D) – (III)",
    ],
    correct: 3,
  },
  {
    question:
      "In Virendra Vs. State of Punjab, Section (3)(A) of the Punjab Special Powers (Press) Act, 1956, was struck down on the grounds of:",
    options: [
      "Procedural unreasonableness",
      "Public interest",
      "Over – regulation",
      "Political ill – will",
    ],
    correct: 0,
  },
  {
    question:
      "Choose the correct sequence of the following trends in American Journalism:\n(A) Pass-on readership\n(B) Penny Press\n(C) New/Yellow Journalism\n(D) Jazz Journalism\n(E) Corporate Journalism",
    options: [
      "(A), (B), (C), (D), (E)",
      "(B), (C), (D), (E), (A)",
      "(C), (D), (E), (A), (B)",
      "(D), (E), (A), (B), (C)",
    ],
    correct: 1,
  },
  {
    question:
      "Match List I with List II:\nList I (Factors of research):\n(A) Tenacity\n(B) Intuition\n(C) Authority\n(D) Science\n\nList II (Description):\n(I) Something is true because it is from a trusted source.\n(II) Truth is found out by repeated objective analysis.\n(III) Something is true because it is self-evident.\n(IV) Something is true because it has been true.",
    options: [
      "(A) – (II), (B) – (III), (C) – (IV), (D) – (I)",
      "(A) – (IV), (B) – (III), (C) – (I), (D) – (II)",
      "(A) – (III), (B) – (I), (C) – (II), (D) – (IV)",
      "(A) – (II), (B) – (IV), (C) – (I), (D) – (III)",
    ],
    correct: 1,
  },
  {
    question: "Adobe InDesign is used in:",
    options: [
      "Radio documentaries",
      "Television drama production",
      "Blogs on Internet",
      "Newspaper",
    ],
    correct: 3,
  },
  {
    question:
      "Who authored the seminal work “The Photo play: A Psychological Study” (1916)?",
    options: [
      "Vachel Lindsay",
      "Siegfried Kracauer",
      "Hugo Munsterberg",
      "Rudolf Arnheim",
    ],
    correct: 2,
  },
  {
    question:
      "Assertion (A): More media means more accessibility as well as an increase in economic concentration in media, besides knowledge gap between rich and poor.\nReason (R): The conventional mass media like newspapers, radio, and television along with electronic and digital options are responsible for expanded reach and options for the consumers.\nChoose the correct answer:",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of A",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of A",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
    ],
    correct: 1,
  },
  {
    question:
      "Select the correct sequence of the following statutes in India:\n(A) The Official Secrets Act\n(B) The Indian Penal Code\n(C) The Working Journalist’s Act\n(D) The Press and Registration of Books Act\n(E) The Right to Information Act",
    options: [
      "(A), (E), (B), (C), (D)",
      "(B), (D), (A), (C), (E)",
      "(C), (E), (B), (D), (A)",
      "(D), (A), (E), (C), (B)",
    ],
    correct: 1,
  },
  {
    question: "The major recommendations of the first press commission were:",
    options: [
      "(A) Abolition of State Trading Corporation",
      "(B) Establishment of a Press Council",
      "(C) Enactment of law for working Journalists",
      "(D) Setting up of a body for newspaper registration",
      "(E) Restricting the government advertisements to electronic media",
    ],
    correct: 1,
  },
  {
    question: "The main uses of the Internet are:",
    options: [
      "(A) Ignoring files",
      "(B) Removing viruses",
      "(C) Interactive gaming",
      "(D) Downloading files",
      "(E) Increased personal health",
    ],
    correct: 3,
  },
  {
    question:
      "In developmental communication, ‘being diagnostic’ will lead to:",
    options: [
      "(A) Diversity of identities",
      "(B) Suppression of identities",
      "(C) Explosion of identities",
      "(D) Fusion of identities",
    ],
    correct: 2,
  },
  {
    question:
      "Which of the following are advantages for corporate public relations practitioners?",
    options: [
      "(A) Individualistic presence",
      "(B) Unavailable for other departments",
      "(C) Team membership",
      "(D) Knowledge of the organisation",
      "(E) Economical to the organisation",
    ],
    correct: 2,
  },
  {
    question: "The relationship between text and social structure is:",
    options: [
      "(A) Mediated",
      "(B) Non-mediated",
      "(C) Confounded",
      "(D) Unilateral",
    ],
    correct: 0,
  },
  {
    question:
      "The social categories perspective of communication is based on a collection of:",
    options: [
      "(A) Ethical views",
      "(B) Religious principles",
      "(C) Political differences",
      "(D) Stereotypes held by social scientists",
    ],
    correct: 3,
  },
  {
    question:
      "In communication, 'The project of the self' is a concept developed by:",
    options: [
      "(A) James W Carey",
      "(B) John B Thompson",
      "(C) Will Right",
      "(D) Arthur Asa Berger",
    ],
    correct: 3,
  },
  {
    question: "Stuart Hall described the television viewers as:",
    options: [
      "(A) Classless audience",
      "(B) Elite consumers",
      "(C) Cultural dopes",
      "(D) Homophilous citizens",
    ],
    correct: 2,
  },
  {
    question:
      "The diffusion model assumes that a proper combination of two things can move individuals from a process of awareness of new technology to adoption of that technology. Which are the two things?",
    options: [
      "(A) Mass media and telecommunication",
      "(B) Non-mediated and inter-personal communication",
      "(C) Pro-innovation mass media and telecommunication",
      "(D) Information technology and mass communication",
    ],
    correct: 2,
  },
  {
    question:
      "In Daniel Lerner's model of social development, what are two functions mass media performs that are conducive to modernization?",
    options: [
      "(A) Mass media spreads literacy and socialization",
      "(B) Mass media aids the formation of markets and causes societal change",
      "(C) Mass media advocates and supports modernization",
      "(D) Mass media disrupts and distorts traditional ideas in society",
    ],
    correct: 1,
  },
  {
    question:
      "What kind of media is defined by Wang and Dissanayake as a communication system embedded in the culture, which existed before the arrival of mass media and still exists as a vital mode of communication?",
    options: [
      "(A) Conventional Media",
      "(B) Oral Media",
      "(C) Folk Media",
      "(D) Community Media",
    ],
    correct: 2,
  },
  {
    question:
      "What is the difference between communicative action and strategic action?",
    options: [
      "(A) Communicative action is interpersonal, strategic action is group communication",
      "(B) Communicative action deals with people, strategic action deals with societies",
      "(C) Communicative action happens before elections, strategic action happens during elections",
      "(D) Communicative action tries to achieve mutual understanding, strategic action tries to achieve success through power",
    ],
    correct: 3,
  },
  {
    question:
      "Events that occur suddenly and fit well with the news organization's schedule are more likely to be reported. Which news value does this explain?",
    options: [
      "(A) Timeliness",
      "(B) Familiarity",
      "(C) Disruption",
      "(D) Consonance",
    ],
    correct: 0,
  },
  {
    question:
      "Which news element is sometimes described as 'The basic news value'?",
    options: [
      "(A) Softness of events",
      "(B) Grapevine",
      "(C) Negativity",
      "(D) Corporate publicity",
    ],
    correct: 2,
  },
  {
    question:
      "The closer the event, the bigger the story. The proximity refers to which one of the following?",
    options: [
      "The reader",
      "The media institution's headquarters",
      "The local politician",
      "The local policeman",
    ],
    correct: 0,
  },
  {
    question:
      "According to an official, who had information on the meeting yesterday, the CEO told the department heads that there would be layoffs. This is an example of what kind of account?",
    options: ["First hand", "Second hand", "Third hand", "Fourth hand"],
    correct: 1,
  },
  {
    question:
      "Which one of the following is beyond the functions of advertising from the advertiser's perspective?",
    options: [
      "Creating a brand image",
      "Persuading people",
      "Selling the product",
      "Providing product and brand information",
    ],
    correct: 3,
  },
  {
    question:
      "In advertising strategy, which one of the following has direct bearing on the creative strategy and the media strategy?",
    options: [
      "The name of the product",
      "The target audience",
      "The logo",
      "The advertising copy",
    ],
    correct: 1,
  },
  {
    question: "When is it said that an advertisement has 'worked'?",
    options: [
      "When the product has been sold.",
      "When it leads to brand building.",
      "When it delivers specific results that meet the stated objectives.",
      "When the company makes profits.",
    ],
    correct: 2,
  },
  {
    question:
      "Traditionally, what is the major objective of most marketing programmes?",
    options: [
      "To remove the competitive brand from the market.",
      "To sell a product, service, or idea.",
      "To persuade people to invest in a product.",
      "To create awareness about the owners of the company.",
    ],
    correct: 1,
  },
  {
    question: "The commercial content in mass media is often referred to as:",
    options: ["Dominant code", "Conflict content", "Noise", "Test information"],
    correct: 2,
  },
  {
    question: "The performance-based advertising is specific to:",
    options: ["Print", "Online", "Radio", "Television"],
    correct: 1,
  },
  {
    question:
      "Which one of the following is the most appropriate function of public relations?",
    options: [
      "It is about organizing media conferences and giving out media releases at staggered intervals.",
      "It is about addressing media issues on a regular basis.",
      "It is maintaining minimum relations on a continuous basis with stakeholders.",
      "It is about handling a crisis situation in an organization after getting clearance from the security agencies.",
    ],
    correct: 2,
  },
  {
    question:
      "Advertising sensitive issues like AIDS and environmental awareness fall under:",
    options: [
      "Vision campaign",
      "Corporate strategy",
      "Industrial promotion",
      "Corporate social responsibility",
    ],
    correct: 3,
  },
  {
    question: "The Indian Civil Law does not recognize:",
    options: [
      "The right to privacy.",
      "Breach of confidence.",
      "Infringement of copyright.",
      "Contractual obligations.",
    ],
    correct: 0,
  },
  {
    question: "The doctrine of privileged documents is related to the law of:",
    options: ["Copyright", "Evidence", "Sedition", "Defamation"],
    correct: 1,
  },
  {
    question: "Originally, the copyright concept came into being under a/an:",
    options: [
      "Statutory Law",
      "Constitutional Law",
      "Common Law",
      "International Law",
    ],
    correct: 2,
  },
  {
    question: "The limitation of action against contempt of courts is of:",
    options: ["Four years", "Three years", "Two years", "One year"],
    correct: 3,
  },
  {
    question:
      "What is the series of decisions involved in delivering the message to the target audience called?",
    options: [
      "Media strategy",
      "Media marketing",
      "Media planning",
      "Media objectives",
    ],
    correct: 2,
  },
  {
    question: "While selecting a product, what is a consumer mostly prone to?",
    options: ["Emotions", "Rational thought", "Habit", "Public opinion"],
    correct: 0,
  },
  {
    question:
      "Creating a perceived difference in the minds of consumers between an organisation's brand vis-a-vis competition is called:",
    options: [
      "Product strategy",
      "Product placement",
      "Product differentiation",
      "Product identification",
    ],
    correct: 2,
  },
  {
    question:
      "What is the process of using promotional tools in a unified way so that communication synergy is achieved, called?",
    options: [
      "Synergetic marketing communication",
      "Integrated marketing communication",
      "Integrated segmentation",
      "Segmented communication",
    ],
    correct: 1,
  },
  {
    question: "Immersive media have emerged from:",
    options: ["Print media", "Online media", "Audio media", "Video media"],
    correct: 1,
  },
  {
    question:
      "Manuel Castells argues that social organisation of global society is organised as:",
    options: ["Groups", "Communities", "Networks", "Societies"],
    correct: 2,
  },
  {
    question: "Web 2.0 applications allow users to become:",
    options: [
      "Autonomous producers",
      "Copycats",
      "Vocal offenders",
      "Responsible hackers",
    ],
    correct: 0,
  },
  {
    question: "Optical storage technology uses light in the form of:",
    options: ["LASER", "Gamma Rays", "X-Rays", "RADAR"],
    correct: 0,
  },
  {
    question:
      "In which one of the following theories are the attributes of the whole not deducible from the analysis of the parts of an advertisement in isolation?",
    options: [
      "Gibson Theory",
      "Gestalt Theory",
      "Locke's Theory",
      "Stalagmite Theory",
    ],
    correct: 1,
  },
  {
    question:
      "Which one of the following film directors was part of the Dogme 95 filmmaking movement started in 1995?",
    options: [
      "Lars von Trier",
      "Martin Scorsese",
      "Jafar Panahi",
      "Shohei Imamura",
    ],
    correct: 0,
  },
  {
    question:
      "The critically acclaimed movie 'Black', which got many national awards, was directed by:",
    options: [
      "Madhur Bhandarkar",
      "Ashutosh Gowarikar",
      "Sanjay Leela Bhansali",
      "Hrishikesh Mukherjee",
    ],
    correct: 2,
  },
  {
    question:
      "Which film of Shyam Benegal is broadly based on the life of well-known Marathi stage and film actress of the 1940s, Hansa Wadkar?",
    options: ["Zubeidaa", "Sardari Begum", "Susman", "Bhumika"],
    correct: 3,
  },
  {
    question:
      "Measurement in mass media, particularly in terms of space and time, is applied at:",
    options: [
      "The nominal level",
      "The ordinal level",
      "The interval level",
      "The ratio level",
    ],
    correct: 3,
  },
  {
    question:
      "A survey that attempts to explain why certain conditions exist is known as:",
    options: [
      "Conditional Survey",
      "Situational Survey",
      "Analytical Survey",
      "Predictional Survey",
    ],
    correct: 2,
  },
  {
    question:
      "When a case study researcher prepares a document containing the procedural details before conducting a pilot study, the document is called:",
    options: ["Study protocol", "Data design", "Research frame", "Idea book"],
    correct: 0,
  },
  {
    question: "Calculating sampling error is mostly appropriate with:",
    options: [
      "Non-probability samples",
      "Probability samples",
      "Limited population",
      "Large population",
    ],
    correct: 1,
  },
  {
    question:
      "From the sales angle, a good and effective advertisement should:",
    options: [
      "Disregard correctness, Produce disaffection, Create prejudice against competitors",
      "Produce disaffection, Create prejudice against competitors, Arouse curiosity",
      "Create prejudice against competitors, Attract attention, Arouse curiosity",
      "Attract attention, Arouse curiosity, Transmit a congenial message",
    ],
    correct: 3,
  },
  {
    question:
      "A crime story consists of the following elements:\n1. A description of what happened.\n2. The offence police believe the suspect has committed.\n3. The name, age and address of the people in the locality.\n4. The extent of media coverage.\n5. The name and age of the suspect.\nChoose the correct answer from the options below.",
    options: [
      "1, 3 and 4 only",
      "1, 2 and 5 only",
      "2, 3 and 4 only",
      "3, 4 and 5 only",
    ],
    correct: 1,
  },
  {
    question:
      "In advertising, the credibility of the source is judged on two dimensions. They are:\n1. Parallel dimension\n2. Cognitive dimension\n3. Access dimension\n4. Affective dimension\nChoose the correct answer from the options below.",
    options: ["1 and 2 only", "2 and 4 only", "2 and 3 only", "1 and 3 only"],
    correct: 1,
  },
  {
    question:
      "Two perspectives that influenced propaganda theory in the 1930s are:\n1. Mass society view\n2. Behaviorism\n3. Freudianism\n4. Media aggression\nChoose the correct answer from the options below.",
    options: ["1 and 2 only", "2 and 3 only", "3 and 4 only", "1 and 4 only"],
    correct: 0,
  },
  {
    question:
      "What are the main components of public relations?\n1. Media relations\n2. Publicity\n3. Community relations\n4. Psychological service\n5. Financial management\nChoose the correct answer from the options below.",
    options: [
      "1, 4 and 5 only",
      "1, 2 and 3 only",
      "1, 3 and 4 only",
      "2, 3 and 4 only",
    ],
    correct: 1,
  },
  {
    question:
      "What is the importance of research in public relations?\n1. To formulate strategy.\n2. To maintain discipline among employees.\n3. To prevent crises.\n4. To compete with others.\n5. To measure success.\nChoose the correct answer from the options below.",
    options: [
      "1, 3 and 5 only",
      "2, 3 and 4 only",
      "1, 3 and 4 only",
      "3, 4 and 5 only",
    ],
    correct: 0,
  },
  {
    question:
      "In what way is public relations similar to journalism?\n1. They interact with people.\n2. They counsel on management issues.\n3. They gather information from different sources.\n4. Their objective is to change people's attitudes.\n5. They practice investigative journalism.\nChoose the correct answer from the options below.",
    options: [
      "1, 2 and 4 only",
      "1, 3 and 4 only",
      "2, 3 and 5 only",
      "1, 4 and 5 only",
    ],
    correct: 1,
  },
  {
    question:
      "The layout activity in a modern print newspaper involves the following elements:\n1. Formal balance\n2. Contrast\n3. Gaze-motion\n4. Equal size\n5. Grid\nChoose the correct answer from the options below.",
    options: [
      "1, 2 and 3 only",
      "2, 3 and 4 only",
      "2, 3 and 5 only",
      "3, 4 and 5 only",
    ],
    correct: 0,
  },
  {
    question:
      "Social change training model in developmental communication has its origins from the following:\n1. Western social psychology\n2. Asian theories of communication\n3. The Chinese model of socialism\n4. Latin American educational communication\nChoose the correct answer from the options below.",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1 and 4 only"],
    correct: 3,
  },
  {
    question:
      "Simon Cutlip listed public relations assistance to marketing functions. They are:\n1. Arranging for public appearances of marketing spokespersons\n2. Developing distribution channels to sell the products\n3. Probing public opinion in market areas\n4. Assisting the company in price fixation of the products\n5. Assisting programs concerning consumerism\nChoose the correct answer from the options below.",
    options: [
      "1, 2 and 3 only",
      "1, 3 and 5 only",
      "2, 3 and 4 only",
      "3, 4 and 5 only",
    ],
    correct: 1,
  },
  {
    question:
      "William Hachten proposed the following normative theories that are spread all over the world: 1. Western, 2. Revolutionary, 3. Social responsibility, 4. Democratic participant, 5. Authoritarian. Choose the correct answer from the options given below:",
    options: [
      "1, 2 and 3 only",
      "2, 3 and 4 only",
      "1, 2 and 5 only",
      "3, 4 and 5 only",
    ],
    correct: 2,
  },
  {
    question:
      "International communication theories are drawn from the following conceptual frameworks: 1. Theories of representation, 2. Theories of rhetorics, 3. Reception theories, 4. Theories of identity, 5. Theories of criticism. Choose the correct answer from the options given below:",
    options: [
      "1, 3 and 4 only",
      "2, 3 and 5 only",
      "3, 4 and 5 only",
      "1, 4 and 5 only",
    ],
    correct: 0,
  },
  {
    question:
      "Development of underdevelopment is described as a: 1. Capitalist expansion, 2. Zero-sum proposition, 3. Core-periphery relations, 4. Political compulsion, 5. Ideological divide, 6. By-product of media dependency. Choose the correct answer from the options given below:",
    options: [
      "1, 2 and 4 only",
      "1, 3 and 5 only",
      "1, 2 and 3 only",
      "4, 5 and 6 only",
    ],
    correct: 2,
  },
  {
    question:
      "The dominant paradigm of development criticised for: 1. it was pro-west, 2. it was ethnocentric, 3. cultural imperialism, 4. focus on agriculture, 5. non-industrial development. Choose the correct answer from the options given below:",
    options: [
      "1, 4 and 5 only",
      "1, 2 and 3 only",
      "2, 3 and 4 only",
      "4, 5 and 6 only",
    ],
    correct: 1,
  },
  {
    question:
      "Which of the following are true requirements for a newspaper? 1. It must be an irregular publication, 2. It can be issued periodically, 3. It must contain only news, 4. Such news must be public in character, 5. It can contain comments on public news. Choose the correct answer from the options given below:",
    options: [
      "1, 2 and 4 only",
      "1, 4 and 5 only",
      "2, 4 and 5 only",
      "3, 4 and 5 only",
    ],
    correct: 2,
  },
  {
    question:
      "The amount of damages in the cases involving defamation depends upon factors such as: 1. Social position of the plaintiff, 2. Nature of imputation, 3. Mode of publication, 4. Unmitigating circumstances, 5. Third-party intervention, 6. Discretion of judicial authority. Choose the correct answer from the options given below:",
    options: [
      "1, 3 and 4 only",
      "1, 4 and 6 only",
      "2, 5 and 6 only",
      "1, 2 and 3 only",
    ],
    correct: 3,
  },
  {
    question:
      "Which of the following are to be considered while editing a news copy? 1. Group nouns should always be considered as singular, 2. Use capital letters for business titles, 3. Be consistent in spelling, 4. Keep paragraphs short, 5. Write long headlines, 6. Use punctuation marks liberally in headlines. Choose the correct answer from the options given below:",
    options: [
      "1, 2 and 5 only",
      "1, 3 and 4 only",
      "2, 5 and 6 only",
      "4, 5 and 6 only",
    ],
    correct: 1,
  },
  {
    question:
      "Which of the following are the characteristic features of the positive paradigm in research? 1. Uses quantification, 2. Mostly employed in natural sciences, 3. Uses hypotheses, 4. Does not depend upon quantification, 5. Uses subjective measures, 6. Highly literary. Choose the correct answer from the options given below:",
    options: [
      "1, 5 and 6 only",
      "2, 3 and 4 only",
      "4, 5 and 6 only",
      "1, 2 and 3 only",
    ],
    correct: 3,
  },
  {
    question:
      "Film makers of the Soviet Montage Movement used which of the following methods in their work? 1. Tatami shots, 2. Tonal editing, 3. Over-tonal editing, 4. Intellectual editing, 5. Tachistoscopic displays. Choose the correct answer from the options given below:",
    options: [
      "1, 2 and 5 only",
      "2, 3 and 4 only",
      "2, 3 and 5 only",
      "1, 2 and 4 only",
    ],
    correct: 3,
  },
  {
    question:
      "Techniques which are commonly used in continuity editing are: 1. Freeze frames, 2. 180° Rule, 3. Jump cutting, 4. Match cutting, 5. Eyeline matching, 6. Symbolic inserts. Choose the correct answer from the options given below:",
    options: [
      "1, 2 and 4 only",
      "2, 5 and 6 only",
      "1, 4 and 6 only",
      "2, 4 and 5 only",
    ],
    correct: 3,
  },
  {
    question:
      "Media texts can be used for:\n1. Solace\n2. Identification\n3. Escape\n4. Voluntary acquisition\n5. Unpredictable statements\nChoose the correct answer from the options given below:",
    options: [
      "1, 2 and 3 only",
      "2, 3 and 4 only",
      "3, 4 and 5 only",
      "1, 4 and 5 only",
    ],
    correct: 0,
  },
  {
    question:
      "Which of the following are the rules of composition in photography?\n1. Rule of Thirds\n2. Sunny 16 Rule\n3. Golden Ratio\n4. Rule of Odds\n5. 30 Degree Rule\n6. Looney II Rule\nChoose the correct answer from the options given below:",
    options: [
      "1, 3 and 4 only",
      "1, 2 and 3 only",
      "2, 4 and 6 only",
      "1, 5 and 6 only",
    ],
    correct: 0,
  },
  {
    question:
      "Which of the following do not require the application of confidentiality in media research?\n1. Private information given by participants.\n2. Health information of participants.\n3. Observation in public places.\n4. Activities in public.\n5. Information in public records.\n6. Promised anonymity.",
    options: [
      "1, 2 and 6 only",
      "3, 5 and 6 only",
      "3, 4 and 5 only",
      "1, 4 and 5 only",
    ],
    correct: 2,
  },
  {
    question:
      "Which of the following are the main stages in public relations research?\n1. Issues of forecasting\n2. Knowing the public\n3. Planning media use\n4. Consolidation of power\n5. Employee loyalty",
    options: [
      "1, 3 and 4 only",
      "1, 2 and 3 only",
      "2, 4 and 5 only",
      "3, 4 and 5 only",
    ],
    correct: 1,
  },
  {
    question:
      "In a print media organisation, the staff functions include:\n1. finance\n2. legal\n3. personnel\n4. public relations\n5. production\n6. marketing of advertised products",
    options: [
      "1, 4, 5 and 6 only",
      "2, 3, 4 and 5 only",
      "1, 3, 4 and 6 only",
      "2, 4, 5 and 6 only",
    ],
    correct: 0,
  },
  {
    question:
      "Match list I with List II.\nList I (Theory)\nA. Cultural Synchronisation\nB. Cultural Imperialism\nC. Corporate Colonisation\nD. Hybridisation\nList II (Author)\nI. Jurgen Habermas\nII. W Rowe and V Shelling\nIII. Cees Hamelink\nIV. J Tomlinson",
    options: [
      "A-IV, B-I, C-III, D-II",
      "A-III, B-IV, C-II, D-I",
      "A-IV, B-II, C-I, D-III",
      "A-I, B-III, C-IV, D-II",
    ],
    correct: 0,
  },
  {
    question:
      "Match list I with List II.\nList I (Newspaper)\nA. The Times of India\nB. The (Madras) Mail\nC. The Leader\nD. Deccan Herald\nList II (Editor)\nI. Pothan Joseph\nII. CY Chintamani\nIII. Robert Knight\nIV. Sir Charles Lawson",
    options: [
      "A-III, B-IV, C-II, D-I",
      "A-I, B-II, C-III, D-IV",
      "A-II, B-III, C-IV, D-I",
      "A-IV, B-III, C-II, D-I",
    ],
    correct: 0,
  },
  {
    question:
      "Match list I with List II.\nList I (Directors)\nA. Stanley Kubrick\nB. Vittorio De Sica\nC. Jean Luc Godard\nD. Andrei Tarkovsky\nList II (Films)\nI. The Sacrifice\nII. My Life to Live\nIII. Shoeshine\nIV. Lolita",
    options: [
      "A-IV, B-III, C-II, D-I",
      "A-I, B-IV, C-III, D-II",
      "A-II, B-I, C-IV, D-III",
      "A-III, B-II, C-IV, D-I",
    ],
    correct: 0,
  },
  {
    question:
      "Match list I with List II.\nList I (Theory)\nA. Inoculation Theory\nB. Social Judgement Theory\nC. Cognitive Dissonance Theory\nD. Cognitive Consistency Theory\nList II (Proponent)\nI. Leon Festinger\nII. Robert Abelson\nIII. William McGuire\nIV. Muzafer Sherif",
    options: [
      "A-III, B-II, C-I, D-IV",
      "A-I, B-III, C-II, D-IV",
      "A-II, B-I, C-IV, D-III",
      "A-IV, B-III, C-II, D-I",
    ],
    correct: 0,
  },
  {
    question:
      "Match list I with List II.\nList I (Technique)\nA. Bounce Lighting\nB. Accented Cinema\nC. Camera Style\nD. Distancing Effect\nList II (Proponent)\nI. Hamid Naficy\nII. Subrata Mitra\nIII. Bertolt Brecht\nIV. Alexandre Astruc",
    options: [
      "A-I, B-II, C-IV, D-III",
      "A-II, B-I, C-III, D-IV",
      "A-IV, B-III, C-I, D-II",
      "A-III, B-IV, C-II, D-I",
    ],
    correct: 0,
  },
  {
    question:
      "Match list I with List II.\nList I (Element)\nA. Cartoon\nB. Logo\nC. Tear-out\nD. Supplements\nList II (Description)\nI. Special content pages\nII. To liven up the pages\nIII. To identify particular sections\nIV. For future reference",
    options: [
      "A-II, B-IV, C-I, D-III",
      "A-I, B-II, C-IV, D-III",
      "A-III, B-I, C-II, D-IV",
      "A-IV, B-III, C-I, D-II",
    ],
    correct: 0,
  },
  {
    question:
      "Match list I with List II.\nList I (Element) List II (Description)\nA. Puffery — I. Public Relations\nB. Pseudo-Event — II. Advertising\nC. Name-calling — III. Informal communication\nD. Grapevine — IV. Propaganda",
    options: [
      "A-II, B-I, C-IV, D-III",
      "A-I, B-II, C-III, D-IV",
      "A-III, B-IV, C-I, D-II",
      "A-IV, B-III, C-II, D-I",
    ],
    correct: 0,
  },
  {
    question:
      "Match list I with List II.\nList I (Graphs) List II (Description)\nA. Line Graph — I. Presents a frequency distribution\nB. Histograph — II. Represents component parts\nC. Lorenz Curve — III. Shows changes in data relationship over a period\nD. Pie-Chart — IV. Uses two quantitative variables",
    options: [
      "A-III, B-I, C-IV, D-II",
      "A-I, B-II, C-III, D-IV",
      "A-II, B-IV, C-I, D-III",
      "A-IV, B-III, C-II, D-I",
    ],
    correct: 0,
  },
  {
    question:
      "Match list I with List II.\nList I (First Newspaper Publisher) List II (Country)\nA. Egenolph Emmel — I. India\nB. Thomas Archer — II. The United States\nC. Benjamin Harris — III. Germany\nD. James Augustus Hicky — IV. England",
    options: [
      "A-III, B-IV, C-II, D-I",
      "A-IV, B-II, C-I, D-III",
      "A-I, B-III, C-IV, D-II",
      "A-II, B-I, C-III, D-IV",
    ],
    correct: 0,
  },
  {
    question:
      "Match list I with List II.\nList I (Newspaper) List II (Country)\nA. Der Spiegel — I. Russia\nB. Pravo — II. Australia\nC. National Observer — III. The United Kingdom\nD. The Economist — IV. Germany",
    options: [
      "A-IV, B-I, C-II, D-III",
      "A-II, B-III, C-I, D-IV",
      "A-III, B-IV, C-II, D-I",
      "A-I, B-II, C-III, D-IV",
    ],
    correct: 0,
  },
  {
    question:
      "Arrange the following films of Girish Kasaravalli in the correct chronological order.\nA. Koormavathara\nB. Ghattashraddha\nC. Dweepa\nD. Gulabi Talkies\nE. Mane",
    options: [
      "B, A, C, D, E",
      "E, D, C, B, A",
      "A, C, D, E, B",
      "C, A, B, D, E",
    ],
    correct: 0,
  },
  {
    question:
      "Arrange the following books as per the correct chronological order of their publication.\nA. The Achieving Society\nB. Mass Media and National Development\nC. The Process of Economic Growth\nD. The Passing of Traditional Society",
    options: ["C, D, A, B", "A, B, C, D", "B, A, D, C", "D, C, B, A"],
    correct: 0,
  },
  {
    question:
      "Arrange the following organisations according to the chronological order of their formation.\nA. Indian Language Newspapers Association\nB. Advertising Agencies Association\nC. India and Eastern Newspaper Society\nD. All-India Newspaper Editors Conference",
    options: ["C, D, A, B", "A, D, C, B", "C, B, A, D", "D, A, B, C"],
    correct: 0,
  },
  {
    question:
      "Write the correct sequence of the following media events.\nA. First Amendment to the US Constitution\nB. Virginia Bill of Rights\nC. Licensing Act\nD. Areopagitica",
    options: ["D, C, B, A", "A, D, C, B", "B, A, C, D", "C, D, A, B"],
    correct: 0,
  },
  {
    question:
      "Arrange in the correct chronological order of the following publications of the pre-independence era.\nA. Free Press Journal\nB. Swarajya\nC. Forward\nD. New India",
    options: ["D, C, B, A", "C, A, B, D", "A, D, C, B", "B, A, C, D"],
    correct: 0,
  },
  {
    question:
      "Identify the correct chronological sequence of following Presidents of Indian Newspaper Society.\nA. Ashish Bagga\nB. Kundan Vyas\nC. G. Narasimhan\nD. Upendra Acharya",
    options: ["A, D, C, B", "B, C, D, A", "A, B, C, D", "C, D, B, A"],
    correct: 0,
  },
  {
    question:
      "Find out the correct sequence of media research phases as suggested by Wimmer and Dominick.\nA. Medium\nB. Media effects\nC. Media improvement\nD. Uses and users of medium",
    options: ["A, D, B, C", "A, B, D, C", "A, C, D, B", "D, B, A, C"],
    correct: 0,
  },
  {
    question:
      "Identify the logical sequence of developmental phases.\nA. Assessing actions\nB. Planning procedure\nC. Identifying problems\nD. Goal setting",
    options: ["C, D, B, A", "A, D, B, C", "B, C, A, D", "D, A, C, B"],
    correct: 0,
  },
  {
    question:
      "Identify the correct chronological order of the following transborder broadcasting corporations.\nA. Voice of America\nB. BBC World Services\nC. All India Radio\nD. Voice of Russia",
    options: ["B, C, D, A", "D, A, B, C", "C, D, B, A", "A, D, B, C"],
    correct: 0,
  },
  {
    question:
      "Identify the sequence of elements in the Johari Window.\nA. Blind\nB. Hidden\nC. Unknown\nD. Open",
    options: ["D, A, B, C", "B, C, A, D", "A, C, D, B", "C, B, A, D"],
    correct: 0,
  },
  {
    question:
      "Given below are two statements, one is labelled as Assertion (A) and the other labelled as Reason (R).\nAssertion (A): The Latin American view of developmental communication was not being in the world.\nReason (R): Their concept of developmental communication introduced a high level of epistemology aimed at understanding social reality.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true, but R is not the correct explanation of A",
      "A is true, but R is false",
      "A is false, but R is true",
    ],
    correct: 3,
  },
  {
    question:
      "Given below are two statements, one is labelled as Assertion (A) and other one labelled as Reason (R). \n\nAssertion (A): Media grammar represents one of the basic foundations of media studies.\nReason (R): An understanding of media is dependent upon an understanding of the unique presentation of messages of each medium.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true, but R is not the correct explanation of A",
      "A is true, but R is false",
      "A is false, but R is true",
    ],
    correct: 0,
  },
  {
    question:
      "Given below are two statements, one is labelled as Assertion (A) and other one labelled as Reason (R). \n\nAssertion (A): Media oligopoly is a reality of the twenty-first century.\nReason (R): Technology induced hybridisation of analogue and digital media is consolidated into the control of a very few rich and powerful owners across the globe.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true, but R is not the correct explanation of A",
      "A is true, but R is false",
      "A is false, but R is true",
    ],
    correct: 0,
  },
  {
    question:
      "Given below are two statements, one is labelled as Assertion (A) and other one labelled as Reason (R). \n\nAssertion (A): Any feminist media eruption produces new theoretical frameworks in media studies.\nReason (R): Feminist structural narratives have survived despite post-feminist arguments aimed at the patriarchal backlash.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true, but R is not the correct explanation of A",
      "A is true, but R is false",
      "A is false, but R is true",
    ],
    correct: 0,
  },
  {
    question:
      "Given below are two statements, one is labelled as Assertion (A) and other one labelled as Reason (R). \n\nAssertion (A): Freedom of Speech and Expression should not be extended to Indian companies in the light of constitutional mandate.\nReason (R): The Indian Constitution does not recognize the companies as citizens and any proposal to provide such freedom needs a constitutional amendment.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true, but R is not the correct explanation of A",
      "A is true, but R is false",
      "A is false, but R is true",
    ],
    correct: 0,
  },
  {
    question:
      "The participatory use of media for development is characterised by:",
    options: [
      "Centrally controlled programmes",
      "Decentralised programmes",
      "Production by specialists",
      "Single source many receivers",
    ],
    correct: 1,
  },
  {
    question: "The main postulates of cultivation theory are:",
    options: [
      "Media consumers unknowingly absorb dominant symbols, images, and messages of media; Television cultivates among viewers common beliefs about the world; Media do not reflect non-mediated reality",
      "Mediated stereotypes do not matter; There are no variables in mediated cultivation; Media do not cultivate anything among TV viewers",
      "Television cultivates among viewers; Arbitrary control of content; Absence of non-mediated reality",
      "None of the above",
    ],
    correct: 0,
  },
  {
    question: "The three main measures applied in news effect research are:",
    options: [
      "The extent of audience research; Audience recall of news content; Unilateral content production",
      "Audience recall of news content; Audience comprehension of particular items of news; The extent of audience research",
      "Audience comprehension of particular items of news; Elimination of audience-specific content; Extent of research",
      "All of the above",
    ],
    correct: 1,
  },
  {
    question:
      "Which of the following are the effects of digital technology on print media production?",
    options: [
      "Expansion of single edition newspapers; Emphasis on mechanical creativity; Large-sized newspapers being preferred",
      "Extensive use of colour in printing; Emergence of new concepts of designing; Reduction in production time",
      "Reduction in production time; Large-sized newspapers being preferred; Mechanical creativity emphasized",
      "None of the above",
    ],
    correct: 1,
  },
  {
    question:
      "According to Melvin Mancher, objectivity in news reports promotes:",
    options: [
      "Active journalism",
      "Advocacy journalism",
      "Attachment journalism",
      "Passive Journalism",
    ],
    correct: 3,
  },
  {
    question:
      "Identify the correct sequence of diffusion of innovation, according to EM Rogers:",
    options: [
      "Innovation, time, social system, communication channels",
      "Innovation, social system, time, communication channels",
      "Innovation, communication channel, time, social system",
      "Communication channel, time, innovation, social system",
    ],
    correct: 0,
  },
  {
    question:
      "A sub-editor is often called the best critic of a reporter because of:",
    options: [
      "Personal rivalry",
      "Space issues",
      "The factor of brevity",
      "Making the story simple",
      "Market pressure",
      "Invisibility of work",
    ],
    correct: [1, 2, 3],
  },
  {
    question:
      "Under the ordinary law, any newspaper with a particular site is considered as a:",
    options: ["Liability", "Property", "Public obligation", "Public good"],
    correct: 1,
  },
  {
    question: "The impact of new technology on mass media has resulted in:",
    options: [
      "Fragmented audience",
      "Problems of audience measurement",
      "Higher advertising revenue",
      "High readership of newspaper worldwide",
      "Surveillance of audience",
      "Sustainability of privacy",
    ],
    correct: [0, 1, 4],
  },
  {
    question:
      "The chronology of intertitles in Sergei Eisenstein's film 'Strike (1924)' is:",
    options: [
      "The factory stands idle, All quiet at the factory, The immediate cause of strike, The strike is protracted, Engineering massacre, Slaughter",
      "All quiet at the factory, The immediate cause of strike, The factory stands idle, The strike is protracted, Engineering massacre, Slaughter",
      "All quiet at the factory, The immediate cause of strike, The factory stands idle, The strike is protracted, Engineering massacre, Slaughter",
      "The factory stands idle, The immediate cause of strike, The strike is protracted, Engineering massacre, Slaughter, All quiet at the factory",
    ],
    correct: 2,
  },
  {
    question:
      "A stance that a company adopts to position itself amongst the target public is called corporate:",
    options: ["Mix", "Plank", "Identity", "Proximity"],
    correct: 2,
  },
  {
    question:
      "How does Laura Marks describe the trend of digitally perfect images being turned dirty again in her work Touch: Sensuous Theory and Multisensory Media (2002)?",
    options: [
      "Analogue nostalgia",
      "Visuality",
      "Affective framing",
      "Analogue visuality",
    ],
    correct: 0,
  },
  {
    question: "Headlines writers are described as:",
    options: [
      "Brevity experts",
      "Grammarians",
      "Lexicographers",
      "Proof readers",
    ],
    correct: 0,
  },
  {
    question:
      "Which organization promotes social development and community affairs as part of CSR?",
    options: [
      "The Confederation of Indian Industry",
      "The Computer Society of India",
      "National Association of Software and Service Companies",
      "Indian Advertisers Association",
    ],
    correct: 0,
  },
  {
    question: "The term Uses and Gratifications implies that:",
    options: [
      "Audiences are passive",
      "Audiences are active",
      "Audiences are neutral",
      "Audiences are unwilling to expose themselves to media",
      "Audiences Willingly expose themselves to media",
      "Audience experience satisfaction by using media",
    ],
    correct: [1, 4, 5],
  },
  {
    question: "Which of the following are the steps in content analysis?",
    options: [
      "Formulation of research question",
      "Defining the universe",
      "Defining the discourses",
      "Identifying literary elements",
      "Selecting units of analysis",
      "Monitoring respondents",
    ],
    correct: [0, 1, 4],
  },
  {
    question:
      "G Comstock's transmission model of news learning involves the following stages. Identify the correct sequence.",
    options: [
      "Display - processing - exposure - recall comprehension learning",
      "Learning comprehension - processing recall display - exposure recall",
      "Exposure display - processing comprehension - learning",
      "Display - exposure processing - comprehension recall - learning",
    ],
    correct: 2,
  },
  {
    question:
      "The protection of qualified privilege under the Indian Constitution is of no avail:",
    options: [
      "If the report is untrue",
      "Even if the report is not a perverted form of the debate or speech",
      "If the report is a perverted form of the debate or speech",
      "If the report is actuated by malice",
      "If the report is substantially true",
    ],
    correct: [0, 2, 3],
  },
  {
    question:
      "In which of the following countries, lobbying was started as a legal public relations activity during the mid-twentieth century?",
    options: ["The United Kingdom", "The United States", "Germany", "France"],
    correct: 1,
  },
  {
    question:
      "Which form of advertising is heavily used to introduce a new product?",
    options: [
      "Public service advertising",
      "Reminder advertising",
      "Social advertising",
      "Informative advertising",
    ],
    correct: 3,
  },
  {
    question: "Match the following theories with their advocates:",
    options: [
      "Asian communication theory - Herbert Marcuse",
      "Cybernetic theory - C.S. Peirce",
      "Critical theory - Norbert Weiner",
      "Semiotic theory - Shelton Gunaratne",
    ],
    correct: [3, 1, 2, 0],
  },
  {
    question:
      "Responsibility of a news reporter reflects in the news story when it is:",
    options: ["Balanced", "Biased", "Redundant", "Inaccurate"],
    correct: 0,
  },
  {
    question:
      "Match the following advertising agencies with their headquarters:",
    options: [
      "WPP Group - Tokyo",
      "Omnicom - Paris",
      "Bcom 3 - New York",
      "Dentsu - London",
    ],
    correct: [3, 2, 1, 0],
  },
  {
    question:
      "For John Pavlik, the correct sequence of media effects research is:",
    options: [
      "Film effects, radio effects, television effects, internet effects",
      "Radio effects, film effects, television effects, internet effects",
      "Radio effects, television effects, film effects, internet effects",
      "Film effects, television effects, radio effects, internet effects",
    ],
    correct: 0,
  },
  {
    question:
      "The communitarian model of development considers the factors of:",
    options: [
      "Religious affiliation",
      "Geographical location",
      "Cultural historicity",
      "High level consumerism",
      "Acceptance of westernization",
      "Support to information monopoly",
    ],
    correct: [0, 1, 2],
  },
  {
    question:
      "The doctrine of direct impact was applied by the Supreme Court of India in the case of:",
    options: [
      "Virendra Vs State of Punjab",
      "Narendra Vs Union of India",
      "Maneka Gandhi Vs Union of India",
      "Babulal Vs State of Maharashtra",
    ],
    correct: 2,
  },
  {
    question:
      "The three functions of the press, identified by Harold D. Lasswell, are:",
    options: [
      "Surveillance",
      "Correlation",
      "Entertainment",
      "Education",
      "Transmission",
    ],
    correct: [0, 1, 4],
  },
  {
    question:
      "Match the radio stations with the type of broadcasting they have employed:",
    options: [
      "Pandora - Cable radio",
      "XM - FM radio",
      "CRW - Satellite radio",
      "Bloomberg - Internet radio",
    ],
    correct: [2, 3, 1, 0],
  },
  {
    question: "Auditory tests are used to evaluate:",
    options: [
      "Recurrents of music",
      "Documentaries",
      "Commercials",
      "Television ratings",
    ],
    correct: 2,
  },
  {
    question:
      "When media consumers search for knowledge as a motive, the need becomes:",
    options: ["Speculative", "Selective", "Affective", "Cognitive"],
    correct: 3,
  },
  {
    question:
      "Which one of the following refers to the percentage of how often a keyword appears in relation to the total words on that webpage?",
    options: [
      "Keyword phrase",
      "Keyword stuffing",
      "Keyword graph",
      "Keyword density",
    ],
    correct: 3,
  },
  {
    question: "New media have facilitated a type of communication which is:",
    options: ["Abstract", "Conceptual", "Non-associational", "Interactive"],
    correct: 3,
  },
  {
    question:
      "When a variable at the nominal level is changed so that it can be amenable to higher order statistics, it is known as:",
    options: [
      "Dummy variable",
      "Fill-in variable",
      "Equivalent variable",
      "Distributive variable",
    ],
    correct: 0,
  },
  {
    question: "Truth is promoted in Public Relations as a model of:",
    options: [
      "Public Information",
      "Corporate Lobbying",
      "Corporate Profit",
      "Corporate Rivalry",
    ],
    correct: 0,
  },
  {
    question: "Individual differences theory laid the foundation for:",
    options: [
      "Stimulus-response theory",
      "Media violence theory",
      "Media rejection perspective",
      "Psycho dynamic model",
    ],
    correct: 3,
  },
  {
    question: "In media research, replication is done to confirm:",
    options: [
      "Removal of hypotheses",
      "Duplication",
      "Incongruity",
      "Scientific fact",
    ],
    correct: 1,
  },
  {
    question: "Match the following film-makers with their films:",
    options: [
      "Laura Mulvey | The Tempest (1978)",
      "Ken Loach | High Hopes (1988)",
      "Mike Leigh | Raining Stones (1993)",
      "Derek Jarman | The Riddles of Sphinx (1977)",
    ],
    correct: 0,
  },
  {
    question: "What are the characteristics of scientific method of research?",
    options: [
      "Empirical",
      "Predictive",
      "Cumulative",
      "Emphasis on single source",
      "Legitimate source",
    ],
    correct: 2,
  },
  {
    question: "'Toy Story' is the first animation film created by:",
    options: ["Disney Studio", "Lucas film", "Pixar", "Apple"],
    correct: 2,
  },
  {
    question:
      "Out of the following, which are the Gestalt principles that aid in explaining visual perception?",
    options: [
      "Figure ground separation",
      "Eye movement",
      "Grouping by proximity and similarity",
      "Information zones",
    ],
    correct: 2,
  },
  {
    question: "The sequence of formal properties at interval level is:",
    options: [
      "Substitution, association symmetry, communication, uniqueness",
      "Uniqueness, symmetry, commutation substitution, association",
      "Symmetry, association, commutation, substitution, uniqueness",
      "Association, substitution, symmetry, communication, uniqueness",
    ],
    correct: 2,
  },
  {
    question:
      "Cultural imperialism perspectives emerged from the tradition of:",
    options: [
      "ago School",
      "Critical political economy",
      "Participatory development",
      "Annenberg School",
    ],
    correct: 1,
  },
  {
    question:
      "Given below are two statements one is labelled as Assertion (A) and the other is labelled as Reason(R):\nAssertion (A): Magazine publication has an uncertain future\nReason (R): Audience fragmentation is due to inter-media competition prompted by marketing strategy",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true",
    ],
    correct: 0,
  },
  {
    question:
      "Respondents' reactions to experimental conditions are described as:",
    options: [
      "Experimental orientation",
      "Experimental mortality",
      "Demand characteristics",
      "Demand diversification",
    ],
    correct: 2,
  },
  {
    question:
      "Given below are two statements one is labelled as Assertion (A) and the other is labelled as Reason(R):\nAssertion (A): The constitutionality of any legislation limiting the media freedom in India cannot be challenged\nReason (R): In their passion to create a welfare state, the governments tend to ignore the media's right to freedom",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true",
    ],
    correct: 3,
  },
  {
    question: "What is the aspect ratio of IMAX motion picture film format?",
    options: ["1.43:1", "1.77:1", "1.33:1", "1.66:1"],
    correct: 0,
  },
  {
    question:
      "Which of the following procedures are needed to guard against external invalidity in sample selection?",
    options: [
      "Use of random sample",
      "Use of heterogeneous samples",
      "Avoiding replication of study",
      "Selection of a representative sample",
      "Use of homogeneous samples",
      "Ignoring sampling errors",
    ],
    correct: 2,
  },
  {
    question:
      "Given below are two statements one is labelled as Assertion (A) and the other is labelled as Reason(R):\nAssertion (A): The industrial advertisements should use teaser headlines\nReason (R): Because advertising headlines should give specific news about the product and its application",
    options: [
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true",
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
    ],
    correct: 0,
  },
  {
    question: "Charity in print news report can be enhanced by using:",
    options: [
      "Adjectives",
      "Idiomatic expressions",
      "Figures of speech",
      "Conversational style",
    ],
    correct: 2,
  },
  {
    question:
      "Which two of the following are Central Government Mission Mode Projects under the national e-governance plan?",
    options: [
      "E office",
      "Pengon",
      "Public Distribution System",
      "National Land Records Modernisation Programme",
    ],
    correct: 2,
  },
  {
    question:
      "A set of related propositions that provide a systematic explanation of different phenomena by specifically identifying relationship among concepts is called a:",
    options: ["Theory", "Definition", "Prediction", "Procedure"],
    correct: 0,
  },
  {
    question:
      "Identify the correct chronological sequence of the following editors of The Times of India.",
    options: [
      "Stanley Reed - Lovat Fraser - Thomas Jewel Bennett - Robert Knight",
      "Lovat Fraser - Stanley Reed - Robert Knight - Thomas Jewel Bennett",
      "Robert Knight - Thomas Jewel Bennett - Lovat Fraser - Stanley Reed",
      "Thomas Jewel Bennett - Robert Knight - Stanley Reed - Lovat Fraser",
    ],
    correct: 0,
  },
  {
    question: "According to EM Rogers communication is seen as a:",
    options: [
      "Process of idea convergence",
      "Process of data transfer",
      "Process of information preservation",
      "Process of trial and error experiment",
    ],
    correct: 0,
  },
  {
    question:
      "In Film Fables, the French theorist Jacques Ranciere distinguishes between two kinds of art experience which are:",
    options: [
      "Poetics of action and representation",
      "Poetics of absence",
      "Poetics of reaction",
      "Poetics of presence",
    ],
    correct: 0,
  },
  {
    question:
      "What technique combines live action performance and computer-generated animation?",
    options: [
      "Impact editing",
      "Motion capture",
      "Multiple exposure",
      "Overlapping editing",
    ],
    correct: 1,
  },
  {
    question:
      "Match the characteristics of typefaces with the kinds of print type and print method:",
    options: [
      "(ii), (iii), (iv), (i)",
      "(iii), (ii), (iv), (i)",
      "(ii), (i), (iii), (iv)",
      "(i), (ii), (iv), (iii)",
    ],
    correct: 1,
  },
  {
    question:
      "When media companies are owned by non media business houses, it is called:",
    options: [
      "Chain ownership",
      "Joint stock ownership",
      "Conglomerate ownership",
      "Charitable ownership",
    ],
    correct: 2,
  },
  {
    question: "According to Indian Penal Code, malice means:",
    options: [
      "Malice in fact",
      "Ill-feeling or hatred",
      "Absence of good faith",
      "Improper motive",
      "Critical view",
      "Passive negation",
    ],
    correct: 1,
  },
  {
    question:
      "Professional code of conduct for journalists includes the following:",
    options: [
      "Publication of material that would lead to crime",
      "Scurrilous writings against the authority",
      "Respect for information authenticity",
      "Respect for the integrity of sources",
      "Responsible in framing public opinion",
    ],
    correct: 3,
  },
  {
    question: "The revenue model of print media business focuses on:",
    options: [
      "More advertisements",
      "More news and editorials",
      "Less serious and more soft contents",
      "Infotainment",
      "More circulation",
      "More human resources",
    ],
    correct: 0,
  },
  {
    question:
      "Corporate communication campaign theories are linked to the following theoretical frameworks. They are:",
    options: [
      "Systems theory",
      "Agenda-setting theory",
      "Social construction of meaning theory",
      "Legitimacy gap theory",
      "Social exchange theory",
    ],
    correct: 0,
  },
  {
    question: "Three essential characteristics of the Information Society are:",
    options: [
      "Increased supply of information",
      "Information poverty in society",
      "Growth of information consumption",
      "Information suppression in society",
      "Information application and effect",
    ],
    correct: 2,
  },
  {
    question:
      "What determined the length and duration of the message in the pre-internet age?",
    options: [
      "Legal restrictions",
      "The existing technology",
      "Social responsibility",
      "Industrial labour",
    ],
    correct: 1,
  },
  {
    question: "The sequential images of media audiences are:",
    options: [
      "Mainstreamers, aspirers, succeeders, reformers",
      "Aspirers, reformers, mainstreamers, succeeders",
      "Succeeders, aspirers, reformers, mainstreamers",
      "Reformers, mainstreamers, succeeders, aspirers",
    ],
    correct: 1,
  },
  {
    question:
      "Match the following codes of communication with their description:",
    options: [
      "(i), (iii), (ii), (iv)",
      "(ii), (iii), (iv), (i)",
      "(i), (ii), (iii), (iv)",
      "(iv), (iii), (ii), (i)",
    ],
    correct: 0,
  },
  {
    question:
      "When a person makes a false representation to others causing damage to the plaintiff – it is legally called:",
    options: ["Disparagement", "Passing off", "Innuendo", "Deception"],
    correct: 1,
  },
  {
    question:
      "Which of the following questions are not yet definitively answered by media research?",
    options: [
      "Why do people use mass media?",
      "What individual needs make people use one medium over other mass media?",
      "How many audience needs mass media fulfil?",
      "Are media running out of soft fare?",
      "Has audience research outlived its utility?",
      "Media research means media syndrome has to be accounted",
    ],
    correct: 1,
  },
  {
    question: "What is the colour temperature of HMI lights?",
    options: ["10,000K", "3200°K", "1000°K", "5600°K"],
    correct: 3,
  },
  {
    question:
      "Image effects in television advertisements to attract viewers are referred to as:",
    options: ["Cross overs", "Instillers", "Inserts", "Optical"],
    correct: 3,
  },
  {
    question:
      "In International Communication, emphasizes non-violent communication:",
    options: ["Covenant", "Convention", "Governance session", "Diplomacy"],
    correct: 3,
  },
  {
    question:
      "If any incorrect explanation is given by the researcher, it is called:",
    options: [
      "Operational invalidity",
      "Restrictive hypothesis",
      "Conceptual error",
      "Artifact",
    ],
    correct: 2,
  },
  {
    question: "Match the following media concepts to the respective authors:",
    options: [
      "(i) Audience analysis",
      "(ii) Frames of reference",
      "(iii) Self-formulation",
      "(iv) Resistance through rituals",
    ],
    correct: "A) (i), (ii), (iii), (iv)",
  },
  {
    question:
      "Which of the following factors have affected the newspaper industry to a large extent?",
    options: ["(a) and (b)", "(b) and (c)", "(c) and (d)", "(a) and (c)"],
    correct: 3,
  },
  {
    question:
      "Match the following themes of stories with the type of journalism each belongs to: List I | List II",
    options: [
      "(a) Misuse of public funds. | (i) Interpretive Journalism",
      "(b) Green movements. | (ii) Data Journalism",
      "(c) Increase in white collar crimes in cities. | (iii) Investigative Journalism",
      "(d) Local bodies election. | (iv) Campaign Journalism",
    ],
    correct: "A) (iii), (iv), (ii), (i)",
  },
  {
    question:
      "Given below are two statements - one is labelled as Assertion (A) and the other is labelled as Reason (R): Assertion (A): Media are more than the sum of their texts. Reason (R): Because media do not operate in the context of political economy",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true and (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true",
    ],
    correct: 2,
  },
  {
    question: "Copyright extends to:",
    options: [
      "(a) Published works",
      "(b) Unpublished works",
      "(c) Parliamentary reports in newspapers",
      "(d) Academic writings for public use",
      "(e) Research papers in public domain",
      "(f) Creative art work",
    ],
    correct: "A) (a), (b) and (f)",
  },
  {
    question:
      "Which of the following scholars conducted an ethnographic study of film fan clubs in Madurai, India?",
    options: ["Joselyn Zivin", "Steve Derne", "Sara Dickey", "Rachel D Wyer"],
    correct: 2,
  },
  {
    question: "The post-colonial theory of communication rejects the myth of",
    options: [
      "(a) Multiple interpretations",
      "(b) Objectivity",
      "(c) Balance",
      "(d) Pluriverse",
    ],
    correct: "C) (b) and (c)",
  },
  {
    question: "Match the following authors with their concepts:",
    options: [
      "(a) Tim Miller. | (i) Explosion of narrativity",
      "(b) Mark Slouka. | (ii) Systems of space",
      "(c) Mark Paster | (iii) Culture of simulation",
      "(d) George Myerson. | (iv) Digital soup",
    ],
    correct: "A) (iv), (iii), (ii), (i)",
  },
  {
    question: "Identify the correct sequence of the following press laws:",
    options: [
      "Defence of India Act, Press Council Act, Publication of Objectionable Matter Act, Parliamentary Proceedings (protection of publication) Repeal Act",
      "Parliamentary Proceedings (protection of publication) Repeal Act, Defence of India Act, Press Council Act, Publication of Objectionable Matter Act",
      "Press Council Act, Publication of Objectionable Matter Act, Defence of India Act, Parliamentary Proceedings (protection of publication) Repeal Act",
      "Publication of Objectionable Matter Act, Defence of India Act, Parliamentary Proceedings (protection of publication) Repeal Act, Press Council Act",
    ],
    correct: 0,
  },
  {
    question: "The process of photographing an object has the sequence of",
    options: [
      "Camera movement, focus, framing, distance",
      "Framing, focus, distance, camera movement",
      "Focus, distance, framing, camera movement",
      "Distance, focus, framing, camera movement",
    ],
    correct: 1,
  },
  {
    question:
      "Given below are two statement- one is labelled as Assertion (A) and the other is labelled as Reason (R): Assertion (A): Matrix management is an approach relevant to media industry. Reason (R): It does not depend upon huge staff and facilities as people and resources can be used on project basis.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true and (R) is not the correct explanation of (A)",
      "(A) is true, but (R) false",
      "(A) is false, but (R) true",
    ],
    correct: 0,
  },
  {
    question:
      "Which of the following file formats was developed by Adobe as an open standard raw format?",
    options: ["JPEG", "TIFF", "DNG", "PNG"],
    correct: 2,
  },
  {
    question:
      "What is the segmentation determined by a large number of variables like purchase occasions, benefits sought, user status, and usage rate called?",
    options: ["Demographic", "Psychographic", "Behaviouristic", "Locational"],
    correct: 2,
  },
  {
    question:
      "What kind of approach does Dziga Venov's Man with a Monte Camera have?",
    options: ["Expository", "Interactive", "Reflexive", "Observational"],
    correct: 2,
  },
  {
    question:
      "The chronological sequence of the following radio programmes broadcast over AIR is:",
    options: [
      "Yuva Vani, Gyan Vani, Kisan Vani, Swasth Bharat",
      "Kisan Vani, Yuva Vani, Gyan Vani, Swasth Bharat",
      "Gyan Vani, Yuva Vani, Swasth Bharat, Kisan Vani",
      "Kisan Vani, Swasth Bharat, Gyan Vani, Yuva Vani",
    ],
    correct: 3,
  },
  {
    question:
      "It helps in identifying a brand, is timeless, reproducible, memorable, and can be legally protected. It is the:",
    options: ["Brand image", "Corporate identity", "Patent", "Annual report"],
    correct: 1,
  },
  {
    question:
      "Assertion (A): The National Film Awards given by the Directorate of Film Festivals has broken non-feature films into genres. Reason (R): This provides for a greater scope to give awards to divine ideologies and subjects.",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true",
    ],
    correct: 2,
  },
  {
    question: "Who is the founder of the film magazine, Cahiers du Cinema?",
    options: [
      "Francois Truffaut",
      "Claude Chabrol",
      "Andre Bazin",
      "Jean Luc Godard",
    ],
    correct: 2,
  },
  {
    question: "Dewesternisation of news values means less emphasis on:",
    options: [
      "Community programmes",
      "Village development",
      "Crime and violence",
      "Sports events",
    ],
    correct: 2,
  },
  {
    question:
      "What was the suggestion of Robert McNamara for the development of the Third World countries?",
    options: [
      "To take village as a unit",
      "To take block as a unit",
      "To take zone as a unit",
      "To take region as a unit",
    ],
    correct: 3,
  },
  {
    question:
      "Validity test is to establish the truthfulness of the content/data, whereas reliability test is for the:",
    options: [
      "Instrument/tool",
      "Design",
      "Statistics",
      "Structure of the thesis",
    ],
    correct: 0,
  },
  {
    question:
      "The study of activities that people engage in while looking for products to satisfy their needs and desires is called:",
    options: [
      "Audience research",
      "Consumer behaviour",
      "Brainstorming",
      "Pre-test research",
    ],
    correct: 1,
  },
  {
    question: "Match List-I with List-II",
    options: [
      "a) Categorisation - i) Survey design",
      "b) Thick description - ii) Grounded method",
      "c) Intervening variable - iii) Observation",
      "d) Memo writing - iv) Content analysis",
    ],
    correct: 3,
  },
  {
    question: "What is the blueprint of newspaper design called?",
    options: ["Visual print", "Dummy", "Gallery", "Skeleton"],
    correct: 1,
  },
  {
    question:
      "Set up in 2015, the Indian startup company that shows films at remote locations using mobile theatres is:",
    options: ["Show Time", "Picture Time", "Show This", "Picture This"],
    correct: 1,
  },
  {
    question: "Match List-I with List-II",
    options: [
      "a) InDesign - iv) Newspaper designing",
      "b) Lightroom - i) Photo editing",
      "c) Dreamweaver - ii) Websites development",
      "d) Nuendo - iii) Audio editing",
    ],
    correct: 3,
  },
  {
    question:
      "If an advertisement draws attention to a brand through sensual communication, which of the following appeals is it making use of?",
    options: ["Lifestyle", "Sex appeal", "Provocation", "Rationale"],
    correct: 1,
  },
  {
    question:
      "Which of the following determines whether a certain media combination provides the greatest reach and frequency for the product/service?",
    options: [
      "Neuromarketing",
      "Synergistic marketing",
      "Service marketing",
      "Ambush marketing",
    ],
    correct: 1,
  },
  {
    question:
      "Assertion (A): Communication audit is an examination of an organization's communication strategies, activities, and programs.\nReason (R): It is helpful in accessing the difference between how an organization's stakeholders perceive the organization and how it wishes to be seen.",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true",
    ],
    correct: 0,
  },
  {
    question: "Match List I with List-II",
    options: [
      "a) Sacred Games - ii) Netflix",
      "b) Breathe - iv) Prime Video",
      "c) Bose Dead/Alive - i) ALTBalaji",
      "d) Tripling - iii) TVF",
    ],
    correct: 3,
  },
  {
    question: "Match List I with List II:",
    options: [
      "a) Stuart Hall - iii) Culture and Society",
      "b) Raymond Williams - iv) New Left Review",
      "c) Marshall McLuhan - i) The Gutenberg Galaxy",
      "d) Harold Innis - ii) Empire and Communications",
    ],
    correct: 3,
  },
  {
    question:
      "If the relationship between variables is linear, which of the following is correct?",
    options: [
      "The relationship can be most accurately represented by a straight line",
      "All the points will fall on a curved line",
      "The relationship is best represented by parallel lines",
      "All the points must fall exactly on a wavy line",
    ],
    correct: 0,
  },
  {
    question:
      "What is the major indicator of development according to the communications view?",
    options: [
      "Per capita income",
      "Free movement of goods and services",
      "Political and intellectual freedom",
      "Intellectual property rights",
    ],
    correct: 2,
  },
  {
    question:
      "If an independent variable is manipulated in a research method, it is known as:",
    options: [
      "Experimental research",
      "Ethnographic research",
      "Focus group discussion",
      "Participant observation",
    ],
    correct: 0,
  },
  {
    question: "The correct sequence of making animation videos is:",
    options: [
      "Storyboard modelling, texturing, rigging, animation",
      "Animation, modelling, texturing, storyboard, rigging",
      "Rigging, texturing, storyboard, modelling, animation",
      "Storyboard, rigging, texturing, modelling, animation",
    ],
    correct: 0,
  },
  {
    question:
      "Punishment for violation of privacy is described under one section of the Information Technology Act, 2000. What is that section?",
    options: ["66 A", "66 B", "66 C", "66 E"],
    correct: 3,
  },
  {
    question:
      "Designed with journalistic visual materials and facts, 'Gone Gitmo' project offers the users to enter Guantanamo Prison Camp as a Prisoner and experience it. What type of journalism does Gone Gitmo fall under?",
    options: [
      "Analytical journalism",
      "Guerrilla journalism",
      "Gonzo journalism",
      "Immersive journalism",
    ],
    correct: 3,
  },
  {
    question:
      "Which one of the following international agencies is criticized for representing the Western interests in global economic development?",
    options: ["Oxfam", "ILO", "IME", "JICA"],
    correct: 2,
  },
  {
    question: "The correct sequence of steps of the pre-crisis phase is:",
    options: [
      "response- recovery-development",
      "preparedness-mitigation- prevention",
      "relief-recovery rehabilitation",
      "planning prevention-evaluation",
    ],
    correct: 1,
  },
  {
    question: "Unitization of news is followed in:",
    options: [
      "frame analysis",
      "deconstruction",
      "content analysis",
      "critical discourse analysis",
    ],
    correct: 2,
  },
  {
    question:
      "Identify the chronology in which the following television metrics have been adapted in India:",
    options: [
      "(c), (b), (d), (a)",
      "(e), (d), (b), (a)",
      "(c), (a), (b), (d)",
      "(d), (c), (a), (b)",
    ],
    correct: 2,
  },
  {
    question:
      "Everett Rogers in his book Diffusion of Innovations adopted the methodology of:",
    options: [
      "sunny design",
      "meta-analysis",
      "experimental design",
      "case study",
    ],
    correct: 1,
  },
  {
    question:
      "Match List I with List II (Animation techniques and Explanation):",
    options: [
      "(ii), (iii), (iv), (i)",
      "(i), (ii), (iii), (iv)",
      "(iii), (iv), (i), (ii)",
      "(iv), (i), (ii), (iii)",
    ],
    correct: 0,
  },
  {
    question:
      "Identify the news portal run exclusively by women for rural journalism in India:",
    options: ["Gaon Connection", "Khahar Lahariya", "Grassroot", "Kurukshetra"],
    correct: 1,
  },
  {
    question: "A virtual reality video aspect is:",
    options: ["90 degree", "120 degree", "360 degree", "180 degree"],
    correct: 2,
  },
  {
    question:
      "Assertion (A): Newspaper editors are not tolerant of the digital manipulation of photography for hard news stories, whereas they agree with such photographs for soft news items.\nReason (R): Nicely cropped photographs increase the sales of newspapers.",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true",
    ],
    correct: 1,
  },
  {
    question:
      "Assertion (A): Today citizen journalists have become a source for content in professional media.\nReason (R): The user-generated content is accepted as the media world is becoming network-based.",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true",
    ],
    correct: 0,
  },
  {
    question: "Match List-1 with List-11 (Media terms and Connotation):",
    options: [
      "(ii), (iii), (iv), (i)",
      "(iii), (iv), (ii), (i)",
      "(iv), (i), (ii), (iii)",
      "(i), (ii), (iii), (iv)",
    ],
    correct: 1,
  },
  {
    question:
      "The sequence of four basic media effects listed by Marshall McLuhan and Enc McLuhan is:",
    options: [
      "displacement retrieval conversion amplification",
      "renewal, conversion, amplification displacement",
      "conversion, amplification, displacement retrieval",
      "amplification, displacement, retrieval, conversion",
    ],
    correct: 3,
  },
  {
    question: "Match List 1 with List 11 (Theory and Theorists):",
    options: [
      "(ii), (iv), (i), (iii)",
      "(i), (ii), (iii), (iv)",
      "(iv), (iii), (ii), (i)",
      "(iii), (i), (iv), (ii)",
    ],
    correct: 0,
  },
  {
    question: "Match List I with List II (Journalists and Area of work):",
    options: [
      "(ii), (i), (iii), (iv)",
      "(iii), (iv), (i), (ii)",
      "(i), (iii), (iv), (ii)",
      "(iv), (ii), (iii), (i)",
    ],
    correct: 1,
  },
  {
    question:
      "The natural zero point is the characteristic of which level of measurement?",
    options: ["Interval", "Ratio", "Ordinal", "Nominal"],
    correct: 1,
  },
  {
    question:
      "The epistemology of communitarian discourse in development communication was analyzed by:",
    options: [
      "Majid Tehranian",
      "EM Rogen",
      "Daniel Lerner",
      "Andre Gunder Frank",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): A television program has both temporal and formal boundaries.\nReason (R): A program over television is not a fragmented output.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true",
    ],
    correct: 1,
  },
  {
    question:
      "The third sector initiatives are meant to support the policy framework of the:",
    options: [
      "private sector",
      "cooperative sector",
      "corporate sector",
      "public sector",
    ],
    correct: 3,
  },
  {
    question: "Which two features make the experimental design stronger?",
    options: [
      "Randomization and sample size",
      "Control group and sample size",
      "Randomization and control group",
      "Sample size and error",
    ],
    correct: 2,
  },
  {
    question: "Which of the following is NOT video software:",
    options: ["Final Cut Pro", "Premier Pro", "Pinnacle", "Protools"],
    correct: 3,
  },
  {
    question:
      "What type of a radio station would be best to address the concerns and issues of a particular group of people?",
    options: [
      "FM station",
      "AM station",
      "Community radio station",
      "Satellite radio station",
    ],
    correct: 2,
  },
  {
    question:
      "In reality television programs:\n(a) camera follow people around\n(b) live news stories are shown\n(c) game shows are shot in documentary style\n(d) people derive voyeuristic pleasure\nWhich of the following combinations of factors holds true for reality television programs?",
    options: [
      "(b), (c), and (d)",
      "(b), (a), and (c)",
      "(a), (c), and (d)",
      "(a), (b), and (c)",
    ],
    correct: 2,
  },
  {
    question:
      "Which of the following press releases is issued to respond to an adverse comment in media by the concerned organization?",
    options: [
      "Announcement release",
      "Response news release",
      "Bad news release",
      "Spot news release",
    ],
    correct: 1,
  },
  {
    question:
      "Which theory of the following is related to development communication?",
    options: [
      "Cultivation analysis",
      "Spiral of silence",
      "Magic bullet",
      "Two Step flow",
    ],
    correct: 3,
  },
  {
    question:
      "Which term is used to describe the structures built up by people as they interact with the environment in order to organize their experience?",
    options: ["Schemas", "Theories", "Models", "Framework"],
    correct: 0,
  },
  {
    question:
      "Match List I with List II: LIST I | LIST II (e-governance initiatives) | (function) (a) NDLM | (ii) IT training aiming BPL citizens (b) E-TAAL | (iii) Real-time status on delivering electronic services (c) BHIM | (i) Unified payment interface app (d) E-Sampark | (iv) Mass communication via mail and mobile",
    options: [
      "(B) (ii), (iii), (i), (iv)",
      "(A) (i), (ii), (iv), (iii)",
      "(C) (iv), (i), (ii), (iii)",
      "(D) (iii), (ii), (i), (iv)",
    ],
    correct: 0,
  },
  {
    question:
      "The first full-fledged newspaper edit among the following to become the Uni Minister for Information and Broadcasting was:",
    options: ["P. Upendra", "P.A. Sangma", "P.R Das Munshi", "R.R. Diwakar"],
    correct: 2,
  },
  {
    question:
      "Which research technique is used for the objective, systematic and quantitative description of the manifest content in media messages?",
    options: [
      "Survey analysis",
      "Cohort analysis",
      "Content analysis",
      "Multivariate analysis",
    ],
    correct: 2,
  },
  {
    question: "What was the mandate of the B G. Verghese Committee in 1977?",
    options: [
      "To look into the issue of autonomy of Doordarshan and All India Radio",
      "To make policy for FM radio stations",
      "To improve rural radio coverage and access",
      "To make policy for the community radio",
    ],
    correct: 0,
  },
  {
    question: "Films which are made to counter stereotyping are called:",
    options: [
      "Counter-stereotyping film",
      "Transcoding films",
      "Counter – transcoding films",
      "Revenge film",
    ],
    correct: 0,
  },
  {
    question:
      "The financial health of Indian news agencies is affected because of:",
    options: [
      "Decline in advertising support",
      "Growth of local newspapers",
      "Lack of professional manpower",
      "Emergence of news portals",
    ],
    correct: 0,
  },
  {
    question:
      "According to Robert Entman, the correct sequence of purpose of framing is:",
    options: [
      "Diagnose define problems, suggest remedies, make moral judgment",
      "Define problems diagnose causes make moral judgments suggest remedies",
      "Define problems, diagnose causes, suggest remedies, make moral judgments",
      "Make moral judgment, define problems, diagnose causes suggest remedies",
    ],
    correct: 2,
  },
  {
    question:
      "Using multiple sources of data to examine assertion in research is called:",
    options: [
      "Data interpretation",
      "Data triangulation",
      "Data circulation",
      "Data precision",
    ],
    correct: 1,
  },
  {
    question:
      "Which type of organizational culture prefers to look outside its organization to stay updated?",
    options: [
      "Role culture",
      "Power culture",
      "Task culture",
      "Person culture",
    ],
    correct: 2,
  },
  {
    question: "Ferdinand de Saussure divided language into:",
    options: [
      "Encoding and decoding",
      "Content and style",
      "Subtext and hidden meaning",
      "Langue and parole",
    ],
    correct: 3,
  },
  {
    question:
      "Laissez faire doctrine is associated with which of the following normative theories?",
    options: [
      "Marxist theory",
      "Libertarian theory",
      "Authoritarian theory",
      "Democratic participation theory",
    ],
    correct: 1,
  },
  {
    question:
      "The Directorate of Advertising and Publicity (DAVP) is merged with:",
    options: [
      "Bureau of Outreach and Communication",
      "Directorate of Public Relations",
      "Publication Division",
      "Research & Reference Wing",
    ],
    correct: 0,
  },
  {
    question:
      "The famous Bollywood actor who led a discussion after every episode of Hum Log is:",
    options: ["Dilip Kumar", "Nutan", "Amitabh Bachchan", "Ashok Kumar"],
    correct: 3,
  },
  {
    question:
      "Assertion (A): The growth of magazines is a historical phenomenon all over the world. Reason (R): Reader’s loyalty always fluctuated in selecting a particular magazine for reading. Choose the appropriate option from the following:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true",
    ],
    correct: 1,
  },
  {
    question:
      "Which one among the following media houses first published the investigative coverage of Panama papers?",
    options: [
      "The Statesman",
      "Washington Post",
      "Wall Street Journal",
      "Die Zeit",
    ],
    correct: 2,
  },
  {
    question:
      "Assertion (A): The surveillance function confirms the tribal nature of news. Reason (R): It is against the dominant rituals of our lives. Choose the appropriate option from the following:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true",
    ],
    correct: 2,
  },
  {
    question: "The Dependista model of development communication is basically:",
    options: ["Ideological", "Mechanical", "Natural", "Supranational"],
    correct: 0,
  },
  {
    question:
      "The process of moving from theoretical definition of concepts to numerical representation of these concepts into variables is called:",
    options: [
      "Sampling",
      "Testing of significance",
      "Operationalization",
      "Hypothesis testing",
    ],
    correct: 2,
  },
  {
    question:
      "Which of the following variables can be counted in specific output analysis?",
    options: [
      "Source of story",
      "Degree of exposure",
      "Type of story",
      "Footfalls in an event",
    ],
    correct: 3,
  },
  {
    question: "Identify the issue for which Cambridge Analytica is in news:",
    options: [
      "Data visualization",
      "Data privacy",
      "User analysis",
      "Spam in user accounts",
    ],
    correct: 1,
  },
  {
    question:
      "To which ethical theory the statement 'Do unto others as you would have them do unto you' belongs?",
    options: [
      "Categorical imperatives",
      "Utilitarian",
      "Relativism",
      "Golden mean",
    ],
    correct: 0,
  },
  {
    question:
      "Which of the following does NOT fall in the purview of ASCI's code of self-regulation for advertisements?",
    options: [
      "Not to be used for crass promotion in a monopolistic market",
      "Truthful and fair to consumers and competitors",
      "Within bounds of generally accepted standards of public decency",
      "Not to be used indiscriminately for the promotion of product hazardous to the society/individuals",
    ],
    correct: 0,
  },
  {
    question:
      "Which of the following CANNOT be included in pitfalls of copywriting?",
    options: [
      "Vagueness",
      "Double meaning phrases",
      "Stereotyping",
      "Unintentional defamation",
    ],
    correct: 2,
  },
  {
    question:
      "Visual stimuli which indicate relationships but not necessarily affect a response are called:",
    options: ["An index", "A signal", "A perspective", "A shot"],
    correct: 1,
  },
  {
    question:
      "In which development communication model people are expected to solve their own problems?",
    options: [
      "Dominant paradigm",
      "Organic model",
      "Mechanistic model",
      "Limited effects model",
    ],
    correct: 1,
  },
  {
    question:
      "Assertion (A): The Open Sky policy led to the rapid spread of cable and satellite networks in India in the early 1990s.\nReason (R): The policy was due to the restructuring of the Indian economy with a focus on globalization.",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): The structuralist impact of advertising is drawn from critical political theories.\nReason (R): The new business practices and market research approaches have their own role to play in this regard.",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true",
    ],
    correct: 1,
  },
  {
    question:
      "Which of the following is NOT a function of the marketing services department of an ad agency?",
    options: [
      "Quality control",
      "Systems and processes",
      "Backend operations",
      "Streamlining financial aspects",
    ],
    correct: 3,
  },
  {
    question:
      "Assertion (A): Mediated realism can be explained and understood in many ways.\nReason (R): Some authors define mediated realism by its contents.",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true",
    ],
    correct: 0,
  },
  {
    question:
      "The duration spent on each client when multiplied by the salary of the resource yields:",
    options: [
      "Human resource analysis",
      "Business analysis",
      "Cost-benefit analysis",
      "Time-cost analysis",
    ],
    correct: 3,
  },
  {
    question: "Covering the in-camera proceedings in a court falls under:",
    options: [
      "Media freedom",
      "Contempt of court",
      "Breach of privilege",
      "Violation of human rights",
    ],
    correct: 1,
  },
  {
    question: "What is Internet Saathi?",
    options: [
      "An initiative to reduce online gender disparity among rural Internet users of India",
      "Voice-based online portal for central tribal India",
      "Matrimonial portal",
      "Job portal for BPL citizens of India",
    ],
    correct: 0,
  },
  {
    question:
      "In Transactional Analysis theory, the author named the state of mind as:",
    options: ["Ego", "Altitude", "Mood", "Mental state"],
    correct: 0,
  },
  {
    question:
      "Match List I with List-II: List I (Concepts of Development Communication)\n(a) Art and science\n(b) Magic multiplier\n(c) Element Of management\n(d) Empathy\nList II (Authors/Theorists)\n(i) F. Rozario-Braid\n(ii) Daniel Lerner\n(iii) Wilbur Schramm\n(iv) Nora Quebral",
    options: [
      "(iv), (iii), (i), (ii)",
      "(i), (ii), (iii), (iv)",
      "(iii), (iv), (ii), (i)",
      "(ii), (i), (iv), (iii)",
    ],
    correct: 0,
  },
  {
    question:
      "A group of detailed descriptive content analysis statistics that examines online messages, volume, tone, and engagement is called:",
    options: [
      "Boundary scanning",
      "Communication audit",
      "Gatekeeping research",
      "Message analytics",
    ],
    correct: 3,
  },
  {
    question:
      "In a four-point lighting design, which light separates the subject from the background?",
    options: ["Fill light", "Back light", "Key light", "Background"],
    correct: 1,
  },
  {
    question:
      "Which of the following campaign assessment research techniques provides important feedback to the advertiser while the campaign is still in progress?",
    options: [
      "Tracking studies",
      "Projective techniques",
      "Respondent diaries",
      "Directed observation",
    ],
    correct: 0,
  },
  {
    question:
      "The study of how images affect the ways one thinks, feels, behaves, and interprets the meaning is called?",
    options: [
      "Proxemics",
      "Image behaviourism",
      "Visual literacy",
      "Visual recall",
    ],
    correct: 2,
  },
  {
    question: "What is the frequency of Sainik Samachar?",
    options: ["Weekly", "Monthly", "Fortnightly", "Bi-annual"],
    correct: 0,
  },
  {
    question:
      "The Shannon and Weaver model of communication is criticised for its:",
    options: [
      "Non-linearity",
      "Network instability",
      "Semantic noise",
      "Limited utility",
    ],
    correct: 3,
  },
  {
    question: "'Analog media' is the term used for:",
    options: [
      "Folk media",
      "Social media",
      "Non-digitised media",
      "Non-broadcast media",
    ],
    correct: 2,
  },
  {
    question:
      "The electro-chemical impulses within a human body can be equated with:",
    options: ["Channels", "Messages", "Senders", "Receivers"],
    correct: 0,
  },
  {
    question:
      "When the functions of mass media merge to create a persuasive platform, it leads to:",
    options: [
      "Economic degradation",
      "Credibility gap",
      "Social conviction",
      "Political restoration",
    ],
    correct: 2,
  },
  {
    question: "An example of immersive media is:",
    options: ["360° photography", "EPGs", "CRT", "FM broadcasting"],
    correct: 0,
  },
  {
    question: "Critical cultural studies describe advertising as:",
    options: [
      "Cultural practice",
      "Cultural ostracism",
      "Cultural commodity",
      "Cultural affinity",
    ],
    correct: 0,
  },
  {
    question: "The cultural transmission function of media includes:",
    options: [
      "Corporatisation",
      "Propaganda",
      "Socialisation",
      "Political economy",
    ],
    correct: 2,
  },
  {
    question: "The credibility of mediated message is attributed to:",
    options: [
      "Audience ignorance",
      "Legal restrictions",
      "Expertness of the source",
      "Political decisions",
    ],
    correct: 2,
  },
  {
    question:
      "The German scholar, Otto Groth, developed a set of standards to determine the structure of a true:",
    options: ["Radio broadcast", "TV rating", "Newspaper", "Printing method"],
    correct: 2,
  },
  {
    question: "Reading television programmes is a process of:",
    options: ["Rejection", "Acceptance", "Negotiation", "Adjustment"],
    correct: 2,
  },
  {
    question:
      "The Westley-MacLean model of communication was the basis of development of models of:",
    options: [
      "Symbolism",
      "Cultural impact",
      "Economic interventions",
      "Gatekeeping",
    ],
    correct: 3,
  },
  {
    question:
      "The Riley's model of communication emphasises the role of----------------in influencing communication:",
    options: ["Technology", "Receptors", "Senders", "Broader social context"],
    correct: 3,
  },
  {
    question: "Media literacy is explained as a:",
    options: ["Start-up", "Culmination point", "Continuum", "Median"],
    correct: 2,
  },
  {
    question: "Sigma Delta Chi is an association of:",
    options: [
      "Movie directors",
      "New media providers",
      "Professional journalists",
      "Television anchors",
    ],
    correct: 2,
  },
  {
    question:
      "Delayed feedback can take place in intra personal communication because of:",
    options: [
      "Automotive communication",
      "More information",
      "Mechanical devices",
      "Optical illusion",
    ],
    correct: 1,
  },
  {
    question: "An assemblage of audience will help create:",
    options: [
      "Committed media",
      "Non-committed media",
      "Asynchronous",
      "Synchronous media",
    ],
    correct: 3,
  },
  {
    question: "For many media futurists, worldwide an engine of:",
    options: [
      "Politics",
      "Public relations",
      "Ethical discourse",
      "Aggressive advocacy",
    ],
    correct: 2,
  },
  {
    question:
      "Feminist media theory emerged from -----------------school of communication:",
    options: ["Chicago", "Frankfurt", "Toronto", "Annenberg"],
    correct: 1,
  },
  {
    question: "'A Free and Responsible Press' is the publication of:",
    options: [
      "The British Royal Press Commission",
      "The First Press Commission of India",
      "The Hutchins Commission",
      "The Freedom Forum",
    ],
    correct: 2,
  },
  {
    question: "The public's right to know may often lead to:",
    options: [
      "Ethical passivity",
      "Advocacy journalism",
      "Uncritical journalism",
      "Invasion of privacy",
    ],
    correct: 3,
  },
  {
    question:
      "Article 361 A of the Indian Constitution provides better protection to:",
    options: [
      "Members of the Parliament",
      "Objectionable matter",
      "Censorship measures",
      "Reports on legislative proceedings",
    ],
    correct: 3,
  },
  {
    question: "By its nature, copyright is:",
    options: ["Decentralised", "Corporate", "Monopolistic", "Inclusive"],
    correct: 2,
  },
  {
    question:
      "Article 105 of the Indian Constitution deals with the privileges of:",
    options: [
      "The Parliament",
      "The President of India",
      "The State Legislature",
      "The Prime Minister of India",
    ],
    correct: 0,
  },
  {
    question:
      "Who wrote the famous book 'India Wins Freedom' after participating in India's freedom struggle against the British?",
    options: [
      "C. Rajagopalachari",
      "Dr. Rajendra Prasad",
      "Abul Kalam Azad",
      "Dr. Sampurnanand",
    ],
    correct: 2,
  },
  {
    question: "The progress of media imperialism was halted by:",
    options: [
      "The American-sponsored soap operas",
      "The rise of telenovelas of Latin America",
      "The expansion of European Union TV",
      "The proliferation of Western Films",
    ],
    correct: 1,
  },
  {
    question:
      "--------------------is the process of specifying and generating the audio elements.",
    options: [
      "Sound modelling",
      "Sound design",
      "Sound therapy",
      "Sound waves",
    ],
    correct: 1,
  },
  {
    question:
      "How many filters should be set on the camera on a bright sunny day?",
    options: ["Five", "Two", "Ten", "Three"],
    correct: 1,
  },
  {
    question:
      "-----------is a high-end device which is used for creating electronic images.",
    options: [
      "Key chain camera",
      "Professional camera",
      "Light field camera",
      "Reflex camera",
    ],
    correct: 1,
  },
  {
    question: "Diffusion is supposed to bring in",
    options: ["Fatalism", "Suspicion", "Fragmentation", "Social change"],
    correct: 3,
  },
  {
    question: "Development journalism discourse aims to promote",
    options: [
      "Media imbalance",
      "Media ethics",
      "Media trails",
      "Media profits",
    ],
    correct: 1,
  },
  {
    question: "The rate of adoption is normally measured by the",
    options: [
      "Length of time",
      "Number of target audience",
      "Medium selected",
      "Type of innovation",
    ],
    correct: 0,
  },
  {
    question:
      "In the developmental context, the opinion leaders are considered:",
    options: ["Orthodox", "Non-innovative", "Normative", "Cosmopolite"],
    correct: 3,
  },
  {
    question:
      "The Latin American scholars wanted development communication to be interpreted under:",
    options: [
      "Organic theory",
      "Interventionist theory",
      "Innovation theory",
      "Dependency theory",
    ],
    correct: 3,
  },
  {
    question: "The social media site best known for microblogging is:",
    options: ["Snapchat", "Twitter", "LinkedIn", "Facebook"],
    correct: 1,
  },
  {
    question: "News is a version of reality affected by:",
    options: [
      "Academic discourse",
      "Cultural bias",
      "Entertainment value",
      "Status quo",
    ],
    correct: 1,
  },
  {
    question:
      "In Radio and Television, the main purpose of editing can be summarised as:",
    options: [
      "To rearrange recorded material into a more logical sequence",
      "To remove the uninteresting, repetitive or technically unacceptable material",
      "To reduce the running time",
      "To remove the material which may offend the politicians and the government",
    ],
    correct: 1,
  },
  {
    question:
      "Distribution renting the film theatres directly from the owners for a limited engagement in 1970s in the United States was called:",
    options: [
      "Restricted tenancy",
      "Limited renting",
      "Transitory ownership",
      "Four walling",
    ],
    correct: 3,
  },
  {
    question:
      "When some of the respondents come to know that they are in a control group they work hard to outperform the subjects of the experimental group. Such a phenomenon is known as",
    options: [
      "Extraneous validity",
      "Tempered performance",
      "Compensatory rivalry",
      "Instrumentation",
    ],
    correct: 2,
  },
  {
    question:
      "The first two assertions in a statement of syllogism are known as:",
    options: [
      "Explanations",
      "Premises",
      "Funnel statements",
      "Hierarchy of constructs",
    ],
    correct: 1,
  },
  {
    question: "In the pioneering stage of advertising, the focus is on",
    options: [
      "Applying the idea",
      "Providing cheaper product",
      "Additional benefits",
      "Retaining interest",
    ],
    correct: 0,
  },
  {
    question: "The dominant player in the world of advertising is:",
    options: ["China", "Singapore", "Japan", "The United States"],
    correct: 3,
  },
  {
    question:
      "Grunig and Hunt developed a theory, in relation to public relations based on:",
    options: [
      "One-way symmetric model",
      "Two-way symmetric model",
      "Asymmetrical model",
      "Four-way symmetric model",
    ],
    correct: 1,
  },
  {
    question: "Attitudes and opinions are important for:",
    options: [
      "Demographers",
      "Low income groups",
      "Quantitative researchers",
      "Media planners",
    ],
    correct: 3,
  },
  {
    question:
      "The variables like audience values, attitudes, interests and opinions are called",
    options: [
      "Demographics",
      "Personal infographics",
      "Psychographies",
      "Factographics",
    ],
    correct: 2,
  },
  {
    question:
      "When a measure is standardized in relation to a distribution's mean and standard deviation, it is known as:",
    options: [
      "Standard measure",
      "Standard mean",
      "Standard score",
      "Standard summary",
    ],
    correct: 2,
  },
  {
    question: "Cultural imperialism perspective emerged from the theories of",
    options: [
      "Creative industries",
      "Development",
      "Concentrated ownership",
      "Critical political economy",
    ],
    correct: 3,
  },
  {
    question:
      "Ivy Ledbetter Lee, a legend in public relations, started his career as a:",
    options: ["Businessman", "Press agent", "Lobbyist", "Reporter"],
    correct: 1,
  },
  {
    question: "The term Weblog was coined by:",
    options: ["Justin Hall", "Dave Winer", "Andrew Smales", "John Barger"],
    correct: 3,
  },
  {
    question: "A consequence of the emergence of online broadband system is:",
    options: [
      "Investigative media",
      "Surveillance media",
      "Passive media",
      "Immersive media",
    ],
    correct: 3,
  },
  {
    question: "When 3D spaces are extended, the process results in",
    options: [
      "Analog media",
      "Static photography",
      "Virtual reality",
      "Non-mediated messages",
    ],
    correct: 2,
  },
  {
    question:
      "The style of journalism that presents stories by adapting fictional story-telling to non-fictional material is called:",
    options: [
      "Citizen journalism",
      "Literary journalism",
      "Parachute journalism",
      "Jazz journalism",
    ],
    correct: 1,
  },
  {
    question: "For feature writers, description needs:",
    options: [
      "Absence of attribution",
      "Academic organization",
      "Disturbed flow",
      "Keen observation",
    ],
    correct: 3,
  },
  {
    question:
      "Literary narratives will have to be -----------for feature stories:",
    options: ["Chronicalised", "Recreated", "Transcribed", "Dramatised"],
    correct: 3,
  },
  {
    question:
      "A part of the newspaper where cartoons and comic strips are published is known as:",
    options: ["Blurbs", "Creative middles", "Panels", "Funnies"],
    correct: 3,
  },
  {
    question: "The process of photomechanical printing is identified as:",
    options: [
      "Digital printing",
      "Gravure printing",
      "Optical printing",
      "Non intaglio printing",
    ],
    correct: 3,
  },
  {
    question:
      "Magazine articles, as different from newspaper articles, are characterized by:",
    options: [
      "Minimum opinion",
      "High dose of objectivity",
      "Freedom of subjectivity",
      "Non-dramatic elements",
    ],
    correct: 2,
  },
  {
    question:
      "An estimate of how much space a piece of text will occupy when it is printed is known as:",
    options: ["Textuality", "Cost technique", "Cast off", "Cascading sheet"],
    correct: 2,
  },
  {
    question: "Beat reporters run into the risk of:",
    options: [
      "Source apathy",
      "Source affinity",
      "Source mortality",
      "Source absence",
    ],
    correct: 0,
  },
  {
    question:
      "Given below are two statements, one labelled as Assertion (A) and the other labelled as Reason (R). Read the statements and choose the correct answer using the code given below. Assertion (A): Human reality cannot be accurately replicated by the new media. Reason (R): Social network sites promote hyper-reality and virtual fog.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      " (A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Given below are two statements, one labelled as Assertion (A) and the other labelled as Reason (R). Read the statements and choose the correct answer using the code given below. Assertion (A): Media narratives quite often produce contradictions. Reason (R): The televisual discourses produce negative specularities.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Given below are two statements, one labelled as Assertion (A) and the other labelled as Reason (R). Read the statements and choose the correct answer using the code given below. Assertion (A): The advertising stage of a product can be understood only by the acceptance of the product by the consumers. Reason (R): As people do not change their preferences, the product does not change its stages.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 2,
  },
  {
    question:
      "Given below are two statements, one labelled as Assertion (A) and the other labelled as Reason (R). Read the statements and choose the correct answer using the code given below. Assertion (A): Popular cultural capital is a cume of meanings and pleasures. Reason (R): Television is responsible for validating the social experience of cultural subordinates.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Given below are two statements, one labelled as Assertion (A) and the other labelled as Reason (R). Read the statements and choose the correct answer using the code given below. Assertion (A): Technological determinism as related to mass media is a myth. Reason (R): Modern technology has a profound impact on social, cultural, economic, and political institutions.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Given below are two statements, one labelled as Assertion (A) and the other labelled as Reason (R). Read the statements and choose the correct answer using the code given below. Assertion (A): Living with new technology and labour issues is integral to media management. Reason (R): Investment in new technology and spiraling labour costs have affected the profit margin of media houses across the world.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Given below are two statements, one labelled as Assertion (A) and the other labelled as Reason (R). Read the statements and choose the correct answer using the code given below. Assertion (A): Visual media produces the illusions of the real. Reason (R): Not all viewers can decode the textual strategies encoded in them.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Given below are two statements, one labelled as Assertion (A) and the other labelled as Reason (R). Read the statements and choose the correct answer using the code given below. Assertion (A): A common factor of all media is sub-text which the audience should guard against. Reason (R): It is an implicit message that is conveyed by the media, reinforcing the existing stereotypes.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Given below are two statements, one labelled as Assertion (A) and the other labelled as Reason (R). Read the statements and choose the correct answer using the code given below. Assertion (A): The Indian Constitution does not guarantee freedom of the press. Reason (R): The Indian journalists enjoy freedom of expression.",
    options: [
      "Both (A) and (R) are true",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true",
    ],
    correct: 3,
  },
  {
    question:
      "Given below are two statements, one labelled as Assertion (A) and the other labelled as Reason (R). Read the statements and choose the correct answer using the code given below. Assertion (A): Young media users are definitely disinterested in political contents. Reason (R): Better informed people want to know more about news-tainment than hardcore political developments.",
    options: [
      "Both (A) and (R) are true",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true",
    ],
    correct: 3,
  },
  {
    question:
      "Given below are two statements, one labelled as Assertion (A) and the other labelled as Reason (R). Read the statements and choose the correct answer using the code given below. Assertion (A): Heavy viewers of television tend to be more fearful of the world in which they live. Reason (R): Large doses of crime and violence in television content do not make viewers cultivate attitudes more consistent with its messages that what it really is.",
    options: [
      "Both (A) and (R) are true",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true",
    ],
    correct: 2,
  },
  {
    question:
      "Given below are two statements, one labelled as Assertion (A) and the other labelled as Reason (R). Read the statements and choose the correct answer using the code given below. Assertion (A): Newspapers are especially effective in proposing agenda setting issues. Reason (R): Other media do not have any role in prioritizing issues.",
    options: [
      "Both (A) and (R) are true",
      "(A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true",
    ],
    correct: 2,
  },
  {
    question:
      "Given below are two statements, one labelled as Assertion (A) and the other labelled as Reason (R). Read the statements and choose the correct answer using the code given below. Assertion (A): Media technology cannot change everything; both inflated expectations of its protagonists and fears of conservatives. Reason (R): Media technology only decides, while society proposes.",
    options: [
      "Both (A) and (R) are true",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true",
    ],
    correct: 2,
  },
  {
    question:
      "Given below are two statements, one labelled as Assertion (A) and the other labelled as Reason (R). Read the statements and choose the correct answer using the code given below. Assertion (A): Linear broadcasting management strategies have to live with competing alternative content suppliers. Reason (R): Technology made airwaves democratized, allowing multiple players to seek their share of the pie.",
    options: [
      "Both (A) and (R) are true",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true",
    ],
    correct: 0,
  },
  {
    question:
      "Given below are two statements, one labelled as Assertion (A) and the other labelled as Reason (R). Read the statements and choose the correct answer using the code given below. Assertion (A): The bi-media approach of integrating radio and television productions is highly practical. Reason (R): Television and radio program products are of different order because television production is technically more complex than that of radio.",
    options: [
      "(A) Both (A) and (R) are true",
      "(B) Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(C) (A) is true, but (R) is false",
      "(D) (A) is false, but (R) is true",
    ],
    correct: 1,
  },
  {
    question:
      "Given below are two statements, one labelled as Assertion (A) and the other labelled as Reason (R). Read the statements and choose the correct answer using the code given below. Assertion (A): A crisis in journalism is a threat to democracy. Reason (R): The future of journalism is based on inconsistent predictions.",
    options: [
      "(A) Both (A) and (R) are true",
      "(B) Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(C) (A) is true, but (R) is false",
      "(D) (A) is false, but (R) is true",
    ],
    correct: 2,
  },
  {
    question: "Identify the correct sequence of the following Acts.",
    options: [
      "(A) The Copyright Act, The Working Journalists Act, The Young Persons (Harmful Publications) Act, The Drugs and Magic Remedies (Objectionable Advertisements) Act",
      "(B) The Working Journalists Act, The Young Persons (Harmful Publications) Act, The Copyright Act, The Drugs and Magic Remedies (Objectionable Advertisements) Act",
      "(C) The Young Persons (Harmful Publications) Act, The Copyright Act, The Working Journalists Act, The Drugs and Magic Remedies (Objectionable Advertisements) Act",
      "(D) The Drugs and Magic Remedies (Objectionable Advertisements) Act, The Working Journalists Act, The Young Persons (Harmful Publications) Act, The Copyright Act",
    ],
    correct: 0,
  },
  {
    question:
      "The correct chronological order of the following new media platforms is:",
    options: [
      "(A) Tumblr, Pinterest, LinkedIn, Flickr",
      "(B) Flickr, Tumblr, LinkedIn, Pinterest",
      "(C) Pinterest, LinkedIn, Tumblr, Flickr",
      "(D) LinkedIn, Flickr, Tumblr, Pinterest",
    ],
    correct: 1,
  },
  {
    question:
      "The correct chronological sequence in which the following journalists were Chief Editors of The Tribune, Chandigarh is:",
    options: [
      "(A) VN Narayanan, Prem Bhatia, Hari Jaisingh, Harish Khare",
      "(B) Prem Bhatia, Hari Jaisingh, VN Narayanan, Harish Khare",
      "(C) Prem Bhatia, V.N. Narayanan, Hari Jaisingh, Harish Khare",
      "(D) Hari Jaisingh, Prem Bhatia, Harish Khare, VN Narayanan",
    ],
    correct: 1,
  },
  {
    question:
      "The correct sequence of elements of a historical advertising model is:",
    options: [
      "(A) Desire, interest, attention, action",
      "(B) Attention, desire, interest, action",
      "(C) Interest, action, attention, desire",
      "(D) Attention, interest, desire, action",
    ],
    correct: 3,
  },
  {
    question: "Identify the chronological sequence of these news agencies:",
    options: [
      "(A) AFP, Reuters, DPA, International News Service",
      "(B) International News Service, DPA, AFP, Reuters",
      "(C) DPA, AFP, Reuters, International News Service",
      "(D) Reuters, International News Service, AFP, DPA",
    ],
    correct: 3,
  },
  {
    question:
      "Identify the correct chronological sequence of the digital storage devices:",
    options: [
      "(A) DVD, floppy disk, CD-ROM, memory sticks",
      "(B) Floppy disk, memory sticks, CD-ROM, DVD",
      "(C) Memory stick, CD-ROM, floppy disk, DVD",
      "(D) CD-ROM, DVD, memory sticks, floppy disk",
    ],
    correct: 1,
  },
  {
    question:
      "Arrange the following photo journalists in the descending order of their birth. (i) James Nachtwey (ii) W. Eugene Smith (iii) Alfred Fischstadt (iv) Pablo Bartholomew",
    options: [
      "(A) (i), (ii), (iii), (iv)",
      "(B) (ii), (iii), (iv), (i)",
      "(C) (iii), (ii), (i), (iv)",
      "(D) (ii), (i), (iii), (iv)",
    ],
    correct: 2,
  },
  {
    question:
      "Identify the correct sequence of development communication experts by their works.",
    options: [
      "(A) Daniel Lerner, Y.V. Lakshmana Rao, Wilbur Schramm, EM Rogers",
      "(B) Daniel Lerner, Wilbur Schramm, YV Lakshmana Rao, EM Rogers",
      "(C) Daniel Lerner, EM Rogers, YV Lakshmana Rao, Wilbur Schramm",
      "(D) Daniel Lerner, Wilbur Schramm, EM Rogers, Y.V. Lakshmana Rao",
    ],
    correct: 0,
  },
  {
    question:
      "Identify the correct sequence of normative theories suggested in the book, Four Theories of the Press.",
    options: [
      "(A) Authoritarian - Social responsibility - Libertarian - Communist media",
      "(B) Authoritarian - Libertarian - Communist media - Social responsibility",
      "(C) Authoritarian - Libertarian - Social responsibility - Communist media",
      "(D) Authoritarian - Communist media - Libertarian - Social responsibility",
    ],
    correct: 2,
  },
  {
    question:
      "The sequence of the fundamental categories of signs, as identified by Marcel Danesi is.",
    options: [
      "(A) Name, icon, symbol, index, Signal, symptom",
      "(B) Symptom, signal, icon, index, name, symbol",
      "(C) Signal, symptom, icon, index, symbol, name",
      "(D) Icon, index, symbol, name, symptom, signal",
    ],
    correct: 3,
  },
  {
    question:
      "Match the items of List-1 with the items of List-11 and choose the correct answer from the code given below: List-1 | List-11 (a) Noam Chomsky | (i) Construction of the self (b) Wilbur Schramm | (ii) Propaganda (c) Maxwell McCombs | (iii) Circular model of communication (d) George Herbert Mead | (iv) Agenda-setting",
    options: [
      "(A) (ii), (iv), (i), (iii)",
      "(B) (ii), (iii), (iv), (i)",
      "(C) (iii), (i), (iv), (ii)",
      "(D) (iv), (i), (iii), (ii)",
    ],
    correct: 1,
  },
  {
    question:
      "Match the items of List-1 with the items of List-11 and choose the correct answer from the code given below: List-1 | List-11 (a) O.V. Vijayan | (i) Film director (b) Samir Jain | (ii) Journalist (c) TJS George | (iii) Media baron (d) Girish Kasaravalli | (iv) Cartoonist",
    options: [
      "(A) (ii), (iii), (iv), (i)",
      "(B) (iii), (ii), (i), (iv)",
      "(C) (iv), (iii), (ii), (i)",
      "(D) (iv), (i), (ii), (iii)",
    ],
    correct: 1,
  },
  {
    question:
      "Match the items of List-1 with the items of List-11 and choose the correct answer from the code given below: List-1 | List-11 (a) Daya Kishan Thussu | (i) The News of Empire (b) Andrew Otis | (ii) Videocracy (c) Kevin Allocca | (iii) Electronic Empires (d) Amelia Bonea | (iv) The Untold Story of India’s First Newspaper",
    options: [
      "(A) (iv), (ii), (iii), (i)",
      "(B) (ii), (iv), (i), (iii)",
      "(C) (i), (ii), (iii), (iv)",
      "(D) (iii), (iv), (ii), (i)",
    ],
    correct: 0,
  },
  {
    question:
      "Match the items of List-1 with the items of List-11 and choose the correct answer from the code given below: List-1 | List-11 (a) Freedom to volume of circulation | (i) Sakal (b) Freedom of editorial in Express policy | (ii) Express newspaper (c) Freedom to collect information | (iii) The Hindustan Times (d) Government's indirect interference | (iv) The Times of India",
    options: [
      "(A) (ii), (iii), (iv), (i)",
      "(B) (iii), (iv), (ii), (i)",
      "(C) (i), (iii), (iv), (ii)",
      "(D) (i), (iv), (ii), (iii)",
    ],
    correct: 2,
  },
  {
    question:
      "Match the items of List-1 with the items of List-11 and choose the correct answer from the code given below: List-1 | List-11 (a) Theory of selectivity | (i) D. Waples (b) Theory of social categories | (ii) Patterson and McClure (c) Theory of political socialization | (iii) Charles Wright (d) Theory of uses and gratifications | (iv) Melvin DeFleur and Sandra Ball-Rokeach",
    options: [
      "(A) (i), (ii), (iii), (iv)",
      "(B) (iv), (iii), (ii), (i)",
      "(C) (ii), (iv), (i), (iii)",
      "(D) (i), (iii), (ii), (iv)",
    ],
    correct: 0,
  },
  {
    question:
      "Match the pioneers of List-1 with the items of List-11 and choose the correct answer from the code given below: List-1 | List-11 (a) Joseph Pulitzer | (i) Penny Press (b) William Randolph Hearst | (ii) New Journalism (c) Benjamin Day | (iii) Pictorial Journalism (d) Henry Luce | (iv) Yellow Journalism",
    options: [
      "(A) (ii), (iv), (i), (iii)",
      "(B) (iv), (iii), (i), (ii)",
      "(C) (iv), (ii), (iii), (i)",
      "(D) (iii), (ii), (iv), (i)",
    ],
    correct: 1,
  },
  {
    question:
      "Match the items of List-1 with the items of List-11 and choose the correct answer from the code given below: List-1 | List-11 (a) Persuasion | (i) Moral suasion (b) Propaganda | (ii) Public relations (c) Advocacy | (iii) Mass communication (d) Public relations | (iv) Political communication",
    options: [
      "(A) (iii), (ii), (iv), (i)",
      "(B) (i), (ii), (iv), (iii)",
      "(C) (ii), (iii), (iv), (i)",
      "(D) (i), (iv), (iii), (ii)",
    ],
    correct: 2,
  },
  {
    question:
      "Match the items of List-1 with the items of List-11 and choose the correct answer from the code given below: List-1 | List-11 (a) Theory of social media | (i) Reticular Model (b) McQuail | (ii) Information Model (c) Information Theory | (iii) Normative Model (d) Postmodernism | (iv) Semiotic Model",
    options: [
      "(A) (ii), (iv), (iii), (i)",
      "(B) (i), (ii), (iv), (iii)",
      "(C) (iv), (iii), (ii), (i)",
      "(D) (iii), (i), (ii), (iv)",
    ],
    correct: 0,
  },
  {
    question:
      "Identify the correct match for the following: (a) Stereotype | (i) Selective perception (b) Source credibility | (ii) Framing (c) Media power | (iii) Cognitive dissonance (d) Media dependence | (iv) Cultivation theory",
    options: [
      "(A) (i), (ii), (iv), (iii)",
      "(B) (ii), (iv), (iii), (i)",
      "(C) (iii), (ii), (i), (iv)",
      "(D) (iv), (iii), (i), (ii)",
    ],
    correct: 0,
  },
  {
    question:
      "Match the items of list-1 with the items of list-11 and choose the correct answer from the code given below: \nList-1 (Book) List-11 (Author)",
    options: [
      "(a) Ink in My Veins (i) M Chalapathi Rao",
      "(b) First Draft (ii) Kuldip Nayar",
      "(c) Scoop (iii) S. Nihal Singh",
      "(d) The Press (iv) B.G. Verghese",
    ],
    correct: 1,
  },
  {
    question:
      "Match the items of List-1 with the items of List-11 and choose the correct answer from the code given below: \nList-1 (Pioneer) List-11 (Concept)",
    options: [
      "Neil Postman Don't Blame TV",
      "Jeff Greenfield Deciding What's News",
      "Robert MacNeil Amusing Ourselves to Death",
      "Herbert J. Gans The Mass Media and Public Trust",
    ],
    correct: 0,
  },
  {
    question:
      "Match the items of List-1 with the items of List-11 and choose the correct answer from the code given below: \nList-1 (Shot) List-11 (Feature)",
    options: [
      "(a) Extreme Long Shot (i) Complete View of Subject",
      "(b) Close Up (ii) Complete View of Subject from Waist up",
      "(c) Full Shot (iii) Large Amount of Landscape",
      "(d) Mid Shot (iv) Face of the Subject",
    ],
    correct: 1,
  },
  {
    question:
      "Match the items of List-1 with the items of List-II and choose the correct answer from the code given below: \nList-1 (Author) List-11 (Theory)",
    options: [
      "(a) Carl Hovland (i) Social Cognition",
      "(b) John Fiske (ii) Personal Influence",
      "(c) Elihu Katz (iii) Limited Effects",
      "(d) Albert Bandura (iv) Semiotic Disobedience",
    ],
    correct: 0,
  },
  {
    question:
      "Match the items of List-I with the items of List-II and choose the correct answer from the code given below: \nList-I (Newspaper Case) List-II (Issues/Act)",
    options: [
      "(a) Express Newspapers (i) Newspaper (Price and Page) Act, 1956",
      "(b) Sakal Newspaper (ii) Breach of Legislative Privilege",
      "(c) Bennett and Coleman (iii) Imposition of Tax to Limit Circulation",
      "(d) Searchlight Newspaper (iv) Newsprint Control Order, 1962",
    ],
    correct: 2,
  },
  {
    question: "Newspaper 'Iskra' belongs to:",
    options: ["Japan", "North Korea", "The Philippines", "Russia"],
    correct: 3,
  },
  {
    question:
      "In the mediated world, temporary and incomplete consensus is called:",
    options: ["Publicity", "Public opinion", "Public relations", "Propaganda"],
    correct: 1,
  },
  {
    question: "Cultivation analysis is a:",
    options: [
      "Hierarchal perspective",
      "Political perspective",
      "Non-creative perspective",
      "Stalagmite perspective",
    ],
    correct: 3,
  },
  {
    question: "Mass media legitimise the audience’s:",
    options: [
      "Family relations",
      "Power structure",
      "Political connections",
      "Prestige and status",
    ],
    correct: 3,
  },
  {
    question:
      "King and Cushman have described grassroots participation, local knowledge and cultural beliefs as:",
    options: ["New myths", "Old myths", "New fads", "Cultural fashion"],
    correct: 3,
  },
  {
    question:
      "Walter Lippmann’s public opinion reflects the early perception of:",
    options: [
      "Direct media effects",
      "Indirect media effects",
      "Passive media effects",
      "Unclear media effects",
    ],
    correct: 0,
  },
  {
    question:
      "Henri Lefpbvere, in relation to mass media, proposed the concept of:",
    options: [
      "Social conflict",
      "Media oligarchy",
      "Commonplace commodity",
      "Spectacle",
    ],
    correct: 3,
  },
  {
    question: "For Enzensberger, the phrase ‘The medium is the message’ is:",
    options: [
      "A prominent thesis",
      "A generalised production",
      "Yet another message",
      "An aesthetic construction",
    ],
    correct: 0,
  },
  {
    question: "One of the emancipatory uses of media is:",
    options: [
      "Collective production",
      "Centrally-controlled programmes",
      "Depoliticisation",
      "Production by specialists",
    ],
    correct: 0,
  },
  {
    question:
      "The relationship between media institutions with social power and the ideas that they circulate is often referred to as:",
    options: ["Articulation", "Stereotype", "Ideology", "Chain concept"],
    correct: 2,
  },
  {
    question: "Immanuel Kant developed:",
    options: [
      "Deontological theory",
      "Teleological theory",
      "Relativism",
      "Justice theory",
    ],
    correct: 0,
  },
  {
    question: "A major recommendation of the Mac Bride Commission was:",
    options: [
      "Centralisation of media ownership",
      "Restriction on technology transfer",
      "Democratisation of media",
      "Higher tariff for telecommunication",
    ],
    correct: 2,
  },
  {
    question: "‘Our village chhatera’ was a well-publicised:",
    options: ["Column", "Cartoon", "Newspaper", "Weekly magazine"],
    correct: 3,
  },
  {
    question:
      "The inverted pyramid style in newspaper content is normally used for:",
    options: ["Features", "Society news", "Editorials", "Hard news"],
    correct: 3,
  },
  {
    question: "The circle technique of feature writing is also known as:",
    options: ["The tie-back", "The recap", "Customisation", "Encirclement"],
    correct: 0,
  },
  {
    question: "Modular design of newspapers pre-supposes:",
    options: [
      "Long headlines",
      "Short text",
      "Running columns",
      "Less use of white space",
    ],
    correct: 3,
  },
  {
    question: "Intaglio plates are used in:",
    options: [
      "Letter-press printing",
      "Screen printing",
      "Offset printing",
      "Gravure printing",
    ],
    correct: 3,
  },
  {
    question:
      "Neil Postman used the word ‘__________’ to criticise the medium’s strong overtones of entertainment.",
    options: [
      "Rattling radio",
      "Insipid internet",
      "Junk television",
      "Wayward print",
    ],
    correct: 2,
  },
  {
    question: "A continuous variable can take:",
    options: [
      "Any value including fractions",
      "Any value without numbers",
      "Any qualitative assessment",
      "Any superficial statement",
    ],
    correct: 0,
  },
  {
    question:
      "The two-step model of communication ignores the direct impact of:",
    options: [
      "the audience",
      "the opinion leader",
      "the mass media",
      "the designer media",
    ],
    correct: 2,
  },
  {
    question:
      "‘The already said is the still being said’ - This statement is made with reference to the medium of:",
    options: ["Magazines", "Newspapers", "Folk performance", "Television"],
    correct: 2,
  },
  {
    question: "A large part of business and financial news is:",
    options: ["Advocacy", "Entertainment", "Moralistic", "Ideological"],
    correct: 3,
  },
  {
    question:
      "Publications that are aimed at a certain level of employees across industries are known as:",
    options: [
      "Vertical publications",
      "Horizontal publications",
      "Top-down publications",
      "Specialised publications",
    ],
    correct: 0,
  },
  {
    question: "Personality Journalism is the other name for:",
    options: [
      "Political Journalism",
      "Development Journalism",
      "Parachute Journalism",
      "Celebrity Journalism",
    ],
    correct: 3,
  },
  {
    question:
      "During the period of internal emergency 1975-77, the union government’s control of advertisement distribution was challenged at the Calcutta High Court by:",
    options: [
      "The Statesman",
      "The Jugantar",
      "The Telegraph",
      "The Anand Bazar Patrika",
    ],
    correct: 0,
  },
  {
    question:
      "The main objective of national advertising is to establish the product in the consumer mind:",
    options: ["the distributor", "the reach", "the value", "the ethicality"],
    correct: 2,
  },
  {
    question:
      "After the introductory stage, the advertising spiral moves towards:",
    options: [
      "the retentive stage",
      "the new pioneering stage",
      "the competitive stage",
      "the rejection stage",
    ],
    correct: 2,
  },
  {
    question: "Telephone co-incidental is a broadcasting:",
    options: ["Spot sheet", "Research procedure", "Format", "Empanelling"],
    correct: 2,
  },
  {
    question:
      "The International Public Relations Review is the publication of:",
    options: ["IPRA", "FAPRA", "CERP", "FAPRO"],
    correct: 0,
  },
  {
    question:
      "One of the sources of early public relations found in the United States was:",
    options: [
      "School broadcasting",
      "TV soap operas",
      "Political broadcasting",
      "Religious preachings",
    ],
    correct: 3,
  },
  {
    question: "For Mikhail Bakhtin, ________ was essential for development.",
    options: [
      "Mass communication",
      "Meaninglessness",
      "Social dialogue",
      "Entropy",
    ],
    correct: 2,
  },
  {
    question: "Communication for sustainable development focuses on:",
    options: [
      "Transformative learning",
      "Participatory rejection",
      "Decision-making at apex level",
      "Application of corporate techniques",
    ],
    correct: 0,
  },
  {
    question:
      "In scientific research, the concept of co-variation is explained in terms of:",
    options: ["Difference", "Suddenness", "Third factor", "Association"],
    correct: 3,
  },
  {
    question: "In communication research, formative evaluation includes:",
    options: [
      "Need assessment",
      "Cost-benefit evaluation",
      "Secondary evaluation",
      "Meta-analysis",
    ],
    correct: 0,
  },
  {
    question:
      "The accuracy of systematic sampling is dependent upon the adequacy of:",
    options: [
      "the time frame",
      "the operational frame",
      "the sampling frame",
      "the knowledge frame",
    ],
    correct: 2,
  },
  {
    question: "According to Kerlinger, content analysis is:",
    options: ["Unsystematic", "Biased", "Manipulative", "Quantitative"],
    correct: 3,
  },
  {
    question:
      "In media research, measurement systems attempt to be isomorphic to:",
    options: ["Persuasion", "Contradiction", "Negativism", "Reality"],
    correct: 3,
  },
  {
    question:
      "The convergence process of digital media has led to the development of:",
    options: [
      "Limited mass space",
      "Critical impersonal space",
      "Personal information space",
      "Non-personal economic space",
    ],
    correct: 2,
  },
  {
    question:
      "______ is known as the patron saint of the electronic colonialism.",
    options: [
      "Steve Jobs",
      "Marshal McLuhan",
      "Thomas Nashe",
      "Thomas McPhail",
    ],
    correct: 1,
  },
  {
    question: "Automation is critical to make online media:",
    options: ["Convertible", "Personalised", "Traceable", "Impersonal"],
    correct: 1,
  },
  {
    question: "The main aim of narrowcasting is to:",
    options: [
      "Expand the geographical reach",
      "Serve niche’s audience",
      "Access more advertisements",
      "Increase entertainment component",
    ],
    correct: 1,
  },
  {
    question:
      "The final edited version of a television commercial prepared for the client’s approval is called as:",
    options: ["Final print", "Approved print", "Final cut", "Answer print"],
    correct: 2,
  },
  {
    question:
      "In Kheda rural television project, the programme production methods focussed on:",
    options: [
      "Disinforming the villagers",
      "Post-testing the needs",
      "Maximum interaction with villagers",
      "Avoiding villagers",
    ],
    correct: 2,
  },
  {
    question: "The technical codes of television can be:",
    options: ["Ambivalent", "Precise", "Fluid", "Complex"],
    correct: 3,
  },
  {
    question: "Media discourses are often described as:",
    options: ["Power relations", "Entrapment", "Social fit", "Industry text"],
    correct: 0,
  },
  {
    question: "Section 292 of IPC prescribes punishment for:",
    options: [
      "Copyright infringement",
      "Obscene publication",
      "Contempt of court",
      "Prejudicial acts against national integration",
    ],
    correct: 1,
  },
  {
    question:
      "When a media house buys other companies related to its core business it is called:",
    options: [
      "Horizontal integration",
      "Vertical integration",
      "Lateral integration",
      "Collateral integration",
    ],
    correct: 1,
  },
  {
    question: "Fabra is a news agency:",
    options: ["Spanish", "Austrian", "Hungarian", "Romanian"],
    correct: 0,
  },
  {
    question: "Media freedom should reconcile with:",
    options: [
      "Political power",
      "Advertiser’s influence",
      "People’s arrogance",
      "Society’s collective interests",
    ],
    correct: 3,
  },
  {
    question:
      "Limitation on invasion of privacy is founded on the common law of:",
    options: ["Public safety", "Torts", "Criminal wrong", "Enforceability"],
    correct: 1,
  },
  {
    question: "Oscar awards are also known as:",
    options: [
      "Gate awards",
      "Humphrey awards",
      "Academy awards",
      "Grammy awards",
    ],
    correct: 2,
  },
  {
    question:
      "The total amount of light that is captured by a camera is known as:",
    options: ["Aperture", "Shutter speed", "Focus", "Exposure"],
    correct: 3,
  },
  {
    question: "The contra flow of information is symbolised by:",
    options: ["CNN", "STAR", "FOX TV", "Al-Jazeera"],
    correct: 3,
  },
  {
    question:
      "Larger and expensive cameras which have a body to attach different lenses are known as:",
    options: ["DSLR", "Point-and-shoot", "Disposable", "DSSR"],
    correct: 0,
  },
  {
    question:
      "Which part of the camera indicates the field of view that is seen by the camera lens?",
    options: ["Camera body", "LCD display", "Lens", "Viewfinder"],
    correct: 3,
  },
  {
    question:
      "What will be the depth of field if the subject will be in focus?",
    options: [
      "Deeper Depth of Field",
      "ISO",
      "Shallow Depth of Field",
      "Aperture",
    ],
    correct: 2,
  },
  {
    question:
      "A photograph, movie or video taken at close range and showing the subject on a large scale is known as:",
    options: ["Landscape", "Close up", "Portrait", "Long-shot"],
    correct: 1,
  },
  {
    question: "The syndicated reality show programmes on TV are known as:",
    options: [
      "Fast food programmes",
      "Mass culture programmes",
      "Fill-in programmes",
      "Mass line programmes",
    ],
    correct: 2,
  },
  {
    question:
      "The primary portion of the digital camera, which contains the controls, the LCD, the internal image processor, and the associated circuitry is known as:",
    options: ["LCD display", "Camera body", "Viewfinder", "Lens"],
    correct: 1,
  },
  {
    question: "According to Marshall McLuhan, telephone is a medium:",
    options: ["Cool", "Hot", "Non-profit", "Non-Plebian"],
    correct: 1,
  },
  {
    question:
      "Assertion (A): Gatekeeping has a significant effect on news processing.\nReason (R): The gatekeeping chain in media does not allow much inter-personal communication and as such it does not lead to any type of distortion.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 2,
  },
  {
    question:
      "Assertion (A): Democracy cannot survive if deliberative forces are arbitrary.\nReason (R): In a representative democracy, public discussion need not be a political duty, as reflected in media.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 2,
  },
  {
    question:
      "Assertion (A): “A free press is free for the expression of opinion in all its phases.”\nReason (R): It is because initially in Great Britain, the concept of freedom was negatively imputed.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 2,
  },
  {
    question:
      "Assertion (A): Public relations is more an attitude than a technique.\nReason (R): As it is an external evidence of managing internal affairs of an institution in a way that makes it maintain the status quo.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 2,
  },
  {
    question:
      "Assertion (A): As a management function, public relations can evaluate the options, opinions, and attitudes of both internal and external publics.\nReason (R): It gives an opportunity of being sensitive to collective views of publics that differ from what is termed as public opinion.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): In media research, argumentation and language help objectivise experiences.\nReason (R): Institutionalisation of objectivity in a systematic fashion is essential to effective media research.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): The relationship between power and development can be ignored while strategizing media role.\nReason (R): Power is not uni-dimensional and asymmetrical and as such it works to subordinate identified groups of people for development.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 3,
  },
  {
    question:
      "Assertion (A): In media management, operating skills and maintenance skills are one and the same.\nReason (R): Technological developments in both hardware and software of media production have caused changes.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 3,
  },
  {
    question:
      "Assertion (A): Emancipation from the present dominant social order is the major goal of mass media.\nReason (R): The societies are also evolving and so also are the goals of mass media.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Indian cinema to the most extent has been influenced by Western films.\nReason (R): Indigenisation of foreign films through a formula of songs, dance, and melodrama is staple of Indian cinema.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Participatory communication is helpful in achieving structural changes in certain specific areas.\nReason (R): Participatory communication may be necessary but not sufficient to alter power relations.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Feminist media studies should rewrite the narratives of male-dominated binary oppositions.\nReason (R): For it is not necessary for feminist media narratives to have a new space to revise the cultural narratives of the day.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 2,
  },
  {
    question:
      "Assertion (A): The diffusion model unflinchingly supported the linear transmission of messages to atomized individuals.\nReason (R): The individual receivers were considered as the locus of all circular communication.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 2,
  },
  {
    question:
      "Assertion (A): Even to this day, newspapers are the only news source to a community.\nReason (R): A newspaper’s credibility is more important than that of other media as it has to compare itself with other media.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 3,
  },
  {
    question:
      "Assertion (A): Letters to the editor are spontaneous response to newspaper contents.\nReason (R): These letters reflect public opinion and can also be an organized persuasive device.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Find out the correct chronological order of the following media organizations.",
    options: [
      "Indian Society of Advertisers - Advertising Council of India - Public Relations Society of India - Audit Bureau of Circulation.",
      "Advertising Council of India - Audit Bureau of Circulation - Public Relations Society of India - Indian Society of Advertisers.",
      "Public Relations Society of India - Audit Bureau of Circulation - Indian Society of Advertisers - Advertising Council of India.",
      "Audit Bureau of Circulation - Indian Society of Advertisers - Public Relations Society of India - Advertising Council of India.",
    ],
    correct: 3,
  },
  {
    question:
      "Identify the correct chronological order of establishment of advertising agencies of the following:",
    options: [
      "Chaitra Leo Burnetta Inc, Trikaya Grey Advertising India Ltd., Mudra Communications, FCB-Ulka Advertising.",
      "Mudra Communications, FCB-Ulka Advertising, Chaitra Leo Burnetta Inc, Trikaya Grey Advertising India Ltd.",
      "FCB-Ulka Advertising, Mudra Communications, Trikaya Grey Advertising India Ltd., Chaitra Leo Burnetta Inc.",
      "Trikaya Grey Advertising India Ltd., Chaitra Leo Burnetta Inc, FCB-Ulka Advertising, Mudra Communications.",
    ],
    correct: 0,
  },
  {
    question:
      "Identify correct chronological order of scholars who contributed for feminist media studies:",
    options: [
      "Noreene Janus, Ann Gray, Margaret Gallagher, Betty Friedan.",
      "Margaret Gallagher, Betty Friedan, Noreene Janus, Ann Gray.",
      "Betty Friedan, Noreene Janus, Margaret Gallagher, Ann Gray.",
      "Ann Gray, Margaret Gallagher, Betty Friedan, Noreene Janus.",
    ],
    correct: 2,
  },
  {
    question:
      "Find the correct sequence of news value according to M. Mencher.",
    options: [
      "Proximity, Impact, Timeliness, Prominence",
      "Prominence, Proximity, Impact, Timeliness",
      "Timeliness, Prominence, Proximity, Impact",
      "Impact, Timeliness, Prominence, Proximity",
    ],
    correct: 3,
  },
  {
    question: "The sequential order of advertising copy elements is:",
    options: [
      "Headline amplification, Proof of claim, Explanation of claim, Headline, Closure",
      "Headline, Headline amplification, Explanation of claim, Proof of claim, Closure",
      "Headline, Explanation of claim, Proof of claim, Headline amplification, Closure",
      "Explanation of claim, Headline, Proof of claim, Headline amplification, Closure",
    ],
    correct: 1,
  },
  {
    question:
      "Identify the correct order: According to Cutlip, Center and Broom, the correct sequence of four stages of public relations process is:",
    options: [
      "Communication-action, Research-Listening, Planning-decision making, Evaluation",
      "Planning-decision making, Evaluation, Communication-action, Research-Listening",
      "Evaluation, Planning-decision making, Research-Listening, Communication-action",
      "Research-Listening, Planning-decision making, Communication-action, Evaluation",
    ],
    correct: 3,
  },
  {
    question: "Identify correct sequence of trends:",
    options: [
      "Programme format developments, Public broadcasting services, Cable TV, MTV generation.",
      "Public broadcasting services, Cable TV, MTV generation, Programme format developments.",
      "Public broadcasting services, Programme format developments, MTV generation, Cable TV.",
      "Cable TV, MTV generation, Programme format developments, Public broadcasting services.",
    ],
    correct: 2,
  },
  {
    question: "Identify correct sequence of Satyajit Ray films:",
    options: [
      "Pather Panchali, Aparajito, Apur Sansar, Charulata",
      "Apur Sansar, Pather Panchali, Aparajito, Charulata",
      "Pather Panchali, Charulata, Apur Sansar, Aparajito",
      "Aparajito, Pather Panchali, Charulata, Apur Sansar",
    ],
    correct: 0,
  },
  {
    question:
      "Identify the chronological order of Dada Saheb Phalke award winners:",
    options: [
      "D. Ramanaidu, Tapan Sinha, Manoj Kumar, Soumitra Chatterjee",
      "Manoj Kumar, Soumitra Chatterjee, D. Ramanaidu, Tapan Sinha",
      "Soumitra Chatterjee, Tapan Sinha, Manoj Kumar, D. Ramanaidu",
      "Tapan Sinha, D. Ramanaidu, Soumitra Chatterjee, Manoj Kumar",
    ],
    correct: 0,
  },
  {
    question:
      "Find the correct sequence of factors for navigable news reporting:",
    options: [
      "Communication Modalities, Non-linear Writing, Customisation, Audience Involvement",
      "Customisation, Audience Involvement, Communication Modalities, Non-linear Writing",
      "Non-linear Writing, Audience Involvement, Customisation, Communication Modalities",
      "Audience Involvement, Customisation, Non-linear Writing, Communication Modalities",
    ],
    correct: 0,
  },
  {
    question:
      "Match the following:\n(a) John Fiske - (iv) Popular culture and TV\n(b) Henry Jenkins - (iii) Fans culture\n(c) Michel Foucault - (i) Omnipresence of power\n(d) Jacques Derrida - (ii) Deconstruction of text",
    options: [
      "(iv) (iii) (i) (ii)",
      "(i) (ii) (iii) (iv)",
      "(ii) (iv) (i) (iii)",
      "(iii) (ii) (iv) (i)",
    ],
    correct: 0,
  },
  {
    question:
      "Match the following:\n(a) Cumulation - (i) Unified picture of events held by various media\n(b) Ubiquity - (ii) Powerful effect of media\n(c) Consonance - (iii) Slow and pervasive influence of media\n(d) Dependency - (iv) Omnipresence of media",
    options: [
      "(iv) (ii) (iii) (i)",
      "(i) (ii) (iii) (iv)",
      "(iii) (iv) (ii) (i)",
      "(ii) (iii) (iv) (i)",
    ],
    correct: 0,
  },
  {
    question: "Match the following:",
    options: [
      "Nominal - Numerical categorisation",
      "Ordinal - Ranked distance",
      "Interval - Equal value",
      "Ratio - Existence of a true zero point",
    ],
    correct: [0, 1, 2, 3],
  },
  {
    question: "Match the following:",
    options: [
      "Limited effects - Jean Piaget",
      "All powerful media - Jack Lyle",
      "Attitude change - Carl Hovland",
      "Developmental learning - Harold Lasswell",
    ],
    correct: [3, 2, 1, 0],
  },
  {
    question: "Match the following:",
    options: [
      "Literal replication - Exact duplication of previous analysis",
      "Operational replication - Duplication of only the sampling and experimental procedures of previous analysis",
      "Instrumental replication - Duplication of dependent measures of the previous study",
      "Constructive replication - Tests the validity of methods previously used by deliberately not imitating the previous study",
    ],
    correct: [0, 1, 2, 3],
  },
  {
    question: "Match the following:",
    options: [
      "Deccan Herald - S. Mulgoankar",
      "National Herald - Pothan Joseph",
      "Indian Express - Girilal Jain",
      "The Times of India - M. Chalapathi Rao",
    ],
    correct: [3, 0, 2, 1],
  },
  {
    question: "Match the following:",
    options: [
      "Bertelsman - Germany",
      "News Corp - USA",
      "Vivendi Universal - France",
      "Cox Media - Australia",
    ],
    correct: [1, 2, 3, 0],
  },
  {
    question: "Match the following:",
    options: [
      "India - Television Dramas",
      "Mexico - Animated cartoons",
      "The Philippines - Soap opera",
      "Japan - Music videos",
    ],
    correct: [2, 0, 1, 3],
  },
  {
    question: "Match the following:",
    options: [
      "Marshal McLuhan - Canadian school",
      "Theodor Adorno - German school",
      "Stuart Hall - British school",
      "Daniel Lerner - American school",
    ],
    correct: [1, 0, 3, 2],
  },
  {
    question: "Match List - I with List - II:",
    options: [
      "Royal Press Commission - The UK",
      "The Hutchins Commission - The US",
      "Media Ombudsman - Sweden",
      "Press Commission - India",
    ],
    correct: [2, 1, 3, 0],
  },
  {
    question: "Aurobindo Ghosh’s Journal was:",
    options: ["Satyavadini", "Dharma", "Swadesimitran", "Bala Bharathi"],
    correct: 2,
  },
  {
    question: "______ are arbitrary, abstract, and represent unseen phenomena.",
    options: ["Symbols", "Signs", "Rules", "Codes"],
    correct: 0,
  },
  {
    question: "Priming effect of Leonard Berkowitz focuses on:",
    options: [
      "Political manipulations",
      "Television Violence",
      "Individualism",
      "Personal Relations",
    ],
    correct: 1,
  },
  {
    question: "Who is the author of the book ‘Pen as my sword’?",
    options: ["K. Rama Rao", "S.K. Rau", "M. Chalapathi Rao", "S. Prakasa Rao"],
    correct: 1,
  },
  {
    question:
      "The information processing theory argues that our cognitive resources are:",
    options: ["Large", "Superfluous", "Limited", "Unreliable"],
    correct: 2,
  },
  {
    question:
      "The positioning of news stories to highlight some aspects of a political issue is known as:",
    options: ["Frame of reference", "Semantic noise", "Homophily", "Priming"],
    correct: 3,
  },
  {
    question: "Which folk drama is known for its humour and social criticism?",
    options: [
      "Yakshagana of Karnataka",
      "Nautanki of Uttar Pradesh",
      "Kariyala of Himachal Pradesh",
      "Mohiniyattam of Kerala",
    ],
    correct: 1,
  },
  {
    question: "Deliberate manipulation of communication was referred to as:",
    options: ["Campaigning", "Propaganda", "Advertising", "Gossip"],
    correct: 1,
  },
  {
    question:
      "The concept of structural violence as related to mass communication can be traced to:",
    options: [
      "Johann Galtung",
      "Jacob Thompson",
      "William Parker",
      "Mark Pearson",
    ],
    correct: 0,
  },
  {
    question:
      "The lack of access to communication technology among people of different races, the poor, the disabled, and the rural communities is known as:",
    options: [
      "Group conformity",
      "Technically savvy",
      "Group deviance",
      "Digital divide",
    ],
    correct: 3,
  },
  {
    question: "The ‘Copyright day’ is observed on:",
    options: ["February 01", "October 15", "July 05", "April 23"],
    correct: 1,
  },
  {
    question: "Holism refers to:",
    options: [
      "Interdependent systems exchange information",
      "Consists of sub-systems and supra-system affects every other part",
      "System have boundaries that separate them",
      "Interpenetrating systems freely exchange information",
    ],
    correct: 1,
  },
  {
    question: "Logo is an identifying mark of a:",
    options: ["Product", "Company", "Person", "Purchaser"],
    correct: 1,
  },
  {
    question: "Bernard Berelson developed the research method:",
    options: [
      "Content analysis",
      "Telephone interview",
      "Action research",
      "Focus group discussion",
    ],
    correct: 0,
  },
  {
    question: "Purposive Sampling is not amenable to:",
    options: [
      "Field work",
      "Testing",
      "Descriptive statistics",
      "Inferential statistics",
    ],
    correct: 3,
  },
  {
    question: "The textuality of television is considered as:",
    options: ["Limited", "Indeterminate", "Monosemy", "Inter-textual"],
    correct: 1,
  },
  {
    question: "The Limited Effect Theory was developed by:",
    options: [
      "Coillion Cowper",
      "John Abraham",
      "Elihu Katz",
      "Joseph Klapper",
    ],
    correct: 3,
  },
  {
    question:
      "In innovation diffusion theory, those who directly influence early adopters are known as:",
    options: ["Rejectors", "Enforcers", "Commentators", "Change agents"],
    correct: 3,
  },
  {
    question: "DPA is a news agency of ________.",
    options: ["Spain", "Sweden", "Finland", "Germany"],
    correct: 1,
  },
  {
    question:
      "Identify the scale which is simply a system of assigning numbers to events:",
    options: [
      "Ordinal scale",
      "Interval scale",
      "Nominal scale",
      "Ratio scale",
    ],
    correct: 2,
  },
  {
    question:
      "E.M. Rogers’ work of ‘diffusion of innovations’ illustrates the power of:",
    options: [
      "Meta-analysis",
      "Content analysis",
      "Group analysis",
      "Cognitive effects",
    ],
    correct: 2,
  },
  {
    question:
      "Most commonly used method specially in studies relating to behavioural sciences:",
    options: [
      "Observation Method",
      "Survey Method",
      "Interview Method",
      "Content Analysis Method",
    ],
    correct: 1,
  },
  {
    question:
      "The need for decolonisation and democratisation of information and communication was propagated by:",
    options: [
      "The New World Information and Communication Order (NWICO)",
      "Monopoly of broadcasting",
      "The Marxist Theory of Media and Society",
      "Copyright Policies",
    ],
    correct: 0,
  },
  {
    question: "The term, objectivity rituals, is used in:",
    options: [
      "News reporting",
      "Public relations",
      "Advertising",
      "Cultural communication",
    ],
    correct: 0,
  },
  {
    question:
      "Identify one of the key recommendations of the First Press Commission:",
    options: [
      "Setting up of the office of Registrar of Newspapers of India",
      "Abolition of Press Council of India",
      "Introduction of Article 19 (1) (A)",
      "Special privileges to newspaper owners",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): The do-it-yourself digital tools offer an audience public control over media environment. Reason (R): The dominant media models are resorting to unbridled supply of frivolous entertainment to survive.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Editorial neutrality and political detachment are a great journalistic tradition. Reason (R): Partisan media systems result in an alliance between a section of the media and government, which is a positive result.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 2,
  },
  {
    question:
      "Assertion (A): There have been fast-paced shifts in media management paradigms all over the world. Reason (R): The emergence of new semiotic socio-political order has affected the media economics to a large extent.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): The mainstream media managers have now lost the way to hold their audiences intact. Reason (R): For, in the new socio-technical world, audiences produce their own contents and meanings.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): The convergent technology is transforming the socio-cultural orders all over the world. Reason (R): The new media have offered expanded options for the users to experiment with.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): The distinctions among different media are getting erased fast. Reason (R): The convergent digital technology has made the hybrid media possible.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): The counter-hegemonic media practices will be marginalised in due course. Reason (R): It is to neutralise the threat they pose to the established media order.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): The Indian film industry represents a splintered semiotics of inter-cultural integration. Reason (R): Films in India frequently project sub-cultural themes to exhibit identity integration.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): The issue of hyphenated identities dot the discourse of new international information and communication order. Reason (R): The issues of identity and culture often work against cultural homogenisation prompted by Western media.",
    options: [
      "Both (A) and (R) are correct.",
      "Both (A) and (R) are correct, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Mutual understanding forms the basis of an open, two-way communication in Public Relations. Reason (R): For, it enables an organisation to influence public opinion, public judgement and public behaviour.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Find out the correct chronological sequence of the following Newspapers:",
    options: [
      "Forward, Bombay Chronicle, Swarajya, National Herald",
      "National Herald, Bombay Chronicle, Swarajya, Forward",
      "Bombay Chronicle, Swarajya, Forward, National Herald",
      "Swarajya, National Herald, Forward, Bombay Chronicle",
    ],
    correct: 0,
  },
  {
    question:
      "Identify the correct Chronological sequence of the following television networks:",
    options: [
      "Rupavahini, STAR, Zee TV, Al Jazeera",
      "STAR, Zee TV, Al Jazeera, Rupavahini",
      "Zee TV, Al Jazeera, Rupavahini, STAR",
      "Al Jazeera, Rupavahini, STAR, Zee TV",
    ],
    correct: 0,
  },
  {
    question:
      "Write the correct sequence of the following top magazines of the world:",
    options: [
      "Time, Reader’s Digest, Cosmopolitan, National Geographic",
      "Reader’s Digest, Cosmopolitan, National Geographic, Time",
      "Cosmopolitan, National Geographic, Time, Reader’s Digest",
      "National Geographic, Time, Reader’s Digest, Cosmopolitan",
    ],
    correct: 0,
  },
  {
    question:
      "Find out the correct chronological sequence of the following films:",
    options: [
      "Sita Bibaha, Joymati, Kalidas, Ayodyacha Raja",
      "Kalidas, Ayodyacha Raja, Joymati, Sita Bibaha",
      "Ayodyacha Raja, Joymati, Sita Bibaha, Kalidas",
      "Joymati, Sita Bibaha, Ayodyacha Raja, Kalidas",
    ],
    correct: 0,
  },
  {
    question: "Identify the sequence of the following research studies:",
    options: [
      "Communication and perception, War propaganda, experiments in mass communication, voter studies",
      "War propaganda, experiments in mass communication, voter studies, communication and perception",
      "Voter studies, War propaganda, experiments in mass communication, communication and perception",
      "Experiments in mass communication, communication and perception, voter studies",
    ],
    correct: 0,
  },
  {
    question: "Match the following:\nList - I (Author)\nList – II (Book)",
    options: [
      "(A) (ii) Emergency Retold, (iv) A Mirror to Power, (i) Emergency, (iii) Emergency Retold, (ii) Mandate",
      "(B) (iv) A Mirror to Power, (i) Emergency, (iii) Emergency Retold, (ii) Mandate",
      "(C) (ii) Emergency Retold, (i) Emergency, (iii) Mandate, (iv) A Mirror to Power",
      "(D) (iii) Emergency Retold, (iv) A Mirror to Power, (ii) Mandate, (i) Emergency",
    ],
    correct: 1,
  },
  {
    question: "Match the following:\nList-I (Brand)\nList-II (Tag Line)",
    options: [
      "(A) (iv) Be a man, (iii) Perfectly built, (i) The real scent of success, (ii) Future connected for a smarter India",
      "(B) (iii) Perfectly built, (iv) Be a man, (ii) Future connected for a smarter India, (i) The real scent of success",
      "(C) (i) The real scent of success, (ii) Future connected for a smarter India, (iv) Be a man, (iii) Perfectly built",
      "(D) (ii) Future connected for a smarter India, (i) The real scent of success, (iii) Perfectly built, (iv) Be a man",
    ],
    correct: 0,
  },
  {
    question: "Match List-I with List-II:\nList-I (Brand)\nList-II (Tag Line)",
    options: [
      "(A) (ii) Sheer Driving pleasure, (i) Simply clever, (iv) Break Through, (iii) World’s Ahead",
      "(B) (i) Simply clever, (ii) Sheer Driving pleasure, (iii) World’s Ahead, (iv) Break Through",
      "(C) (iv) Break Through, (iii) World’s Ahead, (i) Simply clever, (ii) Sheer Driving pleasure",
      "(D) (iii) World’s Ahead, (iv) Break Through, (ii) Sheer Driving pleasure, (i) Simply clever",
    ],
    correct: 0,
  },
  {
    question:
      "Match List-I with List-II:\nList-I (Category)\nList-II (Description)",
    options: [
      "(A) (ii) For general consumer, (iv) All things to all people, (i) Educational in character, (iii) For Specialists",
      "(B) (iii) For Specialists, (ii) For general consumer, (iv) All things to all people, (i) Educational in character",
      "(C) (ii) For general consumer, (i) Educational in character, (iv) All things to all people, (iii) For Specialists",
      "(D) (iv) All things to all people, (iii) For Specialists, (ii) For general consumer, (i) Educational in character",
    ],
    correct: 2,
  },
  {
    question:
      "Match the following tagline:\nList-I (Brand)\nList-II (Tag Line)",
    options: [
      "(A) (ii) Easy clean, (iv) Technology we live, (i) Go beyond, (iii) Be health sure",
      "(B) (i) Go beyond, (ii) Easy clean, (iii) Be health sure, (iv) Technology we live",
      "(C) (iv) Technology we live, (iii) Be health sure, (i) Go beyond, (ii) Easy clean",
      "(D) (iii) Be health sure, (i) Go beyond, (iv) Technology we live, (ii) Easy clean",
    ],
    correct: 1,
  },
  {
    question: "The first Indian language newspaper was:",
    options: ["Bangadoota", "Samachar", "Digdarshan", "Mirat-ul-Akhbar"],
    correct: 0,
  },
  {
    question: "In wheel type of communication, is dominant:",
    options: ["One person", "One group", "One chain", "One nation"],
    correct: 0,
  },
  {
    question: "The concept of mindful journalism has drawn inspiration from:",
    options: ["Hinduism", "Daoism", "Christianity", "Buddhism"],
    correct: 3,
  },
  {
    question: "According to Haebermas, modern mass media are influenced by:",
    options: [
      "A high degree of ethical conduct",
      "New cultural trends",
      "Massive public participation",
      "Empty political spectacle",
    ],
    correct: 3,
  },
  {
    question: "Jean Baudrillard has described mass media as a:",
    options: [
      "Social powerhouse",
      "Prosperous middle man",
      "Political institution",
      "Speech without response",
    ],
    correct: 3,
  },
  {
    question:
      "When an operating model of communication represents some aspect of reality, it represents:",
    options: ["Stimulation", "Stagnation", "Simulation", "Stratification"],
    correct: 2,
  },
  {
    question:
      "In symbolic interaction, artificial signs that produce highly predictable responses are known as:",
    options: ["Signals", "Signs", "Symbols", "Variants"],
    correct: 2,
  },
  {
    question: "Initial stage of interpersonal communication is called:",
    options: [
      "The phatic stage",
      "The intimate stage",
      "The personal stage",
      "The public stage",
    ],
    correct: 0,
  },
  {
    question:
      "‘Mental images’ that enable people to classify objects and to structure responses are known as:",
    options: [
      "Stereotypes",
      "Verbal commands",
      "Non-verbal cues",
      "Typifications",
    ],
    correct: 0,
  },
  {
    question:
      "In cultivation analysis, when viewers identify the television contents with their daily events, this phenomenon is known as:",
    options: ["Redundancy", "Cultural cues", "Proxy", "Resonance"],
    correct: 3,
  },
  {
    question: "The post-modernist media studies hinge on:",
    options: [
      "Collectivism",
      "Religious leadership",
      "Inspirational illusions",
      "Aesthetic politics",
    ],
    correct: 3,
  },
  {
    question:
      "Media audiences respond selectively to the media due to their own interpretation of their daily life.",
    options: [
      "Social discourses",
      "Creative production",
      "Unwanted innovations",
      "Unclear conformities",
    ],
    correct: 0,
  },
  {
    question: "Critical theories of mass communication are in character:",
    options: ["Political", "Insignificant", "Symbolic", "Iconic"],
    correct: 0,
  },
  {
    question: "The Vernacular Press Act 1878 was also called as:",
    options: [
      "Lytton’s Act",
      "Gagging Act",
      "Full control law",
      "Coercive control law",
    ],
    correct: 1,
  },
  {
    question:
      "______ of the statement is not a defense in a criminal proceeding against defamation:",
    options: ["Interpretation", "Public approval", "Power", "Truth"],
    correct: 2,
  },
  {
    question:
      "The operation of Article 19 of the Indian Constitution can be suspended under:",
    options: ["Article 358", "Article 372", "Article 378", "Article 387"],
    correct: 0,
  },
  {
    question: "The International Federation of Journalists is based in:",
    options: ["Amsterdam", "Frankfurt", "Brussels", "Vienna"],
    correct: 2,
  },
  {
    question: "For Jan Servaes, cultural diversity belongs to the cluster of:",
    options: [
      "Normative concepts",
      "Contextual concepts",
      "Strategic concepts",
      "Advocacy concepts",
    ],
    correct: 0,
  },
  {
    question: "The element of compensatory rivalry usually happens with:",
    options: [
      "The researcher",
      "The control group",
      "The experimental group",
      "The statistician",
    ],
    correct: 2,
  },
  {
    question: "External validity can be achieved through:",
    options: [
      "Random samples",
      "Intervening variables",
      "Concealing errors",
      "Small samples",
    ],
    correct: 0,
  },
  {
    question: "Equal appearing intervals are a characteristic of:",
    options: [
      "Likert scale",
      "Arbitrary scale",
      "Thurstone scale",
      "Cumulative scale",
    ],
    correct: 0,
  },
  {
    question:
      "The reactions of respondents to experimental situations are identified as:",
    options: [
      "Varied response",
      "Control variables",
      "Demand characteristics",
      "Natural recall",
    ],
    correct: 2,
  },
  {
    question: "The audience fragmentation has increased the demand for:",
    options: [
      "Trend studies",
      "One-shot studies",
      "Historical studies",
      "Consultative studies",
    ],
    correct: 0,
  },
  {
    question: "The people’s meter used by Nielsen Media Research records:",
    options: [
      "TV commercials",
      "The programmes watched by people during sweeps",
      "The programmes watched by people at specific times",
      "The names of people in households who participate in Nielsen ratings",
    ],
    correct: 2,
  },
  {
    question: "The issue of content management has to do with:",
    options: [
      "The movie industry controlling the content and subject matter of films",
      "The movie industry’s desire that the films be broadcast on TV at the highest quality possible",
      "The movie industry’s attempt to have copy protection on movies that are broadcast",
      "The movement on the part of the consumer to have good content in all TV broadcasts",
    ],
    correct: 2,
  },
  {
    question:
      "Electronic flash memory data storage device used for storing digital information:",
    options: ["Tripod", "Flash card", "Flash Drive", "Memory card"],
    correct: 2,
  },
  {
    question: "___ is used to protect private information stored in computers.",
    options: ["Professional", "Puller", "Phisher", "Firewall"],
    correct: 3,
  },
  {
    question: "Which is the parent company of Google?",
    options: ["Alphabet", "Oracle", "Dell", "Microsoft"],
    correct: 0,
  },
  {
    question: "The film that has won Oscar Award for 2017 is:",
    options: ["La La Land", "Moonlight", "Hidden Figures", "Lion"],
    correct: 1,
  },
  {
    question: "Grid card is related to:",
    options: ["Broadcast media", "Newspapers", "Outdoor media", "Magazines"],
    correct: 2,
  },
  {
    question: "Sirius is a/an:",
    options: [
      "Internet radio",
      "Satellite radio",
      "Internet streamer",
      "Satellite TV station",
    ],
    correct: 1,
  },
  {
    question:
      "A time period that precedes or follows prime time on television is identified as:",
    options: ["Stage time", "Trial time", "Adjacent time", "Fringe time"],
    correct: 3,
  },
  {
    question:
      "The media that has been facing decline in advertising revenue in the Western world is:",
    options: ["Newspaper industry", "Radio", "Television", "Google"],
    correct: 0,
  },
  {
    question: "The ABC’s (India) digital measurement service is supported by:",
    options: ["Arbitron", "Gallup", "Harris", "A.C. Nielsen"],
    correct: 3,
  },
  {
    question:
      "In the commercial world, Public Relations and Advertising are associated with:",
    options: ["Propaganda", "Marketing", "Diplomacy", "Secret service"],
    correct: 1,
  },
  {
    question: "Cover frequency will lead to:",
    options: ["Hard facts", "Direct exposure", "Gross rating points", "Tie-in"],
    correct: 2,
  },
  {
    question:
      "According to Lang and Lang, when individual opinions merge into public opinion, the model that emerges is:",
    options: [
      "Collective dynamics",
      "Hot public opinion",
      "Public opinion mainstreaming",
      "Collateralisation",
    ],
    correct: 2,
  },
  {
    question:
      "The First World Assembly of Public Relations Associations was held in:",
    options: ["Mexico city", "New York", "London", "Tokyo"],
    correct: 0,
  },
  {
    question: "Banner advertisement is a type of:",
    options: [
      "Outdoor Advertising",
      "Interactive Advertising",
      "Corporate Advertising",
      "Paid Advertising",
    ],
    correct: 3,
  },
  {
    question: "Bipolar objectives are used in:",
    options: [
      "Likert scale",
      "Thurstone scale",
      "Gutman scale",
      "Semantic differential",
    ],
    correct: 3,
  },
  {
    question: "Social marketing theory is essentially:",
    options: [
      "Content - dominated",
      "Source - dominated",
      "Receiver - dominated",
      "Channel - dominated",
    ],
    correct: 2,
  },
  {
    question: "Refers to the number of billboards used for an advertisement:",
    options: ["Cumes", "Counter boards", "Facings", "Deckers"],
    correct: 2,
  },
  {
    question: "Who commands higher advertising prices globally for now?",
    options: ["Digital music", "Digital news", "Digital video", "Television"],
    correct: 2,
  },
  {
    question:
      "Transition from one scene to another in a TV commercial is referred to as:",
    options: ["Movement", "Linkage", "Bridge", "Run - in"],
    correct: 2,
  },
  {
    question: "The tabloid version of earlier broadsheet newspaper is called:",
    options: ["Contact print", "Compact", "Tab", "Compressor"],
    correct: 1,
  },
  {
    question: "The estimation of story length is called:",
    options: ["Casting off", "Copy fit", "Space check", "Line estimate"],
    correct: 1,
  },
  {
    question: "On Spec in journalistic parlance means:",
    options: [
      "Commissioned article",
      "Uncommissioned article",
      "Additional editorial",
      "First page feature",
    ],
    correct: 1,
  },
  {
    question: "Fan writing is characterized as a type of textual:",
    options: ["Preacting", "Problematisation", "Poaching", "Presumption"],
    correct: 2,
  },
  {
    question: "Screamer is a/an mark normally seen in headlines:",
    options: ["Question", "Quotation", "Exclamatory", "Semicolon"],
    correct: 2,
  },
  {
    question:
      "Assertion (A): Modern mass media are responsible for destroying the folk communities.\nReason (R): The media fare provides scope to have individual judgments to decide what is amoral and what is not.\nCode:",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true",
    ],
    correct: 1,
  },
  {
    question:
      "Assertion (A): Television is central to ‘global mass culture.’\nReason (R): The flow of television programmes from different directions is more pronounced than ever before to the West.\nCode:",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): The liberal model of media is positive to the growth of democracy.\nReason (R): Market orientation makes media responsive to public issues.\nCode:",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Market based media ownership aims to create an informed citizenry.\nReason (R): Such an architecture of media system delivers enormous amounts of news on public affairs.\nCode:",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Video podcasting and peer-to-peer networking represent a new architecture of aesthetics.\nReason (R): Technological evolution has hindered the public access to media.\nCode:",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true",
    ],
    correct: 2,
  },
  {
    question:
      "Assertion (A): The synergy of modern economy with modern mass media is the other face of sophisticated media manipulation.\nReason (R): Sale of physical and entertainment products is the sole aim of today’s corporate media which aims to maximize profits.\nCode:",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): In the present day democracy, the rights and duties of publics to communicate has become less acceptable.\nReason (R): Because of commercialization and professionalization, media viewpoints of others are of little consequence in media content selection.\nCode:",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Language and communications are not only social practices, but also political.\nReason (R): Human communication has the primary objective of self-preservation.\nCode:",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true",
    ],
    correct: 2,
  },
  {
    question:
      "Assertion (A): The invention of Internet was basically not for democratizing the global communication system.\nReason (R): It was initiated for the US military to control centres to communicate in the eventuality of a nuclear war.\nCode:",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): People watch television because they are very fond of news.\nReason (R): Some news channels are not objective and neutral in their coverage of news.\nCode:",
    options: [
      "(A) is true but (R) is not the correct explanation of (A).",
      "(R) is true but (A) is not the correct explanation of (R).",
      "Both (A) and (R) are correct.",
      "Both (A) and (R) are incorrect.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Print media is less socially responsible than the electronic media.\nReason (R): Because the electronic media depend heavily on commercial revenue and as such they have to protect their commercial interests.\nCode:",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true",
    ],
    correct: 3,
  },
  {
    question:
      "Assertion (A) : Guerilla television and video are more than media tools.\nReason (R) : They reflect the images of rebellion of the oppressed against modern imperialism.\nCode:",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Identify the correct sequence of emergence of different types of journalism:",
    options: [
      "Citizen journalism, advocacy journalism, new journalism, alternative journalism.",
      "Alternative journalism, advocacy journalism, citizen journalism, new journalism.",
      "New journalism, alternative journalism, advocacy journalism, citizen journalism.",
      "Advocacy journalism, new journalism, citizen journalism, alternative journalism.",
    ],
    correct: 2,
  },
  {
    question:
      "Identify the correct chronological sequence of the following statutes:",
    options: [
      "The contempt of Court Act, the copyright Act, the Right to Information Act, the young persons (Harmful publications) Act.",
      "The copyright Act, the young persons (Harmful publications) Act, the Right to Information Act, the contempt of Court Act.",
      "The Right to Information Act, The young persons (Harmful publications) Act, the copyright Act, the contempt of Court Act.",
      "The Young Persons (Harmful publications) Act, the copyright Act, the contempt of Court Act, the Right to Information Act.",
    ],
    correct: 3,
  },
  {
    question:
      "The correct chronological sequence of the following theories is:",
    options: [
      "Libertarian, authoritarian, social responsibility, communist.",
      "Social responsibility, communist, authoritarian, libertarian.",
      "Communist, libertarian, authoritarian, social responsibility.",
      "Authoritarian, libertarian, communist, social responsibility.",
    ],
    correct: 0,
  },
  {
    question:
      "The sequence of language wise circulation of newspapers, as per ABC report of (Jan - June 2016) is:",
    options: [
      "English, Malayalam, Tamil, Hindi.",
      "Hindi, English, Malayalam, Tamil.",
      "English, Hindi, Tamil, Malayalam.",
      "Hindi, Malayalam, English, Tamil.",
    ],
    correct: 1,
  },
  {
    question:
      "Match the following:\nList-I (Theory) | List-II (Author)\n(a) Play Theory (i) C.R. Wright\n(b) Media Dependency Theory (ii) De Fleur and Ball - Rokeach\n(c) Political Socialisation Theory (iii) William Stephenson\n(d) Functional Analysis (iv) Patterson and McClure",
    options: [
      "(i) (iii) (ii) (iv)",
      "(ii) (iv) (i) (iii)",
      "(iii) (ii) (iv) (i)",
      "(iv) (i) (iii) (ii)",
    ],
    correct: 2,
  },
  {
    question:
      "Match the following:\nList-I (Concept) | List-II (Focus)\n(a) Normative concept (i) Community mapping\n(b) Context concept (ii) Knowledge management\n(c) Strategic concept (iii) Social movements\n(d) Technique concept (iv) Social inclusion",
    options: [
      "(i) (iv) (iii) (ii)",
      "(iii) (i) (iv) (ii)",
      "(i) (ii) (iv) (iii)",
      "(iv) (iii) (ii) (i)",
    ],
    correct: 1,
  },
  {
    question:
      "Match the following:\nList-I (Organisation) | List-II (Platform)\n(a) Google (i) Skype\n(b) News corporation (iii) NBC\n(c) Microsoft group (ii) Instagram\n(d) Comcast (iv) Myspace.com",
    options: [
      "(iii) (iv) (i) (ii)",
      "(i) (ii) (iv) (iii)",
      "(iv) (iii) (ii) (i)",
      "(ii) (i) (iii) (iv)",
    ],
    correct: 0,
  },
  {
    question:
      "Match the following:\nList-I (Inventor) | List-II (Invention)\n(a) Ts’ai Lun (i) Lithography\n(b) Johannes Gutenberg (ii) Movable types\n(c) Alois Senefelder (iii) Printing Press\n(d) Bi Sheng (iv) Paper",
    options: [
      "(i) (iv) (ii) (iii)",
      "(iii) (iv) (i) (ii)",
      "(iv) (iii) (i) (ii)",
      "(i) (ii) (iv) (iii)",
    ],
    correct: 2,
  },
  {
    question:
      "According to critics, effects models are problematic as they are",
    options: ["Real", "Hypothetical", "Traditional", "Normative"],
    correct: 1,
  },
  {
    question: "In communication, relational information is",
    options: [
      "Non-interpretative",
      "Uncritical",
      "Non-transferable",
      "Emotional",
    ],
    correct: 3,
  },
  {
    question:
      "Media of the third degree contain_________ processed forms of representation.",
    options: ["Personally", "Impersonally", "Digitally", "Conventionally"],
    correct: 1,
  },
  {
    question: "Media texts are considered as",
    options: ["Passive", "Static", "Dynamic", "Negative"],
    correct: 2,
  },
  {
    question: "The theory of frame analysis was developed by",
    options: [
      "Erving Goffman",
      "Samuel Huntington",
      "F. Inglis",
      "Carl Hovland",
    ],
    correct: 0,
  },
  {
    question:
      "Identify the researcher who distinguished the functions of mass media as manifest and latent.",
    options: [
      "Robert Merton",
      "Charles W. Wright",
      "P.J. Tichenor",
      "G. Tuchman",
    ],
    correct: 0,
  },
  {
    question: "One of the barriers to persuasive communication is",
    options: ["Income", "Level of education", "Age", "Religion"],
    correct: 1,
  },
  {
    question: "The most important limitation of information-flow theory is",
    options: [
      "Message-centric",
      "Source-dominance",
      "Channel problem",
      "Receiver-specific",
    ],
    correct: 1,
  },
  {
    question:
      "The organization, International Freedom of Expression Exchange, is located in",
    options: ["The USA", "The UK", "Australia", "Canada"],
    correct: 2,
  },
  {
    question:
      "Section 499 of Indian Penal Code (IPC) contains the criminal liability of",
    options: ["Copyright", "Contempt of court", "Defamation", "Sedition"],
    correct: 2,
  },
  {
    question:
      "In cases of copyright violation, the interlocutory injunction is considered as a_________ remedy.",
    options: ["Final", "Constitutional", "Non-conforming", "Discretionary"],
    correct: 3,
  },
  {
    question:
      "The object of the Press and Registration of Books Act, 1867, is merely to regulate________ for preservation of copies of books and newspapers.",
    options: ["Printing presses", "Publishers", "Printers", "Authors"],
    correct: 0,
  },
  {
    question:
      "The memorandum to control the selection of newspapers for______ by the Indian government was challenged in the Calcutta High Court by print media during the period of internal emergency (1975-76).",
    options: [
      "Public advertisements",
      "Newsprint quota",
      "Accreditation",
      "Government benefits",
    ],
    correct: 0,
  },
  {
    question: "The major strategy of participatory communication is",
    options: [
      "Government scheme",
      "Top-down approach",
      "Information dissemination",
      "Dialogue",
    ],
    correct: 3,
  },
  {
    question: "The difference between sample and population values will show",
    options: [
      "The range",
      "The statistical significance",
      "The sampling error",
      "The stratified deviation",
    ],
    correct: 2,
  },
  {
    question: "A text matter that accompanies a photograph________ is :",
    options: ["Headline", "By-line", "Date-line", "Cut-line"],
    correct: 3,
  },
  {
    question: "A premium rate for a special position to advertise is known as",
    options: [
      "Make-good rate",
      "Impact rate",
      "Mandatory rate",
      "Loading rate",
    ],
    correct: 3,
  },
  {
    question: "Communication audit is commonly employed in the field of",
    options: [
      "Advertising",
      "Public relations",
      "Newspaper publishing",
      "Broadcasting",
    ],
    correct: 1,
  },
  {
    question: "Gravure printing method is",
    options: [
      "Black and white only",
      "Intaglio printing",
      "Thermal printing",
      "Flexographic printing",
    ],
    correct: 1,
  },
  {
    question: "RGB colour model is known as ________ colour model.",
    options: ["Additive", "Subtractive", "Restrictive", "Non-active"],
    correct: 0,
  },
  {
    question:
      "Robert Gunning’s readability formula attempts to identify the level of ________ in a piece of text.",
    options: ["Fog", "Excellence", "Codification", "Abstraction"],
    correct: 0,
  },
  {
    question:
      "Assertion (A) : In the practice of his or her professional activities, a public relations practitioner should respect the collective dignity of the publics, but not of individuals. Reason (R) : It is his/her responsibility to deal properly with everyone around, including colleagues, employer, media, and public at large.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 3,
  },
  {
    question:
      "Assertion (A) : A public relations practitioner should maintain the highest level of professionalism to achieve the specific targets identified. Reason (R) : For this, he or she should manage and manipulate the media outlets.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 2,
  },
  {
    question:
      "Assertion (A) : The impact of paid sales messages is an additional worry for marketing communicators. Reason (R) : The increased commercial content in mass media makes the audience tune them out because of their noise level.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A) : The concept of linear modernization is still popular among power elites across the globe. Reason (R) : It helps them expand and sustain their hold on power by controlling capitalistic means.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A) : RTI has become a new source of news and information. Reason (R) : Earlier government officers were not allowed to provide information to journalists.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A) : Single-screen cinemas are disappearing fast in India. Reason (R) : Because malls are being constructed in their place.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A) : Radio plays are different from TV plays because radio plays have no actors in them. Reason (R) : Because radio is a blind medium.",
    options: [
      "Both (A) and (R) are correct, but (R) is not the correct explanation of (A).",
      "Both (A) and (R) are correct and (R) is the correct explanation of (A).",
      "(A) is correct, but (R) is false.",
      "(A) is false, but (R) is correct.",
    ],
    correct: 2,
  },
  {
    question:
      "Assertion (A) : Citizen journalism is different from professional journalism. Reason (R) : Professional journalists do not use social media to disseminate their stories.",
    options: [
      "Both (A) and (R) are correct, but (R) is not the correct explanation of (A).",
      "Both (A) and (R) are correct and (R) is the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 2,
  },
  {
    question:
      "Identify the chronological sequence of following AIR broadcasts:",
    options: [
      "Vividh Bharathi, School broadcasts, External services, Rural broadcasts",
      "School broadcasts, Rural broadcasts, Vividh Bharathi, External services",
      "External services, Vividh Bharathi, Rural broadcasts, School broadcasts",
      "Rural broadcasts, External services, School broadcasts, Vividh Bharathi",
    ],
    correct: 1,
  },
  {
    question: "Identify the correct sequence of the following codes:",
    options: [
      "Hays Code, Fairness Doctrine, Code of Athens, ASCI Code",
      "ASCI Code, Hays Code, Fairness Doctrine, Code of Athens",
      "Fairness Doctrine, Code of Athens, ASCI Code, Hays Code",
      "Code of Athens, ASCI Code, Hays Code, Fairness Doctrine",
    ],
    correct: 0,
  },
  {
    question:
      "Identify the correct sequence of feminist media perception advocates:",
    options: [
      "Margaret Gallagher, A.N. Valdivia, G. Tuchman, Betty Friedan",
      "A.N. Valdivia, G. Tuchman, Betty Friedan, Margaret Gallagher",
      "G. Tuchman, Betty Friedan, Margaret Gallagher, A.N. Valdivia",
      "Betty Friedan, G. Tuchman, Margaret Gallagher, A.N. Valdivia",
    ],
    correct: 0,
  },
  {
    question:
      "Identify the correct sequence of following news agencies that operated in India:",
    options: [
      "Free Press, Reuters, Associated Press of India, United Press of India",
      "Reuters, Associated Press of India, Free Press, United Press of India",
      "Associated Press of India, United Press of India, Reuters, Free Press",
      "United Press of India, Reuters, Associated Press of India, Free Press",
    ],
    correct: 0,
  },
  {
    question:
      "Write the correct chronological order of the following social media platforms:",
    options: [
      "Linkedin, Facebook, YouTube, Twitter",
      "Facebook, YouTube, Twitter, LinkedIn",
      "YouTube, Twitter, LinkedIn, Facebook",
      "Twitter, LinkedIn, Facebook, YouTube",
    ],
    correct: 1,
  },
  {
    question: "Sensational, often irresponsible journalism is identified as",
    options: [
      "Parachute Journalism",
      "Yellow Journalism",
      "Neo-Journalism",
      "Party Press",
    ],
    correct: 1,
  },
  {
    question:
      "The ability to access, analyse, evaluate and communicate media messages is known as",
    options: [
      "Cultural criticism",
      "Critical theory",
      "Media dependency",
      "Media literacy",
    ],
    correct: 3,
  },
  {
    question:
      "Determinist and instrument views of media see them as purveyors of",
    options: ["Tolerance", "Harmony", "Prosperity", "Violence"],
    correct: 3,
  },
  {
    question:
      "Theory based on empirical observation guided by the scientific method is",
    options: [
      "Post-positivist Theory",
      "Hermeneutic Theory",
      "Grounded Theory",
      "Axiology",
    ],
    correct: 0,
  },
  {
    question:
      "When codes of communication are not meaningfully shared, it leads to",
    options: [
      "Physical noise",
      "Mechanical noise",
      "Psychological noise",
      "Semantic noise",
    ],
    correct: 3,
  },
  {
    question:
      "A type of theory that describes an ideal way for media systems to be structured and operated is referred to as",
    options: [
      "Value system",
      "Normative theory",
      "Scientific theory",
      "Archaic theory",
    ],
    correct: 1,
  },
  {
    question: "The area of cover provided by broadcast media is referred to as",
    options: ["Coverage map", "Market area", "Media depth", "Audience area"],
    correct: 1,
  },
  {
    question: "In communication, syllable structure is technically called",
    options: ["Paradigmatic", "Syntagmatic", "Paraglyphic", "Ideographic"],
    correct: 1,
  },
  {
    question: "Media of the second degree were dependent on",
    options: [
      "Oral distribution",
      "Technical",
      "Handwriting reproduction",
      "Internal distribution",
    ],
    correct: 2,
  },
  {
    question: "Hierarchy of effects model is a theory related to",
    options: [
      "Social marketing",
      "International communication",
      "Public relations",
      "Political communication",
    ],
    correct: 0,
  },
  {
    question:
      "In communication, cognitive dissonance brings about psychological",
    options: ["Adjustments", "Dynamism", "Conflicts", "Passivity"],
    correct: 2,
  },
  {
    question: "In communication, content information is",
    options: ["Meaningless", "Emotional", "Non-receptive", "Factual"],
    correct: 3,
  },
  {
    question: "The answerability model of media accountability prefers",
    options: [
      "Administrative aggression",
      "Negotiation",
      "Non-material penalty",
      "Moral binding",
    ],
    correct: 1,
  },
  {
    question:
      "The researcher’s attempt to explain the effects at a cultural or societal level is described as",
    options: [
      "Macroscopic Theory",
      "Microscopic Theory",
      "Media action Theory",
      "Mid-level Theory",
    ],
    correct: 0,
  },
  {
    question:
      "A Normative Theory combining aspects of libertarianism and social responsibility theory is referred to as",
    options: [
      "Eastern belief",
      "Latin American value",
      "Western concept",
      "Pluralism",
    ],
    correct: 2,
  },
  {
    question: "The direct mechanical reproduction of behaviour is known as",
    options: ["Imitation", "Cognition", "Impact", "Stimulus"],
    correct: 0,
  },
  {
    question: "Absolute and qualified privileges are discussed under",
    options: [
      "Legislative protection",
      "Criminal law of justice",
      "Civil law of torts",
      "Defence of India Rules",
    ],
    correct: 2,
  },
  {
    question: "Media institutions manufacture",
    options: [
      "Marketable goods",
      "Meaninglessness",
      "Representations",
      "Development",
    ],
    correct: 2,
  },
  {
    question: "The idea that “media affect others, but not me” is called as",
    options: [
      "Personal effect",
      "Second person effect",
      "Third person effect",
      "Demonstration effect",
    ],
    correct: 2,
  },
  {
    question: "Who is the author of the book, ‘Durbar’?",
    options: ["Tavleen Singh", "T.N. Ninan", "Arun Shourie", "Barkha Dutt"],
    correct: 0,
  },
  {
    question:
      "A search for truth through accurate observation and interpretation of fact is described as",
    options: [
      "Method of mysticism",
      "Method of tenacity",
      "Method of authority",
      "Method of science",
    ],
    correct: 3,
  },
  {
    question:
      "The prevailing thought or theory of the time in a scientific discipline is identified as",
    options: [
      "Dominant paradigm",
      "New paradigm",
      "Alternative paradigm",
      "Impactless paradigm",
    ],
    correct: 0,
  },
  {
    question:
      "A bonafide list of subscribers is necessary for a newspaper to get",
    options: [
      "The postal benefit",
      "The private donations",
      "The state subsidy",
      "The free quota of newsprint",
    ],
    correct: 0,
  },
  {
    question:
      "When a company moves sideways buying across different media, it is called",
    options: [
      "Expressive integration",
      "Natural integration",
      "Lateral integration",
      "Collective integration",
    ],
    correct: 2,
  },
  {
    question: "The civil law of defamation in India is based on",
    options: [
      "American common law",
      "French common law",
      "Russian common law",
      "English common law",
    ],
    correct: 3,
  },
  {
    question: "Working journalists have the right to",
    options: [
      "form trade unions",
      "defame anyone",
      "spread rumours against celebrities",
      "support unfriendly countries",
    ],
    correct: 0,
  },
  {
    question: "'Another Development' also means",
    options: [
      "cultural subjugation",
      "surplus revenue generation",
      "sustainable development",
      "sidestepping cultural ecology",
    ],
    correct: 2,
  },
  {
    question:
      "The controlled embedding of journalists in the armed forces was first invented by",
    options: [
      "the United States",
      "the United Kingdom",
      "the United Arab Emirates",
      "the Philippines",
    ],
    correct: 0,
  },
  {
    question:
      "The idea that media penetrate people’s minds and instantly create effects is named as",
    options: [
      "agenda-setting",
      "violence on the media",
      "magic bullet theory",
      "personal effect",
    ],
    correct: 2,
  },
  {
    question: "Communication for sustainable development is not",
    options: ["positive", "motivational", "neutral", "accountable"],
    correct: 2,
  },
  {
    question:
      "Panel studies are used to measure the same sample of subjects at different",
    options: ["Locations", "Situations", "Levels", "Points of time"],
    correct: 3,
  },
  {
    question: "Cohort analysis is largely used in",
    options: [
      "Language research",
      "Symbolic research",
      "Promotional research",
      "Advertising research",
    ],
    correct: 3,
  },
  {
    question: "Political affiliation is an example for",
    options: [
      "Continuous variable",
      "Discreet variable",
      "Anecdotal variable",
      "Non-continuous variable",
    ],
    correct: 1,
  },
  {
    question:
      "In order to provide the illusion of movement, at what speed (frames per second) is a sound film usually projected?",
    options: ["16 fps", "24 fps", "20 fps", "18 fps"],
    correct: 1,
  },
  {
    question:
      "Which aspect of the movie has become virtually 100 percent digital?",
    options: ["Shooting", "Projecting", "Editing", "Distribution"],
    correct: 1,
  },
  {
    question: "Where can you view your editing progress in the video software?",
    options: [
      "Editing effects folder",
      "File Folder",
      "Video Clips",
      "Timeline",
    ],
    correct: 3,
  },
  {
    question: "Shooting scenes and interviews with two cameras is known as",
    options: ["Double shoot", "Cross shoot", "Clinical shoot", "Combine shoot"],
    correct: 0,
  },
  {
    question: "Media contents’ flow is directly related to",
    options: [
      "International relations",
      "Media production",
      "Language superiority",
      "Economic power",
    ],
    correct: 3,
  },
  {
    question:
      "Which of the following are online advertisement methods through which advertisers attempt to drive traffic to Internet sites?",
    options: ["Banner", "CPM", "SEO", "CPC"],
    correct: 3,
  },
  {
    question: "All of the following are top-level domains, except",
    options: [".com", ".mil", ".amy", ".org"],
    correct: 2,
  },
  {
    question:
      "What is the ideal angle for a table top microphone to be placed before the speaker?",
    options: ["60", "50", "70", "80"],
    correct: 1,
  },
  {
    question: "What should always be considered while filming a shot?",
    options: ["Battery power", "Shot list", "Sound", "Rule of thirds"],
    correct: 3,
  },
  {
    question:
      "The present perfect tense used in a broadcast copy creates the phenomenon of",
    options: ["Proximity", "Fragmentation", "Immediacy", "Staleness"],
    correct: 2,
  },
  {
    question:
      "One of the major elements of a traditional public relations programme is",
    options: [
      "Limiting expenses",
      "Authoritarian observation",
      "Situation analysis",
      "Income ceiling",
    ],
    correct: 2,
  },
  {
    question: "A good brand advertisement concentrates on",
    options: [
      "Multiple selling ideas",
      "Two selling ideas",
      "One selling idea",
      "Scattered selling ideas",
    ],
    correct: 2,
  },
  {
    question:
      "A special offer to the consumer contained in the body copy of an advertisement is identified as",
    options: [
      "Extra offer",
      "Extended offer",
      "Buried offer",
      "Creative offer",
    ],
    correct: 2,
  },
  {
    question: "Advertising is an activity that stands for the ideology of",
    options: ["Power politics", "Social control", "Narcissism", "Marketplace"],
    correct: 3,
  },
  {
    question: "In printing, a colour without shades or tones is considered as",
    options: [
      "Solid colour",
      "Flat colour",
      "Single colour",
      "Straight colour",
    ],
    correct: 0,
  },
  {
    question:
      "The amount of money allocated for the promotion of a brand is called",
    options: [
      "Promotion spend",
      "Advertising appropriation",
      "Exposure expense",
      "Advertising allocation",
    ],
    correct: 1,
  },
  {
    question:
      "Assertion (A): Media ethics are reflected through several enlightenment assumptions that emphasise moralistic and democratic philosophy.\nReason (R): The enlightenment legacy does not insist on rational thinking and autonomous self-regulation.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 1,
  },
  {
    question:
      "Assertion (A): Media history will not achieve concrete status as a primary scholarly locus in the present day circumstances.\nReason (R): Until it develops a common set of problems and its own vocabulary as the term ‘media’ itself is fluid today.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Media outlets provide preferential treatment to corporate houses in their news production.\nReason (R): The internalisation of values is done through institutional practices by promoting self-regulation.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): The global news flow has not been able to affect the news values of the developing countries.\nReason (R): The developing countries have a strong cultural background and their own value system.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): The ‘unreal’ quality of digital information has far-reaching effects for audiences, media companies, and the society.\nReason (R): The digital media information has neither physical presence nor time barriers.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): In technological histories, the media seem to continually drift as signifiers.\nReason (R): Because media are instruments of 'mass impression'.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): The early analysis of media treatment of women amounted to their ‘symbolic annihilation’.\nReason (R): Because of power structures, women were systematically subordinated and in knowledge production, women are objects instead of active subjects.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Mass media technologies create conditions of political possibilities.\nReason (R): Mediated messages propel public scrutiny and debate of issues by providing a public forum.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Opinion polls and surveys are although valuable, are least preferred by PR persons.\nReason (R): These are not expensive for routine public relations practice.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 2,
  },
  {
    question:
      "Assertion (A): The emerging intellectual trends aim at new philosophical underpinnings for viable media ethics.\nReason (R): Reconceptualisations of speech freedoms bring citizens from the margin to the centre for positive human rights to communicate.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Television does not make audiences think critically, pause and also reflect. Reason (R): Because each television programme is immediate, dynamic and temporarily engaging.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question: "Find out the correct sequence of the following theories:",
    options: [
      "Dependency Theory, Cultivation Theory, Critical Theory, Uses and Gratifications Theory",
      "Uses and Gratifications Theory, Critical Theory, Dependency Theory, Cultivation Theory",
      "Critical Theory, Uses and Gratifications Theory, Dependency Theory, Cultivation Theory",
      "Cultivation Theory, Critical Theory, Dependency Theory, Uses and Gratifications Theory",
    ],
    correct: 3,
  },
  {
    question:
      "Find out the chronological sequence of following film producers of India:",
    options: [
      "F.B. Thanawala, Hiralal Sen, J.F. Madan, H.S. Bhatvadekar",
      "H.S. Bhatvadekar, F.B. Thanawala, Hiralal Sen, J.F. Madan",
      "Hiralal Sen, J.F. Madan, H.S. Bhatvadekar, F.B. Thanawala",
      "J.F. Madan, Hiralal Sen, F.B. Thanawala, H.S. Bhatvadekar",
    ],
    correct: 3,
  },
  {
    question: "Find out the correct sequence of the following organizations:",
    options: [
      "NPA, IENS, AINEC, ILNA",
      "IENS, AINEC, ILNA, NPA",
      "AINEC, ILNA, NPA, IENS",
      "ILNA, IENS, AINEC, NPA",
    ],
    correct: 3,
  },
  {
    question:
      "Match the following:\nList – I (Instrument) | List – II (Inventor)\n(a) Phonograph\n(b) Celluloid\n(c) Video Camera\n(d) Film Camera",
    options: [
      "(i) (ii) (iii) (iv)",
      "(iv) (iii) (i) (ii)",
      "(iii) (iv) (ii) (i)",
      "(iv) (iii) (ii) (i)",
    ],
    correct: 1,
  },
  {
    question:
      "Match the List-I with List-II:\nList – I (Author) | List – II (Concept)\n(a) John Fiske\n(b) Herbert Schiller\n(c) John B. Thompson\n(d) Greg Philo",
    options: [
      "(ii) (iii) (iv) (i)",
      "(iv) (i) (iii) (ii)",
      "(ii) (iii) (iv) (i)",
      "(i) (ii) (iii) (iv)",
    ],
    correct: 2,
  },
  {
    question:
      "Match the following:\nList – I (Brand) | List – II (Tag line)\n(a) Phillips LED lights\n(b) Skoda\n(c) Ford\n(d) Bridgestone Tyres",
    options: [
      "(iv) (iii) (ii) (i)",
      "(i) (ii) (iv) (iii)",
      "(ii) (i) (iii) (iv)",
      "(iii) (iv) (i) (ii)",
    ],
    correct: 0,
  },
  {
    question:
      "Match the following:\nList – I (Newspaper) | List – II (Language)\n(a) Deshdoot\n(b) Udayavani\n(c) Mathrubhumi\n(d) Dainik Pratidan",
    options: [
      "(i) (ii) (iii) (iv)",
      "(iv) (iii) (i) (ii)",
      "(iii) (iv) (ii) (i)",
      "(iv) (iii) (ii) (i)",
    ],
    correct: 1,
  },
  {
    question:
      "Match the List-I with List-II:\nList – I\n(a) ‘Our Village Chattera’\n(b) ‘Identify Backward Village Programme’\n(c) Right to Information Movement\n(d) Sangam Radio\nList – II\n(i) Deccan Development Society\n(ii) MKSS\n(iii) The Hindustan Times\n(iv) Udayavani",
    options: [
      "(i) (ii) (iii) (iv)",
      "(ii) (iii) (i) (iv)",
      "(iii) (iv) (ii) (i)",
      "(iii) (ii) (iv) (i)",
    ],
    correct: 1,
  },
  {
    question: "Embedded journalism is considered as a type of:",
    options: [
      "military offensive",
      "advertising",
      "categorisation of news",
      "news management",
    ],
    correct: 3,
  },
  {
    question: "Inner margin of a book or document refers to:",
    options: ["foot note", "colophon", "swash", "gutter"],
    correct: 3,
  },
  {
    question: "Magazines have well-defined formats to reach out to:",
    options: [
      "conflicting interests",
      "competing editors",
      "TV news producers",
      "select audiences",
    ],
    correct: 3,
  },
  {
    question:
      "Factor of _______ has contributed for the emergence of a specialized media audience.",
    options: ["localisation", "culture", "personal mobility", "work pressure"],
    correct: 2,
  },
  {
    question: "In semiotics, smoke is considered as:",
    options: [
      "vertical communication",
      "horizontal communication",
      "circular communication",
      "indexical communication",
    ],
    correct: 3,
  },
  {
    question:
      "In communication, pleasure results from a particular relationship between meanings and _______.",
    options: ["contentions", "power", "manipulation", "isolation"],
    correct: 1,
  },
  {
    question: "Another communication is:",
    options: [
      "receiver-centric",
      "sender-centric",
      "channel-centric",
      "technology-centric",
    ],
    correct: 1,
  },
  {
    question: "The term 'audiences' recognises media consumers as:",
    options: [
      "the homogeneity",
      "the heterogeneity",
      "the passiveness",
      "the resistance",
    ],
    correct: 1,
  },
  {
    question:
      "Louis Wirth and Talcott Parsons see mass communication as a tool of:",
    options: [
      "economic control",
      "social control",
      "intellectual control",
      "political control",
    ],
    correct: 1,
  },
  {
    question:
      "When the consequences of exposure to a communicated message get delayed, it is known as:",
    options: [
      "exposure limit",
      "deferred effect",
      "restrictive limit",
      "sleeper effect",
    ],
    correct: 3,
  },
  {
    question: "Who is the author of 'Saving the Media'?",
    options: [
      "Anil Dharkar",
      "Julia Cage",
      "Desmond Tutu",
      "Olivier Blanchard",
    ],
    correct: 1,
  },
  {
    question: "John Fiske considers speech as a:",
    options: [
      "non-contiguous code",
      "social code",
      "unreal code",
      "disabling code",
    ],
    correct: 1,
  },
  {
    question: "Truth of the statement is not a defence against:",
    options: [
      "defamation",
      "breach of privilege",
      "official secret violation",
      "contempt of court",
    ],
    correct: 0,
  },
  {
    question:
      "Examination of professionalism is derived from the public's right to:",
    options: ["know", "liberty", "education", "legal remedies"],
    correct: 0,
  },
  {
    question:
      "The technique of propaganda is used in international communication to manipulate:",
    options: ["lifestyles", "pricing", "trade flow", "cognitions"],
    correct: 3,
  },
  {
    question: "The protagonist of cultural imperialism theory was:",
    options: [
      "D.R. Mankekar",
      "William Hachten",
      "Dennis Morris",
      "Everett Dennis",
    ],
    correct: 1,
  },
  {
    question:
      "Name the influential scholar who applied liberation theology to education and communication in the development context.",
    options: [
      "Paolo Freire",
      "Dennis Goulet",
      "E.F. Schumacher",
      "Alan Inkeles",
    ],
    correct: 0,
  },
  {
    question: "The notion of multiplicity of paradigm is elaborated by:",
    options: [
      "Majid Tehranian",
      "Denis McQuail",
      "Thomas L. Jacobson",
      "Jan Servaes",
    ],
    correct: 3,
  },
  {
    question:
      "The dependency theory has identified obstacles to development as:",
    options: ["internal", "external", "neutral", "traditional"],
    correct: 1,
  },
  {
    question: "A systematically qualitative data set is amenable to:",
    options: [
      "non-progressive analysis",
      "entropical",
      "grounded theory",
      "contrived",
    ],
    correct: 2,
  },
  {
    question:
      "The normal distribution shape of standard deviations from the mean is sometimes referred to as:",
    options: [
      "error distribution",
      "value table",
      "property range",
      "bell curve",
    ],
    correct: 3,
  },
  {
    question: "Placing a unit of analysis into a content category is called:",
    options: ["Decoding", "Coding", "Messaging", "Texting"],
    correct: 1,
  },
  {
    question: "Heliodisplay refers to:",
    options: ["Photographs", "Cell phones", "TV monitors", "Films"],
    correct: 3,
  },
  {
    question: "Fairness doctrine is related to:",
    options: [
      "political advertising",
      "corrective advertising",
      "non-corrective advertising",
      "non-business advertising",
    ],
    correct: 3,
  },
  {
    question: "Grapevine communication:",
    options: [
      "advertising",
      "communication ethics",
      "religious communication",
      "public relations",
    ],
    correct: 3,
  },
  {
    question: "The publicity model of mass communication focuses on:",
    options: ["negative opinions", "ideation", "attention", "criticism"],
    correct: 2,
  },
  {
    question:
      "In 1999, the Indian government permitted foreign equity in film production to the tune of:",
    options: ["40 percent", "60 percent", "80 percent", "100 percent"],
    correct: 3,
  },
  {
    question:
      "Two networks are inter-connected by using the same technology with a:",
    options: ["link", "bridge", "bond", "gate"],
    correct: 1,
  },
  {
    question:
      "The World Association of Community Radio Broadcasters was launched in:",
    options: ["Brazil", "Sri Lanka", "Canada", "Argentina"],
    correct: 3,
  },
  {
    question: "Television viewing is considered as:",
    options: [
      "a business process",
      "a negative process",
      "an active process",
      "a formal process",
    ],
    correct: 3,
  },
  {
    question:
      "Assertion (A): The Indian press has become quite distinct from the Western press during the last few years. Reason (R): The Indian press has registered a quantitative jump in terms of number of publications and circulation. Codes:",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Developmental communicators should focus more on problem-solving rather than problem-posing. Reason (R): The organic models assumption is that people have the abilities to develop themselves. Codes:",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 1,
  },
  {
    question:
      "Assertion (A): Human beings have the unique ability to store their experiences consciously and pass them onto the next generation. Reason (R): This ability is responsible for the cultural transmission function of the mass media. Codes:",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): The public broadcaster in India has failed the expectations of its consumers. Reason (R): Because it does not exercise its autonomy for professional assertion and excellence. Codes:",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): In Virendes V. State of Punjab, Section 3 (1) of the Panjab Special Powers (Press) Act, 1956, was struck down by the Supreme Court as unreasonable. Reason (R): It was not only on the ground of substantive unreasonableness, but also on the ground of procedural unreasonableness. Codes:",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Find out the correct chronological order of the following committees:",
    options: [
      "Chanda Committee – Vidyalankar Committee – Parthasarathy Committee – Verghese Committee",
      "Verghese Committee – Vidyalankar Committee – Chanda Committee – Verghese Committee",
      "Parthasarathy Committee – Chanda Committee – Vidyalankar Committee – Verghese Committee",
      "Vidyalankar Committee – Chanda Committee – Verghese Committee – Parthasarathy Committee",
    ],
    correct: 0,
  },
  {
    question:
      "Identify the correct sequence of stages of growth as propounded by Walt Rostow:",
    options: [
      "Traditional society, drive to maturity, preconditions for take-off, take-off, age of mass consumption.",
      "Traditional society, age of mass consumption, take-off, preconditions for take-off, drive to maturity.",
      "Traditional society, take-off, preconditions for take-off, drive to maturity, age of mass consumption.",
      "Traditional society, preconditions for take-off, take-off, drive to maturity, age of mass consumption.",
    ],
    correct: 3,
  },
  {
    question: "Find the correct chronological order of the following:",
    options: [
      "The Official Secrets Act – The Unlawful Activities (Prevention) Act – The Press Council of India Act – The Right to Information Act",
      "The Unlawful Activities (Prevention) Act – The Official Secrets Act – The Press Council of India Act – The Right to Information Act",
      "The Official Secrets Act – The Press Council of India Act – The Unlawful Activities (Prevention) Act – The Right to Information Act",
      "The Official Secrets Act – The Right to Information Act – The Unlawful Activities (Prevention) Act – The Press Council of India Act",
    ],
    correct: 2,
  },
  {
    question:
      "Write the correct chronological order for the development of Internet:",
    options: [
      "RAND, ARPA, TCP/IP, Hypertext, WWW",
      "ARPA, TCP/IP, RAND, Hypertext, WWW",
      "TCP/IP, Hypertext, WWW, ARPA, RAND",
      "Hypertext, WWW, TCP/IP, ARPA, RAND",
    ],
    correct: 0,
  },
  {
    question:
      "Arrange the stages a brand passes through from its birth to its final eclipse:",
    options: [
      "Maturity, Growth, Introduction, Decline",
      "Decline, Growth, Introduction, Maturity",
      "Growth, Maturity, Introduction, Decline",
      "Introduction, Maturity, Growth, Decline",
    ],
    correct: 3,
  },
  {
    question:
      "Match the following: List-I (Film) | List-II (Director) (a) Kaaghaz Ke Phool | (1) Bimal Roy (b) Do Bigha Zameen | (2) Muzaffar Ali (c) Mother India | (3) Guru Dutt (d) Umrao Jaan | (4) Mehboob Khan Codes:",
    options: ["1 2 3 4", "3 1 4 2", "4 3 2 1", "1 4 3 2"],
    correct: 1,
  },
  {
    question: "Match the following: Codes:",
    options: ["1 3 2 4", "4 2 1 3", "2 1 4 3", "3 4 1 2"],
    correct: 1,
  },
  {
    question:
      "Match the following: List-I (Media house) | List-II (Country) (a) News Corp | (1) France (b) Vivendi Universal | (2) Germany (c) Bertelsmann | (3) United States (d) Cox Media | (4) Australia Codes:",
    options: ["1 2 3 4", "2 3 4 1", "3 4 1 2", "4 1 2 3"],
    correct: 2,
  },
  {
    question: "Match the following: List-I (Brand) | List-II (Tag line)",
    options: [
      "Nivea Men | World food store",
      "Carlsberg | Glass",
      "Godrej | Fantastico",
      "Tingo | It starts with you",
    ],
    correct: 1,
  },
  {
    question: "Match the following: List-I (Utility) | List-II (Platform)",
    options: [
      "Social bookmarking | Instagram",
      "Social news | Twitter",
      "Social networking | Reddit",
      "Social photo-sharing | Delicious",
    ],
    correct: 0,
  },
  {
    question: "Match the following: List-I (Variable) | List-II (Explanation)",
    options: [
      "Independent variable | It can take on any value variable from a range of values",
      "Dependent variable | It is what a researcher wants to eliminate.",
      "Continuous variable | It is systematically varied by the researcher",
      "Control variable | It is what the researcher wants to explain.",
    ],
    correct: 1,
  },
  {
    question:
      "Name the English daily which was derisively called as 'The old lady of Boribunder'.",
    options: [
      "Free Press Journal",
      "Indian Express",
      "The Times of India",
      "The Statesman",
    ],
    correct: 2,
  },
  {
    question:
      "The crusading journalists of the United States in the early twentieth century were identified as:",
    options: ["New journalists", "Muckrakers", "Gatekeepers", "Stingers"],
    correct: 1,
  },
  {
    question: "Immersive journalism is based on:",
    options: [
      "First person narration",
      "Second person narration",
      "Third person narration",
      "Impersonal narration",
    ],
    correct: 0,
  },
  {
    question:
      "Identify the writer who belonged to new journalism in 1960s and 1970s.",
    options: ["Tom Wolfe", "Gerard Goggin", "Upton Sinclair", "J. Tuchman"],
    correct: 0,
  },
  {
    question:
      "Paul Lazarsfeld and Robert Merton proposed the function of the mass:",
    options: [
      "Agenda setting",
      "National integration",
      "Status conferral",
      "Surveillance",
    ],
    correct: 2,
  },
  {
    question: "The two-step flow theory emerged from the field of:",
    options: ["Linguistics", "Economics", "Politics", "Legal Studies"],
    correct: 2,
  },
  {
    question: "The psychoanalytic theories of media were advocated by:",
    options: [
      "Claude Levi-Strauss",
      "Jacques Lacan",
      "Ernesto Laclau",
      "Louis Althusser",
    ],
    correct: 1,
  },
  {
    question:
      "The communication component of the dependency paradigm is most often referred to as:",
    options: [
      "Modernization",
      "Cultivation",
      "Development",
      "Cultural imperialism",
    ],
    correct: 3,
  },
  {
    question:
      "In a priori approach, a person assumes that something is true as it is:",
    options: ["Intuitive", "Creative", "Self-evident", "Effective"],
    correct: 2,
  },
  {
    question: "The power of media is described as:",
    options: ["Harsh", "Hard", "Oppositional", "Soft"],
    correct: 3,
  },
  {
    question:
      "The most familiar of the 'passive transmitter' is the one which uses the metaphor of:",
    options: [
      "Relativity",
      "Normative prescription",
      "Mirror",
      "Institutional autonomy",
    ],
    correct: 2,
  },
  {
    question: "For Marxists, mass media operate in:",
    options: [
      "Professional arena",
      "Religious arena",
      "Ideological arena",
      "Arena of plural values",
    ],
    correct: 2,
  },
  {
    question:
      "The liberal model of media and politics, according to Hallin and Mancini, is located in:",
    options: ["Sri Lanka", "Mauritius", "Canada", "Brazil"],
    correct: 2,
  },
  {
    question: "Semiotic analysis regards media texts as a collection of:",
    options: ["Alphabets", "Words", "Questions", "Paradigms"],
    correct: 3,
  },
  {
    question: "The traditional scientific research is:",
    options: ["Inductive", "Deductive", "Non-hypothetical", "Non-theoretical"],
    correct: 1,
  },
  {
    question: "Yate's correction is used in:",
    options: [
      "Factor analysis",
      "Discriminant analysis",
      "Chi-square test",
      "ANOVA",
    ],
    correct: 2,
  },
  {
    question: "The value necessary to reject a hypothesis is identified as:",
    options: [
      "Rejection value",
      "Cut-off value",
      "Critical value",
      "Matrix value",
    ],
    correct: 2,
  },
  {
    question:
      "Research questions and hypotheses are investigated with the help of statistical procedures called:",
    options: [
      "Internal tests",
      "External speculations",
      "Arbitration",
      "Algorithm",
    ],
    correct: 3,
  },
  {
    question:
      "The probability of rejecting a null hypothesis when it is true, means:",
    options: [
      "Type I error",
      "Type II error",
      "Type III error",
      "Type IV error",
    ],
    correct: 0,
  },
  {
    question:
      "Discourse analysis is the analysis of a text through the identification of:",
    options: ["Repetitiveness", "Opinions", "Language", "Objects"],
    correct: 2,
  },
  {
    question: "For summarisation, the positivist researchers prefer:",
    options: [
      "specific individuals",
      "general categories",
      "unique explanations",
      "special categories",
    ],
    correct: 1,
  },
  {
    question:
      "Social control in media organizations are normally exercised through:",
    options: [
      "legal procedures",
      "formal channels",
      "informal channels",
      "religious codes",
    ],
    correct: 1,
  },
  {
    question:
      "Which country included free expression as part of the Human Rights Act?",
    options: ["USA", "Sweden", "Denmark", "The UK"],
    correct: 3,
  },
  {
    question:
      "The problem of hyphenated identities is related to cation in international communication:",
    options: [
      "Copyright issues",
      "Trade and Commerce",
      "Alienated Economy",
      "Contra-flows of information",
    ],
    correct: 3,
  },
  {
    question:
      "If some media houses have controlling shares in non-media companies, it is known as:",
    options: [
      "Horizontal ownership",
      "Cross-media ownership",
      "Vertical ownership",
      "Conglomerate media ownership",
    ],
    correct: 1,
  },
  {
    question:
      "Free market processes, it is argued, have given rise to ownership of newspapers:",
    options: ["trust", "plutocratic", "co-operative", "idealistic"],
    correct: 1,
  },
  {
    question:
      "Official sources are used in media because of their on the subject:",
    options: ["expertise", "fairness", "emotional attachment", "bias"],
    correct: 0,
  },
  {
    question:
      "The importance of an event in relation to other potential news stories is labelled as:",
    options: [
      "Message clarity",
      "Message parity",
      "Message intensity",
      "Message relativity",
    ],
    correct: 3,
  },
  {
    question: "Gatekeeping in newspapers is usually associated with:",
    options: ["views", "news", "features", "advertisements"],
    correct: 1,
  },
  {
    question:
      "The news ingredients of balance and fairness are used to understand the concept of reporting:",
    options: ["investigative", "interpretative", "impersonal", "embedded"],
    correct: 2,
  },
  {
    question: "Episodic framing is the characteristic of:",
    options: [
      "newspapers",
      "magazine ads",
      "television news",
      "documentary films",
    ],
    correct: 2,
  },
  {
    question: "The thematic framing is largely used by:",
    options: ["radio", "television", "web portals", "newspapers"],
    correct: 3,
  },
  {
    question:
      "-------------is a simultaneous real-time distribution of any media:",
    options: ["Networking", "Broadcasting", "Protocol", "Transferring"],
    correct: 1,
  },
  {
    question: "Which one of the following is the free audio editing software?",
    options: ["Audacity", "GIMP", "Adobe Premiere", "Picasa"],
    correct: 0,
  },
  {
    question:
      "A series of recorded audio episodes to which audience can subscribe is known as:",
    options: [
      "Vodcast",
      "Podcast",
      "Sound forge",
      "Voice-over Internet protocol",
    ],
    correct: 1,
  },
  {
    question: "The major objective of a community radio station is:",
    options: [
      "infotainment",
      "entertainment",
      "economic profit",
      "social inclusion",
    ],
    correct: 3,
  },
  {
    question: "The specific items in a TV programme budget are called:",
    options: ["essentials", "circular items", "line items", "recurring items"],
    correct: 2,
  },
  {
    question: "Institutionalized stereotypes are referred to as:",
    options: ["credibility indicators", "etiquettes", "myths", "customs"],
    correct: 2,
  },
  {
    question:
      '"Everybody is doing", a theme promoted through a media channel is known as:',
    options: ["Bandwagon", "Name calling", "Transfer", "Card-stacking"],
    correct: 0,
  },
  {
    question:
      "For a public relations practitioner, status difference is one of the main barriers in:",
    options: [
      "mass communication",
      "intra-personal communication",
      "impersonal communication",
      "organizational communication",
    ],
    correct: 3,
  },
  {
    question:
      "The four models of public relations describe the different forms of communication between an organisation and its stakeholders were developed by:",
    options: [
      "Edward Bernays",
      "Ivy Lee",
      "Walter Lippman",
      "James Gruing and Todd Hunt",
    ],
    correct: 3,
  },
  {
    question: "Poster panel facing approaching traffic is referred to as:",
    options: ["Banners", "Head-on-site", "Flexography", "Display balloons"],
    correct: 1,
  },
  {
    question: "Values and Life Style (VALS) classification was developed by:",
    options: [
      "David Ogilvy",
      "Arnold Mitchell",
      "Philip Kotler",
      "Edward Bernays",
    ],
    correct: 1,
  },
  {
    question: 'The documentary, "Celluloid Man" is the life history of:',
    options: [
      "Shyam Benegal",
      "Adur Gopalakrishnan",
      "P.K. Nair",
      "Girish Kasaravalli",
    ],
    correct: 2,
  },
  {
    question: "Perfect TV of Japan is owned by:",
    options: [
      "Graham Maxwell",
      "Mukesh Ambani",
      "Bill Gates",
      "Rupert Murdoch",
    ],
    correct: 2,
  },
  {
    question: "A cutline under a graphic illustration popularly identified as:",
    options: ["Line cast", "Pictureline", "Legend", "Blackline"],
    correct: 2,
  },
  {
    question: "Columbia Pictures is owned by:",
    options: ["Matsushita", "Seagram", "Sony", "Samsung"],
    correct: 2,
  },
  {
    question: "Events that change people's lives are classified as:",
    options: ["Value", "News", "Lies", "Intro"],
    correct: 1,
  },
  {
    question: "Journalese is known for its:",
    options: ["Complexity", "Simplicity", "Inclusivity", "Exhaustiveness"],
    correct: 1,
  },
  {
    question: "The news agency of Italy is:",
    options: ["DPA", "EFE", "PANA", "ANSA"],
    correct: 3,
  },
  {
    question:
      "------- was the metal used for the matrix of the type-setting machines of yesteryears:",
    options: ["Carbon", "Magnesium", "Lead", "Brass"],
    correct: 2,
  },
  {
    question:
      "Assertion (A): Strike by working journalists can be termed as illegal. Reason (R): If it is resorted to by violating a term of a settlement or during the pendency of arbitration proceedings before an arbitrator.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Mass media audiences are acknowledged of their presence, but scant attention is paid to them. Reason (R): Because mass media are an institutionalized product of a corporate society, it is easy to examine them rather than their audiences.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): It is said that advocacy of communitarian strategy does demand manipulation. Reason (R): Because there is enough literature and also historical evidence to say that it is a viable communication and development policy option.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Foreigners who run newspapers in India are not entitled to the rights guaranteed under Article 19(1)(a) of the Indian Constitution. Reason (R): Because this guarantee is available only to Indian citizens.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): The invasion of privacy does not constitute trespass. Reason (R): Because it is a proprietary right.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): The cross-media ownership has brought a new dimension to the business media management in India. Reason (R): The advertising outlay of corporate houses and the governments has made cross-media ownership highly viable in the country.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): The union government can curtail the space available in a newspaper for advertisement. Reason (R): Though the intention is to prevent unfair competition, it cannot be done by reducing the circulation of a group of newspapers.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      " (A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): The press freedom in India is not absolute. Reason (R): Because the press is subject to the restrictions imposed by the Press Council of India.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): The magic bullet theory considers media institutions as powerful. Reason (R): The mass society concept that members are of uniform characteristics has led to this perception.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question: "Identify the correct sequence of editors of Indian Express.",
    options: [
      "Frank Moraes, V.K. Narasimhan, B.G. Verghese, Arun Shourie",
      "Frank Moraes, B.G. Verghese, V.K. Narasimhan, Arun Shourie",
      "Frank Moraes, Arun Shourie, B.G. Verghese, V.K. Narasimhan",
      "Frank Moraes, V.K. Narasimhan, Arun Shourie, B.G. Verghese",
    ],
    correct: 0,
  },
  {
    question:
      "Identify the correct sequence of communication models that were proposed by scholars:",
    options: [
      "Maxwell McCombs & Donald Shaw, Elihu Katz & Paul Lazarsfeld, Harold Lasswell, David White",
      "Harold Lasswell, David White, Elihu Katz & Paul Lazarsfeld, Maxwell McCombs & Donald Shaw",
      "Elihu Katz & Paul Lazarsfeld, Harold Lasswell, David White, Maxwell McCombs & Donald Shaw",
      "Harold Lasswell, Elihu Katz & Paul Lazarsfeld, David White, Maxwell McCombs & Donald Shaw",
    ],
    correct: 1,
  },
  {
    question: "Find the correct chronological order of the following:",
    options: [
      "The Indian Press Act - The Indian Penal Code - The Press and Registration of Books Act - The Vernacular Press Act",
      "The Indian Penal Code - The Indian Press Act - The Press and Registration of Books Act - The Vernacular Press Act",
      "The Vernacular Press Act - The Indian Penal Code - The Indian Press Act - The Press and Registration of Books Act",
      "The Indian Penal Code - The Press and Registration of Books Act - The Vernacular Press Act - The Indian Press Act",
    ],
    correct: 1,
  },
  {
    question: "Write chronological sequence of evolution of internet:",
    options: [
      "ARPANET, TCP/IP, MILNET, NSFNET",
      "NSFNET, MILNET, TCP/IP, ARPANET",
      "MILNET, ARPANET, NSFNET, MILNET",
      "TCP/IP, NSFNET, ARPANET, MILNET",
    ],
    correct: 0,
  },
  {
    question: "Find the correct chronological order of the following:",
    options: [
      "The Indian Post Office Act - The Official Secrets Act - The Delivery of Books and Newspapers (Public Library) Act - The Young Persons (Harmful Publications) Act",
      "The Official Secrets Act - The Indian Post Office Act - The Delivery of Books and Newspapers (Public Library) Act - The Young Persons (Harmful Publications) Act",
      "The Indian Post Office Act - The Young Persons (Harmful Publications) Act - The Official Secrets Act - The Delivery of Books and Newspapers (Public Library) Act",
      "The Official Secrets Act - The Delivery of Books and Newspapers (Public Library) Act - The Indian Post Office Act - The Young Persons (Harmful Publications) Act",
    ],
    correct: 1,
  },
  {
    question: "Match the following: List-1 (Author) | List-2 (Book)",
    options: [
      "David McClelland - 1. On the theory of social change, Walt Rostow - 2. The achieving society, Everett Hagan - 3. Small is beautiful, E.F. Schumacher - 4. Stages of economic growth",
      "4 2 1 3",
      "2 4 1 3",
      "1 2 3 4",
    ],
    correct: 1,
  },
  {
    question: "Which actress starred in the first film of the following?",
    options: ["1 2 3 4", "3 1 2 4", "3 2 4 2", "4 3 1 2"],
    correct: "Incomplete question",
  },
  {
    question: "Match the following: List-I (Concept) | List-II (Description)",
    options: [
      "Moral Panic - 1. Acting as a mechanism to produce consensus between the state and society, Reality Formation - 2. Reinforcement of a set of dominant values, Ideology endorsement - 3. Production of a set of ideas as to social norms, Social Control - 4. Inducing unfounded anxieties",
      "4 3 2 1",
      "2 3 4 1",
      "3 4 1 2",
    ],
    correct: 0,
  },
  {
    question:
      "Match the following: List-1 (New Leaks/Scandals) | List-11 (Key player)",
    options: [
      "Panama Papers - 1. Edward Snowden, Wikileaks - 2. International Consortium of Investigative Journalism, Pentagon Paper - 3. Julian Assange, NSA surveillance - 4. New York Times",
      "2 3 4 1",
      "3 4 2 1",
      "1 4 3 2",
    ],
    correct: 1,
  },
  {
    question:
      "Match the following: List-I (Common) | List-II (Organisation/Entities)",
    options: [
      "Dotcom - 1. Organisation established by international treaties, Dotnet - 2. Reserved for accredited professionals and related entities, Dotpro - 3. Refers to a network (most of these belong to ISPs), Dotint - 4. Indicates commercial site",
      "1 3 2 4",
      "4 3 2 1",
      "3 2 1 4",
    ],
    correct: 0,
  },
  {
    question:
      "The only English language newspaper that figures in the top ten daily newspapers of India in terms of circulation, as per MURC is ________",
    options: [
      "The Hindustan Times",
      "The Hindu",
      "The Indian Express",
      "The Times of India",
    ],
    correct: 3,
  },
  {
    question: "Internet.org is initiated by:",
    options: [
      "Mark Zuckerberg",
      "Satya Nadella",
      "Tim Berners-Lee",
      "Bill Gates",
    ],
    correct: 0,
  },
  {
    question: "'Reference news' is the most popular newspaper in________",
    options: ["China", "Thailand", "Indonesia", "Malaysia"],
    correct: 3,
  },
  {
    question:
      "In a market-oriented media environment, audiences are considered as ________",
    options: ["Planners", "Consumers", "Deviants", "Sellers"],
    correct: 1,
  },
  {
    question:
      "The new source of television news in the United States is_________",
    options: ["Comedy news", "Tragedy news", "Passive news", "360° news"],
    correct: 0,
  },
  {
    question: "Media output is dominated by _______",
    options: ["Documentaries", "Ethical contents", "Humour", "Genre texts"],
    correct: 3,
  },
  {
    question: "Mint has an exclusive partnership with ________",
    options: [
      "The Washington Post",
      "The Wall Street Journal",
      "The New York Times",
      "The Financial Times",
    ],
    correct: 1,
  },
  {
    question:
      "The audience's evaluation of alternative creative strategies is labelled as_________",
    options: [
      "Concept testing",
      "Audience test",
      "Option matrix",
      "Concurrent test",
    ],
    correct: 0,
  },
  {
    question: "Which of the following statements is incorrect?",
    options: [
      "'Transition' can be described as changing one shot from another",
      "In news, 'cut' is the most commonly used method of transition",
      "'In Camera Edit' means recording your shots in the order in which you want to present",
      "A 'Dissolve' can be made between two shots during 'In Camera Edit'",
    ],
    correct: 2,
  },
  {
    question: "From the viewpoint of communication, myths are _________",
    options: ["Unnatural", "Static", "Dynamic", "Non-controversial"],
    correct: 2,
  },
  {
    question:
      "The 'Vernacular Press Act' of 1878 was scrapped after being in force for________",
    options: ["Twenty years", "Ten years", "Five years", "Three years"],
    correct: 2,
  },
  {
    question:
      "The originator of the limited effects theory of mass media is ________",
    options: [
      "E M Rogers",
      "Paul Lazarsfeld",
      "Harold Innis",
      "Harold Lasswell",
    ],
    correct: 1,
  },
  {
    question: "The hermeneutic theory aims at the systematic ________ of texts",
    options: ["Rejection", "Acceptance", "Interpretation", "Predication"],
    correct: 2,
  },
  {
    question:
      "What should be the level of the sound of a professional audio recording?",
    options: [
      "Between 30 and 40 db",
      "Between 40 and 50 db",
      "Between 50 and 60 db",
      "Between 60 and 70 db",
    ],
    correct: 3,
  },
  {
    question:
      "Segmentations identified by the appeal of the product to their personal interests are known as:",
    options: [
      "Benefit segmentation",
      "Target segmentation",
      "Reach segmentation",
      "Access segmentation",
    ],
    correct: 0,
  },
  {
    question:
      "The highest number of Internet users per 100 inhabitants in the world are in_______",
    options: ["Sweden", "The United States", "Japan", "Iceland"],
    correct: 3,
  },
  {
    question:
      "Image advertising that changes the experience of buying and using a product is identified as __________",
    options: [
      "Ideal advertising",
      "Transformation advertising",
      "Experience advertising",
      "Trade advertising",
    ],
    correct: 1,
  },
  {
    question: "The main objective of Public Relations is to________",
    options: [
      "Increase the sale of manufactured goods",
      "Enhance the image of an organization in the public domain",
      "Make internal politics public",
      "Keep the channels of grapevine open",
    ],
    correct: 1,
  },
  {
    question:
      "The first research effort on war propaganda was conducted by ________",
    options: ["Daniel Lerner", "Elihu Katz", "Carl Hovland", "Walter Lippmann"],
    correct: 2,
  },
  {
    question:
      "Name the author of the book, 'Rise of Network Society' from the following:",
    options: ["Rupert Murdoch", "Steve Jobs", "Manuel Castells", "Bill Gates"],
    correct: 2,
  },
  {
    question: "Images of people are reflected through ________",
    options: ["Neutrality", "Philosophy", "Stereotypes", "Spiral of silence"],
    correct: 2,
  },
  {
    question: "Critical theories of communication are considered as _______",
    options: ["Conventional", "Non-traditional", "Non-cultural", "Political"],
    correct: 1,
  },
  {
    question:
      "The Chanakya Award for excellence in the field of Public Relations is given by ________",
    options: ["INS", "PRSI", "CIC", "PRCI"],
    correct: 3,
  },
  {
    question: "Media texts have _________",
    options: [
      "Material benefit",
      "Borders",
      "Representations",
      "Obtrusive strategies",
    ],
    correct: 2,
  },
  {
    question: "Which one of the following is a social bookmarking site?",
    options: ["Facebook", "Delicious", "Baidu", "WhatsApp"],
    correct: 1,
  },
  {
    question: "Which Hindi film actress was originally named Mahjabeen?",
    options: ["Meena Kumari", "Madhubala", "Nargis", "Geeta Dutt"],
    correct: 0,
  },
  {
    question:
      "The largest market for American television and film contents, as of now, is _______",
    options: ["Africa", "Latin America", "Europe", "Australia"],
    correct: 2,
  },
  {
    question:
      "Assertion (A): Digital India programme has a strong potential of increasing the number of Internet users in India. Reason (R): Initiatives like broadband connectivity, mobile coverage and Internet access will provide a fillip to the usage of Internet in India.",
    options: [
      "Both (A) and (R) are true",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Today's newspapers have adopted compartmentalisation in planning their pages. Reason (R): The modern technology has enabled designers to experiment with their creative ideas of formatting.",
    options: [
      "Both (A) and (R) are true",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Developmental communication needs a complete overhaul to meet the changing economic environs of the developing world. Reason (R): The corporatisation of media management and the domination of electronic media, particularly television, has prompted a re-think in this direction.",
    options: [
      "Both (A) and (R) are true",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true",
    ],
    correct: 1,
  },
  {
    question:
      "Assertion (A): Big newspapers of the country contain more advertisements than news and views. Reason (R): The union government has ideas of re-introducing the price-page schedule to limit the wastage of precious newspaper space.",
    options: [
      "Both (A) and (R) are true",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Typefaces selected for printing a newspaper enable its distinct appearance. Reason (R): Typefaces of different fonts have their own personality, which in turn reflects the newspaper's personality.",
    options: [
      "Both (A) and (R) are true",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): The language of English magazines in India is only for the elites, not for common masses. Reason (R): Since the English educated are rich, their language level is high and naturally these magazines use impressive language.",
    options: [
      "Both (A) and (R) are true",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true",
    ],
    correct: 1,
  },
  {
    question:
      "Assertion (A): The readability tests have no relevance as far as Indian newspapers are concerned. Reason (R): In a multi-lingual context, such an effort is difficult.",
    options: [
      "Both (A) and (R) are true",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): The Indian law of copyright needs a thorough revamp. Reason (R): The digital technology has made the people adopt unfair means for piracy, especially in the film industry.",
    options: [
      "Both (A) and (R) are true",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true",
    ],
    correct: 0,
  },
  {
    question: "Find out the correct sequence of the following radio stations:",
    options: [
      "FM Chennai, FM Jalandhar, FM Rainbow, FM Gold",
      "FM Gold, FM Chennai, FM Jalandhar, FM Rainbow",
      "FM Rainbow, FM Gold, FM Chennai, FM Jalandhar",
      "FM Jalandhar, FM Rainbow, FM Gold, FM Chennai",
    ],
    correct: 2,
  },
  {
    question: "Write the correct sequence of the following women's magazines:",
    options: [
      "Woman's Era, Femina, Elle, Manushi",
      "Femina, Woman's Era, Manushi, Elle",
      "Manushi, Elle, Woman's Era, Femina",
      "Elle, Manushi, Femina, Woman's Era",
    ],
    correct: 1,
  },
  {
    question: "Write the correct sequence of the following theories:",
    options: [
      "Diffusion of Innovation, Uses and Gratification, Agenda-Setting, Cultivation",
      "Agenda-Setting, Cultivation, Diffusion of Innovation, Uses and Gratification",
      "Cultivation, Diffusion of Innovation, Uses and Gratification, Agenda-Setting",
      "Uses and Gratification, Cultivation, Agenda-Setting, Diffusion of Innovation",
    ],
    correct: 0,
  },
  {
    question:
      "Write the correct chronological order of the following statutes:",
    options: [
      "Right to Information Act, Contempt of Court Act, Official Secrets Act, The Press and Registration of Books Act",
      "The Press and Registration of Books Act, Official Secrets Act, Contempt of Court Act, Right to Information Act",
      "Official Secrets Act, Contempt of Court Act, Right to Information Act, The Press and Registration of Books Act",
      "Contempt of Court Act, Right to Information Act, The Press and Registration of Books Act, Official Secrets Act",
    ],
    correct: 1,
  },
  {
    question: "Write the correct chronological order of the following books:",
    options: [
      "Media and Communication Research Methods, Public Opinion, Mass Communication Research, Four Theories of the Press",
      "Four Theories of the Press, Public Opinion, Media and Communication Research Methods, Mass Communication Research",
      "Public Opinion, Four Theories of the Press, Mass Communication Research, Media and Communication Research Methods",
      "Four Theories of the Press, Public Opinion, Mass Communication Research, Media and Communication Research Methods",
    ],
    correct: 2,
  },
  {
    question: "Media texts are considered as",
    options: ["Confabulatory", "Paradoxical", "Stable", "Unconfined"],
    correct: 1,
  },
  {
    question:
      "When most of us believe that other people are much more likely to be affected by media than ourselves, it is called",
    options: [
      "First person effect",
      "Second person effect",
      "Third person effect",
      "Impersonal effect",
    ],
    correct: 2,
  },
  {
    question:
      "According to semiologists, myths, artworks and subcultures are considered as",
    options: [
      "co-alitions",
      "non-variables",
      "languages",
      "non-cultural forms",
    ],
    correct: 2,
  },
  {
    question:
      "______ says that media do not influence the audience in any meaningful manner.",
    options: ["Revivalism", "New revivalism", "Orientalism", "New revisionism"],
    correct: 3,
  },
  {
    question: "The dominant code conveys the society's",
    options: [
      "subsidiary readings",
      "preferred readings",
      "non-selective readings",
      "incompatible readings",
    ],
    correct: 1,
  },
  {
    question:
      "The Hawthorne Effect says that we do not always need to communicate",
    options: ["words", "media", "communicators", "action"],
    correct: 0,
  },
  {
    question:
      "A system of ideas, assumptions and beliefs in communication is known as",
    options: ["Genre", "Ideology", "Code", "Convention"],
    correct: 1,
  },
  {
    question: "The editor of DNA is",
    options: ["Aditya Sinha", "Deepak Rathi", "M D Poddar", "C P Surendran"],
    correct: 3,
  },
  {
    question:
      "The English newspaper that decided to drop the publication of editorials in 2010 was",
    options: ["The Times of India", "The Evening News", "DNA", "The Hindu"],
    correct: 2,
  },
  {
    question: "Zee TV had content partnership with",
    options: ["NHK", "Sahara", "Media pro", "Media Lab"],
    correct: 2,
  },
  {
    question:
      "The Bombay Times, the forerunner of The Times of India, was initially a",
    options: ["weekly", "fortnightly", "monthly", "quarterly"],
    correct: 0,
  },
  {
    question:
      "The post-positivist theory recognises that human behaviour is not like the elements of the physical world",
    options: ["transient", "ambiguous", "negative", "constant"],
    correct: 1,
  },
  {
    question: "The cultural and creative media products are referred to as",
    options: ["virtual power", "economic power", "horse power", "soft power"],
    correct: 3,
  },
  {
    question:
      "Normative media theory explains how a media system should operate to realise",
    options: [
      "economic goals",
      "political strategies",
      "ideal social values",
      "legal frameworks",
    ],
    correct: 2,
  },
  {
    question:
      "The goal of critical theory in communication is deemed to change the existing",
    options: [
      "administrators",
      "realities",
      "societal priorities",
      "exchange values",
    ],
    correct: 1,
  },
  {
    question: "A television programme becomes a text when it activates",
    options: ["profit motives", "meanings", "producers", "channels"],
    correct: 1,
  },
  {
    question: "The Human Development Index was created by:",
    options: [
      "Mehbub-ul-Haq and Meghnad Desai",
      "Mohammed Yunus and Amartya Sen",
      "Amartya Sen and Mehbub-ul-Haq",
      "Manmohan Singh and Keith Griffin",
    ],
    correct: 2,
  },
  {
    question:
      "The Diffusion of Innovation Theory recognises non-adopters of innovations as",
    options: ["majority", "minority", "late adopters", "laggards"],
    correct: 3,
  },
  {
    question:
      "Identify the person who defined development communication for the first time in 1970s",
    options: [
      "Christina Ogan",
      "Rosemary Righter",
      "Nora C Quebral",
      "William Hachten",
    ],
    correct: 2,
  },
  {
    question: "Identify a major element of research design from the following:",
    options: ["history", "instrumentation", "manipulation", "maturity"],
    correct: 1,
  },
  {
    question: "Analytical studies aim at interpreting",
    options: [
      "history",
      "relationships",
      "confounding variables",
      "publicity programmes",
    ],
    correct: 1,
  },
  {
    question:
      "Informal interviews with experienced persons in the area of research form the basis of",
    options: [
      "experience survey",
      "literature survey",
      "non-descriptive survey",
      "non-contributory survey",
    ],
    correct: 0,
  },
  {
    question: "In research, abstract models are not applied to",
    options: [
      "non-causal relations",
      "conceptual issues",
      "elements of reasoning",
      "real problems",
    ],
    correct: 3,
  },
  {
    question:
      "In social science research, the concept of Verstehen was promoted by",
    options: ["James Carey", "James Curran", "Max Weber", "Leslie Fielden"],
    correct: 2,
  },
  {
    question:
      "The list of population elements from which the sample is drawn is called",
    options: [
      "population register",
      "sample register",
      "sampling frame",
      "population frame",
    ],
    correct: 2,
  },
  {
    question: "In media research, conclusions from induction are",
    options: ["illogical", "tentative", "eternal", "non-operative"],
    correct: 1,
  },
  {
    question:
      "The constant comparative analysis is involved in ________ approach",
    options: [
      "the agenda-setting",
      "personal effects",
      "positivist",
      "grounded theory",
    ],
    correct: 3,
  },
  {
    question:
      "The test normally used to find out the significance of mean difference among four independent variables is",
    options: [
      "Z-test",
      "Chi-square test",
      "Partial correlation",
      "Analysis of variance",
    ],
    correct: 3,
  },
  {
    question:
      "The probability of rejecting the null hypothesis when it is true is called",
    options: ["co-variation", "assumption", "power", "chance value"],
    correct: 2,
  },
  {
    question: "The biggest television network of the world is",
    options: ["MTV", "Discovery", "CNN International", "BBC TV"],
    correct: 3,
  },
  {
    question: "Harold Innis published the work",
    options: [
      "Mass Communication Theory",
      "Introduction to Mass Media",
      "Power Elite",
      "The Bias of Communication",
    ],
    correct: 3,
  },
  {
    question:
      "What is the standard ratio of inserts to script in a documentary?",
    options: [
      "2 minutes of inserts for every minute of script",
      "3 minutes of inserts for every minute of script",
      "5 minutes of inserts for every minute of script",
      "4 minutes of inserts for every minute of script",
    ],
    correct: 1,
  },
  {
    question:
      "What is the ideal distance between the lips and the microphone to record good quality sound?",
    options: ["3 inches", "4 inches", "5 inches", "6 inches"],
    correct: 1,
  },
  {
    question:
      "Identify the person who said, 'I don't want to live in a world where everything that I say, everything I do, everything I talk to, every expression of creativity or love or friendship is recorded.'",
    options: [
      "Julian Assange",
      "Luke Harding",
      "Edward Snowden",
      "Eric Schmidt",
    ],
    correct: 2,
  },
  {
    question:
      "In the age of Television Journalism, visual reporter is synonymous with:",
    options: [
      "Camera person",
      "Non-linear editor",
      "TV producer",
      "Output editor",
    ],
    correct: 0,
  },
  {
    question: "Advertising reflects the ideology of",
    options: ["consumers", "regulators", "publicists", "market-place"],
    correct: 3,
  },
  {
    question: "The Starch test is applied only to media ads",
    options: ["print", "outdoor", "broadcast", "transit"],
    correct: 0,
  },
  {
    question:
      "A rational message with a strong argument calling for action is known as",
    options: ["market sell", "hard sell", "soft sell", "clear sell"],
    correct: 1,
  },
  {
    question:
      "A document that outlines the message strategy decisions behind an individual advertisement is known as",
    options: [
      "creative concept",
      "creative platform",
      "creative synopsis",
      "creative document",
    ],
    correct: 1,
  },
  {
    question:
      "A single frame of a commercial that summarizes the core message is labeled as",
    options: ["gist", "basic themes", "canned copy", "key frame"],
    correct: 3,
  },
  {
    question:
      "People and media organisations that move products from producers to consumers are called",
    options: ["sellers", "conduits", "suppliers", "channels"],
    correct: 3,
  },
  {
    question:
      "An index that identifies the demand for a brand within a region is identified as",
    options: [
      "brand deposition index",
      "brand demand index",
      "brand development index",
      "brand disposition index",
    ],
    correct: 2,
  },
  {
    question:
      "An advertising scheduling pattern that has a period of intensified activity is popularly called",
    options: [
      "experimental schedule",
      "flight",
      "intensive burst",
      "focused campaign",
    ],
    correct: 1,
  },
  {
    question: "Mechanical reproduction in communication leads to",
    options: ["denotation", "connotation", "notation", "selection"],
    correct: 0,
  },
  {
    question: "_____ has written the book, Newsman's English.",
    options: [
      "Mitchel V Charnley",
      "Bruce Westley",
      "John Hohenberg",
      "Harold Evans",
    ],
    correct: 0,
  },
  {
    question: "Demy octavo is a size suitable for printing",
    options: ["newspapers", "posters", "books", "tabloids"],
    correct: 2,
  },
  {
    question: "Image transfer onto the rubber blanket is done in printing",
    options: ["rotary", "offset", "gravure", "screen"],
    correct: 1,
  },
  {
    question:
      "Who developed the method of 'Reading Ease Score' as related to news agency copy?",
    options: [
      "Robert Gunning",
      "Charles Brown",
      "C D Mac Dougall",
      "Rudolf Flesch",
    ],
    correct: 3,
  },
  {
    question: "The widely used writing technique for an interview copy is",
    options: ["descriptive", "anecdotal", "interrogative", "metaphorical"],
    correct: 1,
  },
  {
    question: "Syndicates decide",
    options: [
      "Which news stories to publish or reject",
      "Which subjects should be reported in media",
      "Which news articles or features should be released to newspapers and other news organisations",
      "Which copy of Press Information Bureau should reach news media and which should not",
    ],
    correct: 2,
  },
  {
    question:
      "Assertion (A): Electronic media have sidelined the traditional folk media and there is a fear of their disappearance from India. Reason (R): The visual element of electronic media has its 'opium effect' on the masses and it is but natural that traditional folk media will become a thing of the past.",
    options: [
      "Both (A) and (R) are true",
      "Both (A) and (R) are true, but (R) is the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true",
    ],
    correct: 1,
  },
  {
    question:
      "Assertion (A): FM radio in India is an urban phenomenon. Reason (R): Lack of advertising revenue is one of the major reasons for the present flux in FM broadcasting in India.",
    options: [
      "Both (A) and (R) are true",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true",
    ],
    correct: 1,
  },
  {
    question:
      "Assertion (A): The professional organisations of media have not done much to improve the standard of media education in India. Reason (R): The professional organisations of media do not have committed professionals to work for the cause of professionalisation of Indian media education.",
    options: [
      "Both (A) and (R) are true",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true",
    ],
    correct: 1,
  },
  {
    question:
      "Assertion (A): The measurement of variables, both social and psychological, in media research, is a tough proposition. Reason (R): Because most properties and objects in social science disciplines are abstract.",
    options: [
      "Both (A) and (R) are true",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Media distribution and consumption reflect a process of de-territorialisation. Reason (R): Spatial location is not a justifiable argument for the dominance of the US in the distribution of media products.",
    options: [
      "Both (A) and (R) are true",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true",
    ],
    correct: 1,
  },
  {
    question:
      "Assertion (A): India's film factory has become a global player, both economically and culturally. Reason (R): The Indian film industry has adjusted its format to the global popular culture.",
    options: [
      "Both (A) and (R) are true",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true",
    ],
    correct: 1,
  },
  {
    question:
      "Assertion (A): There is an urgent need for a law of privacy in India. Reason (R): As most media outlets, especially electronic, have opted for blatant sensationalism, the proposition needs a global consideration.",
    options: [
      "Both (A) and (R) are true",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true",
    ],
    correct: 1,
  },
  {
    question:
      "Assertion (A): The Press Council of India has outlived its utility. Reason (R): The new technology has made ethical issues of the press even more complex.",
    options: [
      "Both (A) and (R) are true",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true",
    ],
    correct: 1,
  },
  {
    question:
      "Assertion (A): The mass media and politics in India are intertwined. Reason (R): Indian masses are highly politically charged in their day-to-day affairs, and depend upon mass media for the purpose.",
    options: [
      "Both (A) and (R) are true",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true",
    ],
    correct: 1,
  },
  {
    question:
      "Assertion (A): If opinion polls are obscene, exit polls are vulgar, specifically in the Indian context. Reason (R): Indian media have their own limitations to conduct opinion and exit polls.",
    options: [
      "Both (A) and (R) are true",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A)",
      "(A) is true, but (R) is false",
      "(A) is false, but (R) is true",
    ],
    correct: 1,
  },
  {
    question:
      "Write the correct chronological sequence of the following editors of The Indian Express:",
    options: [
      "Frank Moraes, V K Narasimhan, Shekhar Gupta, Rajkamal Jha",
      "V K Narasimhan, Shekhar Gupta, Rajkamal Jha, Frank Moraes",
      "Shekhar Gupta, Rajkamal Jha, Frank Moraes, V K Narasimhan",
      "Rajkamal Jha, V K Narasimhan, Frank Moraes, Shekhar Gupta",
    ],
    correct: 0,
  },
  {
    question: "Write the correct sequence of the following theories:",
    options: [
      "Social learning theory, social identity theory, social representation theory, social cognitive theory",
      "Social cognitive theory, social learning theory, social identity theory, social representation theory",
      "Social representation theory, social cognitive theory, social learning theory, social identity theory",
      "Social identity theory, social representation theory, social cognitive theory, social learning theory",
    ],
    correct: 0,
  },
  {
    question:
      "Write the correct chronological order of the following newspapers:",
    options: [
      "Deccan Herald, Deccan Chronicle, DNA, Asian Age",
      "Deccan Chronicle, Deccan Herald, Asian Age, DNA",
      "DNA, Deccan Herald, Deccan Chronicle, Asian Age",
      "Asian Age, Deccan Chronicle, DNA, Deccan Herald",
    ],
    correct: 0,
  },
  {
    question:
      "Identify the correct order of the following newspapers circulation-wise, as per ABC (2014) figures:",
    options: [
      "Dainik Bhaskar, Dainik Jagran, Hindustan, Malayala Manorama",
      "Malayala Manorama, Dainik Bhaskar, Dainik Jagran, Hindustan",
      "Dainik Jagran, Hindustan, Malayala Manorama, Dainik Bhaskar",
      "Hindustan, Malayala Manorama, Dainik Bhaskar, Dainik Jagran",
    ],
    correct: 0,
  },
  {
    question: "Write the correct sequence of the following committees:",
    options: [
      "Vidyalankar Committee, RR Diwakar Committee, Kuldip Nayyar Committee, Parthasarathi Committee",
      "Parthasarathi Committee, Vidyalankar Committee, RR Diwakar Committee, Kuldip Nayyar Committee",
      "Kuldip Nayyar Committee, Parthasarathi Committee, Vidyalankar Committee, RR Diwakar Committee",
      "RR Diwakar Committee, Kuldip Nayyar Committee, Parthasarathi Committee, Vidyalankar Committee",
    ],
    correct: 0,
  },
  {
    question: "Match the following: List - I (Author) - List - II (Idea)",
    options: [
      "(iii) (iv) (i) (ii)",
      "(iv) (i) (ii) (iii)",
      "(i) (ii) (iv) (iii)",
      "(ii) (iii) (i) (iv)",
    ],
    correct: 1,
  },
  {
    question: "Match the following: List - I (Author) - List - II (Concept)",
    options: [
      "(i) (ii) (iii) (iv)",
      "(ii) (iii) (iv) (i)",
      "(iii) (i) (ii) (iv)",
      "(iv) (iii) (i) (ii)",
    ],
    correct: 2,
  },
  {
    question:
      "Match the following: List - I (Media Channel) - List - II (Country/Area)",
    options: [
      "(i) (ii) (iii) (iv)",
      "(ii) (iii) (iv) (i)",
      "(iii) (iv) (i) (ii)",
      "(iv) (i) (ii) (iii)",
    ],
    correct: 3,
  },
  {
    question: "Match the following: List - I (Model) - List - II (Elements)",
    options: [
      "(i) (iv) (ii) (iii)",
      "(iv) (iii) (ii) (i)",
      "(iii) (ii) (i) (iv)",
      "(ii) (i) (iii) (iv)",
    ],
    correct: 1,
  },
  {
    question:
      "Match the following: List - I (Types of Validity) - List - II (Characteristic)",
    options: [
      "(i) (iii) (iv) (ii)",
      "(ii) (iii) (i) (iv)",
      "(iii) (iv) (i) (ii)",
      "(iv) (i) (ii) (iii)",
    ],
    correct: 2,
  },
  {
    question:
      "Narrowing the communication gap between high and low segments of socio-economic status through redundancy in communication messages is called:",
    options: [
      "the entropy net",
      "the communication loop",
      "the ceiling effect",
      "the macro strategy",
    ],
    correct: 2,
  },
  {
    question: "The presentational media produce ________ of communication.",
    options: ["acts", "artificial languages", "passivity", "physical noise"],
    correct: 2,
  },
  {
    question:
      "The different readings of the audience derived from different sub-cultural experiences are called:",
    options: [
      "independent understanding",
      "differentiation",
      "aberrant decoding",
      "conviction",
    ],
    correct: 2,
  },
  {
    question: "The prosodic codes that affect the meaning of the words are:",
    options: [
      "letters and words",
      "pitch and stress",
      "proximity and orientation",
      "age and maturity",
    ],
    correct: 1,
  },
  {
    question: "The ABX model of Newcomb proposes to maintain:",
    options: [
      "the existing political system",
      "the economic stability",
      "social equilibrium",
      "cultural diversity",
    ],
    correct: 2,
  },
  {
    question: "The concept of two orders of signification was formulated by:",
    options: ["Denis McQuail", "C.S. Pierce", "Roland Barthes", "John Fiske"],
    correct: 2,
  },
  {
    question:
      "In Shannon and Weaver's model of communication, level C deals with the problem of:",
    options: ["transmission", "effectiveness", "entropy", "correction"],
    correct: 1,
  },
  {
    question: "High predictability in communication will lead to:",
    options: ["notionality", "entropy", "redundancy", "propaganda"],
    correct: 2,
  },
  {
    question: "In language, vocabulary is:",
    options: ["comprehensive", "constructive", "intrusive", "the paradigm"],
    correct: 3,
  },
  {
    question:
      "The study of touching behavior in non-verbal communication is known as:",
    options: ["haptics", "proxemics", "chronemics", "oculesics"],
    correct: 0,
  },
  {
    question: "Delayed drop refers to:",
    options: [
      "intro",
      "news features",
      "news stories",
      "human interest stories",
    ],
    correct: 2,
  },
  {
    question: "Vox pop is usually accompanied by:",
    options: ["cartoons", "photographs", "graphics", "statistics"],
    correct: 1,
  },
  {
    question: "In newspaper design, weight means:",
    options: [
      "physical weight",
      "light weight",
      "optical weight",
      "story weight",
    ],
    correct: 2,
  },
  {
    question: "The online comic strip 'Angry Little Girls' was produced by:",
    options: ["Lela Lee", "Symond Lea", "Guy Aoki", "Glen Choi"],
    correct: 0,
  },
  {
    question: "Nair and White have offered a model of communication which is:",
    options: ["unilinear", "horizontal", "transactional", "circular"],
    correct: 2,
  },
  {
    question: "The idea of participation for liberation was advocated by:",
    options: ["Paulo Freire", "E.M. Rogers", "A.G. Frank", "A.A. Berger"],
    correct: 0,
  },
  {
    question: "Denis Goulet explained the concept of:",
    options: [
      "modernisation",
      "backwardness",
      "real development",
      "developmentalism",
    ],
    correct: 2,
  },
  {
    question:
      "The who-to-who communication matrix within the total system is labelled as:",
    options: [
      "focal inquiry",
      "network analysis",
      "socio-metric fit",
      "structural dynamism",
    ],
    correct: 1,
  },
  {
    question:
      "The prescription of Daniel Lerner for development was criticised as:",
    options: ["political", "autonomous", "anarchic", "ethno-centric"],
    correct: 3,
  },
  {
    question:
      "The Sarvodaya movement in Sri Lanka adopted ________ model of communication.",
    options: ["The Hindu", "The Christian", "The Islamic", "The Buddhist"],
    correct: 3,
  },
  {
    question:
      "The principle that a researcher should not increase assumptions than the minimum required is referred to as:",
    options: ["sample quota", "test sample", "Occam's razor", "golden mean"],
    correct: 2,
  },
  {
    question:
      "A possible, but incorrect explanation of research results is called:",
    options: [
      "internal variable",
      "confounding variable",
      "independent variable",
      "dependent variable",
    ],
    correct: 1,
  },
  {
    question: "Factor analysis is used for:",
    options: [
      "data entry",
      "data distribution",
      "data reduction",
      "data separation",
    ],
    correct: 2,
  },
  {
    question: "The word 'cinema' was coined in:",
    options: [
      "The United States",
      "The Soviet Union",
      "Great Britain",
      "France",
    ],
    correct: 3,
  },
  {
    question: "John Grierson coined the term:",
    options: [
      "'feature film'",
      "'documentary'",
      "'short feature'",
      "'drama of life'",
    ],
    correct: 1,
  },
  {
    question: "The film movement of neo-realism began with:",
    options: [
      "Roberto Rossellini",
      "Vittorio De Sica",
      "Cesare Zavattini",
      "Arthur Bannister",
    ],
    correct: 0,
  },
  {
    question: "The first act of the screenplay is known as:",
    options: ["intro", "first point", "prologue", "set up"],
    correct: 3,
  },
  {
    question: "The alternative (theoretical) model of news sequence is:",
    options: [
      "events, news criteria, news report, news interest",
      "news interest, news criteria, events, news report",
      "news report, events, news criteria, news interest",
      "news criteria, news interest, events, news report",
    ],
    correct: 3,
  },
  {
    question:
      "Section 499 of the Indian penal code contains the criminal law related to:",
    options: [
      "contempt of court",
      "defence of India",
      "official secrets",
      "defamation",
    ],
    correct: 3,
  },
  {
    question: "The Elaboration Likelihood Model (ELM) examines:",
    options: [
      "the ways in which people are persuaded",
      "the ways in which people are provoked",
      "the ways in which people are motivated",
      "the ways in which people are misguided",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Public relations is a corporate strategy of mind management. Reason (R): It is a profession based on truth, knowledge and accurate communication. Codes:",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Most communication research studies are considered as lopsided. Reason (R): The studies mainly focus on media exposure, but not on the internalisation of contents. Codes:",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): The concept of developmental communication has become redundant in the present day scenario. Reason (R): The trend towards transnational capitalism and commodity fetishism have become more pronounced than ever before, bursting aside all ideological debates. Codes:",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Mass media are powerful political instruments in a popular democracy. Reason (R): Because they can always be effectively used to manipulate people's opinions and behaviours. Codes:",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): An attitude is a learned pre-disposition to react to objects favourably or negatively, in advertising. Reason (R): Normally attitude change has been seen as the precursor to behaviour change. Codes:",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Identify the correct chronological order of the following communication models:",
    options: [
      "HUB, Schramm's, Shannon and Weaver, Westley and MC Lean",
      "Schramm's, Shannon and Weaver, HUB, Westley and MC Lean",
      "Westley and MC Lean, Schramm, Shannon and Weaver, HUB",
      "Shannon and Weaver, Schramm's, Westley and MC Lean, HUB",
    ],
    correct: 3,
  },
  {
    question:
      "Identify the correct chronological sequence of the following professional organisations:",
    options: [
      "Public Relations Society of India, Editors' Guild, All India Editors' Conference, Advertising Standards Council of India.",
      "Advertising Council of India, Editors' Guild, Public Relations Society of India, All India Editors' Conference.",
      "All India Editors' Conference, Public Relations Society of India, Editors' Guild, Advertising Standards Council of India.",
      "Editors' Guild, Public Relations Society of India, All India Editors' Conference, Advertising Standards Council of India.",
    ],
    correct: 2,
  },
  {
    question:
      "Find out the correct sequence of the five stages of Heath's Cyclical model of activism in PR:",
    options: [
      "Strain, Mobilisation, Confrontation, Negotiation, Resolution.",
      "Mobilisation, Confrontation, Negotiation, Resolution, Strain.",
      "Resolution, Confrontation, Mobilisation, Negotiation, Strain.",
      "Confrontation, Strain, Mobilisation, Negotiation, Resolution.",
    ],
    correct: 0,
  },
  {
    question:
      "Write the correct chronological order of the following magazines:",
    options: [
      "The Illustrated Weekly of India, India Today, Frontline, The Week.",
      "Frontline, The Week, India Today, The Illustrated Weekly of India.",
      "India Today, The Week, Frontline, The Illustrated Weekly of India.",
      "The Week, Frontline, The Illustrated Weekly of India, India Today.",
    ],
    correct: 0,
  },
  {
    question: "Identify the chronological order of the following publications:",
    options: [
      "Four Arguments Against Television, Public Opinion, Passing of the Traditional Society, Professional Journalist.",
      "Professional Journalist, Passing of the Traditional Society, Four Arguments Against Television, Public Opinion.",
      "Passing of the Traditional Society, Public Opinion, Professional Journalist, Four Arguments Against Television.",
      "Public Opinion, Passing of the Traditional Society, Professional Journalist, Four Arguments Against Television.",
    ],
    correct: 3,
  },
  {
    question: "Match the following: (List I) - (List II)",
    options: [
      "Restricted code (iv), Broadcast code (i), Aesthetic code (ii), Arbitrary code (iii)",
      "Restricted code (iii), Broadcast code (ii), Aesthetic code (iv), Arbitrary code (i)",
      "Restricted code (ii), Broadcast code (i), Aesthetic code (iii), Arbitrary code (iv)",
      "Restricted code (i), Broadcast code (iii), Aesthetic code (iv), Arbitrary code (ii)",
    ],
    correct: 0,
  },
  {
    question: "Match the following: Producer - Film produced",
    options: [
      "Georges Melies (i), Edwin S. Porter (iii), D.W. Griffith (iv), Charlie Chaplin (ii)",
      "Georges Melies (ii), Edwin S. Porter (iii), D.W. Griffith (i), Charlie Chaplin (iv)",
      "Georges Melies (iv), Edwin S. Porter (iii), D.W. Griffith (ii), Charlie Chaplin (i)",
      "Georges Melies (ii), Edwin S. Porter (i), D.W. Griffith (iv), Charlie Chaplin (iii)",
    ],
    correct: 1,
  },
  {
    question: "Match List - I with List – II: Model - Inventor",
    options: [
      "Pyramid model of PR research (ii), Effective yardstick model (iii), Short-term and continuing model (iv), Preparation, implementation and impact model (i)",
      "Pyramid model of PR research (iii), Effective yardstick model (ii), Short-term and continuing model (i), Preparation, implementation and impact model (iv)",
      "Pyramid model of PR research (i), Effective yardstick model (iv), Short-term and continuing model (iii), Preparation, implementation and impact model (ii)",
      "Pyramid model of PR research (iv), Effective yardstick model (i), Short-term and continuing model (ii), Preparation, implementation and impact model (iii)",
    ],
    correct: 0,
  },
  {
    question: "Match the following: Director - Film",
    options: [
      "Sergei M. Eisenstein (iii), Vsevlod Pudovkin (iv), Fritz Lang (i), Orson Welles (ii)",
      "Sergei M. Eisenstein (ii), Vsevlod Pudovkin (iii), Fritz Lang (iv), Orson Welles (i)",
      "Sergei M. Eisenstein (ii), Vsevlod Pudovkin (i), Fritz Lang (iii), Orson Welles (iv)",
      "Sergei M. Eisenstein (iii), Vsevlod Pudovkin (iv), Fritz Lang (ii), Orson Welles (i)",
    ],
    correct: 3,
  },
  {
    question: "Match the following: Personality - Focus area",
    options: [
      "Jacques Derrida (ii), Noam Chomsky (iii), Van Dijk (i), Ferdinand de Saussure (iv)",
      "Jacques Derrida (i), Noam Chomsky (iii), Van Dijk (iv), Ferdinand de Saussure (ii)",
      "Jacques Derrida (iv), Noam Chomsky (i), Van Dijk (ii), Ferdinand de Saussure (iii)",
      "Jacques Derrida (iii), Noam Chomsky (ii), Van Dijk (iv), Ferdinand de Saussure (i)",
    ],
    correct: 2,
  },
  {
    question: "Non-verbal communication is done through _____ codes.",
    options: ["critical", "preferential", "legal", "moral"],
    correct: 1,
  },
  {
    question: "The concept of valid knowledge is discussed as part of :",
    options: [
      "political communication",
      "cultural communication",
      "structural communication",
      "post-structuralist communication",
    ],
    correct: 3,
  },
  {
    question:
      "A dynamic interaction between reader and message will result in :",
    options: ["conflict", "similarity", "meaning", "focus"],
    correct: 2,
  },
  {
    question:
      "The interpretation of information in a way that is consistent with the person's existing opinion is described as :",
    options: [
      "selective exposure",
      "selective matching",
      "selective sampling",
      "selective distortion",
    ],
    correct: 3,
  },
  {
    question: "The concept of development emanated directly from theories of :",
    options: [
      "economic take-off",
      "political power",
      "nationalism",
      "social evolution",
    ],
    correct: 3,
  },
  {
    question: "Developmental reporting has the element of :",
    options: ["bias", "modelling", "advocacy", "repetition"],
    correct: 2,
  },
  {
    question: "In the organic model of development, the beneficiaries become :",
    options: ["listeners", "viewers", "communicators", "consumers"],
    correct: 2,
  },
  {
    question:
      "When an outsider questions the meanings and methods of the project for verification purpose, it is called :",
    options: [
      "external audit",
      "outsider brief",
      "debriefing",
      "pool vigilance",
    ],
    correct: 0,
  },
  {
    question:
      "The concept of central limit theorem helps in the computation of :",
    options: [
      "confidence level",
      "confidence interval",
      "random error",
      "sampling error",
    ],
    correct: 1,
  },
  {
    question: "The present Chairman of the Press Council of India is :",
    options: [
      "Justice Markandeya Katju",
      "Justice C.K. Prasad",
      "Justice A. Parashar",
      "Justice Ruma Pal",
    ],
    correct: 1,
  },
  {
    question:
      "The professional body, Public Relations Circle, was established at :",
    options: ["Mumbai", "Kolkata", "Chennai", "Hyderabad"],
    correct: 0,
  },
  {
    question:
      "The first public sector institution to employ public relations practices in India was:",
    options: [
      "Indian Railways",
      "Bharat Electronics Limited",
      "Hindustan Aeronautics Limited",
      "Bharat Heavy Electricals Limited",
    ],
    correct: 0,
  },
  {
    question:
      "The first country to envisage a computeropolis to manage the future activities of an information society is:",
    options: ["The United States", "France", "South Korea", "Japan"],
    correct: 3,
  },
  {
    question:
      "Contestation over symbols, language and representation in media is known as:",
    options: [
      "media activism",
      "mediascape",
      "media pedagogy",
      "media construction",
    ],
    correct: 1,
  },
  {
    question: "Most case studies involve:",
    options: [
      "concealment",
      "inductive reasoning",
      "non-procedural inquiry",
      "philosophical backgrounding",
    ],
    correct: 1,
  },
  {
    question: "Who described media contents as cultural products?",
    options: ["Marshal McLuhan", "E.M. Rogers", "Newcomb", "Theodor Adorno"],
    correct: 3,
  },
  {
    question:
      "In the case of Ministry of Information and Broadcasting Vs. Cricket Association of Bengal, the Supreme Court judgement led to:",
    options: [
      "censorship of foreign journals",
      "freeing electronic media from government monopoly",
      "imposition of surcharge on media advertisements",
      "restriction of media coverage of cricket matches",
    ],
    correct: 1,
  },
  {
    question: "The Press Council of India is a:",
    options: [
      "non-judicial body",
      "private entity",
      "non-statutory body",
      "quasi-judicial body",
    ],
    correct: 3,
  },
  {
    question: "The Central Board of Information was the forerunner of:",
    options: [
      "Press Information Bureau",
      "Directorate of Information and Broadcasting",
      "War Publicity Board",
      "FICCI",
    ],
    correct: 0,
  },
  {
    question: "Who wrote the book, The Media and Democracy?",
    options: [
      "John F. Kennedy",
      "John Keane",
      "Walter Lippmann",
      "Herbert Gans",
    ],
    correct: 1,
  },
  {
    question: "Intensity sampling is used in:",
    options: [
      "heuristic research",
      "exploratory research",
      "diagnostic research",
      "historical research",
    ],
    correct: 1,
  },
  {
    question:
      "The cumulative scale in social science research was developed by:",
    options: ["L.L. Thurstone", "Likert", "Louis Guttman", "Charles E. Osgood"],
    correct: 2,
  },
  {
    question:
      "The correlation computed between pairs of variables is known as:",
    options: [
      "Q type factor analysis",
      "R type factor analysis",
      "P type factor analysis",
      "S type factor analysis",
    ],
    correct: 1,
  },
  {
    question:
      "Before a case study researcher conducts a pilot study, he must construct a:",
    options: [
      "study protocol",
      "classic research design",
      "historical diary",
      "legal code",
    ],
    correct: 0,
  },
  {
    question:
      "Gender is a/an ______ level of measurement in mass communication research.",
    options: ["nominal", "ordinal", "intermediate", "ratio"],
    correct: 0,
  },
  {
    question: "One-tailed test and two-tailed test are associated with:",
    options: ["Causation", "concepts", "constructs", "hypothesis"],
    correct: 3,
  },
  {
    question:
      "In Jakobson's model, the constitutive factors in an act of communication number is:",
    options: ["three", "four", "five", "six"],
    correct: 3,
  },
  {
    question:
      "The rights granted under Article 19 of the Indian constitution are available to:",
    options: [
      "corporate persons only",
      "legal persons only",
      "Indian citizens only",
      "non-Indians also",
    ],
    correct: 2,
  },
  {
    question:
      "The Freudian concept of 'The desire to see the unseeable', is one of the leading arguments behind the nature of the pleasure of the media text. It is called:",
    options: ["Minia", "Scophophilia", "Hydrophobia", "Hyper-reality"],
    correct: 1,
  },
  {
    question:
      "The test that involves placing two versions of an advertisement in the same issue of a newspaper is called:",
    options: [
      "Split-run test",
      "Gall-up-Robinson impact test",
      "Daniel-starch test",
      "Perlson-Influence test",
    ],
    correct: 0,
  },
  {
    question:
      "The techniques of scheduling media that involve purchasing a large amount of space are called:",
    options: [
      "Media Concentration theory",
      "Media Dominant theory",
      "Media Monitoring theory",
      "Media Effects theory",
    ],
    correct: 0,
  },
  {
    question:
      "When a set of commercials or announcements is to be written and if it generates a lengthy copy, it is called:",
    options: ["donut copy", "core copy", "modulated copy", "open copy"],
    correct: 0,
  },
  {
    question: "Aerial advertising is a form of:",
    options: [
      "print media",
      "in-house advertising",
      "electronic advertising",
      "outdoor advertising",
    ],
    correct: 3,
  },
  {
    question:
      "'The post-test only control group design' is amenable to the application of:",
    options: ["ANOVA", "t-test", "Chi-square test", "Partial Correlation"],
    correct: 1,
  },
  {
    question: "The data and instructions for a computer are known as:",
    options: ["hardware", "software", "malware", "programmer"],
    correct: 1,
  },
  {
    question: "Harold Evans was the editor of:",
    options: [
      "The Mirror",
      "The Sunday Guardian",
      "The Times (London)",
      "The Daily Express",
    ],
    correct: 2,
  },
  {
    question:
      "Four audience dimensions evaluated to determine the effectiveness of a specific PR Programme are:",
    options: [
      "Coverage, target, influence, and objectives",
      "Influence, response, coverage, and impact",
      "Response, target, influence, and message",
      "Message, influence, impact, and target",
    ],
    correct: 1,
  },
  {
    question: "The House Journal 'Hamara' is published by:",
    options: [
      "Air India",
      "Bank of India",
      "Indian Hotels",
      "Hindustan Lever Ltd.",
    ],
    correct: 0,
  },
  {
    question: "Public Relations was developed as a unique practice first in:",
    options: ["Great Britain", "Germany", "France", "The United States"],
    correct: 3,
  },
  {
    question:
      "The four basic inks to a full range of colours found in four-colour printing are identified as:",
    options: [
      "range colours",
      "premium colours",
      "process colours",
      "production colours",
    ],
    correct: 2,
  },
  {
    question:
      "A visual path that flows from the upper corner to the lower right is identified as:",
    options: [
      "Visual index",
      "Visual flight",
      "Optical crossline",
      "Gutenberg diagonal",
    ],
    correct: 3,
  },
  {
    question: "The Television without Frontiers Directive was introduced in:",
    options: [
      "The United States",
      "The European Union",
      "Latin America",
      "Australia",
    ],
    correct: 1,
  },
  {
    question: "The portion of a subject to be shown on camera is called:",
    options: [
      "Anatomical designation",
      "Grouping designation",
      "Perspective designation",
      "Focal designation",
    ],
    correct: 3,
  },
  {
    question: "The readability test of Fog Index was developed by:",
    options: ["Rudolf Flesch", "James Power", "Robert Gunning", "Dale-Chall"],
    correct: 2,
  },
  {
    question: "Arbitrary codes in communication are:",
    options: ["Digital", "Analogic", "Non-functional", "Inappropriate"],
    correct: 0,
  },
  {
    question:
      "A problem-solving message based on everyday situation is referred to as:",
    options: [
      "Slice of life",
      "Social message",
      "Situational info",
      "Simulated slogan",
    ],
    correct: 0,
  },
  {
    question: "Who used the concept of 'rear-view mirrorism' in communication?",
    options: ["Sean McBride", "C.P. Snow", "Naomi Klein", "Marshall McLuhan"],
    correct: 3,
  },
  {
    question: "The structuralist movement of folklore was founded by:",
    options: [
      "William Thomas",
      "Vishnu Sharma",
      "H.K. Ranganath",
      "Vladimir Propp",
    ],
    correct: 3,
  },
  {
    question: "The Eurocom Group has its headquarters in:",
    options: ["Vienna", "Paris", "Bonn", "Geneva"],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Reasonable restrictions, as per the Indian Constitution, cannot be imposed by the state arbitrarily. Reason (R): The restrictions can be imposed only according to law, subject to judicial review.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are false.",
      "A is true, R is false.",
      "A is false, R is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Regulation of private ownership of the broadcast system by the state through broadcast licenses creates 'a system of soft property'. Reason (R): It is premised on the specificities of corporate liberalism.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are false.",
      "A is true, R is false.",
      "A is false, R is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Telecommunication is central to the process of globalization. Reason (R): It is a minimum condition of participation in the emerging new economy of the world.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are false.",
      "A is true, R is false.",
      "A is false, R is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): The concept of the construction of information society is based on a series of myths. Reason (R): They provide the necessary narrative for the implementation of communication policies.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are false.",
      "A is true, R is false.",
      "A is false, R is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Governments all over the world increasingly link communication policy to economic interests. Reason (R): Technology promotion in the communication sector is a viable development strategy.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are false.",
      "A is true, R is false.",
      "A is false, R is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Access to knowledge is always through language and other related orders of representation. Reason (R): Since language does not have clear meanings, and does not reflect shared meanings, it contributes to the complicated structure of knowledge.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are false.",
      "A is true, R is false.",
      "A is false, R is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Media language generates and constitutes the social world. Reason (R): Because it is not merely a channel of information, but also an integral part of our experiences.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are false.",
      "A is true, R is false.",
      "A is false, R is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Propaganda in the broadest sense is the technique of influencing human action by manipulation of representations. Reason (R): The manipulated representations may take form less accurately, by stories and rumors and not manifested in spoken, written, pictorial, or musical form.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are false.",
      "A is true, R is false.",
      "A is false, R is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Find out the correct sequence of elements of the hierarchy of effect model.",
    options: [
      "Desire, interest, attention, action",
      "Attention, desire, interest, action",
      "Attention, interest, desire, action",
      "Interest, desire, attention, action",
    ],
    correct: 2,
  },
  {
    question:
      "Identify the correct chronological sequence of readability formula developers.",
    options: [
      "Flesch, Gray and Leary, Vogel and Washburne, Lively and Pressey",
      "Gray and Leary, Lively and Pressey, Vogel and Washburne, Flesch",
      "Flesch, Lively and Pressey, Vogel and Washburne, Gray and Leary",
      "Lively and Pressey, Vogel and Washburne, Gray and Leary, Flesch",
    ],
    correct: 0,
  },
  {
    question:
      "Identify the correct chronological order of the following communication scholars.",
    options: [
      "Bernard Berelson, Wilbur Schramm, Donald Shaw, Noam Chomsky",
      "Noam Chomsky, Wilbur Schramm, Bernard Berelson, Donald Shaw",
      "Donald Shaw, Noam Chomsky, Bernard Berelson, Wilbur Schramm",
      "Wilbur Schramm, Donald Shaw, Noam Chomsky, Bernard Berelson",
    ],
    correct: 0,
  },
  {
    question:
      "Identify the correct chronological order of books written by journalists.",
    options: [
      "A Witness to an Era, The Judgement, India After Gandhi, Ink in My Veins",
      "The Judgement, A Witness to an Era, India After Gandhi, Ink in My Veins",
      "A Witness to an Era, The Judgement, Ink in My Veins, India After Gandhi",
      "India After Gandhi, A Witness to an Era, The Judgement, Ink in My Veins",
    ],
    correct: 2,
  },
  {
    question: "Identify the correct sequence of Analogue Visual Images.",
    options: [
      "Infinite gradation of tone, colour, hue and grain",
      "Colour, hue, infinite gradation of tone and grain",
      "Hue, infinite gradation of tone, grain and colour",
      "Grain, colour, hue and infinite gradation of tone",
    ],
    correct: 0,
  },
  {
    question:
      "Match the following: List-I | List-II (a) E.F. Schumaker | (i) Popular participation in development (b) Julius Nyrere | (ii) Change in power relations for development (c) Mahatma Gandhi | (iii) Intermediate technology (d) Robert Hornik | (iv) Basic needs fulfilment",
    options: [
      "(ii) (iv) (iii) (i)",
      "(iii) (i) (iv) (ii)",
      "(i) (iv) (ii) (iii)",
      "(iv) (i) (iii) (ii)",
    ],
    correct: 0,
  },
  {
    question:
      "Match the following: Set-I | Set-II (a) Selective exposure | (i) Elihu Katz (b) Voter study | (ii) C.I. Hovland (c) Influence of opinion leaders | (iii) Joseph T. Klapper (d) Limited persuasive effect of media | (iv) P. Lazarsfeld",
    options: [
      "(iv) (ii) (i) (iii)",
      "(iii) (i) (ii) (iv)",
      "(iii) (iv) (i) (ii)",
      "(ii) (iii) (iv) (i)",
    ],
    correct: 0,
  },
  {
    question:
      "Match the following: Set-I | Set-II (a) Frey | (i) India (b) E.M. Rogers | (ii) Kenya (c) J. Kronenburg | (iii) Turkey (d) Paul Neurath | (iv) Columbia",
    options: [
      "(iii) (iv) (i) (ii)",
      "(iv) (ii) (iii) (i)",
      "(ii) (iii) (iv) (i)",
      "(iii) (iv) (ii) (i)",
    ],
    correct: 1,
  },
  {
    question: "Match the following: Set-I | Set-II",
    options: [
      "Diffusion of innovation | Daniel Lerner",
      "Change agent | Robert McNamara",
      "Modernising variables | Ryan and Gross",
      "Integrated rural development | E.M. Rogers",
    ],
    correct: 3,
  },
  {
    question: "Match the following: Set-I | Set-II",
    options: [
      "Durga Das | Cartoonist",
      "Mario Miranda | Editor",
      "C.Y. Chintamani | Broadcaster",
      "Melvil Demellow | Political Commentator",
    ],
    correct: 2,
  },
  {
    question: "Match the following: Set-I | Set-II",
    options: [
      "Kasturi Srinivasan | Hindustan Samachar",
      "K.N. Harikumar | Samachar Bharati",
      "Krishnakant | United News of India",
      "Apte | Press Trust of India",
    ],
    correct: 2,
  },
  {
    question: "Match the following: Set-I | Set-II",
    options: [
      "Alfred Hitchcock | Ikuru",
      "Akira Kurosawa | Jurassic Park",
      "Steven Spielberg | The Seventh Seal",
      "Ingmar Bergman | Dial M for Murder",
    ],
    correct: 1,
  },
  {
    question: "The term development journalism was coined by",
    options: [
      "Alan Chalkley",
      "Erskine Childers",
      "Christina Ogan",
      "William Rosemarry",
    ],
    correct: 1,
  },
  {
    question:
      '"A newspaper should be both a daily teacher and daily tribune" was stated by',
    options: [
      "Joseph Pulitzer",
      "J. L. Nehru",
      "Marshall McLuhan",
      "George Gerbner",
    ],
    correct: 0,
  },
  {
    question:
      "In Meletzke’s Model of mass communication process, the role of ______ is a key one along with the role of communicator.",
    options: ["Receiver", "Medium", "Feedback", "Message"],
    correct: 2,
  },
  {
    question: "Agora is a",
    options: [
      "post on a Facebook",
      "devil",
      "chatter box",
      "marketplace on the internet",
    ],
    correct: 3,
  },
  {
    question: "Manuel Castells belongs to a school of",
    options: [
      "Semiotics",
      "Development media",
      "Positivism",
      "Critical Theory",
    ],
    correct: 3,
  },
  {
    question: "The other word for copywriting is",
    options: ["Deadwood", "Logjam", "Intaglio", "Stealth"],
    correct: 0,
  },
  {
    question:
      "Inserting a TV programme between two popular TV programmes to boost its ratings is known as",
    options: ["Twist", "Blend", "Link", "Hammo"],
    correct: 2,
  },
  {
    question: "Academy ratio in a film is",
    options: ["1.8 to 1", "1.33 to 1", "2.00 to 1", "1.7 to 1"],
    correct: 1,
  },
  {
    question: "‘Dead husk’ in ads relates to limitation of",
    options: [
      "social and individual fulfillment",
      "cultural growth",
      "Concept of determination",
      "Political accessibility",
    ],
    correct: 0,
  },
  {
    question: "‘Ticket on the meat’ refers to",
    options: ["Dade Line", "Print Line", "Head Line", "By Line"],
    correct: 2,
  },
  {
    question: "Active video is",
    options: ["violent scene", "flashback", "pathos", "picture information"],
    correct: 3,
  },
  {
    question: "Copy platform refers to",
    options: [
      "Advertiser and product",
      "Collaborative effort between client and agency",
      "Client and service",
      "Ad copy and print media",
    ],
    correct: 1,
  },
  {
    question: "Designer needs to be an expert in",
    options: [
      "Big idea for promotion",
      "Color to ad copy",
      "Inserting jingles in an ad",
      "Written word and visual expression",
    ],
    correct: 3,
  },
  {
    question:
      "The Bill of Digitalization of Television Channels in India was passed in the year",
    options: ["2003", "2010", "2007", "2011"],
    correct: 3,
  },
  {
    question: "Collateral category in ads doesn’t include",
    options: [
      "Product Brochures",
      "Catalogues",
      "Readership profile",
      "Tradeshow handouts",
    ],
    correct: 2,
  },
  {
    question:
      "To identify a brand in a series of advertisements ______ are used.",
    options: ["Preheads", "Subheads", "Jumpheads", "Label heads"],
    correct: 3,
  },
  {
    question: "If bipolar attitudes are used in a scale, it is known as",
    options: [
      "Guttman scaling",
      "Thurstone measuring method",
      "Semantic differential",
      "Likert",
    ],
    correct: 2,
  },
  {
    question: "Control variable is used to remove",
    options: [
      "Non-spurious relationship",
      "Inference",
      "Conceptual clarity",
      "Unwanted influence",
    ],
    correct: 3,
  },
  {
    question: "Androcentric view of cinema is a",
    options: [
      "Male perspective",
      "Female view",
      "View of the underdog",
      "French genre",
    ],
    correct: 0,
  },
  {
    question:
      "If qualitative and quantitative techniques are combined to understand a research problem, it is known as",
    options: ["Sociogram", "Binary method", "Evaluation", "Triangulation"],
    correct: 3,
  },
  {
    question: "Ambush interview contains:",
    options: [
      "Ambivalent questions",
      "Direct questions",
      "Simple questions",
      "Hidden questions",
    ],
    correct: 3,
  },
  {
    question:
      "While Administrative research investigates the reactions of the readers of a newspaper’s content, the critical research usually investigates:",
    options: [
      "The size of the paper",
      "The layout and colour",
      "The font size",
      "The ownership and control",
    ],
    correct: 3,
  },
  {
    question: "Titus communications is a joint venture involving:",
    options: [
      "Tass, Sanghai Communications, Itochu, US West",
      "Toshiba, Itochu, Time Warner, UNI",
      "Itochu, Toshiba, Time Warner, US West",
      "UNI, Itochu, Time Warner, US West",
    ],
    correct: 2,
  },
  {
    question:
      "Identify the software that is not applied for the page layout of magazines or newspapers.",
    options: ["InDesign", "PageMaker", "QuarkExpress", "Protool"],
    correct: 3,
  },
  {
    question: "Planted news is one of the techniques of:",
    options: [
      "Knowledge management",
      "Fact finding",
      "Propaganda",
      "Backgrounder",
    ],
    correct: 2,
  },
  {
    question:
      "Assertion (A): The invention of the Telephone changed the world of communication and its influence could be studied as a part of media education. Reason (R): Telephone is a technical invention associated with communication and communication education has less research on the subject, yet communication scholars do not show interest in taking it as a research topic. Codes:",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 2,
  },
  {
    question:
      "Assertion (A): Throughout the world, the governments are withdrawing from their social responsibilities and the business sector is stepping into the space created as a result of Government withdrawals. Reason (R): The general public is not reacting to the situation as the media is supporting such a move. Codes:",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Technical writing requires skillful writers and collaboration of the Subject Matter Experts (SMEs). Reason (R): Technical writers write for the consumers what the innovators like to tell about their innovations to the consumers. Codes:",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): India is fast moving towards becoming a Network society. Reason (R): India cannot become a network society soon as Internet penetration in India is very low. Codes:",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 2,
  },
  {
    question:
      "Assertion (A): The duty of the press is to make fair criticism of any institution in public interest but at the same time, it has to abide by the journalistic norms. Reason (R): The press, generally fails to meet the expected objectivity in pursuing its duty towards society. Codes:",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): As marginalized sections of society cannot ventilate their opinions through mainstream mass media channels, they look for alternative channels to support their cause. Reason (R): Since marginalized sections do not economically support mass media channels, the latter do not lend their support to these sections of the population. Codes:",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): The prices of magazines in India are beyond the reach of the common man, and their circulation is declining. Reason (R): The proliferation of television channels has resulted in fast information dissemination, and the common man does not depend on magazines for information. Codes:",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Globalization has forced the Indian business units to transform themselves from being family units to giant corporate houses. Reason (R): Corporate Communications, being an integral part of globalization, helped in this transformation. Codes:",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Critical research guides a communication scholar to question the system and take steps to change the system. Reason (R): The critical school was born to find out the shortcomings of positivism. Codes:",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): The rigidity of folk media formats for manipulation of content is a big problem for them to be used in development communication. Reason (R): Since folk media formats are inherited from one generation of practitioners to the next generation, the rigidity of the formats is an advantage for them to remain insular from external influences. Codes:",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 2,
  },
  {
    question: "Match the following: Doordarshan Services Year of Introduction",
    options: [
      "Color transmission 1985, Morning transmission 1982, Commercial spots 1976, INTEX services 1987",
      "Color transmission 1982, Morning transmission 1985, Commercial spots 1976, INTEX services 1987",
      "Color transmission 1982, Morning transmission 1987, Commercial spots 1976, INTEX services 1985",
      "Color transmission 1987, Morning transmission 1985, Commercial spots 1976, INTEX services 1982",
    ],
    correct: 1,
  },
  {
    question: "Match List – I with List – II:",
    options: [
      "Robert Merton 3, Herbert Spencer 4, C.H. Cooley 2, Ralph Dahrendorf 1",
      "Robert Merton 4, Herbert Spencer 3, C.H. Cooley 2, Ralph Dahrendorf 1",
      "Robert Merton 1, Herbert Spencer 4, C.H. Cooley 2, Ralph Dahrendorf 3",
      "Robert Merton 3, Herbert Spencer 4, C.H. Cooley 2, Ralph Dahrendorf 1",
    ],
    correct: 0,
  },
  {
    question: "Match the items in List - I with List - II",
    options: [
      "Personality elements - Self-esteem, Attitude function - Knowledge, Verbal – nonverbal cues - Public stimuli, Cognitive Dissonance - Human Communication Theory",
      "Personality elements - Knowledge, Attitude function - Public stimuli, Verbal – nonverbal cues - Self-esteem, Cognitive Dissonance - Human Communication Theory",
      "Personality elements - Self-esteem, Attitude function - Knowledge, Verbal – nonverbal cues - Knowledge, Cognitive Dissonance - Public stimuli",
      "Personality elements - Knowledge, Attitude function - Public stimuli, Verbal – nonverbal cues - Self-esteem, Cognitive Dissonance - Public stimuli",
    ],
    correct: 0,
  },
  {
    question: "Match the items List - I with List - II",
    options: [
      "a. Cross-sectional research 1. Collecting data to determine how people create meaning of their activities (culture) in a context",
      "b. Longitudinal 3. Collecting data from a particular section of the research population (sample) regularly over a period.",
      "c. Meta Analysis 2. Collecting data from many research studies conducted on a particular topic and analysing the same",
      "d. Ethnomethodology 4. Collecting data from all section of a sample once.",
    ],
    correct: "D) 3 1 4 2",
  },
  {
    question:
      "Identify the correct chronological sequence of the following journal of Mass Media Research:",
    options: [
      "A) Media Asia, Newspaper Research Journal, Public-Opinion Quarterly, Journalism Quarterly",
      "B) Journalism Quarterly, Public-Opinion Quarterly, Newspaper Research Journal, Media Asia",
      "C) Public-Opinion Quarterly, Newspaper Research Journal, Media Asia, Journalism Quarterly",
      "D) Newspaper Research Journal, Media Asia, Public-Opinion Quarterly, Journalism Quarterly",
    ],
    correct:
      "C) Public-Opinion Quarterly, Newspaper Research Journal, Media Asia, Journalism Quarterly",
  },
  {
    question:
      "Find out the actual process of Human Communication in sequential order:",
    options: [
      "A) Perception, creating meaning, organisation and selection",
      "B) Selection, perception, organisation and creating meaning",
      "C) Organisation, selection, creating meaning and perception",
      "D) Selection, organisation, creating meaning and perception",
    ],
    correct: "B) Selection, perception, organisation and creating meaning",
  },
  {
    question:
      "Find out the correct sequential elements in a research proposal/report:",
    options: [
      "A) Introduction, Aim, Objectives, Methodology, Findings, Conclusions, Recommendation",
      "B) Introduction, Objectives, Aim, Methodology, Findings, Recommendation, Conclusions",
      "C) Introduction, Objectives, Aim, Methodology, Conclusions, Findings, Recommendation",
      "D) Introduction, Objectives, Aim, Findings, Methodology, Conclusions, Recommendation",
    ],
    correct:
      "A) Introduction, Aim, Objectives, Methodology, Findings, Conclusions, Recommendation",
  },
  {
    question: "Find out the correct sequence in the process of filmmaking:",
    options: [
      "A) Shot, sequence, scene, frame, film",
      "B) Shot, scene, frame, sequence, film",
      "C) Scene, shot, sequence, frame, film",
      "D) Frame, shot, scene, sequence, film",
    ],
    correct: "B) Shot, scene, frame, sequence, film",
  },
  {
    question: "The book, ‘Men, Media and Messages’ was written by:",
    options: [
      "A) Wilbur Schramm",
      "B) Melvin DeFleur",
      "C) William Hachten",
      "D) Everett Hagan",
    ],
    correct: "A) Wilbur Schramm",
  },
  {
    question: "Public Opinion means:",
    options: [
      "A) Opinion held by general public",
      "B) Media driven opinion",
      "C) Political decision made",
      "D) Opinion held by foreign countries",
    ],
    correct: "A) Opinion held by general public",
  },
  {
    question: "Lack of empathy is the result of:",
    options: [
      "A) Fatalism",
      "B) Cultural experience",
      "C) Stimulated experience",
      "D) Frustrated experience",
    ],
    correct: "D) Frustrated experience",
  },
  {
    question: "F. Rozario-Braid defined development communication as:",
    options: [
      "A) Narrative",
      "B) Technology",
      "C) Positive",
      "D) Management process",
    ],
    correct: "D) Management process",
  },
  {
    question:
      "The economy that is increasingly based on knowledge and information is called as:",
    options: [
      "A) Knowledge economy",
      "B) Information economy",
      "C) The Third Wave economy",
      "D) The Electronic economy",
    ],
    correct: "A) Knowledge economy",
  },
  {
    question:
      "Herbert Schiller described the information received by the poor as:",
    options: [
      "A) Entertainment",
      "B) Anti-people",
      "C) Information slavery",
      "D) Information garbage",
    ],
    correct: "C) Information slavery",
  },
  {
    question: "Famous painter MF Hussain produced the movie:",
    options: [
      "A) Gaj Gamini",
      "B) Talaash",
      "C) Mujhe Kuchh Kahna Hai",
      "D) The Painting",
    ],
    correct: "A) Gaj Gamini",
  },
  {
    question: "Williams Latane’s work is associated with:",
    options: [
      "A) Social loafing experiment",
      "B) Conformity experiment",
      "C) Line-judging experiment",
      "D) Thin slices experiment",
    ],
    correct: "A) Social loafing experiment",
  },
  {
    question: "The first film production studios are known as:",
    options: [
      "A) Studio apartments",
      "B) Factory studios",
      "C) In-house studios",
      "D) Make-shift studios",
    ],
    correct: "B) Factory studios",
  },
  {
    question: "Research done after the event is known as:",
    options: [
      "A) Ex Post Facto",
      "B) Pre Test, Post Test",
      "C) Solomon Four Group Design",
      "D) Focus Group",
    ],
    correct: "A) Ex Post Facto",
  },
  {
    question: "Response Rates do not relate to:",
    options: ["A) Censures", "B) Surveys", "C) Sampling", "D) References"],
    correct: "A) Censures",
  },
  {
    question: "Admass in an ad campaign is for:",
    options: [
      "A) Target audience",
      "B) Potential retailers",
      "C) Laggards",
      "D) Pedestrians",
    ],
    correct: "A) Target audience",
  },
  {
    question:
      "When the respondents are shown the front page or the cover page of a publication with the name blacked out and are asked whether they remember reading that particular issue is called:",
    options: [
      "A) Un-aided recall",
      "B) Masked recall",
      "C) Recognition recall",
      "D) Aided recall",
    ],
    correct: "C) Recognition recall",
  },
  {
    question: "Bluetooth is a:",
    options: [
      "A) Trade name",
      "B) Cell phone",
      "C) Neighbourhood publication",
      "D) Ad appeal",
    ],
    correct: "A) Trade name",
  },
  {
    question:
      "When studies are used to measure a company’s position, it is called:",
    options: [
      "A) Communication Audit",
      "B) Corporate Audit",
      "C) Public-Relations Audit",
      "D) Social Audit",
    ],
    correct: "C) Public-Relations Audit",
  },
  {
    question:
      "Who said 'media is used by individuals to connect or disconnect themselves from others'?",
    options: [
      "A) Franklin John Henrilp",
      "B) Franklin Hamilton",
      "C) Marshall McLuhan",
      "D) Franklin Rosario Baird",
    ],
    correct: "C) Marshall McLuhan",
  },
  {
    question:
      "Joseph Luft and Harrington Ingham devised Johari Window of Human Communication with four chambers or windows. Which among the following is not the window suggested by them?",
    options: ["A) Open", "B) Blind", "C) Hidden", "D) Cover"],
    correct: "D) Cover",
  },
  {
    question:
      "The influential theorist of dependency made a distinction between world systems and mini-systems.",
    options: [
      "A) Immanual Wallerstein",
      "B) Alejandro Poters",
      "C) Hermassi E.",
      "D) Ernest Mandel",
    ],
    correct: "A) Immanual Wallerstein",
  },
  {
    question: "Audiophile means:",
    options: [
      "A) Audio recorder",
      "B) Volume riser",
      "C) Music buff",
      "D) Ear Phones",
    ],
    correct: "C) Music buff",
  },
  {
    question:
      "In the ‘circuit of culture’, Stuart Hall identified five component elements. Four of these component elements are: Production, consumption, regulations, and signification. What is the fifth component?",
    options: ["Sympathy", "Empathy", "Synthesis", "Identity"],
    correct: 3,
  },
  {
    question:
      "The careful organization of a website’s contents into hierarchical (or sequential) order is described as:",
    options: [
      "Informational line",
      "Information sequencing",
      "Information architecture",
      "Information processing",
    ],
    correct: 2,
  },
  {
    question:
      "Using existing structures in public spaces in advertising is known as:",
    options: [
      "Online Advertising",
      "Banner Advertising",
      "Transit Advertising",
      "Ambient Advertising",
    ],
    correct: 3,
  },
  {
    question: "Ambisonics is also known as:",
    options: [
      "Low voice",
      "Microphones",
      "Surround Sound",
      "Surreptitious entry",
    ],
    correct: 2,
  },
  {
    question: "A short form of a TV program is called:",
    options: ["Portfolio", "Proportion", "Pictograph", "Podbuster"],
    correct: 3,
  },
  {
    question:
      "When company websites include a permanent display, usually a small box at the side of the screen that invites users to participate in a research project, it is known as:",
    options: [
      "A stationary display",
      "An outdoor display",
      "Classified",
      "Point-of-purchase ads",
    ],
    correct: 3,
  },
  {
    question:
      "One of the important ways to ascertain the range of spread of variables in a sample is through the calculation of:",
    options: ["Sample size", "Mode", "Confidence level", "Standard Deviation"],
    correct: 3,
  },
  {
    question: "Advertising that 'ambushes' the viewer is called:",
    options: [
      "Classified Display Advertising",
      "Institutional Advertising",
      "Online Advertising",
      "Unconventional Advertising",
    ],
    correct: 3,
  },
  {
    question:
      "Which of the following theories or designs eliminates the communication bias in a research project?",
    options: [
      "Experimental Group Design",
      "Control Group Design",
      "Single Blind Theory",
      "Double Blind Theory",
    ],
    correct: 3,
  },
  {
    question:
      "Which among the following films made by Satyajit Ray, the story was not taken from Rabindranath Tagore?",
    options: ["Charulata", "Ghare Baire", "Postmaster", "Devi"],
    correct: 3,
  },
  {
    question: "Adjacency is a:",
    options: ["Ear Panel", "Index", "Morgue", "Commercial break"],
    correct: 3,
  },
  {
    question: "Film positive is used to produce dupe negatives from:",
    options: ["Master print", "Broad print", "Linear print", "Big print"],
    correct: 0,
  },
  {
    question: "In Radio, without lap or pause is called:",
    options: ["Sibilance", "Segue", "Simulcast", "Slip start"],
    correct: 1,
  },
  {
    question:
      "Bennet, Coleman & Co Vs. Union of India case in the early 1970s deals with:",
    options: [
      "Pre-censorship",
      "Journalist wages",
      "Editorial perspective",
      "Newsprint policy",
    ],
    correct: 3,
  },
  {
    question: "'Do you have it in you?' is an ad slogan of:",
    options: [
      "Indian Army",
      "Censor Board",
      "Coast Guards",
      "Border Security Forces",
    ],
    correct: 0,
  },
  {
    question:
      "'Stereotyping' is an element of investigation in Representation Studies, which generally concentrates on two aspects: one is physical, i.e., semiotic; the other is intellectual, which is known as:",
    options: [
      "Discourse Study",
      "Content Study",
      "Deconstruction Study",
      "Post-structural study",
    ],
    correct: 3,
  },
  {
    question: "Story-telling is a part of:",
    options: [
      "News-bound cultures",
      "Culture-specific communication",
      "Technology-driven communication",
      "Mediated society",
    ],
    correct: 1,
  },
  {
    question:
      "Communication critics, while discussing the ‘Public Sphere’, propounded by Habermas, further grouped the public sphere into three broad categories. Which among the following is not in those three categories?",
    options: [
      "Micro Public Sphere",
      "Meso Public Sphere",
      "Macro Public Sphere",
      "Supra Public Sphere",
    ],
    correct: 3,
  },
  {
    question:
      "The three-dimensional area around a microphone from within which sound is transmitted is also referred to as:",
    options: [
      "Polar Pattern",
      "Direct pattern",
      "Indirect pattern",
      "Vertical pattern",
    ],
    correct: 0,
  },
  {
    question:
      "Which Committee was constituted to study the law relating to Contempt of Court?",
    options: [
      "Sarkaria Committee",
      "Sawant Committee",
      "Sanyal Committee",
      "Verghese Committee",
    ],
    correct: 1,
  },
  {
    question: "Section 3 and 4 of the Official Secrets Act, 1923 deal with:",
    options: [
      "Spying",
      "Wrong communication",
      "Authorization",
      "Use of material",
    ],
    correct: 1,
  },
  {
    question:
      "The Second Press Commission describes law as a 'Tale of two interests'.",
    options: [
      "Contempt of Court",
      "Freedom of Press",
      "Sovereignty",
      "Defamation",
    ],
    correct: 1,
  },
  {
    question: "In Radio parlance, Payola relates to:",
    options: [
      "Disseminating breaking news",
      "Transmitting special-audience programmes",
      "Introduction of new broadcast format",
      "Accepting money for playing songs",
    ],
    correct: 3,
  },
  {
    question: "Velocity microphone referred to as a:",
    options: [
      "Omni directional microphone",
      "Uni-directional microphone",
      "Lapel microphone",
      "Ribbon microphone",
    ],
    correct: 3,
  },
  {
    question:
      "The Government of India through an Act, prohibits any prejudicial publication of news and comments. Identify the Act from the following:",
    options: [
      "The Defence Publication Act, 1968",
      "The Civil Defence Act of 1968",
      "The Legal Defence Act of 1968",
      "The Judicial Defence Act of 1968",
    ],
    correct: 0,
  },
  {
    question:
      "Theodore Newcomb’s symmetry Model of communication emphasizes on:",
    options: [
      "Cognitive consistency",
      "Cognitive dissonance",
      "Cognitive inconsistency",
      "Cognitive unbalance",
    ],
    correct: 0,
  },
  {
    question: "Creative middle in a newspaper is popularly used in:",
    options: ["Front page", "Op-ed page", "Edit page", "Inside page"],
    correct: 1,
  },
  {
    question:
      "If two contradictory viewpoints are written in an intro of a news report, it is known as:",
    options: ["1-2-3 lead", "Contrast lead", "Question lead", "Bullet lead"],
    correct: 1,
  },
  {
    question: "Theatre is an example of:",
    options: ["Hybrid effect", "Snowball effect", "Panopticism", "Synopticism"],
    correct: 3,
  },
  {
    question:
      "The edition/uploading center of dot com publication is. Hence, the focus of content shifts:",
    options: ["Static", "Non-existent", "Mobile", "Fixed by law"],
    correct: 2,
  },
  {
    question:
      "In order to have credibility of a news item, reporters use sources. It is known as:",
    options: ["Attribution", "Pyramid", "Subjectivity", "News event"],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Conflicts arise among individuals when there is an imbalance in interpersonal communication. Reason (R): If people take care of communication by using good language, conflicts subside.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Different forms of writing have emerged as different channels of mass communication have different ways of expression. Reason (R): The purpose of writing is to explain a point of view, and different forms of writing are only used to confuse the media user.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 2,
  },
  {
    question:
      "Assertion (A): Now-a-days format is dominating the newspapers instead of content and hence ethics are less observed by editors. Reason (R): Readers want good content than good lay-out, and hence newspapers must focus on content than format.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 2,
  },
  {
    question:
      "Assertion (A): Advertisements do not yield the desired effect for many brands/products. Reason (R): The pre-tests and pilot tests for advertisements are done in artificial surroundings, hence, the effectiveness cannot be determined.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Some research techniques like experimental research are not popular in Indian mass communication. Reason (R): Most researchers are not familiar with experimental research, they avoid using the method.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Professionalism among journalism practitioners is rarely found now-a-days as the profession has become a hobby for the new entrants. Reason (R): The new entrants do not have role models to follow, nor do they know how to handle information properly.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Sociology of Mass Media is the study of the interaction between society and the media. Reason (R): This study focuses on the role of media in creating societal changes.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): The Government Control of Television is justified in the age of information explosion, and the TV channels often distort news for TRP ratings. Reason (R): Distortion of news by TV channels cannot be an alibi for Government control of TV as it leads to suppression of news.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      " (A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Theories of social change emphasize that individual must change to bring in positive change in society. Reason (R): In traditional societies, individual change depends on various factors and traditional values influence the individual.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Public relations campaign in India are undertaken without proper research because of ignorance of its effect. Reason (R): The answer to the problem lies in educating the PR campaigners and a change of their minds is possible.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Match List – I with List – II: List – I (Tagline) List – II (TV News Channel)",
    options: ["4 1 3 2", "3 2 4 1", "1 3 2 4", "2 4 1 3"],
    correct: 0,
  },
  {
    question:
      "Match List – I with List – II: List – I (Book) List – II (Writer)",
    options: ["2 3 1 4", "4 3 1 2", "2 3 4 1", "3 1 2 4"],
    correct: 0,
  },
  {
    question:
      "Match List – I with List – II: List – I (Punch Line) List – II (Product)",
    options: ["2 1 4 3", "4 3 2 1", "1 2 4 3", "3 2 4 1"],
    correct: 0,
  },
  {
    question:
      "Find out the correct sequence of the concept generation process based on the four-stage model.",
    options: [
      "Preparation, Incubation, Illumination, Verification",
      "Verification, Illumination, Incubation, Preparation",
      "Preparation, Illumination, Incubation, Verification",
      "Incubation, Illumination, Preparation, Verification",
    ],
    correct: 0,
  },
  {
    question:
      "Identify the correct sequence of the chronological development of the video format from the following:",
    options: [
      "Hi 8, DVC, Betacam, Umatic",
      "Umatic, Hi 8, Betacam, DVC",
      "Betacam, Umatic, Hi 8, DVC",
      "Umatic, Betacam, Hi 8, DVC",
    ],
    correct: 3,
  },
  {
    question:
      "Find out the correct sequence of the chairmanship of the Press Council of India:",
    options: [
      "Justice A.N. Sen, Justice R.S. Sarkaria, Justice P.B. Sawant, Justice G.N. Ray",
      "Justice R.S. Sarkaria, Justice G.N. Ray, Justice A.N. Sen, Justice P.B. Sawant",
      "Justice P.B. Sawant, Justice A.N. Sen, Justice G.N. Ray, Justice R.S. Sarkaria",
      "Justice R.S. Sarkaria, Justice A.N. Sen, Justice P.B. Sawant, Justice G.N. Ray",
    ],
    correct: 3,
  },
  {
    question:
      "Identify the correct chronological order of the launching of the satellite from the following:",
    options: [
      "Sputnik, ARPA, Syncom I, Syncom II",
      "Sputnik, Syncom I, Syncom II, ARPA",
      "Syncom I, Syncom II, Sputnik, ARPA",
      "ARPA, Sputnik, Syncom I, Syncom II",
    ],
    correct: 0,
  },
  {
    question:
      "Find out the correct sequencing of elements in the transactional perceptual pattern of Human Communication:",
    options: [
      "Processual, Systemic, Perceptual and Creating Meaning",
      "Creating Meaning, Processual, Systemic, Perceptual",
      "Systemic, Processual, Creating Meaning, Perceptual",
      "Systemic, Perceptual, Creating Meaning and Processual",
    ],
    correct: 3,
  },
  {
    question: "Mass media essentially operate in:",
    options: [
      "Limited sphere",
      "Parallel sphere",
      "Public sphere",
      "Conventional sphere",
    ],
    correct: 2,
  },
  {
    question:
      "When codes govern signs, and when assembled together, they become:",
    options: ["Texts", "Paradigms", "Contexts", "Symbols"],
    correct: 0,
  },
  {
    question: "The addressability of mass communication is altered by:",
    options: [
      "The digital media",
      "The folk media",
      "The personality-oriented media",
      "The non-real-time media",
    ],
    correct: 0,
  },
  {
    question:
      "Transferring thoughts, ideas, and messages into verbal and non-verbal signs is referred to as:",
    options: ["Channelization", "Mediation", "Encoding", "Decoding"],
    correct: 2,
  },
  {
    question:
      "The utilization of a personal space and physical environment for communication is called:",
    options: ["Chronemics", "Proxemics", "Kinesics", "Paralanguage"],
    correct: 1,
  },
  {
    question: "Generally, referential readings are:",
    options: ["Normal", "Researched", "Emotional", "Prohibitive"],
    correct: 0,
  },
  {
    question: "The first chairman of the Press Council of India was:",
    options: [
      "Justice Rajagopala Iyengar",
      "Justice P.B. Sawant",
      "Justice Jeevan Reddy",
      "Justice J.R. Mudholkar",
    ],
    correct: 0,
  },
  {
    question:
      "Organizational communication is concerned with the flow of messages within a network of:",
    options: ["Interdependent", "Relationships", "Performances", "Biases"],
    correct: 0,
  },
  {
    question: "The concept of Flak was constructed by:",
    options: ["John Fiske", "E. Durkheim", "Noam Chomsky", "Leon Festinger"],
    correct: 2,
  },
  {
    question: "Sardar K.M. Panickar was associated with:",
    options: [
      "The Times of India",
      "The Pioneer",
      "The Hindustan Times",
      "The Tribune",
    ],
    correct: 3,
  },
  {
    question:
      "Expression of opinion as to the public conduct of public servants is not:",
    options: [
      "A breach of privilege",
      "Contempt of public servants",
      "Violation of service protection",
      "Defamatory",
    ],
    correct: 0,
  },
  {
    question:
      "The decision of the Union Government to fix a minimum price for a newspaper was challenged by:",
    options: ["Hitavada", "The Tribune", "Deccan Herald", "Sakal"],
    correct: 1,
  },
  {
    question: "In analog mass communication, contents are linear and:",
    options: ["Dynamic", "Static", "Exploratory", "Sensational"],
    correct: 1,
  },
  {
    question: "The organization of ombudsmen is located in:",
    options: ["The United States", "Brazil", "Hong Kong", "South Africa"],
    correct: 0,
  },
  {
    question: "The New York Times has created the position of:",
    options: ["Ombudsman", "Reader Editor", "Public Editor", "News Controller"],
    correct: 2,
  },
  {
    question: "Copyright does not subsist in:",
    options: ["Reproductions", "Music", "Original works", "Sound recordings"],
    correct: 0,
  },
  {
    question:
      "Preparation before beginning the task of investigation in qualitative research is called:",
    options: ["Curtain raiser", "Simplification", "Epoche", "Pre-review"],
    correct: 2,
  },
  {
    question: "Developmental media philosophy exports:",
    options: [
      "Domestic media content",
      "Intellectual property of a country",
      "De-Westernized views",
      "Public per capita",
    ],
    correct: 2,
  },
  {
    question: "To a positivist researcher, reality is:",
    options: ["Critical", "Objective", "Interpretative", "Conventional"],
    correct: 1,
  },
  {
    question:
      "The accuracy of systematic sampling is directly related to the adequacy of:",
    options: [
      "Investment",
      "Physical resources",
      "Research goals",
      "Sampling frame",
    ],
    correct: 3,
  },
  {
    question:
      "The process of examining every member of a specified population is called:",
    options: ["Probability", "Partiality", "Census", "Non-probability"],
    correct: 2,
  },
  {
    question:
      "Former President of India, Dr. Rajendra Prasad was associated with:",
    options: ["Searchlight", "Satyagraha", "Sentinel", "Leader"],
    correct: 1,
  },
  {
    question: "Cutlip, Bernays, Ivy Lee are associated with:",
    options: [
      "Radio and T.V. Journalism",
      "Public Relations and Corporate Communication",
      "Film production and new media",
      "Print Journalism",
    ],
    correct: 1,
  },
  {
    question: "In terms of public awareness, news has the status of:",
    options: [
      "Dominant discourse",
      "Conflict value",
      "Unintended exchange",
      "Limited judgement",
    ],
    correct: 0,
  },
  {
    question: "The film, Lawrence of Arabia, belongs to the genre of:",
    options: ["Crime", "Detective", "Epic", "Comedy"],
    correct: 2,
  },
  {
    question:
      "Live Television and radio that need the presence of audience are identified as:",
    options: [
      "Transmission media",
      "Signal media",
      "Asynchronous media",
      "Synchronous media",
    ],
    correct: 3,
  },
  {
    question: "In frequency modulation:",
    options: [
      "Frequency of carrier wave varies according to the frequency of signal.",
      "Frequency of carrier wave varies according to the amplitude of the signal.",
      "Frequency of signal varies according to the amplitude of carrier wave.",
      "Frequency of signal varies according to the frequency of carrier wave.",
    ],
    correct: 3,
  },
  {
    question: "A psychographic characteristic of film audience is:",
    options: ["Income", "Age", "Gender", "Need for status"],
    correct: 3,
  },
  {
    question:
      "The term ‘spin doctors’ is used in a negative sense to refer to:",
    options: [
      "News reporters",
      "Legal counsels",
      "Advertisers",
      "PR Professionals",
    ],
    correct: 3,
  },
  {
    question:
      "If a publication is half the size of a broadsheet, it is called:",
    options: ["Tabloid", "Digest", "Single dummy", "Double dummy"],
    correct: 0,
  },
  {
    question:
      "Assertion (A): The Press in India has the liability to pay non-discriminatory taxes. Reason (R): Under the Indian constitution, the press is no different from ordinary citizens.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are false.",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): The government cannot directly restrict one freedom by permitting another freedom. Reason (R): Clause (1) of Article 19 of the Indian Constitution provides equal opportunity for every type of freedom.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are false.",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 2,
  },
  {
    question:
      "Assertion (A): Television and Internet have become a major source of news these days for daily newspapers. Reason (R): Since news agency services have become less dependable due to global recession.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are false.",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 2,
  },
  {
    question:
      "Assertion (A): Today the focus of media is more on hype and entertainment than information and education. Reason (R): Because they aim at massive audience consisting of common denominators that have low level tastes and preferences.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are false.",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Researchers who opt for secondary analysis do not have limitations in the types of hypothesis or research questions which are to be investigated. Reason (R): For them, data already exists and it is difficult to get more information.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are false.",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 2,
  },
  {
    question:
      "Identify the correct sequence of marketing approach in relation to advertising and public relations:",
    options: [
      "Product knowledge, prospecting, approach decision, establishing needs",
      "Establishing needs, product knowledge, approach decision, prospecting",
      "Prospecting, establishing needs, approach decision, product knowledge.",
      "Approach decision, prospecting, product knowledge, establishing needs.",
    ],
    correct: 1,
  },
  {
    question: "The correct sequence in the communication process is:",
    options: [
      "Selection, attention, perception, retention",
      "Attention, selection, retention, perception",
      "Selection, retention, perception, attention",
      "Perception, attention, selection, retention",
    ],
    correct: 1,
  },
  {
    question: "Identify the correct sequence of the following statutes:",
    options: [
      "The Press and Registration of Books Act, the Indian Telegraph Act, the Indian Penal Code, the Indian Post Office Act",
      "The Indian Penal Code, the Press and Registration of Books Act, the Indian Telegraph Act, the Indian Post Office Act",
      "The Indian Penal Code, the Indian Post Office Act, the Press and Registration of Books Act, the Indian Telegraph Act",
      "The Indian Post Office Act, the Indian Telegraph Act, the Press and Registration of Books Act, the Indian Penal Code",
    ],
    correct: 0,
  },
  {
    question:
      "Identify the correct sequence of chronological order of the following newspapers that were launched during the freedom movement:",
    options: [
      "Bombay Herald, Madras Courier, Madras Gazette, Asiatic Mirror",
      "Asiatic Mirror, Bombay Herald, Madras Courier, Madras Gazette",
      "Madras Courier, Bombay Herald, Asiatic Mirror, Madras Gazette",
      "Madras Gazette, Madras Courier, Bombay Herald, Asiatic Mirror",
    ],
    correct: 0,
  },
  {
    question:
      "Identify the correct sequence of sales steps a PR person should know:",
    options: [
      "Creation of confidence, Interest, attention, selling the product",
      "Selling the product, attention, interest, creation of confidence",
      "Attention, selling the product, interest, creation of confidence",
      "Attention, Interest, creation of confidence, selling the product",
    ],
    correct: 3,
  },
  {
    question:
      "Match List – I with List – II: List – I (Name): a. Volney B. Palmer, b. Tim Berners-Lee, c. Joseph Pulitzer, d. D.W. Griffith. List – II (Area): 1. New Journalism, 2. Advertising, 3. Web, 4. Film",
    options: ["1 3 2 4", "2 3 1 4", "3 4 2 1", "4 2 3 1"],
    correct: 1,
  },
  {
    question:
      "Match List – I with List – II: List – I (Author): a. W.W. Rostow, b. Shannon & Weaver, c. Marshal McLuhan, d. Herbert Spencer. List – II (Concept): 1. Entropy, 2. Evolutionary Perspective, 3. Growth Theory, 4. Medium is the Message",
    options: ["3 1 4 2", "1 4 2 3", "2 3 1 4", "3 2 4 1"],
    correct: 0,
  },
  {
    question:
      "Match List – I with List – II: List – I (Book): a. Crystallising Public Opinion, b. The Power of Corporate Communication, c. Effective Public Relations, d. Public Relations Strategy. List – II (Author): 1. Sandra Oliver, 2. Edward L. Bernays, 3. Scott M. Cutlip, 4. Paul A. Argenti",
    options: ["2 4 3 1", "1 2 4 3", "4 2 3 1", "3 4 2 1"],
    correct: 0,
  },
  {
    question:
      "Match List – I with List – II: List – I (Director): a. Ketan Mehta, b. Kundan Shah, c. Mahesh Bhatt, d. Vidhu Vinod Chopra. List – II (Film): 1. Jaane Bhi Do Yaaron, 2. Aarth, 3. Parinda, 4. Mirch Masala",
    options: ["4 2 3 1", "3 2 1 4", "2 4 3 1", "1 3 2 4"],
    correct: 2,
  },
  {
    question:
      "Match List – I with List – II: List – I (Models): a. Preparation, Implementation, Impact Model, b. Three-Step Yardstick Model, c. Pyramid Model, d. Short Term and Continuing Programme Model. List – II (Author): 1. Lindermann, 2. Watson & Nobel, 3. Cutlip, Center & Broom, 4. McNamara",
    options: ["2 4 1 3", "3 2 4 1", "4 1 2 3", "3 1 4 2"],
    correct: 1,
  },
  {
    question:
      "Socially and culturally less powerful people are _________ by mass media.",
    options: ["Supplemented", "Counselled", "Derecognised", "Stereotyped"],
    correct: 3,
  },
  {
    question:
      "The possible harmful effects of mediated communication always lead to:",
    options: [
      "Production glut",
      "Ad attention",
      "Economic concerns",
      "Moral panics",
    ],
    correct: 3,
  },
  {
    question:
      "When media is connected with reality, that type of framing becomes:",
    options: ["Analytical", "Critical", "Referential", "Mythological"],
    correct: 2,
  },
  {
    question: "The media audiences are capable of:",
    options: [
      "Passive notion",
      "Negative acceptance",
      "Inadvertence",
      "Critical distance",
    ],
    correct: 3,
  },
  {
    question: "Semiology uses a microscopic view of texts to _________ them.",
    options: ["Construct", "Deconstruct", "Expand", "Shorten"],
    correct: 1,
  },
  {
    question:
      "Raymond Williams identified the general process of the meaning production in relation to:",
    options: ["Ideology", "Publicity", "Advertising", "Public relations"],
    correct: 0,
  },
  {
    question:
      "A major barrier in the transmission of cognitive data is an individual’s:",
    options: ["Personality", "Expectation", "Language", "Status"],
    correct: 2,
  },
  {
    question:
      "When certain words are used to reinforce the encoder’s intended meaning, it is described as:",
    options: [
      "Support line",
      "Image caption",
      "Relational indicator",
      "Anchorage",
    ],
    correct: 3,
  },
  {
    question:
      "Signs that possess a resemblance to their referent are considered:",
    options: ["Indexical", "Associational", "Iconic", "Negotiable"],
    correct: 2,
  },
  {
    question:
      "When media texts are related to emotions and feelings, it becomes the _______ domain:",
    options: [
      "The cognitive",
      "The affective",
      "The audience",
      "The production",
    ],
    correct: 1,
  },
  {
    question:
      "Democratic-participant theory of media can be implemented only by:",
    options: [
      "Citizen viewpoints",
      "Cultural autonomy",
      "Public administration",
      "Decree",
    ],
    correct: 0,
  },
  {
    question: "‘Bridal Mantra’, a new magazine, was launched by:",
    options: [
      "The Hindu",
      "The Times of India",
      "The Hindustan Times",
      "The Indian Express",
    ],
    correct: 1,
  },
  {
    question: "Who coined the term, ‘Pack Journalism’?",
    options: ["Timothy Crouse", "Philip Meyer", "Alan Chakley", "Jay Rosen"],
    correct: 0,
  },
  {
    question: "The Copyright Board in India has certain powers of:",
    options: [
      "The legislature",
      "Criminal procedure",
      "Civil courts",
      "The executive",
    ],
    correct: 2,
  },
  {
    question:
      "The 42nd Amendment to the Indian Constitution was in relation to:",
    options: [
      "Parliamentary privileges",
      "Right to privacy",
      "Defamation",
      "Sedition",
    ],
    correct: 0,
  },
  {
    question: "The term, development support communication, was advocated by:",
    options: [
      "Paul Streeten",
      "E.M. Rogers",
      "Erskine Childers",
      "Y.V. Laxmana Rao",
    ],
    correct: 0,
  },
  {
    question:
      "The role of epistemology is emphasized in ______ of development:",
    options: [
      "The communitarian theory",
      "The multi-step flow",
      "The diffusion theory",
      "The theory of mature",
    ],
    correct: 2,
  },
  {
    question:
      "The ethical classification of categorical imperatives was supported by:",
    options: ["Immanuel Kant", "Lord Bryce", "John Locke", "Karl Marx"],
    correct: 0,
  },
  {
    question: "Measurement systems attempt to be isomorphic to:",
    options: ["Reality", "Artificiality", "Persuasion", "Interpretation"],
    correct: 0,
  },
  {
    question:
      "The presence of an extraneous variable in media research indicates:",
    options: [
      "Reliability",
      "Mobility",
      "Lack of internal validity",
      "Presence of validity",
    ],
    correct: 2,
  },
  {
    question:
      "A chain of referrals to identify respondents for collection of data will result in the sampling method known as:",
    options: ["Snowball", "Probability", "Incidental", "Observational"],
    correct: 0,
  },
  {
    question: "Cronbach’s Alpha signifies:",
    options: ["Reliability", "Validity", "Measurability", "Convertibility"],
    correct: 0,
  },
  {
    question:
      "Spurious relationship between two concepts in a research study offers a:",
    options: [
      "Rival explanation",
      "Support a hypothesis",
      "Covariation",
      "Correct measurement",
    ],
    correct: 0,
  },
  {
    question: "Non-parametric tests are generally applied to analyse:",
    options: ["Nominal data", "Ordinal data", "Interval data", "Ratio data"],
    correct: 0,
  },
  {
    question:
      "A social psychologist, Albert Bandura, researched upon the imitation effect of:",
    options: [
      "Television violence",
      "Radio drama",
      "Internet comedy",
      "Fantasy films",
    ],
    correct: 0,
  },
  {
    question: "One way news flow leads to:",
    options: [
      "Modernisation",
      "Globalisation",
      "Cultural Imperialism",
      "Morality Imposition",
    ],
    correct: 2,
  },
  {
    question: "A rate of decline in response to advertisements is called:",
    options: [
      "Response decay",
      "Staggered response",
      "Response downturn",
      "Response entropy",
    ],
    correct: 0,
  },
  {
    question: "Frequency range of FM Broadcast is:",
    options: [
      "80 MHz – 110 MHz",
      "88 MHz – 110 MHz",
      "80 MHz – 108 MHz",
      "88 MHz – 108 MHz",
    ],
    correct: 1,
  },
  {
    question: "Publishing or telecasting controversial advertisements is a:",
    options: [
      "PR tactic",
      "Political stunt",
      "Non-commercial strategy",
      "Mindless Act",
    ],
    correct: 3,
  },
  {
    question: "Scheme advertising aims at _________ promotion:",
    options: ["Institutional", "Creative", "Internal", "Consumer"],
    correct: 0,
  },
  {
    question: "Theme advertisements normally contain:",
    options: [
      "Discount data",
      "Emotional appeal",
      "Investment information",
      "Colourful slang",
    ],
    correct: 1,
  },
  {
    question: "The principal feature of marketing communication is:",
    options: [
      "Surplus-demand",
      "Product life",
      "Hidden prices",
      "Two-way communication",
    ],
    correct: 3,
  },
  {
    question:
      "The number of agate lines of advertising printed in a specific period is known as:",
    options: ["Linage", "Kerning", "Label head", "Jim dash"],
    correct: 0,
  },
  {
    question: "Short wave frequencies are used for radio communication of:",
    options: [
      "Short distance",
      "Long distance",
      "Location specific distance",
      "Specific distance",
    ],
    correct: 1,
  },
  {
    question: "A cut from one sound to another without breaking continuity is:",
    options: ["Segue", "Harmonics", "Hiss", "Timbre"],
    correct: 0,
  },
  {
    question:
      "The off-script lines that characters or anchors say in real time are known as:",
    options: ["Amplitude", "Ad-libbing", "Break", "Bridge"],
    correct: 1,
  },
  {
    question:
      "The process of working on sound after studio production is known as:",
    options: ["Audio fades", "RCA", "Audio boost", "Audio Sweetening"],
    correct: 3,
  },
  {
    question: "The very first film show in India was held at:",
    options: ["Calcutta", "Bombay", "Madras", "Delhi"],
    correct: 1,
  },
  {
    question: "In film making, panning shots can be described as visual:",
    options: ["Art", "Convergence", "Speeches", "Paradigms"],
    correct: 0,
  },
  {
    question: "A canted shot is also referred to as:",
    options: ["Dangled angle", "Dutch angle", "Over shot", "Clear shot"],
    correct: 1,
  },
  {
    question: "The very first film show in India was held at:",
    options: ["Calcutta", "Bombay", "Madras", "Delhi"],
    correct: 0,
  },
  {
    question: "Throw line is:",
    options: [
      "Fragmented scenes of a large event",
      "Graphic representation",
      "Transition from one visual to another",
      "A sentence in the news story that leads to a sound bite",
    ],
    correct: 2,
  },
  {
    question: "Police story means:",
    options: [
      "Newspaper’s stand on an issue",
      "Opposing a police action",
      "Highlighting a day’s events",
      "Correcting a blunder in the edition",
    ],
    correct: 2,
  },
  {
    question: "In newspaper parlance, sacred cow means:",
    options: [
      "Highlighting an inane issue",
      "Using many adjectives",
      "A favourable treatment to a story",
      "Management’s favour to an employee",
    ],
    correct: 2,
  },
  {
    question: "Widow in newspaper production refers to:",
    options: ["Isolated word", "Useless headline", "Bad break", "Tie-break"],
    correct: 0,
  },
  {
    question: "The Italian type faces are invented by:",
    options: [
      "John Baskerville",
      "John Gutenburg",
      "Harold Lexington",
      "Aldus Manutins",
    ],
    correct: 3,
  },
  {
    question: "Bright is a/an:",
    options: [
      "Short feature",
      "Balanced editorial",
      "Attractive news item",
      "Complex interview",
    ],
    correct: 2,
  },
  {
    question: "Nicholas Jenson created the first of _______ typefaces:",
    options: ["Old style", "Transitional", "Modern", "Ultramodern"],
    correct: 0,
  },
  {
    question: "When the first and last columns have solid text, it becomes:",
    options: [
      "Vertical layout",
      "Horizontal layout",
      "Circus layout",
      "Frame layout",
    ],
    correct: 1,
  },
  {
    question: "Polychronic use of time is popular in ________ culture:",
    options: ["American", "British", "Ethiopian", "Indian"],
    correct: 3,
  },
  {
    question:
      "Galtung and Ruge identified an element of newsworthiness called:",
    options: ["Threshold", "Conduct", "Conviction", "Ideology"],
    correct: 0,
  },
  {
    question:
      "In reporting, verification is understood to have conformity with specified:",
    options: ["Techniques", "Ideals", "Sources", "Criteria"],
    correct: 3,
  },
  {
    question:
      "The Human Interest score of Flesch formula of readability indicates:",
    options: [
      "Syllable count",
      "Sentence length",
      "Fractions",
      "Personal words and sentences",
    ],
    correct: 3,
  },
  {
    question:
      "Assertion (A): Public relations as a profession cannot practice the code of Athens always. Reason (R): The profession demands that the practitioners have to assess the assigned task carefully and devise suitable strategies accordingly.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 1,
  },
  {
    question:
      "Assertion (A): The concept of community Journalism has made a definite exit from the Indian journalistic world. Reason (R): Modern technology has made the reach of TV and radio possible in every nook and corner of the country and supply the community related news effectively.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 3,
  },
  {
    question:
      "Assertion (A): The Indian media houses have lost their mission and vision relevant to a developing democracy. Reason (R): The media managers are of present generation and lack a sense of social responsibility, as their main motto is to make profits.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Local content dominated local editions of large newspapers have reduced them to be local newspapers in reality. Reason (R): Modern technology and commercial considerations are responsible for such a trend in Indian journalism.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): The digital divide in India is a serious national issue. Reason (R): The concept of knowledge economy will become a reality when the civil society addresses the issue of digital divide.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Folk media are now museum artifacts. Reason (R): They are unable to survive against the power of technology-propelled mass media.",
    options: ["Both (A) and (R) are true."],
    correct: 0,
  },
  {
    question:
      "Assertion (A): The concept of development communication has failed to take-off in India. Reason (R): Lack of professional approach and the people’s passion for entertainment, not development, are responsible for the situation.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Identify the correct sequence of publications that were launched chronologically during the freedom movement:",
    options: [
      "Bengal Harkuru – The Telegraph – Samvad Kaumudi– Times of India",
      "Bengal Harkuru – Samvad Kaumudi – The Telegraph – Times of India",
      "The Telegraph – Bengal Harkuru – Times of India – Samvad Kaumudi",
      "Samvad Kaumudi – Bengal Harkuru – Times of India – The Telegraph",
    ],
    correct: 1,
  },
  {
    question:
      "Identify the correct chronological sequence of the books on communication.",
    options: [
      "People’s Choice, Effects of Television, Brass Check, Public Opinion",
      "Public Opinion, People’s Choice, Brass Check, Effects of Television",
      "Effects of Television, People’s Choice, Brass Check, Public Opinion",
      "Brass Check, Public Opinion, People’s Choice, Effects of Television",
    ],
    correct: 3,
  },
  {
    question:
      "Find out the correct sequence of the committees set up by the Union Government:",
    options: [
      "Varadhan Committee, Vidyalankar Committee, Geethakrishnan Committee, Diwakar Committee",
      "Geethakrishnan Committee, Varadhan Committee, Diwakar Committee, Vidyalankar Committee",
      "Diwakar Committee, Geethakrishnan Committee, Vidyalankar Committee, Varadhan Committee",
      "Vidyalankar Committee, Diwakar Committee, Varadhan Committee, Geethakrishnan Committee",
    ],
    correct: 3,
  },
  {
    question:
      "Find out the correct sequence of the following developmental models:",
    options: [
      "V.K. Narasimhan, B.G Varghese, Shekhar Gupta, S. Mulgaokar",
      "B.G. Varghese, Shekhar Gupta, S. Mulgaokar, V.K. Narasimhan",
      "S. Mulgaokar, V.K. Narasimhan, B.G. Varghese, Shekhar Gupta",
      "Shekhar Gupta, S. Mulgaokar, V.K. Narasimhan, B.G. Varghese",
    ],
    correct: 1,
  },
  {
    question:
      "Identify the correct chronological sequence of the following models:",
    options: [
      "Integrated Rural Development, Dominant Paradigm, Dependista, Participatory",
      "Participatory, Integrated Rural Development, Dominant Paradigm, Dependista",
      "Dominant Paradigm, Participatory, Integrated Rural Development, Dependista",
      "Dominant Paradigm, Dependista, Integrated Rural Development, Participatory",
    ],
    correct: 0,
  },
  {
    question: "Match List – I with List – II:",
    options: [
      "a. Cognitive Dissonance Theory - 1. Comstock",
      "b. Ball-Rokeach & Defleur - 4. Ball-Rokeach & Defleur",
      "c. Dependency Model of Mass Communication - 3. Maletzke",
      "d. Psychological model of television effect - 2. Festinger",
    ],
    correct: 1,
  },
  {
    question: "Match List – I with List – II:",
    options: [
      "a. Rosengren - 1. Helical patterns",
      "b. Elizabeth Neumann - 2. Development media",
      "c. F. Dance - 3. Centripetal and centrifugal messages",
      "d. Y.V. Lakshmana Rao - 4. Spiral of Silence",
    ],
    correct: 0,
  },
  {
    question: "Match List – I with List – II:",
    options: [
      "a. Daniel Lerner - 4. Traditional vs. Modern society",
      "b. Ferdinand Toennies - 2. Urban vs. Rural society",
      "c. Mahatma Gandhi - 1. Primary vs. Secondary social attachment",
      "d. C.H. Cooley - 3. Gemeinschaft vs. Gesellschaft",
    ],
    correct: 1,
  },
  {
    question: "Match List – I with List – II:",
    options: [
      "a. Annie Besant - 3. New India",
      "b. Thomas J. Bennet - 4. The Times of India",
      "c. Robert Knight - 1. The Statesman",
      "d. Chittaranjan Das - 2. Forward",
    ],
    correct: 0,
  },
  {
    question: "Match List – I with List – II:",
    options: [
      "a. Paswan Committee - 4. National Communication Policy",
      "b. P.C. Joshi Committee - 1. Indian news agencies",
      "c. Kuldip Nayyar Committee - 3. Software for Indian Television",
      "d. Karanth Committee - 2. Status of Indian Film Industry",
    ],
    correct: 2,
  },
  {
    question: "In non-verbal communication, signs signify",
    options: ["Nature", "Crime", "Rigidity", "Constructs"],
    correct: 3,
  },
  {
    question: "Communication has a _____ value.",
    options: ["Positive", "Negative", "Neutral", "Power"],
    correct: 0,
  },
  {
    question: "Newcomb’s model of communication is",
    options: ["Linear", "Oval", "Rectangular", "Triangular"],
    correct: 3,
  },
  {
    question:
      "Interaction with media contents and critically analyzing them is known as",
    options: [
      "Media convergence",
      "Media literacy",
      "Media analysis",
      "Media critique",
    ],
    correct: 1,
  },
  {
    question:
      "The Newspaper (price and page) Act, 1956, was challenged in the Supreme Court by",
    options: ["The Pioneer", "Sakal", "Gujarat Samachar", "The Thanthi"],
    correct: 1,
  },
  {
    question:
      "The qualified privilege in relation to parliamentary proceedings in India is based on",
    options: [
      "The Irish law",
      "The American law",
      "The British law",
      "The Australian law",
    ],
    correct: 2,
  },
  {
    question:
      "The right to refuse publication by a newspaper is based on the assumption that it is a",
    options: [
      "Public service",
      "Private enterprise",
      "Democratic institution",
      "Personal preference",
    ],
    correct: 0,
  },
  {
    question:
      "The second press commission of India did not favour a code of ethics that was",
    options: ["Informal", "Formal", "Personal", "Substantial"],
    correct: 1,
  },
  {
    question: "The Right to Know in India is",
    options: ["Unlimited", "Unparalleled", "Absolute", "Limited"],
    correct: 3,
  },
  {
    question: "The Fundamental Rights of an Indian citizen are subservient to",
    options: [
      "Parliamentary privileges",
      "Executive powers",
      "Political dictates",
      "Media dictates",
    ],
    correct: 0,
  },
  {
    question: "One condition in causation is",
    options: ["Constant", "Co-variation", "Cogence", "Co-existence"],
    correct: 1,
  },
  {
    question: "Intervening variable is also known as ______ variable.",
    options: ["Dependent", "Control", "Systematic", "Cumulative"],
    correct: 1,
  },
  {
    question:
      "An Audience Research Unit of Doordarshan conducted a study in 1993 which revealed that development-oriented programmes do not have viewership because of",
    options: [
      "Lack of local specificity",
      "Absence of entertainment",
      "Language barrier",
      "Lack of diversity in programmes",
    ],
    correct: 1,
  },
  {
    question:
      "A single value that represents a typical score in a distribution is known as",
    options: [
      "Limited value",
      "Terminal factor",
      "Critical value",
      "Central tendency",
    ],
    correct: 3,
  },
  {
    question:
      "The ownership of a newspaper press is administered by the general law of",
    options: ["Labour", "Finance", "Production", "Property"],
    correct: 3,
  },
  {
    question: "The eye-movement that flows in the shape of letter ‘s’ is",
    options: ["Gaze motion", "Proportion", "Balance", "Emphasis"],
    correct: 0,
  },
  {
    question:
      "Which medium is traditionally known as the poor cousin of television and print media?",
    options: ["Out-door media", "Transit media", "Folk media", "New media"],
    correct: 2,
  },
  {
    question:
      "In the market model of media management, the audience is considered as made up of",
    options: ["Representatives", "Investors", "Controllers", "Consumers"],
    correct: 3,
  },
  {
    question:
      "The Western model of development, it is alleged, is characterized by",
    options: [
      "Self-denial",
      "Equality",
      "Decentralisation",
      "Infinite consumership",
    ],
    correct: 3,
  },
  {
    question:
      "The social responsibility model of media developed along with the growth of",
    options: [
      "Mixed economics",
      "Capitalist societies",
      "Socialist societies",
      "Dictatorial regimes",
    ],
    correct: 0,
  },
  {
    question: "In the mass manipulative model, the audience is considered as:",
    options: ["Passive", "Active", "Aligned", "Critical receptionists"],
    correct: 0,
  },
  {
    question: "The term ‘broadcasting’ was borrowed from:",
    options: ["Radio", "Television", "Agriculture", "Banking"],
    correct: 2,
  },
  {
    question: "The perspective of pluralistic model of development is:",
    options: ["Hierarchical", "Bureaucratic", "Empowerment", "Top-down"],
    correct: 2,
  },
  {
    question:
      "“Revolution of the empowerment of the media consumer” is argued by:",
    options: [
      "Denis Mcquail",
      "Julious Reuters",
      "Benjamin Benett",
      "Richard Rosenberg",
    ],
    correct: 0,
  },
  {
    question: "The application of media ethics involves:",
    options: [
      "Finding the most morally defensible answer to a problem.",
      "Maintaining the right to privacy.",
      "Rejecting government’s control over media.",
      "Maintaining the high standards of performance.",
    ],
    correct: 0,
  },
  {
    question: "Non-statutory news councils are popular in:",
    options: ["India", "China", "USA", "Malaysia"],
    correct: 2,
  },
  {
    question: "The golden triangle of Public Service Communication Comprises:",
    options: [
      "Accessibility, plurality & diversity.",
      "Objectivity, impartiality & balance.",
      "Balance, diversity & plurality.",
      "Participation, objectivity & diversity.",
    ],
    correct: 1,
  },
  {
    question: "The key feature of media performance is:",
    options: [
      "Mobilization",
      "Sensationalization",
      "Personalization",
      "Urbanization",
    ],
    correct: 0,
  },
  {
    question:
      "The country in which the print medium is growing fast in the world is:",
    options: ["The United States", "France", "Canada", "India"],
    correct: 3,
  },
  {
    question: "A media mogul, Ted Turner, started his career from:",
    options: [
      "Television anchoring",
      "Radio broadcasting",
      "Print journalism",
      "Outdoor advertising",
    ],
    correct: 3,
  },
  {
    question:
      "In which type of shot does the subject look stronger, imposing, and authoritative?",
    options: [
      "Overhead shot",
      "High angle shot",
      "Eye level shot",
      "Low angle shot",
    ],
    correct: 3,
  },
  {
    question:
      "In television production intensity, colour, dispersion and direction are closely related to:",
    options: ["Shot", "Research", "Lighting", "Graphics"],
    correct: 2,
  },
  {
    question: "Composite, component, RGB are forms of:",
    options: [
      "Satellite signals",
      "Video signals",
      "Audio signals",
      "Studio signals",
    ],
    correct: 1,
  },
  {
    question: "MTV was initially started as a/an:",
    options: [
      "Satellite Channel",
      "Cable Channel",
      "Terrestrial Channel",
      "Online Channel",
    ],
    correct: 1,
  },
  {
    question: "The broadcast style of writing demands the use of:",
    options: ["Golden words", "Juicy words", "Nickel words", "Iron words"],
    correct: 2,
  },
  {
    question: "Digital media narration is:",
    options: ["Dynamic", "Static", "Separate", "Limited"],
    correct: 0,
  },
  {
    question:
      "Personal, real-time, and customized online media with a 3-D mode are called:",
    options: [
      "Multi-media",
      "Digital media",
      "Online media",
      "Immersive media",
    ],
    correct: 3,
  },
  {
    question:
      "A person who does not post messages but reads what others write on an online discussion board is identified as:",
    options: ["Lurker", "Silent participant", "Jabber", "Sleeper-chatter"],
    correct: 0,
  },
  {
    question:
      "The illegal radio stations that began broadcasting into Great Britain in the 1960s were called:",
    options: [
      "Clandestine stations",
      "Pirate broadcasters",
      "Indigenous stations",
      "Exogenous stations",
    ],
    correct: 1,
  },
  {
    question:
      "What was the length of the first Indian feature film, Raja Harishchandra, produced in 1913?",
    options: ["5014 feet", "2500 feet", "3700 feet", "4400 feet"],
    correct: 0,
  },
  {
    question:
      "According to Nicholas Negroponte, the World Wide Web is an engine of:",
    options: [
      "Power equations",
      "Political preparations",
      "Media systems",
      "Public relations",
    ],
    correct: 2,
  },
  {
    question:
      "When products are sold using designs drawn from media products, it is called:",
    options: [
      "Promotional sales",
      "Media promotion",
      "Character merchandising",
      "Mediated selling",
    ],
    correct: 2,
  },
  {
    question:
      "Product advertising over a small area without damaging national investment is known as:",
    options: [
      "Product test",
      "Micro advertising",
      "Pilot advertising",
      "Test marketing",
    ],
    correct: 1,
  },
  {
    question: "Responses of readers to a published advertisement result in:",
    options: [
      "Purchasing power",
      "Preference power",
      "Pulling power",
      "Promotion power",
    ],
    correct: 2,
  },
  {
    question: "Direct mail advertising is often referred to as:",
    options: [
      "Personal selling",
      "Mail order",
      "Junk mail",
      "Postal advertising",
    ],
    correct: 2,
  },
  {
    question:
      "Which newspaper carried an advertisement in 1875 announcing presentation of a farce named “Lamentations of Bhart Mata with her children”?",
    options: [
      "Kesari",
      "The Tribune",
      "Amrit Bazar Patrika",
      "The Times of India",
    ],
    correct: 2,
  },
  {
    question:
      "Placing two versions of an advertisement in the same issue of a newspaper or magazine is known as:",
    options: [
      "Play back audit",
      "Intention scale",
      "Post-test",
      "Split-run test",
    ],
    correct: 3,
  },
  {
    question: "The book, ‘Bias of Communication’ was written by:",
    options: ["Harold Innis", "Herbert Gans", "D.R. Leduc", "J.H. Boyer"],
    correct: 0,
  },
  {
    question:
      "Who is the author of the book, ‘Define Advertising Goals for Measured Advertising Results’?",
    options: [
      "David Ogilvy",
      "Green Rosenburg",
      "Philip Kotler",
      "R.H. Colley",
    ],
    correct: 3,
  },
  {
    question:
      "Which Committee was constituted in 1991 to examine and recommend ways and means to win over advertisers to Doordarshan?",
    options: [
      "Rangnathan Committee",
      "Chanda Committee",
      "B.G. Verghese Committee",
      "Mahalik Committee",
    ],
    correct: 1,
  },
  {
    question:
      "Assertion (A): Visual narratives have made the media communication primitive and tribal. Reason (R): New media technology has made the designer production of media contents cheap and effective involving individual idioms.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 2,
  },
  {
    question:
      "Assertion (A): Of late, the third sector in India has been making an effective use of media, including online, reaching different publics. Reason (R): Media are basically anti-establishment and have supported the third sector campaigns always.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): The Western news agencies like Reuters have shifted their focus to specialized areas of news collection. Reason (R): Since the American news agencies are dominant, they are left with very little option.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): The global news supply has become multiagency oriented for variety and verification. Reason (R): The increasing cost of news collection at the global level has made the task of news collection by third world news agencies difficult.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Media studies are becoming more and more multi-disciplinary these days, especially in the Indian context. Reason (R): As more and more traditional subjects of study are not useful to the employment market, the process of transmigration in the educational field is inevitable.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Despite corporatisation, media in India have strong ideological contours. Reason (R): Because most media persons in India have a heavy dose of Marxist indoctrination.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 2,
  },
  {
    question:
      "Assertion (A): Indian media have started focusing on soft news of social and society events these days. Reason (R): Corporatisation of media and industrialization of Indian culture are the factors influencing the trend.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): When the selected signs are combined into a message, it becomes a syntagm. Reason (R): It happens as vocabularies in a language form a paradigm.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Journalists are bound to assist investigations of offences by disclosing the information that they have collected. Reason (R): It is an obligation of every citizen including media persons under the criminal procedure code of 1973.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question:
      "Assertion (A): Non-verbal communication is not always through presentational codes such as gestures and eye movements. Reason (R): Presentational codes are limited to face-to-face communication or communication when the communicator is present.",
    options: [
      "Both (A) and (R) are true.",
      "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true.",
    ],
    correct: 0,
  },
  {
    question: "Identify the correct sequence of events taken place:",
    options: [
      "Kisan Vani Programme, Digital Radio Transmission, Bhasa Bharati Channel, Service & Home Service.",
      "Bhasa Bharati Channel, Kisan Vani Programme, Service & Home Service, Digital Radio Transmission.",
      "Digital Radio Transmission, Service & Home Service, Kisan Vani Programme, Bhasa Bharati Channel.",
      "Service & Home Service, Digital Radio Channel, Kisan Vani Programme, Bhasa Bharati Channel.",
    ],
    correct: 2,
  },
  {
    question:
      "Identify the correct sequence of films released having secularism as a theme:",
    options: [
      "Baiju Bawara, Basant Bahar, Tansen, Sangeet Samrat Tansen.",
      "Basant Bahar, Tansen, Baiju Bawara, Sangeet Samrat Tansen.",
      "Sangeet Samrat Tansen, Basant Bahar, Baiju Bawara, Tansen.",
      "Tansen, Baiju Bawara, Basant Bahar, Sangeet Samrat Tansen.",
    ],
    correct: 0,
  },
  {
    question:
      "Identify the right sequencing of countries that began publication of newspapers in the early 17th century:",
    options: [
      "England, France, Belgium, Germany.",
      "France, Germany, England, Belgium.",
      "Belgium, England, Germany, France.",
      "Germany, Belgium, France, England.",
    ],
    correct: 0,
  },
  {
    question: "Match the following:",
    options: [
      "Golden Mean – Print, Spindoctoring – Advertising, Crusade – Ethics, Psychographics – Public Relations",
      "Golden Mean – Ethics, Spindoctoring – Public Relations, Crusade – Advertising, Psychographics – Print",
      "Golden Mean – Advertising, Spindoctoring – Print, Crusade – Public Relations, Psychographics – Ethics",
      "Golden Mean – Ethics, Spindoctoring – Print, Crusade – Public Relations, Psychographics – Advertising",
    ],
    correct: 1,
  },
  {
    question:
      "Identify the correct sequence of Mc Quail’s five basic functions of media:",
    options: [
      "Information, Correlation, Continuity, Entertainment, Mobilization.",
      "Correlation, Continuity, Entertainment, Mobilization, Information.",
      "Continuity, Mobilization, Entertainment, Correlation, Information.",
      "Entertainment, Correlation, Mobilization, Continuity, Information.",
    ],
    correct: 0,
  },
  {
    question: "Identify the correct sequence of the following:",
    options: [
      "Film, scene, frame, shot, sequence.",
      "Frame, shot, scene, sequence, film.",
      "Shot, frame, sequence, scene, film.",
      "Scene, sequence, frame, shot, film.",
    ],
    correct: 1,
  },
  {
    question: "Match the List-I with List-II:",
    options: [
      "Mahaa TV (news) – Tamil, Yes India Vision – Urdu, Aditya TV – Telugu, Peace TV – Malayalam",
      "Mahaa TV (news) – Malayalam, Yes India Vision – Urdu, Aditya TV – Tamil, Peace TV – Telugu",
      "Mahaa TV (news) – Telugu, Yes India Vision – Urdu, Aditya TV – Malayalam, Peace TV – Tamil",
      "Mahaa TV (news) – Malayalam, Yes India Vision – Urdu, Aditya TV – Telugu, Peace TV – Tamil",
    ],
    correct: 2,
  },
  {
    question: "Match the List-I with List-II:",
    options: [
      "Louis Lumiere – Arrival of a Train at Ciotal, Edison S. Porter – The Great Train Robbery, Georges Melies – A Trip to the Moon, R.G. Torney – Pundalik",
      "Louis Lumiere – The Great Train Robbery, Edison S. Porter – Pundalik, Georges Melies – A Trip to the Moon, R.G. Torney – Arrival of a Train at Ciotal",
      "Louis Lumiere – Arrival of a Train at Ciotal, Edison S. Porter – Pundalik, Georges Melies – A Trip to the Moon, R.G. Torney – The Great Train Robbery",
      "Louis Lumiere – A Trip to the Moon, Edison S. Porter – The Great Train Robbery, Georges Melies – Arrival of a Train at Ciotal, R.G. Torney – Pundalik",
    ],
    correct: 2,
  },
  {
    question: "Match the List-I with List-II:",
    options: [
      "Jhanak Jhanak Payal Baaje – Satyajit Ray, Maya – Ardeshir Irani, Alam Ara – V. Shantaram, Pather Panchali – P.C. Barua",
      "Jhanak Jhanak Payal Baaje – P.C. Barua, Maya – Ardeshir Irani, Alam Ara – Satyajit Ray, Pather Panchali – V. Shantaram",
      "Jhanak Jhanak Payal Baaje – V. Shantaram, Maya – P.C. Barua, Alam Ara – Ardeshir Irani, Pather Panchali – Satyajit Ray",
      "Jhanak Jhanak Payal Baaje – Ardeshir Irani, Maya – Satyajit Ray, Alam Ara – V. Shantaram, Pather Panchali – P.C. Barua",
    ],
    correct: 1,
  },
  {
    question: "Match the List-I with List-II:",
    options: [
      "Dependista Theory – Gandhian approach, Basic needs model – Grass-roots approach, Industrialization – Capitalist approach, Another development – Marxist approach",
      "Dependista Theory – Capitalist approach, Basic needs model – Marxist approach, Industrialization – Grass-roots approach, Another development – Gandhian approach",
      "Dependista Theory – Marxist approach, Basic needs model – Gandhian approach, Industrialization – Capitalist approach, Another development – Grass-roots approach",
      "Dependista Theory – Capitalist approach, Basic needs model – Grass-roots approach, Industrialization – Marxist approach, Another development – Gandhian approach",
    ],
    correct: 1,
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
  questionElement.textContent = `Question ${currentQuestionIndex + 1}: ${
    question.question
  }`;
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
    const correctButton =
      answersElement.querySelectorAll("button")[correctIndex];
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
    message =
      "Congratulations! You have successfully qualified for JRF (Junior Research Fellowship).";
  } else if (percentage >= 75) {
    message =
      "Well done! You are qualified for NET (National Eligibility Test).";
  } else if (percentage >= 70) {
    message = "Good job! You are eligible for Ph.D. admission.";
  } else {
    message = "Thank you for participating. Keep striving for excellence!";
  }

  // Create the pop-up message and show it
  alert(message);
}

function playSound() {
  const sound = new Audio("alarm-sound.mp3"); // Replace with your sound file path
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
    timeouts,
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
