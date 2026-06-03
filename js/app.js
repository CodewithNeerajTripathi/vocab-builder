/* ============================================================
   Vocab Builder – app.js
   ============================================================ */

/* ────────────────────────────────────────────
   VOCAB DATA  (5 sets × 20 words each)
   You can replace / expand these entries.
   Each entry: { word, pos, meaning, example }
──────────────────────────────────────────── */
const VOCAB_SETS = {
1: [
    { word: "considerate", pos: "adjective",    meaning: "thoughtful about other people's feelings and needs",               example: "Deepika is {word} when someone feels left out.", examples: ["Deepika is {word} when someone feels left out.", "It was {word} of Nihal to wait for his friend after class.", "It is always {word} to include everyone in a group activity.", "A {word} student listens without interrupting.", "You were so rude to Hema. Was that {word} of you?"] },
    { word: "frustrated",  pos: "adjective",    meaning: "upset because something is difficult or not working",              example: "The toddler felt {word} when his tiny hands could not hold the toy.", examples: ["The toddler felt {word} when his tiny hands could not hold the toy.", "Kabir was {word}, but he kept trying to solve the maths problem.", "It is normal to feel {word} when things do not work quickly.", "Even when she felt {word}, Tara kept trying.", "Even when she felt {word}, Tara kept trying."] },
    { word: "determined",  pos: "adjective",    meaning: "not giving up easily",                                             example: "Aparna was {word} to finish the race, even after she stumbled.", examples: ["Aparna was {word} to finish the race, even after she stumbled.", "A {word} student keeps practising after making mistakes.", "The team stayed {word} during the final minutes of the match.", "If you are {word}, you keep working towards your goal.", "Gopi's father helped him stay {word} until the end."] },
    { word: "cautious",    pos: "adjective",    meaning: "careful to avoid danger or mistakes",                              example: "Since the floor was wet, the students were {word} as they walked.", examples: ["Since the floor was wet, the students were {word} as they walked.", "Ever since his fall, Surya has been {word} while climbing the stairs.", "Be {word} while crossing the road in heavy traffic.", "It is wise to be {word} when trying something unfamiliar.", "We need to be more {word} when no one is home."] },
    { word: "fortunate",   pos: "adjective",    meaning: "lucky; having something good happen",                              example: "We are {word} to have a good library in our neighbourhood.", examples: ["We are {word} to have a good library in our neighbourhood.", "Naina felt {word} when her lost watch was returned.", "It was {word} that the rain stopped before the match began.", "I am {word} to have led a happy life, said grandfather.", "We felt {word} that the bus arrived just in time."] },
    { word: "patiently",   pos: "adverb",       meaning: "in a calm, waiting way",                                           example: "Jackson waited {word} while the doctor checked his arm.", examples: ["Jackson waited {word} while the doctor checked his arm.", "The teacher listened {word} to every student's question.", "Varsha worked {word} on the model until it was complete.", "If you wait {word}, your turn will come.", "She spent hours {word} weaving threads into a beautiful sari."] },
    { word: "briskly",     pos: "adverb",       meaning: "quickly and energetically",                                        example: "Mr Singh walked {word} to the station so he would not miss the train.", examples: ["Mr Singh walked {word} to the station so he would not miss the train.", "The players moved {word} across the field during practice.", "Tara and her friends packed their bags {word} when the school bell rang.", "Walk {word}. We are getting late!", "On a cold morning, people often walk {word} to keep warm."] },
    { word: "organise",    pos: "verb",         meaning: "to plan and arrange neatly",                                       example: "We should {word} our notebooks before the new term begins.", examples: ["We should {word} our notebooks before the new term begins.", "Jai and Meena organised the class chart.", "If you {word} your time well, you can work without rushing.", "Tomorrow, we will {word} the materials for the science project.", "Please {word} the files and keep them in the cabinet."] },
    { word: "suggest",     pos: "verb",         meaning: "to give an idea or advice",                                        example: "The tutor said, 'I {word} we read this chapter first.'", examples: ["The tutor said, 'I {word} we read this chapter first.'", "Sarika suggested a new game for our summer party.", "She suggested an idea that solved the problem quickly.", "I will {word} a better title for the story.", "I {word} we go out for breakfast today."] },
    { word: "resolve",     pos: "verb",         meaning: "to solve a problem or settle a disagreement",                      example: "The two friends talked calmly to {word} the argument.", examples: ["The two friends talked calmly to {word} the argument.", "We should {word} small problems before they grow bigger.", "The class monitor helped {word} the confusion about the timetable.", "The group resolved the misunderstanding and continued working together.", "I feel we {word} this fairly."] },
    { word: "predict",     pos: "verb",         meaning: "to say what may happen based on clues",                            example: "We {word} the weather from dark clouds.", examples: ["We {word} the weather from dark clouds.", "The old man who sits in the stands for every match had predicted the winner yesterday.", "Can you {word} what happens next in the story?", "We can {word} the result more easily after looking at the data.", "Scientists {word} weather by studying patterns."] },
    { word: "navigate",    pos: "verb",         meaning: "to find the way through or across something",                      example: "We used a map to {word} through the old part of the city.", examples: ["We used a map to {word} through the old part of the city.", "The driver carefully navigated the crowded street.", "Landmarks can help travellers {word} unfamiliar places.", "It is easier to {word} a new place if you notice landmarks.", "In computer class, we learned how to {word} the website safely."] },
    { word: "record",      pos: "noun / verb",  meaning: "information kept for future use; to write down or save information", example: "The teacher keeps a {word} of attendance.", examples: ["The teacher keeps a {word} of attendance.", "A team of five people were asked to {word} the results.", "A {word} helps us remember important details later.", "We will {word} the experiment results on a chart.", "Did you check the {word} carefully?"] },
    { word: "summary",     pos: "noun",         meaning: "a short version of the main points",                               example: "The {word} gives the main idea of the chapter.", examples: ["The {word} gives the main idea of the chapter.", "Our teacher asked us to write a {word} of the lesson.", "A good {word} includes key points, not every detail.", "We will share the {word} in class tomorrow.", "Can you write a {word} in five lines?"] },
    { word: "solution",    pos: "noun",         meaning: "an answer to a problem",                                           example: "The {word} is on the next page.", examples: ["The {word} is on the next page.", "The traffic officers found a {word} to the traffic problem.", "We need a practical {word} to reduce plastic waste.", "We will discuss the {word} after checking your work.", "What is your {word}?"] },
    { word: "permission",  pos: "noun",         meaning: "approval to do something",                                         example: "Will you take {word} to leave early?", examples: ["Will you take {word} to leave early?", "The children got {word} to use the art room after school.", "We should never take something without {word}.", "You must ask for {word} before leaving the classroom.", "Dad said, 'Ask Mom's {word} before you go to your friend's house.'"] },
    { word: "decision",    pos: "noun",         meaning: "a choice made after thinking carefully",                           example: "The teacher made a fair {word} after hearing both sides.", examples: ["The teacher made a fair {word} after hearing both sides.", "Choosing a team captain can be a difficult {word}.", "The debate team's win was based on one judge's final {word}.", "We will make a {word} after discussing all the options.", "A thoughtful {word} often comes after careful discussion."] },
    { word: "resource",    pos: "noun",         meaning: "something useful that helps you learn or do something",            example: "A dictionary is a useful {word} for learning new words.", examples: ["A dictionary is a useful {word} for learning new words.", "This website is a useful {word} for our project.", "Our school's online library is an excellent {word} for project work.", "We used a video as a {word} for our science task.", "Water is a natural {word} that we must use wisely."] },
    { word: "evidence",    pos: "noun",         meaning: "facts or clues that show something is true",                      example: "The police looked for {word} at the scene.", examples: ["The police looked for {word} at the scene.", "The students found {word} during the experiment.", "Good answers include fact-based {word} to support ideas.", "We will collect {word} before making a decision.", "What {word} do you have?"] },
    { word: "gratitude",   pos: "noun",         meaning: "thankfulness and appreciation",                                    example: "The students showed {word} by thanking the bus driver.", examples: ["The students showed {word} by thanking the bus driver.", "Amita expressed {word} to her teachers.", "A letter of {word} was sent to teachers by Class 5 students.", "We should show {word} when someone helps us.", "The class expressed {word} to the school helpers."] },
  ],
 2: [
    { word: "present", pos: "noun / verb / adjective", meaning: "gift; to show; happening now", example: "Mom gave me a {word} for my birthday.", examples: ["Mom gave me a {word} for my birthday.", "Riya will be {word} at the debate competition tomorrow.", "Who else is {word} in class today?", "They {word}ed their ideas clearly yesterday.", "The {word} situation needs attention."] },
    { word: "change", pos: "noun / verb", meaning: "difference; to make different", example: "There is a {word} in the weather.", examples: ["There is a {word} in the weather.", "We need to {word} our plan.", "The {word} was sudden.", "She {word}d her answer after checking it.", "What {word} do you notice?"] },
    { word: "plan", pos: "noun / verb", meaning: "a method; to decide in advance", example: "We made a clear {word}.", examples: ["We made a clear {word}.", "I will {word} my work properly.", "The {word} looks effective.", "She {word}ned her project yesterday.", "What is your {word}?"] },
    { word: "mark", pos: "noun / verb", meaning: "a score; to show or label", example: "He got a good {word} in science.", examples: ["He got a good {word} in science.", "Please {word} the correct option.", "The {word} is visible on the page.", "The teacher {word}ed the answers yesterday.", "Did the Science teacher {word} your work?"] },
    { word: "accurate", pos: "adjective", meaning: "correct and exact", example: "The answer must be {word}.", examples: ["The answer must be {word}.", "A result of bad eating habits is obesity.", "We need a more {word} method to avoid mistakes.", "Your answer will be {word} if you check it.", "Is Harsh's calculation {word}?"] },
    { word: "relevant", pos: "adjective", meaning: "closely connected to the topic", example: "Your points are {word} to the topic.", examples: ["Your points are {word} to the topic.", "Her example was {word} yesterday.", "{word} details make answers stronger.", "Add only {word} information.", "I don't think Gia's example is {word}."] },
    { word: "logical", pos: "adjective", meaning: "based on clear thinking", example: "That is a {word} answer.", examples: ["That is a {word} answer.", "His explanation was {word} yesterday.", "A {word} method helps solve problems faster.", "Your reasoning will be {word} if steps are clear.", "Does this seem {word}?"] },
    { word: "efficient", pos: "adjective", meaning: "working well without wasting time", example: "An {word} plan saves effort.", examples: ["Ms Shalini's teaching method is the most {word}.", "Most employees in the new office are {word}.", "An {word} plan saves effort.", "You will be {word} with practice.", "There has to be a more {word} way of working on this project."] },
    { word: "analyse", pos: "verb", meaning: "examine closely", example: "We {word} a passage in class.", examples: ["We {word} a passage in class.", "The teacher {word}d the chart in class.", "He is {word}ing the project carefully.", "We will {word} the answers tomorrow.", "Scientists {word} all the facts before they make a conclusion."] },
    { word: "justify", pos: "verb", meaning: "give reasons for something", example: "Please {word} your answer.", examples: ["Please {word} your answer.", "He {word}ied his idea yesterday.", "She is {word}ing her choice with examples.", "You will {word} your reasoning in writing.", "No reason can {word} the inequality women face in the society."] },
    { word: "summarise", pos: "verb", meaning: "give main points briefly", example: "Please {word} the lesson.", examples: ["Please {word} the lesson.", "She {word}d the story yesterday.", "He is {word}ing the article clearly.", "We will {word} the chapter tomorrow.", "{word} this paragraph in two lines."] },
    { word: "conclude", pos: "verb", meaning: "decide after thinking", example: "We {word} after checking all answers.", examples: ["We {word} after checking all answers.", "Can you help me {word} this essay on Marie Curie?", "He is {word}ing the experiment results.", "We will {word} after analysis.", "What can you {word}?"] },
    { word: "modify", pos: "verb", meaning: "to change slightly", example: "Can you {word} this sentence?", examples: ["The teacher allowed me to {word} some of my answers and resubmit the homework.", "Our travel plan had to be {word}ied at the last minute.", "We will {word} the solar engine model for the next science fair.", "The team will {word} the work if needed.", "Can you {word} this sentence?"] },
    { word: "gradually", pos: "adverb", meaning: "slowly over time", example: "The weather changed {word}.", examples: ["The weather changed {word}.", "Mala improved her handwriting {word}.", "I {word} learnt to drive a car.", "Students can improve {word} with effort.", "We must get used to change {word}."] },
    { word: "effectively", pos: "adverb", meaning: "in a way that works well", example: "Ayaan explained his model {word} and impressed the judges.", examples: ["Ayaan explained his model {word} and impressed the judges.", "Mia gave instructions {word}, and the team quickly changed their plan.", "Using only a torch, Kabir worked {word} and finished the project.", "Ritu spoke {word}, and everyone understood her point clearly.", "Can Farah solve the puzzle {word} before the timer runs out?"] },
    { word: "specifically", pos: "adverb", meaning: "clearly and exactly", example: "Can you explain {word} why this answer is correct?", examples: ["Arjun, can you explain {word} why this answer is correct?", "Zara spoke {word} about the Mughal period.", "Nina asked {word} for the exact location on the map.", "Leo asked {word} for chocolate cupcakes, not vanilla ones.", "Kids in my class {word} ask me to read at least one story to them every day."] },
    { word: "result", pos: "noun", meaning: "outcome", example: "Rohan was waiting nervously for the {word}.", examples: ["Rohan was waiting nervously for the {word}.", "Meera saw a great {word} in her dance performance.", "The class worked together. The {word} was a beautiful wall magazine.", "Aarav forgot to water the plant. The {word} was that it dried up.", "The final {word} of the basketball match was in our school's favour."] },
    { word: "method", pos: "noun", meaning: "way of doing something", example: "Vihaan tried a new {word} and solved it quickly.", examples: ["Vihaan tried a new {word} and solved it quickly.", "Sara used a creative {word} to mix colours and paint the sunset.", "Heena changed the {word} and fixed the problem.", "This old {word} always makes the softest rotis.", "Which {word} will you use to solve this tricky maths problem?"] },
    { word: "progress", pos: "noun", meaning: "improvement over time", example: "Anika showed great {word} in singing.", examples: ["Anika showed great {word} in singing.", "Dev practised cricket. His {word} made his coach proud.", "The tiny plant grew taller each day. Its {word} was easy to notice.", "Leo made {word} step by step and built his first game.", "How much {word} have you made in your reading challenge this month?"] },
    { word: "outcome", pos: "noun", meaning: "result of something", example: "Everyone waited eagerly for the {word} of the story.", examples: ["Everyone waited eagerly for the {word} of the story.", "Isha recorded the {word} in her notebook.", "The teacher stepped in to ensure a fair {word}.", "The explorers followed the map. The {word} was a hidden treasure!", "The {word} of this decision for the environment was significant."] },
  ],
3: [
    { word: "suspicious", pos: "adjective", meaning: "feeling that something may be wrong or not as it seems", example: "The message had no sender name, so it looked {word}.", examples: ["Aarav grew {word} when he heard footsteps in the corridor.", "Sofia became {word} of an unattended bag near the gate.", "The message had no sender name, so it looked {word}.", "If the clues do not match, you will become {word}.", "The locked cupboard seem {word} to Meera."] },
    { word: "vanish", pos: "verb", meaning: "to disappear suddenly", example: "The coin seemed to {word} into thin air.", examples: ["The coin seemed to {word} into thin air.", "The mountains began to {word} from view.", "My bookmark seemed to {word} during reading time.", "The footprints will {word} after the rain.", "Where did your ticket {word} at the station?"] },
    { word: "discover", pos: "verb", meaning: "to find or learn something for the first time", example: "Riya {word}ed a tiny garden full of yellow flowers.", examples: ["Riya {word}ed a tiny garden full of yellow flowers.", "Kabir {word}ed a narrow waterfall behind the rocks.", "Liam {word}ed a mistake in the final step.", "If you keep reading, you will {word} new ideas in every chapter.", "What did you {word} during the museum visit?"] },
    { word: "whisper", pos: "verb / noun", meaning: "to speak very softly; a very soft voice", example: "Meera had to {word} to her friend in the library.", examples: ["Meera had to {word} to her friend in the library.", "I heard a {word} behind the curtain during the play rehearsal.", "The leaves seemed to {word} in the wind.", "Please {word} during the quiz, or you may disturb others.", "Why are you speaking in a {word}?"] },
    { word: "chase", pos: "verb", meaning: "to run after someone or something to catch it", example: "Gogo ran to {word} the ball across the field.", examples: ["Gogo ran to {word} the ball across the field.", "The dog {word}d the waves and barked happily.", "The guard {word}d the thief through the market.", "You must {word} your goals with patience and effort.", "'Chase your dreams!' said the main actor in the movie."] },
    { word: "rescue", pos: "verb", meaning: "to save someone from danger", example: "Aarav climbed up to {word} the kitten.", examples: ["Aarav climbed up to {word} the kitten.", "The guides worked together to {word} a lost traveller.", "The lifeguard {word}d a swimmer near the shore just in time.", "Brave people {word} others when help is needed most.", "The forest officers did their best to {word} the hikers."] },
    { word: "inquisitive", pos: "adjective", meaning: "eager to know or learn more", example: "An {word} reader notices tiny details that others may miss.", examples: ["Anika grew {word} about what was inside the chest.", "Omar asked {word} questions about the robot arm.", "An {word} reader notices tiny details that others may miss.", "If you stay {word}, every trip can teach you something new.", "Tara was so {word} and full of questions during the fort visit."] },
    { word: "route", pos: "noun", meaning: "the way or direction taken to get somewhere", example: "The driver chose a quieter {word} through the village.", examples: ["The driver chose a quieter {word} through the village.", "Meera traced the {word} from Delhi to Agra on the map.", "A safe {word} helped the hikers reach the campsite before dark.", "We will take another {word} if the weather changes suddenly.", "Which {word} should we follow to reach the main city?"] },
    { word: "signal", pos: "noun / verb", meaning: "a sign or message; to give a sign", example: "The red light flashed as a {word} to stop.", examples: ["The red light flashed, and everyone knew it was a {word} to stop.", "The guide {word}led the group to move away from the cliff edge.", "A whistle can be a useful {word} for help.", "Please {word} clearly before your team begins.", "What {word} did you notice near the crossing?"] },
    { word: "escape", pos: "verb / noun", meaning: "to get away from a place or danger; a way of getting away", example: "The parrot managed to {word} through the open door.", examples: ["The parrot managed to {word} through the open door.", "The hero planned a clever {word} through a secret tunnel.", "The thief {word}d into the crowd at the station.", "You must {word} quickly if there is danger.", "How did the team {word} from the maze?"] },
    { word: "clue", pos: "noun", meaning: "something that helps solve a mystery or problem", example: "Zara found the first {word} under the table.", examples: ["Zara found the first {word} under the table.", "A bus ticket on the floor became an important {word}.", "Each {word} brought the team closer to the answer.", "Follow every {word} carefully, even the tiny ones.", "What {word} did you find near the window?"] },
    { word: "explore", pos: "verb", meaning: "to travel around or look around to learn more", example: "The children rushed to {word} the old fort.", examples: ["The children rushed to {word} the old fort.", "We {word}d quiet lanes and colourful markets.", "Scientists {word} space to learn more about distant worlds.", "You will {word} many interesting ideas in this project.", "I would love to {word} Japan in spring season."] },
    { word: "trap", pos: "noun / verb", meaning: "something used to catch; to catch or hold someone or something", example: "The hunter set a {word} deep in the jungle.", examples: ["The hunter set a {word} deep in the jungle.", "The suitcase got {word}ped between the train seats.", "He didn't mean to {word} the bird inside the room.", "The mouse got caught in a {word}.", "This question is a {word} for students who don't read carefully."] },
    { word: "alert", pos: "adjective / verb", meaning: "quick to notice danger; to warn someone", example: "The guard stayed {word} at the airport.", examples: ["The guard stayed {word} at the airport late into the night.", "The teacher {word}ed the class when the safety drill began.", "Staying {word} helps you notice changes around you.", "You must remain {word} while crossing a busy road.", "Tourists were told to stay {word} in crowded places."] },
    { word: "expedition", pos: "noun", meaning: "a journey made for a special purpose, especially for exploration", example: "At sunrise, the team began its mountain {word}.", examples: ["At sunrise, the team began its mountain {word}.", "During the school {word} to Jaipur, the students explored old gates and quiet courtyards.", "The forest {word} became exciting when the group found unusual footprints.", "Every {word} needs planning and teamwork.", "What was the most exciting part of the desert {word}?"] },
    { word: "glimpse", pos: "noun / verb", meaning: "a quick look or a brief view", example: "We caught a {word} of the waterfall through the trees.", examples: ["We caught a {word} of the waterfall through the trees.", "Nina {word}d the castle just before the train entered the tunnel.", "I only had a {word} of the answer before the page turned.", "Sometimes one {word} is enough to spark curiosity.", "Did you catch a {word} of the rainbow?"] },
    { word: "ancient", pos: "adjective", meaning: "very old and from a long time ago", example: "The guide showed us an {word} wall covered in faded carvings.", examples: ["The guide showed us an {word} wall covered in faded carvings.", "Yusuf stood quietly beside an {word} map.", "{word} stories often travel from one generation to the next.", "You can learn a lot from {word} objects and ruins.", "Which {word} place would you like to visit?"] },
    { word: "hesitate", pos: "verb", meaning: "to pause because you are unsure", example: "The bridge looked shaky, so the driver began to {word}.", examples: ["The bridge looked shaky, so the driver began to {word}.", "Marvin did not {word} to help the lost child.", "I {word} before answering when the question seems tricky.", "Do not {word} to ask if you need help.", "Rudra {word}d before opening the door."] },
    { word: "distant", pos: "adjective", meaning: "far away in space or time", example: "We could see {word} hills under the evening sky.", examples: ["We could see {word} hills under the evening sky.", "A {word} horn echoed across the harbour.", "The explorers wrote about {word} lands in their journals.", "The stars may look tiny, but they are very {word}.", "I can hear the {word} sound of chirping birds."] },
    { word: "encounter", pos: "verb / noun", meaning: "to meet unexpectedly; an unexpected meeting", example: "The group {word}ed a deer near the water.", examples: ["The group {word}ed a deer near the water.", "I had a strange {word} with a monkey at the hill station.", "Travellers sometimes {word} surprises on the way.", "You may {word} new ideas when you read different books.", "The hikers may {word} wild pigs on the route."] },
    { word: "secret", pos: "noun / adjective", meaning: "something hidden or not meant to be known by everyone", example: "The children found a {word} drawer behind the bookshelf.", examples: ["The children found a {word} drawer behind the bookshelf.", "Eva discovered a {word} path to the garden.", "The map carried a {word} message in tiny letters.", "Some stories become more exciting when they include a {word} plan.", "What {word} did the note reveal?"] },
  ],
4: [
    { word: "infer", pos: "verb", meaning: "to work out or understand something from clues", example: "Good readers {word} meaning by using clues from the text.", examples: ["Good readers {word} meaning by using clues from the text.", "The class could {word} that an animal had passed that way.", "The paragraph does not say it directly, but we can {word} the idea.", "Meera {word}red that the writer missed home.", "What can you {word} from the graph about rainfall this month?"] },
    { word: "verify", pos: "verb", meaning: "to check if something is true or correct", example: "Always {word} your answer by checking your steps again.", examples: ["Always {word} your answer by checking your steps again.", "The students {word}ied the experiment results before writing their conclusions.", "Please {word} the information before sharing it with the class.", "Rohan {word}ied the spelling using a dictionary.", "Why is it important to {word} facts before believing them?"] },
    { word: "clarify", pos: "verb", meaning: "to make something clear and easy to understand", example: "The teacher explained the rule again to {word} the idea.", examples: ["The teacher explained the rule again to {word} the idea.", "Jason went to the Science teacher to {word} his doubt.", "Good explanations {word} difficult concepts.", "The diagram helped {word} how the machine works.", "Please help us to {word} this misunderstanding."] },
    { word: "prioritise", pos: "verb", meaning: "to decide what is most important and do it first", example: "Good students {word} their homework before playtime.", examples: ["Good students {word} their homework before playtime.", "The team {word}d finishing the main task first.", "You should {word} important questions during a test.", "Learning to {word} helps you manage time well.", "You should {word} practice while preparing for exams."] },
    { word: "anticipate", pos: "verb", meaning: "to expect something before it happens", example: "From the dark clouds, we could {word} rain.", examples: ["The teacher could {word} the students' questions before they were asked.", "From the dark clouds, we could {word} rain.", "Good players {word} the next move in the game.", "The guide {word}d a crowd and chose a quieter route.", "I did not {word} Aunt Jane's arrival. She surprised us all."] },
    { word: "assumption", pos: "noun", meaning: "something you believe without proof", example: "The answer was based on an {word}, not on facts.", examples: ["The answer was based on an {word}, not on facts.", "Do not make an {word} without checking the question properly.", "His {word} about the ending of the story was incorrect.", "Scientists test their {word}s using experiments.", "An {word} can often be misleading."] },
    { word: "criteria", pos: "noun", meaning: "rules or standards used to make a decision", example: "The teacher shared the {word} for grading the project.", examples: ["The teacher shared the {word} for grading the project.", "We used clear {word} to choose the best design.", "Good writers follow certain {word} when editing their work.", "The team discussed the {word} before selecting a winner.", "I have very specific {word} when I choose a book."] },
    { word: "perspective", pos: "noun", meaning: "a way of thinking about or looking at something", example: "Try to understand your friend's {word} before responding.", examples: ["The story becomes more interesting from another character's {word}.", "Try to understand your friend's {word} before responding.", "The map shows the place from a bird's-eye {word}.", "Different people may have different {word}s on the same problem.", "What is the narrator's {word} in this story?"] },
    { word: "sequence", pos: "noun", meaning: "the correct order of things", example: "Arrange the pictures in the correct {word} to complete the story.", examples: ["Arrange the pictures in the correct {word} to complete the story.", "The steps must follow a proper {word}.", "Understanding the {word} helps you solve the problem more easily.", "The teacher asked us to write the events in {word}.", "What is the correct {word} of events in the chapter?"] },
    { word: "contrast", pos: "verb / noun", meaning: "to show differences between things", example: "There is a clear {word} between the two pictures.", examples: ["The teacher asked us to {word} the two poems.", "Compare and {word} the two characters in the story.", "There is a clear {word} between the two pictures.", "The {word} between day and night is easy to notice.", "The author has {word}ed the past and the present."] },
    { word: "subtle", pos: "adjective", meaning: "not obvious; small but important", example: "There was a {word} change in the character's behaviour.", examples: ["There was a {word} change in the character's behaviour.", "The artist used {word} colours to show evening light.", "Sometimes the meaning of a line is {word} and needs careful reading.", "A {word} clue helped solve the mystery.", "Did you notice the {word} difference between the two drawings?"] },
    { word: "thorough", pos: "adjective", meaning: "complete and careful", example: "The teacher gave a {word} explanation of the topic.", examples: ["The teacher gave a {word} explanation of the topic.", "Riya did a {word} check before submitting her work.", "A {word} reading helps avoid mistakes.", "The team prepared a {word} plan for the project.", "Why is a {word} revision important before exams?"] },
    { word: "consistent", pos: "adjective", meaning: "happening regularly or staying the same", example: "Regular practice leads to {word} improvement.", examples: ["Regular practice leads to {word} improvement.", "Her performance was {word} throughout the competition.", "Be {word} with your efforts to improve your skills.", "A {word} routine helps build strong habits.", "I am proud that you have stayed {word} in your studies."] },
    { word: "flexible", pos: "adjective", meaning: "able to change easily when needed", example: "Good planners stay {word} when plans change.", examples: ["Good planners stay {word} when plans change.", "The team made a {word} schedule to adjust to delays.", "Being {word} helps you handle new situations better.", "The teacher encouraged {word} thinking during problem-solving.", "Why is it important to stay {word} in a group task?"] },
    { word: "sceptical", pos: "adjective", meaning: "not easily convinced; questioning", example: "A {word} reader asks questions while reading.", examples: ["The class was {word} about the surprising result.", "Meera felt {word} until she saw the proof.", "A {word} reader asks questions while reading.", "It is good to be {word} of unclear information.", "Why should we be {word} of rumours?"] },
    { word: "precisely", pos: "adverb", meaning: "exactly and clearly", example: "Write your answer {word} using correct steps.", examples: ["Write your answer {word} using correct steps.", "The instructions were explained {word}.", "He measured the length {word} using a ruler.", "A {word} written answer is easy to understand.", "Why is it important to answer {word}?"] },
    { word: "strategically", pos: "adverb", meaning: "in a planned and thoughtful way", example: "The team acted {word} to win the match.", examples: ["The team acted {word} to win the match.", "Place your moves {word} in a game of chess.", "Students solve difficult questions {word}.", "Planning {word} helps avoid mistakes.", "How can you prepare {word} for exams?"] },
    { word: "outline", pos: "verb / noun", meaning: "to give the main points", example: "A clear {word} helps organise your thoughts.", examples: ["What is the best way to {word} a story?", "A clear {word} helps organise your thoughts.", "Please {word} your answer before writing in detail.", "We made an {word} before writing the essay.", "The teacher asked us to {word} the main ideas of the chapter."] },
    { word: "report", pos: "noun / verb", meaning: "to give information clearly", example: "A good {word} includes facts and observations.", examples: ["A good {word} includes facts and observations.", "Please {word} your findings to the class.", "The weather {word} was shown on television.", "Please {word} your findings to the class.", "The students wrote a {word} on their science experiment."] },
    { word: "reflection", pos: "noun", meaning: "careful thinking about something", example: "Writing a journal helps with {word}.", examples: ["Writing a journal helps with {word}.", "After the activity, the class shared their {word}s.", "{word} helps you learn from your mistakes.", "Ms Smith gave the class time for quiet {word} after each lesson.", "Upon {word}, Uday realised that he should have checked his answers carefully."] },
  ],
5: [
    { word: "seva", pos: "Sanskrit/Hindi", meaning: "selfless service", example: "The students volunteered at the shelter as an act of {word}.", examples: ["The students volunteered at the shelter as an act of {word}."], link: "https://www.forvo.com/word/seva/" },
    { word: "ahimsa", pos: "Sanskrit", meaning: "non-violence", example: "Our teacher said that {word} means treating all living beings with care.", examples: ["Our teacher said that {word} means treating all living beings with care."], link: "https://www.forvo.com/word/ahimsa/" },
    { word: "dharma", pos: "Sanskrit", meaning: "duty or moral responsibility", example: "The prince felt it was his {word} to tell the truth.", examples: ["The prince felt it was his {word} to tell the truth, even when it was difficult."], link: "https://www.forvo.com/word/dharma/" },
    { word: "jugaad", pos: "Hindi", meaning: "clever practical solution", example: "The art teacher used a clever {word} with string and clips.", examples: ["When the chart stand broke, the art teacher used a clever {word} with string and clips."], link: "https://www.forvo.com/word/jugaad/" },
    { word: "sabha", pos: "Sanskrit", meaning: "formal gathering", example: "The village {word} met under the banyan tree.", examples: ["The village {word} met under the banyan tree to discuss water use."], link: "https://www.forvo.com/word/sabha/" },
    { word: "sankalp", pos: "Sanskrit", meaning: "firm determination", example: "The boy took a {word} to protect nature.", examples: ["Standing before the village tree, the boy took a {word} to protect nature and never waste water."], link: "https://www.forvo.com/word/sankalp/" },
    { word: "samvad", pos: "Hindi", meaning: "meaningful discussion", example: "The teacher encouraged a {word} in class.", examples: ["The teacher encouraged a {word} in class so everyone could share their ideas respectfully."], link: "https://www.forvo.com/word/samvad/" },
    { word: "shanti", pos: "Sanskrit", meaning: "peace", example: "The hall was filled with a sense of {word}.", examples: ["After the morning prayer, the hall was filled with a sense of {word}."], link: "https://www.forvo.com/word/shanti/" },
    { word: "prerna", pos: "Hindi", meaning: "inspiration", example: "Her grandmother's courage became a source of {word} for Riya.", examples: ["Her grandmother's struggles and courage became a source of {word} for Riya."], link: "https://www.forvo.com/word/prerna/" },
    { word: "pind", pos: "Punjabi", meaning: "village; rural town", example: "Every summer, Arjun visits his {word} in Punjab.", examples: ["Every summer, Arjun visits his {word} in Punjab and spends time with his grandparents."], link: "https://forvo.com/word/pind/" },
    { word: "itminaan", pos: "Urdu", meaning: "calmness and peace of mind", example: "Dada sat in the courtyard with {word}, sipping tea.", examples: ["Dada sat in the courtyard with {word}, sipping tea and reading the newspaper."], link: "https://www.forvo.com/word/itminaan/" },
    { word: "gourmet", pos: "French", meaning: "expert in or lover of good food", example: "Even a {word} would have admired the chef's delicious meal.", examples: ["The chef prepared such a delicious meal that even a {word} would have admired it."], link: "https://dictionary.cambridge.org/pronunciation/english/gourmet" },
    { word: "boutique", pos: "French", meaning: "small specialised shop", example: "Mum bought a handmade scarf from a small {word} near the market.", examples: ["Mum bought a handmade scarf from a small {word} near the market."], link: "https://dictionary.cambridge.org/pronunciation/english/boutique" },
    { word: "karaoke", pos: "Japanese", meaning: "singing along to recorded music", example: "The students laughed and sang together during {word} at the school fair.", examples: ["The students laughed and sang together during {word} at the school fair."], link: "https://dictionary.cambridge.org/pronunciation/english/karaoke" },
    { word: "emoji", pos: "Japanese", meaning: "small digital symbol", example: "Our teacher added a smile {word} at the end of the message.", examples: ["Our teacher added a smile {word} at the end of the message to sound friendly."], link: "https://dictionary.cambridge.org/pronunciation/english/emoji" },
    { word: "algebra", pos: "Arabic", meaning: "branch of mathematics using symbols", example: "In maths class, we used {word} to solve a puzzle.", examples: ["In maths class, we used {word} to solve a puzzle with missing numbers."], link: "https://dictionary.cambridge.org/pronunciation/english/algebra" },
    { word: "safari", pos: "Swahili", meaning: "journey to observe wildlife", example: "During the {word}, the children spotted deer and birds.", examples: ["During the {word}, the children spotted deer, birds and a crocodile near the water."], link: "https://dictionary.cambridge.org/pronunciation/english/safari" },
    { word: "robot", pos: "Czech", meaning: "machine that performs tasks", example: "The {word} in the lab could sort blocks by colour and size.", examples: ["The {word} in the lab could sort blocks by colour and size."], link: "https://dictionary.cambridge.org/pronunciation/english/robot" },
    { word: "ubuntu", pos: "Nguni (Zulu/Xhosa)", meaning: "humaneness; belief in sharing and community", example: "Our class showed {word} by sharing materials and helping one another.", examples: ["Our class showed {word} by sharing materials and helping one another during the project."], link: "https://dictionary.cambridge.org/pronunciation/english/ubuntu" },
    { word: "kindergarten", pos: "German", meaning: "early childhood school", example: "My little cousin was excited on the first day of {word}.", examples: ["My little cousin was excited on the first day of {word}."], link: "https://dictionary.cambridge.org/pronunciation/english/kindergarten" },
  ],
};


/* ────────────────────────────────────────────
   USE THE WORDS DATA
──────────────────────────────────────────── */
const WRITING_DATA = {
1: {
   scenario: "Words to Use: considerate (Set 1), logical (Set 2), discover (Set 3), clarify (Set 4), sankalp (Set 5)",
    sample: "A Small Choice, A Big Difference\n\nYesterday, my friend Arul looked upset during lunch. I tried to be considerate (Set 1) and asked him what had happened. He said his science notebook was missing. First, I stayed calm and thought in a logical (Set 2) way about where it could be. We decided to discover (Set 3) possible places, like the classroom and the playground. Then I helped him clarify (Set 4) where he had last kept it. Suddenly, he remembered leaving it near the lab table. We rushed there and found it safely. I felt happy and made a sankalp (Set 5) to always support my friends when they need help."
  },
  2: {
    scenario: "You meet a new student at school who is feeling shy and nervous. Describe how you helped them feel welcome.",
    sample: "I noticed a new student standing alone at lunch, looking nervous. Being kind and cheerful, I walked over and introduced myself with a gentle smile. I was honest about how I felt on my first day too. The new student seemed humble and polite, so I was patient and calm. I invited them to sit with my friends. We were generous with our time and made them feel included. By the end of the day, the new student was smiling. It felt wonderful to be loyal and thoughtful. True friendships are built when we are sincere and brave enough to reach out first."
  },
  3: {
    scenario: "Describe a time when you worked hard to achieve something difficult. What did you do and what did you learn?",
    sample: "Last year, I decided to achieve something I had always dreamed of — winning the school science competition. I began to organise my ideas carefully. My teacher encouraged me to explore different approaches. I had to persist through many failed experiments, but I did not abandon my goal. My friend offered to assist me. Together we tried to improve our model every day. We inspired each other to create something unique. On the day of the competition, we communicated our ideas clearly. We managed to solve the problem and transform our idea into a winning project. I learned that if you respect the process, you can achieve anything."
  },
  4: {
    scenario: "Describe a challenge you faced in your community and how you and others worked together to solve it.",
    sample: "In our community, the local park had become dirty and unsafe. This affected the environment and reduced the freedom children had to play. A group of us showed leadership and decided to take action. Our motivation was simple — every child deserves a safe space. We organised a clean-up drive with determination. People came together in harmony, each bringing knowledge and resources. It was a wonderful opportunity for everyone. Progress was slow at first, but with patience and resilience, the park was transformed. Our community grew in confidence. Now children play there with joy and gratitude. Wisdom lies in working together."
  },
  5: {
    scenario: "Describe a place that you found fascinating and mysterious. What made it so special?",
    sample: "Last summer, I visited an ancient temple hidden deep in the hills. It was a wondrous and majestic sight — enormous stone walls covered in vibrant carvings that told remarkable stories. The atmosphere was mysterious, as if the place held tremendous secrets. I felt fragile in its presence, humbled by its splendid history. Every detail was unique and accurate. I was ambitious to explore every corner. I was grateful for the opportunity to visit such a fascinating place. It made me feel connected to something much larger than everyday life — truly wondrous."
  }
};

/* USE THE WORDS STATE */
let mediaRecorder = null;
let recordingMimeType = 'audio/wav';
let audioChunks   = [];
let audioBlob     = null;
let audioURL      = null;
let audioPlayer   = null;
let recInterval   = null;
let recSeconds    = 0;
let isRecording   = false;
let learnAudioPlayer = null;
let modalAudioPlayer = null;

const LEARN_AUDIO_FILES = {
  '1-0': './img/considerate_01.mp3',
  '1-1': './img/frustrated_01.mp3'
};

const MODAL_AUDIO_FILES = {
  '1-0': './img/considerate_02.mp3',
  '1-1': './img/frustrated_02.mp3'
};

const MCQ_AUDIO_FILES = {
  '1-0': './img/mcq_q1_set1.mp3',
  '1-1': './img/mcq_q2_set1.mp3'
};

const INSTR_AUDIO_FILES = {
  'writing': './img/Instructions.mp3'
};

let mcqAudioPlayer = null;

function stopMCQAudio(resetBtn = true) {
  if (mcqAudioPlayer) {
    mcqAudioPlayer.pause();
    mcqAudioPlayer.currentTime = 0;
    mcqAudioPlayer = null;
  }
  const mcqBtn = document.getElementById('mcq-audio-btn');
  if (resetBtn) setAudioBtnState(mcqBtn, false);
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    isSpeaking = false;
  }
}

/* ────────────────────────────────────────────
   STATE
──────────────────────────────────────────── */
let currentSet     = 1;
let currentMode    = 'learn'; // 'learn' | 'use'
let learnIndex     = 0;       // 0-based word index in learn flow (0-19)
let mcqIndex       = 0;       // 0-based question index (0-9)
let mcqAnswered    = false;
let mcqResults     = [];      // [{question, userAnswer, correct, isCorrect}]
let mcqWords       = [];      // 10 shuffled words for this MCQ session

/* ────────────────────────────────────────────
   NAVIGATION
──────────────────────────────────────────── */
function stopAllAudio() {
  stopLearnAudio();
  stopMCQAudio();
  stopModalAudio();
  if (instrAudioPlayer) {
    instrAudioPlayer.pause();
    instrAudioPlayer.currentTime = 0;
    instrAudioPlayer = null;
  }
  setAudioBtnState(document.getElementById('writing-instr-audio-btn'), false);
  setAudioBtnState(document.getElementById('speaking-instr-audio-btn'), false);
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    isSpeaking = false;
  }
}

function navigate(pageId, mode) {
  if (pageId !== 'page-learn') {
    stopLearnAudio();
  }
  // hide all pages
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
    p.style.display = 'none';
  });
  // show target page
  const target = document.getElementById(pageId);
  if (target) {
    target.style.display = 'flex';
    target.classList.add('active');
  }
  if (mode) currentMode = mode;
  const h = document.getElementById('sets-heading');
  if (h) h.textContent = currentMode === 'use'
    ? 'Choose a set and use the words.'
    : 'Choose a set and start learning.';
}

function goHome() { navigate('page-intro'); }

function startUseWords() {
  currentMode = 'use';
  const data = WRITING_DATA[currentSet] || WRITING_DATA[1];
 const parts = data.scenario.split('Words to Use:');
const label = parts.length > 1 ? parts[1].trim() : data.scenario;
document.getElementById('writing-scenario').innerHTML = 
  `<strong style="color:#272829;font-weight:800;">Words to Use:</strong> ${label}`;
  document.getElementById('writing-answer').value = '';
  navigate('page-writing');
}
function showModal(id) {
  const m = document.getElementById(id);
  m.style.display = 'flex';
  m.classList.remove('hidden');
}
function hideModal(id) {
  if (id === 'more-examples-modal') {
    stopModalAudio();
    const btn = document.getElementById('more-examples-audio-btn');
    setAudioBtnState(btn, false);
  }
  const m = document.getElementById(id);
  m.style.display = 'none';
  m.classList.add('hidden');
}
function showInfo() { showModal('info-modal'); }
function closeInfo() { hideModal('info-modal'); }
function showSetsInfo() { showModal('sets-info-modal'); }
function closeSetsInfo() { hideModal('sets-info-modal'); }
function showWritingInfo() { showModal('writing-info-modal'); }
function closeWritingInfo() { hideModal('writing-info-modal'); }
function showSampleAnswer() {
  const data = WRITING_DATA[currentSet] || WRITING_DATA[1];
 const firstLine = data.sample.split('\n')[0];
const rest = data.sample.split('\n').slice(1).join('\n');
document.getElementById('sample-text').innerHTML = `<strong>${firstLine}</strong>` + rest.replace(/\n/g, '<br/>');
  showModal('sample-modal');
}
function closeSampleModal() { hideModal('sample-modal'); }
function saveWriting() { showModal('challenge-modal'); }

function downloadWritingPDF() {
  const text = document.getElementById('writing-answer').value.trim();
  if (!text) { alert('Please write something first!'); return; }
  const blob = new Blob([
    `My Writing Answer\n\n${text}`
  ], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'my-writing-answer.txt';
  a.click();
  URL.revokeObjectURL(url);
}
function closeChallengeModal() {
  hideModal('challenge-modal');
}


/* ────────────────────────────────────────────
   SET SELECTION
──────────────────────────────────────────── */
function startSet(setNum) {
  currentSet  = setNum;
  if (currentMode === 'use') {
    const data = WRITING_DATA[currentSet] || WRITING_DATA[1];
    const parts = data.scenario.split('Words to Use:');
const label = parts.length > 1 ? parts[1].trim() : data.scenario;
document.getElementById('writing-scenario').innerHTML = 
  `<strong style="color:#000000;font-weight:900;">Words to Use:</strong> ${label}`;
    document.getElementById('writing-answer').value = '';
    navigate('page-writing');
  } else {
    learnIndex  = 0;
    renderLearnCard();
    navigate('page-learn');
  }
}
/* ────────────────────────────────────────────
   LEARN THE WORDS
──────────────────────────────────────────── */
function renderLearnCard() {
  const words = VOCAB_SETS[currentSet];
  const entry = words[learnIndex];

  document.getElementById('learn-set-label').textContent = `Set ${currentSet}`;
  document.getElementById('learn-counter').textContent   = `${learnIndex + 1}/${words.length}`;
  document.getElementById('learn-word').textContent      = entry.word;
  setAudioBtnState(document.querySelector('#page-learn .audio-btn'), false);
  document.getElementById('learn-pos').textContent       = entry.pos;
  document.getElementById('learn-meaning').textContent   = entry.meaning;

  // Example: replace {word} placeholder
  const exHtml = entry.example.replace('{word}', `<strong id="learn-word-bold">${entry.word}</strong>`);
  document.getElementById('learn-example').innerHTML = exHtml;

  // Prev/Next button states
  const prevBtn = document.getElementById('learn-prev-btn');
const nextBtn = document.getElementById('learn-next-btn');
prevBtn.disabled = learnIndex === 0;
prevBtn.style.opacity = learnIndex === 0 ? '.4' : '1';
prevBtn.innerHTML = '<img src="img/prev_btn.png" alt="Previous" style="width:70px;height:110px;object-fit:contain;" />';

if (learnIndex === words.length - 1) {
    nextBtn.innerHTML = '<span style="font-family:var(--font-head);font-size:1.1rem;font-weight:700;color:#fff;background:#1a3a8f;padding:16px 28px;border-radius:999px;">Start MCQ →</span>';
  } else {
    nextBtn.innerHTML = '<img src="img/next_btn.png" alt="Next" style="width:170px;height:80px;object-fit:contain;">';
  }
}

function learnNext() {
  stopLearnAudio();
  const words = VOCAB_SETS[currentSet];
  if (learnIndex < words.length - 1) {
    learnIndex++;
    renderLearnCard();
  } else {
    // All words read → start MCQ
    initMCQ();
    navigate('page-mcq');
  }
}

function learnPrev() {
  stopLearnAudio();
  if (learnIndex > 0) {
    learnIndex--;
    renderLearnCard();
  }
}

/* ────────────────────────────────────────────
   MCQ
──────────────────────────────────────────── */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const MCQ_SETS = {
  1: [
    { question: "What does the word gratitude mean?", options: ["feeling angry", "thanks and appreciation", "solving a problem", "being careful"], answer: "thanks and appreciation" },
    { question: "Which word means to solve a problem or settle a disagreement?", options: ["suggest", "resolve", "predict", "organise"], answer: "resolve" },
    { question: "We should __________ our project materials before starting the activity.", options: ["resolve", "organise", "predict", "feel"], answer: "organise" },
    { question: "What does the word cautious mean?", options: ["quick and energetic", "happy and excited", "careful to avoid mistakes", "not giving up easily"], answer: "careful to avoid mistakes" },
    { question: "It is normal to feel __________ when a task is difficult.", options: ["fortunate", "frustrated", "brisk", "organised"], answer: "frustrated" },
    { question: "Which word means to guess what may happen based on clues or patterns?", options: ["predict", "suggest", "resolve", "organise"], answer: "predict" },
    { question: "Biju keeps practising cricket every day even after losing several matches. Which word best describes him?", options: ["cautious", "brisk", "frustrated", "determined"], answer: "determined" },
    { question: "Sejal listens quietly while her friend shares a problem and offers help gently. Which word best describes her behaviour?", options: ["considerate", "patient", "fortunate", "organised"], answer: "considerate" },
    { question: "Surya quickly packs his bag and rushes out energetically to catch the bus. Which word best describes his movement?", options: ["patiently", "cautiously", "briskly", "determined"], answer: "briskly" },
    { question: "The students discussed calmly and found a fair way to fix their disagreement. What did they do?", options: ["recorded the issue", "predicted the outcome", "resolved the problem", "suggested a story"], answer: "resolved the problem" },
  ],
 2: [
    { question: "What does the word 'accurate' mean?", options: ["wrong", "correct and exact", "unclear", "fast"], answer: "correct and exact" },
    { question: "Which word means closely connected to the topic?", options: ["accurate", "relevant", "logical", "efficient"], answer: "relevant" },
    { question: "We should __________ the lesson in a few lines after reading.", options: ["analyse", "summarise", "justify", "predict"], answer: "summarise" },
    { question: "Which word best describes working well without wasting time?", options: ["logical", "efficient", "accurate", "relevant"], answer: "efficient" },
    { question: "The teacher asked students to give reasons to support their answers. What should they do?", options: ["analyse", "justify", "summarise", "predict"], answer: "justify" },
    { question: "Which word means to examine something closely?", options: ["predict", "analyse", "justify", "organise"], answer: "analyse" },
    { question: "Riya checked her answer carefully and changed it slightly to improve it. What did she do?", options: ["modify", "plan", "change completely", "leave"], answer: "modify" },
    { question: "Kabir explained his answer clearly and in a way that everyone understood easily. Which word best describes how he explained?", options: ["gradually", "effectively", "specifically", "quickly"], answer: "effectively" },
    { question: "The class looked at two different solutions and discussed how they were similar and different. What did they do?", options: ["compare", "contrast", "ignore", "record"], answer: "compare" },
    { question: "After studying all the information, the students decided on the final answer. What did they do?", options: ["summarise", "conclude", "predict", "record"], answer: "conclude" },
  ],
  3: [
    { question: "What does the word 'accurate' mean?", options: ["wrong", "correct and exact", "unclear", "fast"], answer: "correct and exact" },
    { question: "Which word means closely connected to the topic?", options: ["accurate", "relevant", "logical", "efficient"], answer: "relevant" },
    { question: "We should __________ the lesson in a few lines after reading.", options: ["analyse", "summarise", "justify", "predict"], answer: "summarise" },
    { question: "Which word best describes working well without wasting time?", options: ["logical", "efficient", "accurate", "relevant"], answer: "efficient" },
    { question: "The teacher asked students to give reasons to support their answers. What should they do?", options: ["analyse", "justify", "summarise", "predict"], answer: "justify" },
    { question: "Which word means to examine something closely?", options: ["predict", "analyse", "justify", "organise"], answer: "analyse" },
    { question: "Riya checked her answer carefully and changed it slightly to improve it. What did she do?", options: ["modify", "plan", "change completely", "leave"], answer: "modify" },
    { question: "Kabir explained his answer clearly and in a way that everyone understood easily. Which word best describes how he explained?", options: ["gradually", "effectively", "specifically", "quickly"], answer: "effectively" },
    { question: "The class looked at two different solutions and discussed how they were similar and different. What did they do?", options: ["compare", "contrast", "ignore", "record"], answer: "compare" },
    { question: "After studying all the information, the students decided on the final answer. What did they do?", options: ["summarise", "conclude", "predict", "record"], answer: "conclude" },
  ],
  4: [
    { question: "What does the word 'infer' mean?", options: ["guess without thinking", "reach a conclusion from clues", "explain clearly", "read quickly"], answer: "reach a conclusion from clues" },
    { question: "Which word means to check that something is true?", options: ["clarify", "verify", "infer", "check later"], answer: "verify" },
    { question: "We should __________ the instructions if we do not understand them clearly.", options: ["infer", "clarify", "predict", "record"], answer: "clarify" },
    { question: "Which word means to decide what is most important?", options: ["anticipate", "prioritise", "organise", "decide later"], answer: "prioritise" },
    { question: "Which word means something accepted as true without proof?", options: ["evidence", "assumption", "fact", "proof"], answer: "assumption" },
    { question: "Which word means rules or standards for judging something?", options: ["perspective", "criteria", "rule", "method"], answer: "criteria" },
    { question: "Twisha listened to both sides before forming her opinion about the issue. What did this help her gain?", options: ["sequence", "perspective", "contrast", "decision"], answer: "perspective" },
    { question: "Karunesh arranged the steps of the experiment in the correct order. What did he ensure?", options: ["order", "sequence", "contrast", "plan"], answer: "sequence" },
    { question: "The teacher noticed a small difference in the answers that was not easy to see. How can this difference be described?", options: ["clear", "subtle", "obvious", "detailed"], answer: "subtle" },
    { question: "The team planned their actions carefully to win the match in a smart way. How did they act?", options: ["quickly", "strategically", "randomly", "carefully"], answer: "strategically" },
  ],
  5: [
    { question: "What does the word boutique mean?", options: ["a large market", "a small specialised shop", "a type of cloth", "a place to eat"], answer: "a small specialised shop" },
    { question: "What is an emoji?", options: ["a small digital symbol", "a type of computer", "a drawing book", "a musical instrument"], answer: "a small digital symbol" },
    { question: "What does kindergarten mean?", options: ["a play area", "a garden", "early childhood school", "a toy store"], answer: "early childhood school" },
    { question: "We are learning to solve __________ using symbols and equations.", options: ["safari", "algebra", "robot", "gourmet"], answer: "algebra" },
    { question: "What does the word jugaad mean?", options: ["a formal rule", "a clever practical solution", "a peaceful thought", "a discussion"], answer: "a clever practical solution" },
    { question: "What does the word ubuntu mean?", options: ["working alone", "humaneness and caring for others in a community", "solving problems quickly", "a type of machine"], answer: "humaneness and caring for others in a community" },
    { question: "The family went on a trip to see wild animals in their natural home. Which word best describes this trip?", options: ["safari", "boutique", "robot", "gourmet"], answer: "safari" },
    { question: "Riya decided to always do what is right, even when it is difficult. Which word best matches this idea?", options: ["seva", "dharma", "shanti", "sabha"], answer: "dharma" },
    { question: "During the school event, students sang along with music played in the background. Which word best fits this activity?", options: ["emoji", "karaoke", "safari", "algebra"], answer: "karaoke" },
    { question: "The chef prepared an excellent meal that impressed people who love fine food. Which word best describes such a person?", options: ["boutique", "gourmet", "robot", "pind"], answer: "gourmet" },
  ],
};

function initMCQ() {
  const fixedQs = MCQ_SETS[currentSet];
  if (fixedQs && fixedQs.length > 0) {
    mcqWords = fixedQs;
  } else {
    mcqWords = shuffle(VOCAB_SETS[currentSet]).slice(0, 10).map(e => ({
      question: e.meaning,
      options: (() => {
        const wrong = shuffle(VOCAB_SETS[currentSet].filter(w => w.word !== e.word)).slice(0, 3).map(w => w.word);
        return shuffle([e.word, ...wrong]);
      })(),
      answer: e.word
    }));
  }
 mcqIndex   = 0;
  mcqResults = new Array(10).fill(null);
  renderMCQ();
}
function renderMCQ() {
  const entry = mcqWords[mcqIndex];
  mcqAnswered = false;

  document.getElementById('mcq-set-label').textContent  = `Set ${currentSet} - MCQ`;
  document.getElementById('mcq-counter').textContent    = String(mcqIndex + 1).padStart(2,'0') + '/10';
  document.getElementById('mcq-question-text').textContent = entry.question;

  hideFeedback();
const mcqBtn = document.getElementById('mcq-audio-btn');
setAudioBtnState(mcqBtn, false);

  // Build 4 options: 1 correct + 3 random wrong
const options = entry.options;

  const container = document.getElementById('mcq-options');
  container.innerHTML = '';
options.forEach(opt => {
    const wrap = document.createElement('div');
    wrap.className = 'mcq-opt-wrap';

    const btn = document.createElement('button');
    btn.className = 'mcq-opt-btn';
    btn.textContent = opt;
   btn.onclick = () => selectMCQOption(btn, opt, entry.answer, entry.question);

    wrap.appendChild(btn);
    container.appendChild(wrap);
  });

  // Prev button state
  const prevBtn = document.getElementById('mcq-prev-btn');
  prevBtn.disabled = mcqIndex === 0;
  prevBtn.style.opacity = mcqIndex === 0 ? '.4' : '1';

  // Next button state
  const nextBtn = document.getElementById('mcq-next-btn');
if (mcqIndex === 9) {
    nextBtn.innerHTML = '<span style="font-family:var(--font-head);font-size:1.1rem;font-weight:700;color:#fff;background:#1a3a8f;padding:16px 28px;border-radius:999px;">See Results →</span>';
  } else {
    nextBtn.innerHTML = '<img src="img/next_btn.png" alt="Next" style="width:170px;height:80px;object-fit:contain;">';
  }
}

function selectMCQOption(btn, chosen, correct, question) {
  if (mcqAnswered) return;
  mcqAnswered = true;

  const allBtns = document.querySelectorAll('.mcq-opt-btn');
  allBtns.forEach(b => { b.disabled = true; });

  const isCorrect = chosen === correct;
  btn.classList.add('clicked-selected');

  if (isCorrect) {
    btn.classList.add('correct');
    const check = document.createElement('span');
    check.className = 'mcq-check';
    check.textContent = '✓';
    btn.parentElement.appendChild(check);
    document.getElementById('mcq-feedback').classList.remove('hidden');
    document.getElementById('mcq-wrong-feedback').classList.add('hidden');
    document.querySelector('.mcq-card').classList.remove('wrong-answer');
    document.querySelector('.mcq-card').classList.add('correct-answer');
  } else {
    btn.classList.add('wrong');
    const wrongCheck = document.createElement('span');
    wrongCheck.className = 'mcq-check mcq-wrong-check';
    wrongCheck.textContent = '✗';
    btn.parentElement.appendChild(wrongCheck);
    allBtns.forEach(b => {
      if (b.textContent === correct) {
        b.classList.add('correct');
        const check = document.createElement('span');
        check.className = 'mcq-check';
        check.textContent = '✓';
        b.parentElement.appendChild(check);
      }
    });
    document.getElementById('mcq-wrong-feedback').classList.remove('hidden');
    document.getElementById('mcq-feedback').classList.add('hidden');
    document.querySelector('.mcq-card').classList.remove('correct-answer');
    document.querySelector('.mcq-card').classList.add('wrong-answer');
  }

  // Save — always overwrite, only last answer kept per question index
  mcqResults[mcqIndex] = { question, userAnswer: chosen, correct, isCorrect };
}
function hideFeedback() {
  document.getElementById('mcq-feedback').classList.add('hidden');
  document.getElementById('mcq-wrong-feedback').classList.add('hidden');
  document.querySelector('.mcq-card').classList.remove('correct-answer', 'wrong-answer');
}
function mcqNext() {
  stopMCQAudio();
  if (mcqIndex < 9) {
    mcqIndex++;
    renderMCQ();
    // always show fresh — user can re-answer
} else {
    showResults();
    navigate('page-results');
  }
}

function mcqPrev() {
  stopMCQAudio();
  if (mcqIndex > 0) {
    mcqIndex--;
    renderMCQ();
    // always show fresh — user can re-answer
  }
}

/* ────────────────────────────────────────────
   RESULTS
──────────────────────────────────────────── */
function showResults() {
  const correct = mcqResults.filter(r => r && r.isCorrect).length;

  // Star logic: 0-4 = 1 star, 5-7 = 2 stars, 8-10 = 3 stars
  let stars = 1;
  if (correct >= 8) stars = 3;
  else if (correct >= 5) stars = 2;

  // Update set label
  document.getElementById('results-set-label').textContent = `Set ${currentSet} - MCQ`;

  // Update message
  const msgs = {
    1: `You earned 1 star. Keep practising — you can do better!<br/>Try again to earn more stars!`,
    2: `You did a great job! You earned 2 stars.<br/>You can move on to the next set now,<br/>or try one more time to get that 3rd star and become a Master!"`,
    3: `Amazing! You earned all 3 stars! 🎉<br/>You are a true Vocab Master! Move on to the next set.`
  };
  document.getElementById('congrats-msg').innerHTML = msgs[stars];

// Render stars using images
for (let i = 1; i <= 3; i++) {
    const img = document.getElementById('star' + i);
    img.src = i <= stars ? 'img/star_yellow.png' : 'img/star_grey.png';
  }

// Show review of all answers
  let reviewHtml = '';
  mcqWords.forEach((q, i) => {
    const r = mcqResults[i];
    if (r) {
      const icon = r.isCorrect ? '✅' : '❌';
      const color = r.isCorrect ? '#16a34a' : '#ef4444';
reviewHtml += `
        <div style="background:#f9fafb;border-radius:12px;padding:12px 16px;margin-bottom:10px;text-align:left;border:1.5px solid ${r.isCorrect ? '#bbf7d0' : '#fecaca'};">
          <div style="font-size:1.9rem;font-weight:700;color:#1f2937;">${icon} ${i+1}. ${r.question}</div>
          <div style="font-size:1.5rem;color:${color};margin-top:4px;">Your answer: <strong>${r.userAnswer}</strong></div>
          ${!r.isCorrect ? `<div style="font-size:1.5rem;color:#16a34a;">Correct answer: <strong>${r.correct}</strong></div>` : ''}
        </div>
      `;
    } else {
      reviewHtml += `
        <div style="background:#f9fafb;border-radius:12px;padding:12px 16px;margin-bottom:10px;text-align:left;border:1.5px solid #e5e7eb;">
          <div style="font-size:1.9rem;font-weight:700;color:#9ca3af;">⬜ ${i+1}. ${q.question}</div>
          <div style="font-size:1.5rem;color:#9ca3af;margin-top:4px;">Not attempted</div>
        </div>
      `;
    }
  });
  document.getElementById('results-review').innerHTML = reviewHtml;
  document.getElementById('review-modal-content').innerHTML = reviewHtml;
}

/* ────────────────────────────────────────────
   AUDIO (placeholder – wire up real TTS if needed)
──────────────────────────────────────────── */
let isSpeaking = false;

function stopLearnAudio(resetBtn = true) {
  if (learnAudioPlayer) {
    learnAudioPlayer.pause();
    learnAudioPlayer.currentTime = 0;
    learnAudioPlayer = null;
  }
  const learnBtn = document.querySelector('#page-learn .audio-btn');
  if (resetBtn) setAudioBtnState(learnBtn, false);
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    isSpeaking = false;
  }
}

function toggleMoreExampleAudio() {
  const btn = document.getElementById('more-examples-audio-btn');
  const audioKey = `${currentSet}-${learnIndex}`;
  const mp3src = MODAL_AUDIO_FILES[audioKey];
  if (!mp3src) return;

  if (modalAudioPlayer && !modalAudioPlayer.paused) {
    stopModalAudio();
    setAudioBtnState(btn, true);
    return;
  }

  stopAllAudio();
  modalAudioPlayer = new Audio(mp3src);
  setAudioBtnState(btn, false);
  modalAudioPlayer.onended = () => {
    modalAudioPlayer = null;
    setAudioBtnState(btn, false);
  };
  modalAudioPlayer.play().catch(() => { setAudioBtnState(btn, false); });
}

function stopModalAudio() {
  if (modalAudioPlayer) {
    modalAudioPlayer.pause();
    modalAudioPlayer.currentTime = 0;
    modalAudioPlayer = null;
  }
  const modalBtn = document.getElementById('more-examples-audio-btn');
  setAudioBtnState(modalBtn, false);
}

function setAudioBtnState(btn, isPlaying) {
  if (!btn) return;
  const img = btn.querySelector('img');
  if (!img) return;
  if (isPlaying) {
    img.src = 'img/mute.png';
    btn.classList.add('playing');
  } else {
    img.src = 'img/audio.png';
    btn.classList.remove('playing');
  }
}

function playAudio() {
  stopMCQAudio();
  stopModalAudio();
  if (instrAudioPlayer) { instrAudioPlayer.pause(); instrAudioPlayer.currentTime = 0; instrAudioPlayer = null; }
  const wordEl = document.getElementById('learn-word');
  const word = wordEl ? wordEl.textContent : '';
  const audioKey = `${currentSet}-${learnIndex}`;
  const mp3src = LEARN_AUDIO_FILES[audioKey];
  const btn = document.querySelector('#page-learn .audio-btn');

  if (mp3src) {
    if (learnAudioPlayer && !learnAudioPlayer.paused) {
      stopLearnAudio(false);
      setAudioBtnState(btn, true);
      return;
    }
    stopLearnAudio();
    learnAudioPlayer = new Audio(mp3src);
    setAudioBtnState(btn, false);
    learnAudioPlayer.onended = () => {
      learnAudioPlayer = null;
      setAudioBtnState(btn, false);
    };
    learnAudioPlayer.play().catch(() => { setAudioBtnState(btn, false); });
    return;
  }

  if ('speechSynthesis' in window && word) {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      isSpeaking = false;
      setAudioBtnState(btn, true);
      return;
    }
    const utt = new SpeechSynthesisUtterance(word);
    utt.lang = 'en-US';
    utt.rate = 0.85;
    utt.onend = () => {
      isSpeaking = false;
      setAudioBtnState(btn, false);
    };
    isSpeaking = true;
    setAudioBtnState(btn, false);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utt);
  }
}
function playMCQAudio() {
  const btn = document.getElementById('mcq-audio-btn');
  const questionEl = document.getElementById('mcq-question-text');
  const question = questionEl ? questionEl.textContent : '';
  const audioKey = `${currentSet}-${mcqIndex}`;
  const mp3src = MCQ_AUDIO_FILES[audioKey];

  if (mp3src) {
    if (mcqAudioPlayer && !mcqAudioPlayer.paused) {
      stopMCQAudio(false);
      setAudioBtnState(btn, true);
      return;
    }
    stopAllAudio();
    mcqAudioPlayer = new Audio(mp3src);
    setAudioBtnState(btn, false);
    mcqAudioPlayer.onended = () => {
      mcqAudioPlayer = null;
      setAudioBtnState(btn, false);
    };
    mcqAudioPlayer.play().catch(e => {
      console.error('MCQ audio error:', e);
      setAudioBtnState(btn, false);
    });
    return;
  }

  if ('speechSynthesis' in window && question) {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      isSpeaking = false;
      setAudioBtnState(btn, true);
      return;
    }
    stopAllAudio();
    const utt = new SpeechSynthesisUtterance(question);
    utt.lang = 'en-US';
    utt.rate = 0.85;
    utt.onend = () => {
      isSpeaking = false;
      setAudioBtnState(btn, false);
    };
    isSpeaking = true;
    setAudioBtnState(btn, false);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utt);
  }
}

let exSlide = 0;

function showMore() {
  const words = VOCAB_SETS[currentSet];
  const entry = words[learnIndex];
  exSlide = 0;
  renderExampleSlide(entry);
  showModal('more-examples-modal');
}

function renderExampleSlide(entry) {
  const examples = (entry.examples || [entry.example]).slice(1);

let sectionsHtml = '';
  examples.forEach((ex, i) => {
    const text = ex.replace('{word}', `<strong>${entry.word}</strong>`);
    sectionsHtml += `
      <div style="display:flex;align-items:flex-start;gap:16px;background:#f0f7ff;border-radius:16px;padding:16px 20px;margin-bottom:14px;border-left:2px solid #1a3a8f;box-shadow:0 2px 8px rgba(30,60,160,0.08);">
        <span style="min-width:36px;height:36px;background:#1a3a8f;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.4rem;font-weight:900;flex-shrink:0;margin-top:2px;">${i + 2}</span>
        <p style="font-size:2.1rem;color:#374151;line-height:1.6;margin:0;">${text}</p>
      </div>
    `;
  });
  if (entry.link) {
    sectionsHtml += `
      <div class="writing-info-section" style="text-align:center;">
        <h4>Pronunciation</h4>
        <a href="${entry.link}" target="_blank" style="font-size:1.2rem; color:var(--blue-mid); font-weight:700; text-decoration:underline;">🔊 Listen to pronunciation</a>
      </div>
    `;
  }

document.getElementById('more-examples-content').innerHTML = sectionsHtml;
}

function slideExample(dir) {
  const words = VOCAB_SETS[currentSet];
  const entry = words[learnIndex];
  const total = (entry.examples || [entry.example]).length;
  exSlide = Math.max(0, Math.min(total - 1, exSlide + dir));
  renderExampleSlide(entry);
}

/* ────────────────────────────────────────────
   INIT
──────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Hide ALL pages
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
    p.style.display = 'none';
  });
  // Hide ALL modals
  document.querySelectorAll('.modal-overlay').forEach(m => {
    m.style.display = 'none';
    m.classList.add('hidden');
  });
// Show only page 1
  const intro = document.getElementById('page-intro');
  intro.style.display = 'flex';
  intro.classList.add('active');

// JS tooltip appended to body - always shows above everything
  const tooltipEl = document.createElement('div');
  tooltipEl.className = 'js-tooltip';
  tooltipEl.style.opacity = '0';
  tooltipEl.style.visibility = 'hidden';
  document.body.appendChild(tooltipEl);

  document.querySelectorAll('[title]').forEach(el => {
    const text = el.getAttribute('title');
    el.setAttribute('data-tooltip', text);
    el.removeAttribute('title');

    el.addEventListener('mouseenter', () => {
      tooltipEl.textContent = text;
      tooltipEl.style.visibility = 'hidden';
      tooltipEl.style.opacity = '0';
      tooltipEl.style.left = '0px';
      tooltipEl.style.top = '0px';

      requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const tw = tooltipEl.offsetWidth;
        const tx = rect.left + rect.width / 2 - tw / 2;
        const ty = rect.bottom + 6;
        tooltipEl.style.left = Math.max(4, tx) + 'px';
        tooltipEl.style.top = ty + 'px';
        tooltipEl.style.visibility = 'visible';
        tooltipEl.style.opacity = '1';
      });
    });

    el.addEventListener('mouseleave', () => {
      tooltipEl.style.opacity = '0';
      tooltipEl.style.visibility = 'hidden';
    });
  });
});

/* ────────────────────────────────────────────
   USE THE WORDS FUNCTIONS
──────────────────────────────────────────── */



function startChallenge() {
  closeChallengeModal();
  resetRecorder();
  const answer = document.getElementById('writing-answer').value.trim();
  document.getElementById('speaking-answer-display').textContent = answer || 'No answer written yet.';
  navigate('page-speaking');
}
function saveSpeaking() {
  if (!audioBlob) {
    alert('Record audio first, then tap Save to download your recording.');
    return;
  }
  const extension = recordingMimeType === 'audio/mp3' ? 'mp3' : recordingMimeType === 'audio/webm' ? 'webm' : 'wav';
  const downloadName = `my-recording.${extension}`;
  const url = URL.createObjectURL(audioBlob);
  const a = document.createElement('a');
  a.href = url;
  a.download = downloadName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

let instrAudioPlayer = null;

function getInstrAudioBtn(type) {
  return type === 'writing'
    ? document.getElementById('writing-instr-audio-btn')
    : document.getElementById('speaking-instr-audio-btn');
}

function playInstrAudio(type) {
  const btn = getInstrAudioBtn(type);
  if (instrAudioPlayer && !instrAudioPlayer.paused) {
    instrAudioPlayer.pause();
    instrAudioPlayer.currentTime = 0;
    instrAudioPlayer = null;
    setAudioBtnState(btn, true);
    return;
  }

  stopAllAudio();
  const mp3src = INSTR_AUDIO_FILES[type];

  if (mp3src) {
    instrAudioPlayer = new Audio(mp3src);
    instrAudioPlayer.onended = () => {
      instrAudioPlayer = null;
      setAudioBtnState(btn, false);
    };
    setAudioBtnState(btn, false);
    instrAudioPlayer.play().catch(e => {
      console.error('Instr audio error:', e);
      setAudioBtnState(btn, false);
    });
    return;
  }

  const text = type === 'writing'
    ? 'Write a 100–120 word paragraph about a situation where you helped someone or solved a problem. Use all 5 given words meaningfully. Add a creative title for your paragraph.'
    : 'Now read your answer aloud and record it clearly using the correct pronunciation and expression.';
  if ('speechSynthesis' in window) {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      isSpeaking = false;
      setAudioBtnState(btn, true);
      return;
    }
    stopAllAudio();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = 'en-US'; utt.rate = 0.85;
    utt.onend = () => {
      isSpeaking = false;
      setAudioBtnState(btn, false);
    };
    isSpeaking = true;
    setAudioBtnState(btn, false);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utt);
  }
}
/* ── RECORDER ── */
function resetRecorder() {
  isRecording = false;
  audioChunks = []; audioBlob = null; audioURL = null;
  if (audioPlayer) { audioPlayer.pause(); audioPlayer = null; }
  clearInterval(recInterval);
  recSeconds = 0;
  document.getElementById('rec-current').textContent     = '0:00';
  document.getElementById('rec-total').textContent       = '0:00';
  document.getElementById('rec-progress-bar').style.width = '0%';
  document.getElementById('rec-play-btn').disabled       = true;
  document.getElementById('rec-delete-btn').disabled     = true;
  document.getElementById('rec-mic-btn').classList.remove('recording');
}

function toggleRecording() {
  if (!isRecording) { startRecording(); } else { stopRecording(); }
}

async function startRecording() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    recordingMimeType = MediaRecorder.isTypeSupported('audio/mp3')
      ? 'audio/mp3'
      : MediaRecorder.isTypeSupported('audio/webm')
        ? 'audio/webm'
        : 'audio/wav';
    mediaRecorder = new MediaRecorder(stream, { mimeType: recordingMimeType });
    audioChunks = [];
    mediaRecorder.ondataavailable = e => audioChunks.push(e.data);
    mediaRecorder.onstop = () => {
      audioBlob   = new Blob(audioChunks, { type: recordingMimeType });
      audioURL    = URL.createObjectURL(audioBlob);
      audioPlayer = new Audio(audioURL);
      document.getElementById('rec-total').textContent       = formatTime(recSeconds);
      document.getElementById('rec-play-btn').disabled       = false;
      document.getElementById('rec-delete-btn').disabled     = false;
      audioPlayer.ontimeupdate = () => {
        const pct = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        document.getElementById('rec-progress-bar').style.width = pct + '%';
        document.getElementById('rec-current').textContent = formatTime(Math.floor(audioPlayer.currentTime));
      };
    };
    mediaRecorder.start();
    isRecording = true;
    recSeconds  = 0;
    document.getElementById('rec-mic-btn').classList.add('recording');
    recInterval = setInterval(() => {
      recSeconds++;
      document.getElementById('rec-current').textContent = formatTime(recSeconds);
    }, 1000);
  } catch (e) {
    alert('Microphone access denied. Please allow microphone access to record.');
  }
}

function stopRecording() {
  if (mediaRecorder && mediaRecorder.state !== 'inactive') {
    mediaRecorder.stop();
    mediaRecorder.stream.getTracks().forEach(t => t.stop());
  }
  isRecording = false;
  clearInterval(recInterval);
  document.getElementById('rec-mic-btn').classList.remove('recording');
}

function playRecording() {
  if (audioPlayer) { audioPlayer.currentTime = 0; audioPlayer.play(); }
}

function deleteRecording() { resetRecorder(); }

function formatTime(secs) {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return m + ':' + String(s).padStart(2, '0');
}
function toggleReview() {
  showModal('review-modal');
}

function replayMCQ() {
  initMCQ();
  navigate('page-mcq');
}
