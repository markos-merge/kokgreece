import type { ChapterId, LicenseCategory, Question } from "@/lib/types";

export const CHAPTERS: {
  id: ChapterId;
  title: { el: string; en: string };
  blurb: { el: string; en: string };
}[] = [
  {
    id: "danger-signs",
    title: { el: "Σήματα κινδύνου", en: "Danger signs" },
    blurb: { el: "Τρίγωνα προειδοποίησης και κίνδυνοι στον δρόμο.", en: "Warning triangles and road hazards." }
  },
  {
    id: "regulatory-signs",
    title: { el: "Ρυθμιστικές πινακίδες", en: "Regulatory signs" },
    blurb: { el: "Απαγορεύσεις, υποχρεώσεις και όρια.", en: "Prohibitions, obligations and limits." }
  },
  {
    id: "info-signs",
    title: { el: "Πληροφοριακές πινακίδες", en: "Information signs" },
    blurb: { el: "Κατευθύνσεις, υπηρεσίες και οδικό δίκτυο.", en: "Directions, services and the road network." }
  },
  {
    id: "markings",
    title: { el: "Διαγραμμίσεις", en: "Road markings" },
    blurb: { el: "Οριζόντια σήμανση στο οδόστρωμα.", en: "Painted markings on the carriageway." }
  },
  {
    id: "priority",
    title: { el: "Προτεραιότητα", en: "Priority" },
    blurb: { el: "Διασταυρώσεις, κυκλικοί και παραχωρήσεις.", en: "Junctions, roundabouts and yielding." }
  },
  {
    id: "speed",
    title: { el: "Ταχύτητες", en: "Speed" },
    blurb: { el: "Όρια εντός και εκτός κατοικημένης περιοχής.", en: "Limits inside and outside built-up areas." }
  },
  {
    id: "distance",
    title: { el: "Αποστάσεις", en: "Distances" },
    blurb: { el: "Απόσταση ασφαλείας και χρόνος αντίδρασης.", en: "Safe gap and reaction time." }
  },
  {
    id: "lights",
    title: { el: "Φώτα", en: "Lights" },
    blurb: { el: "Χρήση φώτων, σινιάλων και ορατότητα.", en: "Lights, signals and visibility." }
  },
  {
    id: "overtaking",
    title: { el: "Προσπέραση", en: "Overtaking" },
    blurb: { el: "Πότε επιτρέπεται και πότε απαγορεύεται.", en: "When overtaking is allowed or forbidden." }
  },
  {
    id: "parking",
    title: { el: "Στάση και στάθμευση", en: "Stopping and parking" },
    blurb: { el: "Κανόνες στάθμευσης και απαγορεύσεις.", en: "Parking rules and restrictions." }
  },
  {
    id: "alcohol",
    title: { el: "Αλκοόλ και κόπωση", en: "Alcohol and fatigue" },
    blurb: { el: "Όρια αλκοόλης, φάρμακα και ξεκούραση.", en: "Alcohol limits, medicines and rest." }
  },
  {
    id: "mechanics",
    title: { el: "Μηχανολογία", en: "Vehicle systems" },
    blurb: { el: "Ελαστικά, φρένα, υγρά και συντήρηση.", en: "Tyres, brakes, fluids and maintenance." }
  },
  {
    id: "documents",
    title: { el: "Έγγραφα", en: "Documents" },
    blurb: { el: "Άδεια, ασφάλεια και υποχρεώσεις οδηγού.", en: "Licence, insurance and driver duties." }
  },
  {
    id: "first-aid",
    title: { el: "Πρώτες βοήθειες", en: "First aid" },
    blurb: { el: "Τι κάνετε σε ατύχημα.", en: "What to do at a crash." }
  },
  {
    id: "eco",
    title: { el: "Οικολογική οδήγηση", en: "Eco driving" },
    blurb: { el: "Κατανάλωση, ρύποι και ομαλή οδήγηση.", en: "Fuel use, emissions and smooth driving." }
  }
];

export const CATEGORIES: {
  id: LicenseCategory;
  title: { el: string; en: string };
  exam: { el: string; en: string };
}[] = [
  { id: "car", title: { el: "Αυτοκίνητο", en: "Car" }, exam: { el: "Κατηγορία Β · 30 ερωτήσεις · 35 λεπτά · 1 λάθος", en: "Category B · 30 questions · 35 minutes · 1 error" } },
  { id: "moto", title: { el: "Μηχανή", en: "Motorcycle" }, exam: { el: "Κατηγορίες Α/Α1/Α2 · 30 ερωτήσεις · 20 λεπτά · 1 λάθος", en: "Categories A/A1/A2 · 30 questions · 20 minutes · 1 error" } },
  { id: "truck", title: { el: "Φορτηγό", en: "Truck" }, exam: { el: "Κατηγορία C / ΠΕΙ · προσομοίωση εξέτασης", en: "Category C / CPC · exam simulation" } },
  { id: "bus", title: { el: "Λεωφορείο", en: "Bus" }, exam: { el: "Κατηγορία D / ΠΕΙ · προσομοίωση εξέτασης", en: "Category D / CPC · exam simulation" } }
];

function q(
  partial: Omit<Question, "help"> & { help?: Question["help"] }
): Question {
  return {
    help: partial.help ?? {
      el: "Διαβάστε προσεκτικά τη σήμανση και εφαρμόστε τον ΚΟΚ.",
      en: "Read the signing carefully and apply the highway code."
    },
    ...partial
  };
}

export const QUESTIONS: Question[] = [
  q({
    id: "c-d1",
    category: "car",
    chapter: "danger-signs",
    difficulty: "easy",
    sign: "curve-right",
    text: { el: "Τι προειδοποιεί αυτό το σήμα;", en: "What does this sign warn about?" },
    answers: [
      { el: "Επικίνδυνη δεξιά στροφή.", en: "Dangerous right-hand bend." },
      { el: "Υποχρεωτική στροφή δεξιά.", en: "Mandatory right turn." },
      { el: "Τέλος κατοικημένης περιοχής.", en: "End of a built-up area." }
    ],
    correct: 0,
    help: { el: "Το κόκκινο τρίγωνο προειδοποιεί. Το βέλος δείχνει την κατεύθυνση της στροφής.", en: "A red triangle warns. The arrow shows the bend direction." }
  }),
  q({
    id: "c-d2",
    category: "car",
    chapter: "danger-signs",
    difficulty: "easy",
    sign: "slippery",
    text: { el: "Το σήμα αυτό σημαίνει:", en: "This sign means:" },
    answers: [
      { el: "Ολισθηρό οδόστρωμα.", en: "Slippery road." },
      { el: "Απαγορεύονται τα ελαστικά με καρφιά.", en: "Studded tyres are forbidden." },
      { el: "Υποχρεωτικές αλυσίδες χιονιού.", en: "Snow chains are mandatory." }
    ],
    correct: 0
  }),
  q({
    id: "c-d3",
    category: "car",
    chapter: "danger-signs",
    difficulty: "medium",
    sign: "children",
    text: { el: "Όταν βλέπετε αυτό το σήμα πρέπει:", en: "When you see this sign you must:" },
    answers: [
      { el: "Να μειώσετε ταχύτητα και να είστε έτοιμοι να σταματήσετε.", en: "Slow down and be ready to stop." },
      { el: "Να κορνάρετε συνεχώς.", en: "Sound the horn continuously." },
      { el: "Να αυξήσετε ταχύτητα για να περάσετε γρήγορα.", en: "Speed up to pass quickly." }
    ],
    correct: 0,
    help: { el: "Κοντά σε σχολεία τα παιδιά μπορεί να εμφανιστούν ξαφνικά.", en: "Near schools, children can appear suddenly." }
  }),
  q({
    id: "c-d4",
    category: "car",
    chapter: "danger-signs",
    difficulty: "easy",
    sign: "works",
    text: { el: "Το σήμα προειδοποιεί για:", en: "The sign warns of:" },
    answers: [
      { el: "Οδικά έργα.", en: "Road works." },
      { el: "Σταθμό διοδίων.", en: "A toll station." },
      { el: "Χώρο στάθμευσης φορτηγών.", en: "A lorry park." }
    ],
    correct: 0
  }),
  q({
    id: "c-d5",
    category: "car",
    chapter: "danger-signs",
    difficulty: "medium",
    sign: "falling-rocks",
    text: { el: "Πώς αντιδράτε σε σήμα πτώσης βράχων;", en: "How do you react to a falling-rocks sign?" },
    answers: [
      { el: "Μειώνετε ταχύτητα και προσέχετε το οδόστρωμα.", en: "Reduce speed and watch the carriageway." },
      { el: "Σταματάτε αμέσως στη μέση του δρόμου.", en: "Stop immediately in the middle of the road." },
      { el: "Ανάβετε μόνο τα μεγάλα φώτα.", en: "Switch on only the main beam." }
    ],
    correct: 0
  }),
  q({
    id: "c-d6",
    category: "car",
    chapter: "danger-signs",
    difficulty: "easy",
    sign: "traffic-lights",
    text: { el: "Το τρίγωνο με φανάρια σημαίνει:", en: "The triangle with traffic lights means:" },
    answers: [
      { el: "Προσέγγιση σε φωτεινούς σηματοδότες.", en: "Approach to traffic lights." },
      { el: "Υποχρεωτική στάση.", en: "Mandatory stop." },
      { el: "Τέλος αυτοκινητοδρόμου.", en: "End of motorway." }
    ],
    correct: 0
  }),
  q({
    id: "c-r1",
    category: "car",
    chapter: "regulatory-signs",
    difficulty: "easy",
    sign: "stop",
    text: { el: "Στο σήμα STOP πρέπει:", en: "At a STOP sign you must:" },
    answers: [
      { el: "Να σταματήσετε πλήρως και να παραχωρήσετε προτεραιότητα.", en: "Come to a complete stop and give way." },
      { el: "Να επιβραδύνετε μόνο αν έρχεται όχημα.", en: "Slow down only if a vehicle is coming." },
      { el: "Να περάσετε αν η διασταύρωση φαίνεται άδεια.", en: "Go through if the junction looks empty." }
    ],
    correct: 0,
    help: { el: "Η στάση είναι υποχρεωτική, ακόμη και αν δεν φαίνεται άλλος οδηγός.", en: "Stopping is mandatory even if no other driver is visible." }
  }),
  q({
    id: "c-r2",
    category: "car",
    chapter: "regulatory-signs",
    difficulty: "easy",
    sign: "yield",
    text: { el: "Το ανεστραμμένο τρίγωνο σημαίνει:", en: "The inverted triangle means:" },
    answers: [
      { el: "Παραχωρήστε προτεραιότητα.", en: "Give way." },
      { el: "Οδός προτεραιότητας.", en: "Priority road." },
      { el: "Απαγορεύεται η είσοδος.", en: "No entry." }
    ],
    correct: 0
  }),
  q({
    id: "c-r3",
    category: "car",
    chapter: "regulatory-signs",
    difficulty: "easy",
    sign: "no-entry",
    text: { el: "Το σήμα αυτό απαγορεύει:", en: "This sign forbids:" },
    answers: [
      { el: "Την είσοδο σε όλα τα οχήματα.", en: "Entry to all vehicles." },
      { el: "Μόνο στα φορτηγά.", en: "Lorries only." },
      { el: "Τη στάθμευση τη νύχτα.", en: "Night-time parking." }
    ],
    correct: 0
  }),
  q({
    id: "c-r4",
    category: "car",
    chapter: "regulatory-signs",
    difficulty: "easy",
    sign: "speed-50",
    text: { el: "Το σήμα ορίζει:", en: "The sign sets:" },
    answers: [
      { el: "Ανώτατο επιτρεπόμενο όριο 50 χλμ/ώρα.", en: "A maximum speed of 50 km/h." },
      { el: "Ελάχιστο όριο 50 χλμ/ώρα.", en: "A minimum speed of 50 km/h." },
      { el: "Συνιστώμενη ταχύτητα μόνο με βροχή.", en: "A recommended speed only in rain." }
    ],
    correct: 0
  }),
  q({
    id: "c-r5",
    category: "car",
    chapter: "regulatory-signs",
    difficulty: "medium",
    sign: "no-overtaking",
    text: { el: "Με αυτό το σήμα:", en: "With this sign:" },
    answers: [
      { el: "Απαγορεύεται η προσπέραση μηχανοκίνητων οχημάτων.", en: "Overtaking motor vehicles is forbidden." },
      { el: "Απαγορεύεται μόνο η προσπέραση ποδηλάτων.", en: "Only overtaking bicycles is forbidden." },
      { el: "Επιτρέπεται η προσπέραση από δεξιά.", en: "Overtaking on the right is allowed." }
    ],
    correct: 0
  }),
  q({
    id: "c-r6",
    category: "car",
    chapter: "regulatory-signs",
    difficulty: "medium",
    sign: "end-restrictions",
    text: { el: "Το σήμα με διαγώνια γραμμή σημαίνει:", en: "The sign with a diagonal bar means:" },
    answers: [
      { el: "Τέλος όλων των τοπικών απαγορεύσεων.", en: "End of all local prohibitions." },
      { el: "Απαγορεύεται η είσοδος.", en: "No entry." },
      { el: "Υποχρεωτική παράκαμψη.", en: "Mandatory diversion." }
    ],
    correct: 0
  }),
  q({
    id: "c-r7",
    category: "car",
    chapter: "regulatory-signs",
    difficulty: "medium",
    sign: "no-u-turn",
    text: { el: "Το σήμα αυτό:", en: "This sign:" },
    answers: [
      { el: "Απαγορεύει την αναστροφή.", en: "Forbids a U-turn." },
      { el: "Υποχρεώνει αριστερή στροφή.", en: "Requires a left turn." },
      { el: "Δείχνει κυκλικό κόμβο.", en: "Indicates a roundabout." }
    ],
    correct: 0
  }),
  q({
    id: "c-r8",
    category: "car",
    chapter: "regulatory-signs",
    difficulty: "easy",
    sign: "mandatory-right",
    text: { el: "Η μπλε κυκλική πινακίδα με βέλος δεξιά σημαίνει:", en: "The blue circular sign with a right arrow means:" },
    answers: [
      { el: "Υποχρεωτική κατεύθυνση δεξιά.", en: "Mandatory direction to the right." },
      { el: "Κίνδυνος δεξιά.", en: "Danger to the right." },
      { el: "Συνιστώμενη διαδρομή.", en: "A recommended route." }
    ],
    correct: 0
  }),
  q({
    id: "c-i1",
    category: "car",
    chapter: "info-signs",
    difficulty: "easy",
    sign: "priority-road",
    text: { el: "Ο κίτρινος ρόμβος σημαίνει:", en: "The yellow diamond means:" },
    answers: [
      { el: "Οδός προτεραιότητας.", en: "Priority road." },
      { el: "Παραχωρήστε προτεραιότητα.", en: "Give way." },
      { el: "Αυτοκινητόδρομος.", en: "Motorway." }
    ],
    correct: 0
  }),
  q({
    id: "c-i2",
    category: "car",
    chapter: "info-signs",
    difficulty: "easy",
    sign: "hospital",
    text: { el: "Η πινακίδα με το Η δείχνει:", en: "The sign with an H shows:" },
    answers: [
      { el: "Νοσοκομείο.", en: "A hospital." },
      { el: "Ελικοδρόμιο.", en: "A heliport." },
      { el: "Ξενοδοχείο.", en: "A hotel." }
    ],
    correct: 0
  }),
  q({
    id: "c-i3",
    category: "car",
    chapter: "info-signs",
    difficulty: "medium",
    sign: "highway",
    text: { el: "Στον αυτοκινητόδρομο:", en: "On a motorway:" },
    answers: [
      { el: "Απαγορεύονται πεζοί, ποδήλατα και αγροτικά μηχανήματα.", en: "Pedestrians, bicycles and farm machines are forbidden." },
      { el: "Επιτρέπεται η οπισθοπορεία στην ΛΕΑ.", en: "Reversing on the hard shoulder is allowed." },
      { el: "Το όριο είναι πάντα 80 χλμ/ώρα.", en: "The limit is always 80 km/h." }
    ],
    correct: 0
  }),
  q({
    id: "c-i4",
    category: "car",
    chapter: "info-signs",
    difficulty: "easy",
    sign: "one-way",
    text: { el: "Το μπλε βέλος προς τα εμπρός σημαίνει:", en: "The blue arrow pointing ahead means:" },
    answers: [
      { el: "Μονόδρομος.", en: "One-way street." },
      { el: "Υποχρεωτική στάση μπροστά.", en: "Mandatory stop ahead." },
      { el: "Τέλος κατοικημένης περιοχής.", en: "End of a built-up area." }
    ],
    correct: 0
  }),
  q({
    id: "c-i5",
    category: "car",
    chapter: "info-signs",
    difficulty: "medium",
    sign: "end-priority",
    text: { el: "Ο ρόμβος με μαύρη γραμμή σημαίνει:", en: "The diamond with a black line means:" },
    answers: [
      { el: "Τέλος οδού προτεραιότητας.", en: "End of priority road." },
      { el: "Αρχή αυτοκινητοδρόμου.", en: "Start of a motorway." },
      { el: "Υποχρεωτική παράκαμψη.", en: "Mandatory diversion." }
    ],
    correct: 0
  }),
  q({
    id: "c-m1",
    category: "car",
    chapter: "markings",
    difficulty: "easy",
    text: { el: "Η συνεχής άσπρη γραμμή στο κέντρο:", en: "A continuous white centre line:" },
    answers: [
      { el: "Απαγορεύει την υπέρβασή της για προσπέραση.", en: "Must not be crossed to overtake." },
      { el: "Επιτρέπει προσπέραση αν δεν έρχεται όχημα.", en: "Allows overtaking if nothing is coming." },
      { el: "Χρησιμοποιείται μόνο σε αυτοκινητόδρομο.", en: "Is used only on motorways." }
    ],
    correct: 0
  }),
  q({
    id: "c-m2",
    category: "car",
    chapter: "markings",
    difficulty: "medium",
    text: { el: "Διπλή συνεχής γραμμή σημαίνει:", en: "A double continuous line means:" },
    answers: [
      { el: "Απαγορεύεται αυστηρά η υπέρβαση από τις δύο κατευθύνσεις.", en: "Crossing is strictly forbidden from both directions." },
      { el: "Επιτρέπεται η προσπέραση με προσοχή.", en: "Overtaking is allowed with care." },
      { el: "Ο δρόμος είναι μονόδρομος.", en: "The road is one-way." }
    ],
    correct: 0
  }),
  q({
    id: "c-m3",
    category: "car",
    chapter: "markings",
    difficulty: "easy",
    text: { el: "Διακεκομμένη γραμμή:", en: "A broken line:" },
    answers: [
      { el: "Επιτρέπει αλλαγή λωρίδας όταν είναι ασφαλές.", en: "Allows a lane change when it is safe." },
      { el: "Απαγορεύει κάθε υπέρβαση.", en: "Forbids any crossing." },
      { el: "Δείχνει στάση λεωφορείου.", en: "Marks a bus stop." }
    ],
    correct: 0
  }),
  q({
    id: "c-m4",
    category: "car",
    chapter: "markings",
    difficulty: "medium",
    sign: "pedestrian",
    text: { el: "Σε διάβαση πεζών χωρίς φανάρι:", en: "At an unsignalised zebra crossing:" },
    answers: [
      { el: "Παραχωρείτε προτεραιότητα στους πεζούς που τη διασχίζουν.", en: "Give way to pedestrians who are crossing." },
      { el: "Οι πεζοί περιμένουν πάντα εσάς.", en: "Pedestrians must always wait for you." },
      { el: "Κορνάρετε για να περάσουν πιο γρήγορα.", en: "Honk so they cross faster." }
    ],
    correct: 0
  }),
  q({
    id: "c-m5",
    category: "car",
    chapter: "markings",
    difficulty: "hard",
    text: { el: "Κίτρινη τεθλασμένη γραμμή στο κράσπεδο:", en: "A yellow zigzag at the kerb:" },
    answers: [
      { el: "Απαγορεύει στάση και στάθμευση.", en: "Forbids stopping and parking." },
      { el: "Επιτρέπει στάθμευση μόνο σε κατοίκους.", en: "Allows resident parking only." },
      { el: "Δείχνει λωρίδα ποδηλάτων.", en: "Marks a cycle lane." }
    ],
    correct: 0
  }),
  q({
    id: "c-p1",
    category: "car",
    chapter: "priority",
    difficulty: "easy",
    text: { el: "Σε ισόπεδη διασταύρωση χωρίς σήμανση:", en: "At an unsigned crossroads:" },
    answers: [
      { el: "Προτεραιότητα έχει όποιος έρχεται από δεξιά.", en: "Priority goes to the vehicle coming from the right." },
      { el: "Προτεραιότητα έχει το μεγαλύτερο όχημα.", en: "The larger vehicle has priority." },
      { el: "Προτεραιότητα έχει όποιος κινείται ταχύτερα.", en: "The faster vehicle has priority." }
    ],
    correct: 0,
    help: { el: "Ισχύει ο κανόνας «προτεραιότητα από δεξιά», εκτός αν άλλη σήμανση ορίζει διαφορετικά.", en: "The 'priority from the right' rule applies unless other signing says otherwise." }
  }),
  q({
    id: "c-p2",
    category: "car",
    chapter: "priority",
    difficulty: "medium",
    sign: "roundabout",
    text: { el: "Σε κυκλικό κόμβο:", en: "At a roundabout:" },
    answers: [
      { el: "Παραχωρείτε προτεραιότητα στα οχήματα που ήδη κυκλοφορούν στον κόμβο, εκτός αν ορίζεται αλλιώς.", en: "Give way to traffic already on the roundabout unless signed otherwise." },
      { el: "Έχετε πάντα προτεραιότητα στην είσοδο.", en: "You always have priority when entering." },
      { el: "Σταματάτε υποχρεωτικά σε κάθε έξοδο.", en: "You must stop at every exit." }
    ],
    correct: 0
  }),
  q({
    id: "c-p3",
    category: "car",
    chapter: "priority",
    difficulty: "medium",
    text: { el: "Όταν βγαίνετε από χωματόδρομο σε άσφαλτο:", en: "When leaving a dirt road onto asphalt:" },
    answers: [
      { el: "Παραχωρείτε προτεραιότητα στα οχήματα της ασφάλτου.", en: "Give way to vehicles on the paved road." },
      { el: "Έχετε προτεραιότητα αν στρίβετε δεξιά.", en: "You have priority if turning right." },
      { el: "Ισχύει μόνο ο κανόνας από δεξιά.", en: "Only the from-the-right rule applies." }
    ],
    correct: 0
  }),
  q({
    id: "c-p4",
    category: "car",
    chapter: "priority",
    difficulty: "hard",
    text: { el: "Τραμ σε διασταύρωση:", en: "A tram at a junction:" },
    answers: [
      { el: "Έχει γενικά προτεραιότητα έναντι των άλλων οχημάτων.", en: "Generally has priority over other vehicles." },
      { el: "Περιμένει πάντα τα ΙΧ.", en: "Always waits for cars." },
      { el: "Ακολουθεί μόνο τα φανάρια πεζών.", en: "Follows only pedestrian lights." }
    ],
    correct: 0
  }),
  q({
    id: "c-p5",
    category: "car",
    chapter: "priority",
    difficulty: "medium",
    text: { el: "Όχημα έκτακτης ανάγκης με σειρήνα και φάρους:", en: "An emergency vehicle with siren and beacons:" },
    answers: [
      { el: "Του παραχωρείτε αμέσως χώρο και προτεραιότητα.", en: "You must immediately give it space and priority." },
      { el: "Συνεχίζετε κανονικά αν είστε σε προτεραιότητα.", en: "Continue normally if you have priority." },
      { el: "Το ακολουθείτε για να διευκολύνετε.", en: "Follow it to help." }
    ],
    correct: 0
  }),
  q({
    id: "c-p6",
    category: "car",
    chapter: "priority",
    difficulty: "easy",
    sign: "give-way-opposite",
    text: { el: "Σε στενό δρόμο με αυτό το σήμα:", en: "On a narrow road with this sign:" },
    answers: [
      { el: "Παραχωρείτε προτεραιότητα στα αντίθετα οχήματα.", en: "Give way to oncoming vehicles." },
      { el: "Έχετε προτεραιότητα έναντι των αντίθετων.", en: "You have priority over oncoming traffic." },
      { el: "Ο δρόμος είναι κλειστός.", en: "The road is closed." }
    ],
    correct: 0
  }),
  q({
    id: "c-s1",
    category: "car",
    chapter: "speed",
    difficulty: "easy",
    text: { el: "Το γενικό όριο εντός κατοικημένης περιοχής στην Ελλάδα είναι:", en: "The general limit in a Greek built-up area is:" },
    answers: [
      { el: "50 χλμ/ώρα, εκτός αν άλλη σήμανση ορίζει διαφορετικά.", en: "50 km/h unless other signing says otherwise." },
      { el: "30 χλμ/ώρα σε όλους τους δρόμους.", en: "30 km/h on every road." },
      { el: "70 χλμ/ώρα.", en: "70 km/h." }
    ],
    correct: 0
  }),
  q({
    id: "c-s2",
    category: "car",
    chapter: "speed",
    difficulty: "medium",
    text: { el: "Σε αυτοκινητόδρομο το ανώτατο όριο για ΙΧ είναι συνήθως:", en: "On a motorway the usual car maximum is:" },
    answers: [
      { el: "130 χλμ/ώρα, αν δεν ορίζεται μικρότερο.", en: "130 km/h unless a lower limit is signed." },
      { el: "100 χλμ/ώρα.", en: "100 km/h." },
      { el: "90 χλμ/ώρα.", en: "90 km/h." }
    ],
    correct: 0
  }),
  q({
    id: "c-s3",
    category: "car",
    chapter: "speed",
    difficulty: "medium",
    text: { el: "Με βροχή ή μειωμένη ορατότητα:", en: "In rain or poor visibility:" },
    answers: [
      { el: "Μειώνετε ταχύτητα ανάλογα με τις συνθήκες.", en: "Reduce speed according to the conditions." },
      { el: "Κρατάτε το νόμιμο όριο σταθερά.", en: "Keep exactly to the legal limit." },
      { el: "Ανάβετε μόνο τα πίσω φώτα ομίχλης.", en: "Use only the rear fog light." }
    ],
    correct: 0
  }),
  q({
    id: "c-s4",
    category: "car",
    chapter: "speed",
    difficulty: "hard",
    sign: "speed-80",
    text: { el: "Αν το όριο είναι 80 και υπάρχει και πινακίδα έργων:", en: "If the limit is 80 and there is also a works sign:" },
    answers: [
      { el: "Προσαρμόζετε ακόμη χαμηλότερα αν τα έργα το απαιτούν.", en: "Go even slower if the works require it." },
      { el: "Το 80 είναι υποχρεωτική ελάχιστη ταχύτητα.", en: "80 is a mandatory minimum." },
      { el: "Αγνοείτε τα έργα αν η λωρίδα είναι ανοιχτή.", en: "Ignore the works if the lane is open." }
    ],
    correct: 0
  }),
  q({
    id: "c-s5",
    category: "car",
    chapter: "speed",
    difficulty: "easy",
    text: { el: "Εκτός κατοικημένης περιοχής, σε συμβατική οδό, το σύνηθες όριο ΙΧ είναι:", en: "Outside built-up areas on an ordinary road, the usual car limit is:" },
    answers: [
      { el: "90 χλμ/ώρα, εκτός άλλης σήμανσης.", en: "90 km/h unless signed otherwise." },
      { el: "50 χλμ/ώρα.", en: "50 km/h." },
      { el: "130 χλμ/ώρα.", en: "130 km/h." }
    ],
    correct: 0
  }),
  q({
    id: "c-di1",
    category: "car",
    chapter: "distance",
    difficulty: "easy",
    text: { el: "Η απόσταση ασφαλείας πρέπει:", en: "The safety distance must:" },
    answers: [
      { el: "Να σας επιτρέπει να σταματήσετε χωρίς σύγκρουση.", en: "Let you stop without a collision." },
      { el: "Να είναι πάντα ακριβώς 2 μέτρα.", en: "Always be exactly 2 metres." },
      { el: "Να μειώνεται όσο αυξάνεται η ταχύτητα.", en: "Shrink as speed increases." }
    ],
    correct: 0
  }),
  q({
    id: "c-di2",
    category: "car",
    chapter: "distance",
    difficulty: "medium",
    text: { el: "Κανόνας των 2 δευτερολέπτων:", en: "The 2-second rule:" },
    answers: [
      { el: "Αφήνετε τουλάχιστον 2 δευτερόλεπτα από το μπροστινό όχημα σε στεγνό δρόμο.", en: "Leave at least 2 seconds from the vehicle ahead on a dry road." },
      { el: "Προσπερνάτε μέσα σε 2 δευτερόλεπτα.", en: "Overtake within 2 seconds." },
      { el: "Αλλάζετε ταχύτητα κάθε 2 δευτερόλεπτα.", en: "Change gear every 2 seconds." }
    ],
    correct: 0
  }),
  q({
    id: "c-di3",
    category: "car",
    chapter: "distance",
    difficulty: "hard",
    text: { el: "Σε βρεγμένο οδόστρωμα η απόσταση πέδησης:", en: "On a wet road the braking distance:" },
    answers: [
      { el: "Αυξάνεται σημαντικά.", en: "Increases significantly." },
      { el: "Μένει ίδια.", en: "Stays the same." },
      { el: "Μειώνεται λόγω καλύτερης τριβής.", en: "Decreases because of better grip." }
    ],
    correct: 0
  }),
  q({
    id: "c-di4",
    category: "car",
    chapter: "distance",
    difficulty: "medium",
    text: { el: "Ο χρόνος αντίδρασης ενός προσεκτικού οδηγού είναι περίπου:", en: "A careful driver's reaction time is about:" },
    answers: [
      { el: "1 δευτερόλεπτο.", en: "1 second." },
      { el: "0,1 δευτερόλεπτο.", en: "0.1 seconds." },
      { el: "5 δευτερόλεπτα.", en: "5 seconds." }
    ],
    correct: 0
  }),
  q({
    id: "c-l1",
    category: "car",
    chapter: "lights",
    difficulty: "easy",
    text: { el: "Τα μεγάλα φώτα (πορείας) τα σβήνετε:", en: "You dip the main beam when:" },
    answers: [
      { el: "Όταν συναντάτε αντίθετο όχημα ή ακολουθείτε άλλο όχημα.", en: "Meeting oncoming traffic or following another vehicle." },
      { el: "Μόνο μέσα σε σήραγγα.", en: "Only inside a tunnel." },
      { el: "Ποτέ τη νύχτα εκτός πόλης.", en: "Never at night outside town." }
    ],
    correct: 0
  }),
  q({
    id: "c-l2",
    category: "car",
    chapter: "lights",
    difficulty: "medium",
    text: { el: "Τα πίσω φώτα ομίχλης χρησιμοποιούνται:", en: "Rear fog lights are used:" },
    answers: [
      { el: "Μόνο όταν η ορατότητα είναι πολύ μειωμένη.", en: "Only when visibility is severely reduced." },
      { el: "Κάθε βράδυ στον αυτοκινητόδρομο.", en: "Every night on the motorway." },
      { el: "Όταν βρέχει ελαφρά.", en: "In light rain." }
    ],
    correct: 0
  }),
  q({
    id: "c-l3",
    category: "car",
    chapter: "lights",
    difficulty: "easy",
    text: { el: "Πριν αλλάξετε κατεύθυνση:", en: "Before changing direction:" },
    answers: [
      { el: "Χρησιμοποιείτε φλας έγκαιρα και ελέγχετε καθρέφτες και νεκρή γωνία.", en: "Signal in good time and check mirrors and the blind spot." },
      { el: "Φλας μόνο αν υπάρχει όχημα πίσω.", en: "Signal only if someone is behind." },
      { el: "Κορνάρετε αντί για φλας.", en: "Honk instead of signalling." }
    ],
    correct: 0
  }),
  q({
    id: "c-l4",
    category: "car",
    chapter: "lights",
    difficulty: "medium",
    text: { el: "Σε σήραγγα με επαρκή φωτισμό:", en: "In a well-lit tunnel:" },
    answers: [
      { el: "Ανάβετε τουλάχιστον τα φώτα διασταύρωσης.", en: "Switch on at least dipped headlights." },
      { el: "Οδηγείτε χωρίς φώτα για εξοικονόμηση.", en: "Drive without lights to save energy." },
      { el: "Χρησιμοποιείτε μόνο τα φώτα έκτακτης ανάγκης.", en: "Use only the hazard lights." }
    ],
    correct: 0
  }),
  q({
    id: "c-o1",
    category: "car",
    chapter: "overtaking",
    difficulty: "easy",
    text: { el: "Η προσπέραση γίνεται κανονικά:", en: "Overtaking is normally done:" },
    answers: [
      { el: "Από τα αριστερά.", en: "On the left." },
      { el: "Από τα δεξιά πάντα.", en: "Always on the right." },
      { el: "Από όποια πλευρά είναι πιο άδεια.", en: "On whichever side is emptier." }
    ],
    correct: 0
  }),
  q({
    id: "c-o2",
    category: "car",
    chapter: "overtaking",
    difficulty: "medium",
    text: { el: "Απαγορεύεται η προσπέραση:", en: "Overtaking is forbidden:" },
    answers: [
      { el: "Σε στροφή, κορυφή ανηφόρας και διάβαση πεζών όταν δεν έχετε ορατότητα.", en: "On a bend, crest or zebra crossing without visibility." },
      { el: "Μόνο τη νύχτα.", en: "Only at night." },
      { el: "Μόνο όταν βρέχει.", en: "Only when it rains." }
    ],
    correct: 0
  }),
  q({
    id: "c-o3",
    category: "car",
    chapter: "overtaking",
    difficulty: "hard",
    text: { el: "Αν σας προσπερνούν:", en: "If you are being overtaken:" },
    answers: [
      { el: "Δεν αυξάνετε ταχύτητα και διευκολύνετε την προσπέραση.", en: "Do not speed up and make the overtake easier." },
      { el: "Κλείνετε τον άλλο οδηγό.", en: "Close the gap on the other driver." },
      { el: "Ανάβετε μεγάλα φώτα.", en: "Switch on main beam." }
    ],
    correct: 0
  }),
  q({
    id: "c-o4",
    category: "car",
    chapter: "overtaking",
    difficulty: "medium",
    text: { el: "Προσπέραση στα δεξιά επιτρέπεται κυρίως:", en: "Overtaking on the right is mainly allowed:" },
    answers: [
      { el: "Όταν το μπροστινό όχημα στρίβει αριστερά και υπάρχει χώρος δεξιά.", en: "When the vehicle ahead is turning left and there is room on the right." },
      { el: "Πάντα στον αυτοκινητόδρομο.", en: "Always on the motorway." },
      { el: "Μέσα σε σήραγγα.", en: "Inside a tunnel." }
    ],
    correct: 0
  }),
  q({
    id: "c-pa1",
    category: "car",
    chapter: "parking",
    difficulty: "easy",
    sign: "no-parking",
    text: { el: "Η μπλε πινακίδα με κόκκινο σταυρό:", en: "The blue sign with a red cross:" },
    answers: [
      { el: "Απαγορεύει στάση και στάθμευση.", en: "Forbids stopping and parking." },
      { el: "Επιτρέπει στάση έως 5 λεπτά.", en: "Allows a stop of up to 5 minutes." },
      { el: "Δείχνει χώρο αναπήρων.", en: "Marks a disabled bay." }
    ],
    correct: 0
  }),
  q({
    id: "c-pa2",
    category: "car",
    chapter: "parking",
    difficulty: "easy",
    sign: "no-stopping",
    text: { el: "Κόκκινος κύκλος με μία διαγώνιο σε μπλε φόντο:", en: "A red circle with one diagonal on blue:" },
    answers: [
      { el: "Απαγορεύει τη στάθμευση, όχι κατ’ ανάγκη τη σύντομη στάση.", en: "Forbids parking, not necessarily a brief stop." },
      { el: "Απαγορεύει την είσοδο.", en: "Forbids entry." },
      { el: "Υποχρεώνει στάθμευση.", en: "Requires parking." }
    ],
    correct: 0
  }),
  q({
    id: "c-pa3",
    category: "car",
    chapter: "parking",
    difficulty: "medium",
    text: { el: "Απαγορεύεται η στάθμευση:", en: "Parking is forbidden:" },
    answers: [
      { el: "Σε διάβαση πεζών, γωνίες και πάνω σε διαγραμμίσεις.", en: "On zebra crossings, corners and painted markings." },
      { el: "Μόνο μπροστά από σχολεία.", en: "Only in front of schools." },
      { el: "Μόνο τις Κυριακές.", en: "Only on Sundays." }
    ],
    correct: 0
  }),
  q({
    id: "c-pa4",
    category: "car",
    chapter: "parking",
    difficulty: "medium",
    text: { el: "Σε ανηφόρα, όταν σταθμεύετε:", en: "When parking uphill:" },
    answers: [
      { el: "Αφήνετε όπισθεν σχέση ή P και στρίβετε τους τροχούς προς το κράσπεδο όπως ορίζει η ασφάλεια.", en: "Leave reverse or P engaged and turn the wheels safely toward the kerb." },
      { el: "Αφήνετε νεκρά χωρίς χειρόφρενο.", en: "Leave it in neutral without the handbrake." },
      { el: "Σβήνετε τη μηχανή μόνο αν έχει κλίση κάτω από 2%.", en: "Switch off only if the slope is under 2%." }
    ],
    correct: 0
  }),
  q({
    id: "c-a1",
    category: "car",
    chapter: "alcohol",
    difficulty: "easy",
    text: { el: "Το γενικό όριο αλκοόλης στο αίμα για νέους οδηγούς στην Ελλάδα είναι:", en: "The general blood-alcohol limit for novice drivers in Greece is:" },
    answers: [
      { el: "0,20 γραμμάρια ανά λίτρο.", en: "0.20 grams per litre." },
      { el: "0,50 γραμμάρια ανά λίτρο.", en: "0.50 grams per litre." },
      { el: "0,80 γραμμάρια ανά λίτρο.", en: "0.80 grams per litre." }
    ],
    correct: 0,
    help: { el: "Για νέους οδηγούς και επαγγελματίες το όριο είναι αυστηρότερο (0,20 g/l).", en: "Novice and professional drivers have a stricter 0.20 g/l limit." }
  }),
  q({
    id: "c-a2",
    category: "car",
    chapter: "alcohol",
    difficulty: "medium",
    text: { el: "Το αλκοόλ:", en: "Alcohol:" },
    answers: [
      { el: "Αυξάνει τον χρόνο αντίδρασης και μειώνει την κρίση.", en: "Increases reaction time and reduces judgement." },
      { el: "Βελτιώνει την όραση τη νύχτα.", en: "Improves night vision." },
      { el: "Δεν επηρεάζει αν έχετε φάει.", en: "Has no effect if you have eaten." }
    ],
    correct: 0
  }),
  q({
    id: "c-a3",
    category: "car",
    chapter: "alcohol",
    difficulty: "easy",
    text: { el: "Αν νυστάζετε στον δρόμο:", en: "If you feel sleepy on the road:" },
    answers: [
      { el: "Σταματάτε σε ασφαλές σημείο και ξεκουράζεστε.", en: "Stop in a safe place and rest." },
      { el: "Ανοίγετε το παράθυρο και επιταχύνετε.", en: "Open the window and accelerate." },
      { el: "Πίνετε καφέ και συνεχίζετε χωρίς στάση.", en: "Drink coffee and continue without stopping." }
    ],
    correct: 0
  }),
  q({
    id: "c-a4",
    category: "car",
    chapter: "alcohol",
    difficulty: "medium",
    text: { el: "Φάρμακα που προκαλούν υπνηλία:", en: "Medicines that cause drowsiness:" },
    answers: [
      { el: "Μπορεί να καταστήσουν επικίνδυνη την οδήγηση.", en: "Can make driving dangerous." },
      { el: "Επιτρέπονται αν τα πάρετε με νερό.", en: "Are fine if taken with water." },
      { el: "Επηρεάζουν μόνο τους επαγγελματίες οδηγούς.", en: "Affect only professional drivers." }
    ],
    correct: 0
  }),
  q({
    id: "c-me1",
    category: "car",
    chapter: "mechanics",
    difficulty: "easy",
    text: { el: "Το ελάχιστο νόμιμο βάθος πέλματος επιβατικού είναι:", en: "The legal minimum car tread depth is:" },
    answers: [
      { el: "1,6 χιλιοστά.", en: "1.6 millimetres." },
      { el: "0,5 χιλιοστά.", en: "0.5 millimetres." },
      { el: "5 χιλιοστά.", en: "5 millimetres." }
    ],
    correct: 0
  }),
  q({
    id: "c-me2",
    category: "car",
    chapter: "mechanics",
    difficulty: "medium",
    text: { el: "Αν ανάψει η λυχνία πίεσης λαδιού:", en: "If the oil-pressure warning lights:" },
    answers: [
      { el: "Σταματάτε μόλις είναι ασφαλές και σβήνετε τον κινητήρα.", en: "Stop as soon as it is safe and switch off the engine." },
      { el: "Συνεχίζετε μέχρι το επόμενο ΚΤΕΟ.", en: "Continue until the next inspection centre." },
      { el: "Αυξάνετε στροφές για να λιπανθεί.", en: "Rev the engine to lubricate it." }
    ],
    correct: 0
  }),
  q({
    id: "c-me3",
    category: "car",
    chapter: "mechanics",
    difficulty: "easy",
    text: { el: "Πριν μακρύ ταξίδι ελέγχετε:", en: "Before a long trip you check:" },
    answers: [
      { el: "Ελαστικά, φώτα, υγρά και καθαριότητα κρυστάλλων.", en: "Tyres, lights, fluids and clean glass." },
      { el: "Μόνο την ποσότητα καυσίμου.", en: "Only the fuel quantity." },
      { el: "Μόνο το ραδιόφωνο.", en: "Only the radio." }
    ],
    correct: 0
  }),
  q({
    id: "c-me4",
    category: "car",
    chapter: "mechanics",
    difficulty: "hard",
    text: { el: "Το ABS:", en: "ABS:" },
    answers: [
      { el: "Εμποδίζει το μπλοκάρισμα των τροχών στο δυνατό φρενάρισμα.", en: "Stops the wheels locking under hard braking." },
      { el: "Μειώνει πάντα την απόσταση πέδησης στο μισό.", en: "Always halves braking distance." },
      { el: "Αντικαθιστά το χειρόφρενο.", en: "Replaces the handbrake." }
    ],
    correct: 0
  }),
  q({
    id: "c-me5",
    category: "car",
    chapter: "mechanics",
    difficulty: "medium",
    text: { el: "Υπερβολικά χαμηλή πίεση ελαστικών:", en: "Tyres with too little pressure:" },
    answers: [
      { el: "Αυξάνει κατανάλωση, φθορά και κίνδυνο εκρήξεως.", en: "Increase fuel use, wear and blow-out risk." },
      { el: "Βελτιώνει την πρόσφυση πάντα.", en: "Always improve grip." },
      { el: "Επιβάλλεται στον αυτοκινητόδρομο.", en: "Are required on the motorway." }
    ],
    correct: 0
  }),
  q({
    id: "c-do1",
    category: "car",
    chapter: "documents",
    difficulty: "easy",
    text: { el: "Όταν οδηγείτε πρέπει να έχετε μαζί:", en: "When driving you must carry:" },
    answers: [
      { el: "Άδεια οδήγησης, άδεια κυκλοφορίας και απόδειξη ασφάλισης.", en: "Driving licence, registration and proof of insurance." },
      { el: "Μόνο το δίπλωμα.", en: "Only the licence." },
      { el: "Μόνο το ΚΤΕΟ.", en: "Only the MOT certificate." }
    ],
    correct: 0
  }),
  q({
    id: "c-do2",
    category: "car",
    chapter: "documents",
    difficulty: "medium",
    text: { el: "Η ζώνη ασφαλείας:", en: "The seat belt:" },
    answers: [
      { el: "Είναι υποχρεωτική για οδηγό και επιβάτες.", en: "Is mandatory for the driver and passengers." },
      { el: "Απαιτείται μόνο στον αυτοκινητόδρομο.", en: "Is required only on the motorway." },
      { el: "Δεν χρειάζεται στα πίσω καθίσματα.", en: "Is not needed in the rear seats." }
    ],
    correct: 0
  }),
  q({
    id: "c-do3",
    category: "car",
    chapter: "documents",
    difficulty: "easy",
    text: { el: "Παιδί σε επιβατικό αυτοκίνητο:", en: "A child in a car:" },
    answers: [
      { el: "Χρησιμοποιεί κατάλληλο σύστημα συγκράτησης ανάλογα με ηλικία/ύψος.", en: "Uses a suitable restraint for their age/height." },
      { el: "Κάθεται ελεύθερα αν είναι πίσω.", en: "May sit unrestrained in the back." },
      { el: "Κρατιέται από ενήλικα αντί για κάθισμα.", en: "Can be held by an adult instead of a seat." }
    ],
    correct: 0
  }),
  q({
    id: "c-do4",
    category: "car",
    chapter: "documents",
    difficulty: "medium",
    text: { el: "Χρήση κινητού χωρίς hands-free:", en: "Using a handheld phone:" },
    answers: [
      { el: "Απαγορεύεται κατά την οδήγηση.", en: "Is forbidden while driving." },
      { el: "Επιτρέπεται κάτω από 30 χλμ/ώρα.", en: "Is allowed under 30 km/h." },
      { el: "Επιτρέπεται αν είστε σε φανάρι χωρίς να σβήσετε μηχανή.", en: "Is allowed at lights with the engine running." }
    ],
    correct: 0
  }),
  q({
    id: "c-f1",
    category: "car",
    chapter: "first-aid",
    difficulty: "easy",
    text: { el: "Σε τροχαίο πρώτα:", en: "At a crash, first:" },
    answers: [
      { el: "Ασφαλίζετε τον χώρο, καλείτε βοήθεια και μετά φροντίζετε τραυματίες.", en: "Make the scene safe, call help, then care for the injured." },
      { el: "Μετακινείτε αμέσως όλους τους τραυματίες.", en: "Move every casualty immediately." },
      { el: "Φεύγετε αν δεν φταίτε.", en: "Leave if you are not at fault." }
    ],
    correct: 0
  }),
  q({
    id: "c-f2",
    category: "car",
    chapter: "first-aid",
    difficulty: "medium",
    text: { el: "Το προειδοποιητικό τρίγωνο τοποθετείται:", en: "The warning triangle is placed:" },
    answers: [
      { el: "Σε επαρκή απόσταση πίσω από το ακινητοποιημένο όχημα.", en: "A sufficient distance behind the stationary vehicle." },
      { el: "Πάνω στο καπό.", en: "On the bonnet." },
      { el: "Μόνο αν είναι νύχτα.", en: "Only at night." }
    ],
    correct: 0
  }),
  q({
    id: "c-f3",
    category: "car",
    chapter: "first-aid",
    difficulty: "hard",
    text: { el: "Αναίσθητος που αναπνέει:", en: "An unconscious casualty who is breathing:" },
    answers: [
      { el: "Τοποθετείται σε πλάγια θέση ασφαλείας, εκτός αν υπάρχει υποψία σοβαρού τραύματος σπονδυλικής στήλης.", en: "Is put in the recovery position unless a serious spinal injury is suspected." },
      { el: "Του δίνετε νερό αμέσως.", en: "Is given water immediately." },
      { el: "Τον σηκώνετε όρθιο.", en: "Is stood upright." }
    ],
    correct: 0
  }),
  q({
    id: "c-e1",
    category: "car",
    chapter: "eco",
    difficulty: "easy",
    text: { el: "Οικολογική οδήγηση σημαίνει:", en: "Eco driving means:" },
    answers: [
      { el: "Ομαλή επιτάχυνση, σωστές ταχύτητες και αποφυγή άσκοπων στάσεων.", en: "Smooth acceleration, the right gears and fewer unnecessary stops." },
      { el: "Να οδηγείτε πάντα στην πρώτη σχέση.", en: "Always driving in first gear." },
      { el: "Να ζεσταίνετε τον κινητήρα στο ρελαντί για 15 λεπτά.", en: "Idling for 15 minutes to warm the engine." }
    ],
    correct: 0
  }),
  q({
    id: "c-e2",
    category: "car",
    chapter: "eco",
    difficulty: "medium",
    text: { el: "Υψηλές στροφές χωρίς λόγο:", en: "Unnecessarily high revs:" },
    answers: [
      { el: "Αυξάνουν κατανάλωση και ρύπους.", en: "Increase fuel use and emissions." },
      { el: "Καθαρίζουν τον καταλύτη αμέσως.", en: "Immediately clean the catalytic converter." },
      { el: "Επιβάλλονται στην πόλη.", en: "Are required in town." }
    ],
    correct: 0
  }),
  q({
    id: "c-e3",
    category: "car",
    chapter: "eco",
    difficulty: "easy",
    text: { el: "Άσκοπο βάρος και σχάρες οροφής:", en: "Needless weight and roof racks:" },
    answers: [
      { el: "Αυξάνουν την κατανάλωση.", en: "Increase fuel consumption." },
      { el: "Βελτιώνουν την αεροδυναμική.", en: "Improve aerodynamics." },
      { el: "Δεν επηρεάζουν τίποτα.", en: "Have no effect." }
    ],
    correct: 0
  }),
  q({
    id: "c-x1",
    category: "car",
    chapter: "priority",
    difficulty: "hard",
    text: { el: "Όταν στρίβετε αριστερά σε διασταύρωση:", en: "When turning left at a junction:" },
    answers: [
      { el: "Παραχωρείτε στα αντίθετα οχήματα που συνεχίζουν ευθεία ή στρίβουν δεξιά.", en: "Give way to oncoming vehicles going ahead or turning right." },
      { el: "Έχετε πάντα προτεραιότητα.", en: "You always have priority." },
      { el: "Περνάτε πριν τους πεζούς της κάθετης οδού.", en: "You go before pedestrians on the side road." }
    ],
    correct: 0
  }),
  q({
    id: "c-x2",
    category: "car",
    chapter: "lights",
    difficulty: "hard",
    text: { el: "Κίτρινο φανάρι που μόλις άναψε:", en: "An amber light that has just come on:" },
    answers: [
      { el: "Σταματάτε, εκτός αν είστε τόσο κοντά που το απότομο φρενάρισμα είναι επικίνδυνο.", en: "Stop, unless you are so close that sudden braking would be dangerous." },
      { el: "Επιταχύνετε πάντα για να προλάβετε.", en: "Always accelerate to beat it." },
      { el: "Το αγνοείτε όπως το πράσινο.", en: "Treat it like green." }
    ],
    correct: 0
  }),
  q({
    id: "c-x3",
    category: "car",
    chapter: "regulatory-signs",
    difficulty: "hard",
    sign: "min-speed",
    text: { el: "Κυκλικό μπλε σήμα με αριθμό 30 σημαίνει:", en: "A blue circular sign with 30 means:" },
    answers: [
      { el: "Ελάχιστη υποχρεωτική ταχύτητα 30 χλμ/ώρα.", en: "A mandatory minimum speed of 30 km/h." },
      { el: "Ανώτατο όριο 30 χλμ/ώρα.", en: "A maximum of 30 km/h." },
      { el: "Απόσταση 30 μέτρων.", en: "A distance of 30 metres." }
    ],
    correct: 0
  }),
  q({
    id: "c-x4",
    category: "car",
    chapter: "danger-signs",
    difficulty: "medium",
    sign: "animals",
    text: { el: "Σήμα με ζώο σημαίνει:", en: "A sign with an animal means:" },
    answers: [
      { el: "Πιθανή διέλευση ζώων. Μειώνετε ταχύτητα.", en: "Animals may cross. Reduce speed." },
      { el: "Ζωολογικός κήπος δεξιά.", en: "A zoo to the right." },
      { el: "Απαγορεύονται τα ζώα στο όχημα.", en: "Animals are forbidden in the vehicle." }
    ],
    correct: 0
  }),
  q({
    id: "c-x5",
    category: "car",
    chapter: "info-signs",
    difficulty: "easy",
    sign: "pedestrian-zone",
    text: { el: "Πινακίδα πεζόδρομου:", en: "A pedestrian-zone sign:" },
    answers: [
      { el: "Απαγορεύει την κυκλοφορία οχημάτων, εκτός εξαιρέσεων.", en: "Bans vehicles except where exempted." },
      { el: "Επιτρέπει ταχύτητα 50 χλμ/ώρα.", en: "Allows 50 km/h." },
      { el: "Δείχνει χώρο στάθμευσης.", en: "Marks a car park." }
    ],
    correct: 0
  }),
  q({
    id: "c-x6",
    category: "car",
    chapter: "markings",
    difficulty: "hard",
    text: { el: "Λωρίδα έκτακτης ανάγκης σε αυτοκινητόδρομο:", en: "The motorway hard shoulder:" },
    answers: [
      { el: "Χρησιμοποιείται μόνο σε ανάγκη ή όταν το ζητήσει η τροχαία.", en: "Is used only in an emergency or when police require it." },
      { el: "Είναι κανονική λωρίδα προσπέρασης.", en: "Is a normal overtaking lane." },
      { el: "Επιτρέπεται για στάθμευση διαλείμματος.", en: "May be used for a rest stop." }
    ],
    correct: 0
  }),
  q({
    id: "c-x7",
    category: "car",
    chapter: "speed",
    difficulty: "hard",
    sign: "speed-120",
    text: { el: "Όριο 120 χλμ/ώρα:", en: "A 120 km/h limit:" },
    answers: [
      { el: "Είναι το ανώτατο επιτρεπόμενο σε εκείνο το τμήμα.", en: "Is the maximum allowed on that stretch." },
      { el: "Είναι υποχρεωτική ελάχιστη ταχύτητα.", en: "Is a mandatory minimum." },
      { el: "Ισχύει μόνο για φορτηγά.", en: "Applies only to lorries." }
    ],
    correct: 0
  }),
  q({
    id: "c-x8",
    category: "car",
    chapter: "documents",
    difficulty: "hard",
    text: { el: "Αν προκαλέσετε ατύχημα με υλικές ζημιές:", en: "If you cause a crash with property damage:" },
    answers: [
      { el: "Σταματάτε, ανταλλάσσετε στοιχεία και ειδοποιείτε όπου απαιτείται.", en: "Stop, exchange details and notify whoever is required." },
      { el: "Φεύγετε αν το άλλο όχημα είναι σταθμευμένο.", en: "Leave if the other vehicle is parked." },
      { el: "Αρκεί να αφήσετε ένα σημείωμα χωρίς στοιχεία.", en: "A note without details is enough." }
    ],
    correct: 0
  }),

  q({
    id: "m-1",
    category: "moto",
    chapter: "documents",
    difficulty: "easy",
    text: { el: "Σε μοτοσικλέτα το κράνος είναι:", en: "On a motorcycle a helmet is:" },
    answers: [
      { el: "Υποχρεωτικό για οδηγό και συνεπιβάτη.", en: "Mandatory for rider and passenger." },
      { el: "Υποχρεωτικό μόνο εκτός πόλης.", en: "Mandatory only outside town." },
      { el: "Προαιρετικό πάνω από 25 ετών.", en: "Optional if you are over 25." }
    ],
    correct: 0
  }),
  q({
    id: "m-2",
    category: "moto",
    chapter: "lights",
    difficulty: "easy",
    text: { el: "Την ημέρα σε μοτοσικλέτα:", en: "In daytime on a motorcycle:" },
    answers: [
      { el: "Κινείστε με αναμμένο φως ώστε να είστε ορατοί.", en: "Ride with a light on so you are seen." },
      { el: "Σβήνετε τα φώτα για την μπαταρία.", en: "Switch lights off to save the battery." },
      { el: "Χρησιμοποιείτε μόνο φλας.", en: "Use indicators only." }
    ],
    correct: 0
  }),
  q({
    id: "m-3",
    category: "moto",
    chapter: "mechanics",
    difficulty: "medium",
    text: { el: "Σε βρεγμένο οδόστρωμα με μηχανή:", en: "On a wet road with a motorcycle:" },
    answers: [
      { el: "Αποφεύγετε άβαφες γραμμές, σχάρες και απότομο φρενάρισμα.", en: "Avoid painted lines, gratings and sudden braking." },
      { el: "Φρενάρετε μόνο με τον πίσω τροχό απότομα.", en: "Brake hard on the rear wheel only." },
      { el: "Αυξάνετε ταχύτητα για σταθερότητα.", en: "Increase speed for stability." }
    ],
    correct: 0
  }),
  q({
    id: "m-4",
    category: "moto",
    chapter: "overtaking",
    difficulty: "medium",
    text: { el: "Φιλτράρισμα ανάμεσα σε σταματημένα αυτοκίνητα:", en: "Filtering between stopped cars:" },
    answers: [
      { el: "Γίνεται με πολύ χαμηλή ταχύτητα και απόλυτη προσοχή.", en: "Is done at very low speed with full attention." },
      { el: "Επιτρέπεται με 70 χλμ/ώρα.", en: "Is allowed at 70 km/h." },
      { el: "Απαγορεύεται πάντα, σε κάθε περίπτωση.", en: "Is always forbidden in every case." }
    ],
    correct: 0
  }),
  q({
    id: "m-5",
    category: "moto",
    chapter: "priority",
    difficulty: "easy",
    sign: "yield",
    text: { el: "Σε σήμα παραχώρησης με μηχανή:", en: "At a give-way sign on a motorcycle:" },
    answers: [
      { el: "Παραχωρείτε όπως κάθε άλλο όχημα.", en: "You give way like any other vehicle." },
      { el: "Έχετε προτεραιότητα επειδή είστε στενότεροι.", en: "You have priority because you are narrower." },
      { el: "Περνάτε πάντα πρώτοι από δεξιά.", en: "You always go first from the right." }
    ],
    correct: 0
  }),
  q({
    id: "m-6",
    category: "moto",
    chapter: "speed",
    difficulty: "medium",
    text: { el: "Σε στροφή με μοτοσικλέτα:", en: "In a bend on a motorcycle:" },
    answers: [
      { el: "Ρυθμίζετε ταχύτητα πριν τη στροφή, όχι στη μέση της.", en: "Set your speed before the bend, not in the middle of it." },
      { el: "Φρενάρετε απότομα στη μέση γέρνοντας.", en: "Brake hard mid-corner while leaning." },
      { el: "Επιταχύνετε στο μέγιστο πριν γείρετε.", en: "Accelerate fully before you lean." }
    ],
    correct: 0
  }),
  q({
    id: "m-7",
    category: "moto",
    chapter: "documents",
    difficulty: "easy",
    text: { el: "Ο συνεπιβάτης πρέπει:", en: "The passenger must:" },
    answers: [
      { el: "Να κάθεται σωστά, με κράνος και πόδια στις μαρσπιέ.", en: "Sit properly, wear a helmet and keep feet on the pegs." },
      { el: "Να κρατά αποσκευές στα χέρια.", en: "Hold luggage in their hands." },
      { el: "Να μην ακουμπά τον οδηγό.", en: "Avoid touching the rider." }
    ],
    correct: 0
  }),
  q({
    id: "m-8",
    category: "moto",
    chapter: "first-aid",
    difficulty: "medium",
    text: { el: "Μετά από πτώση:", en: "After a fall:" },
    answers: [
      { el: "Ελέγχετε τραυματισμούς και την κατάσταση της μηχανής πριν συνεχίσετε.", en: "Check injuries and the motorcycle before continuing." },
      { el: "Ξεκινάτε αμέσως για να μη χάσετε ισορροπία.", en: "Ride off at once so you do not lose balance." },
      { el: "Βγάζετε πάντα το κράνος του αναίσθητου αμέσως χωρίς λόγο.", en: "Always remove an unconscious rider's helmet for no reason." }
    ],
    correct: 0
  }),
  q({
    id: "m-9",
    category: "moto",
    chapter: "regulatory-signs",
    difficulty: "easy",
    sign: "speed-50",
    text: { el: "Το όριο 50 ισχύει και για μοτοσικλέτες;", en: "Does a 50 limit apply to motorcycles too?" },
    answers: [
      { el: "Ναι, εκτός αν υπάρχει ειδική εξαίρεση.", en: "Yes, unless a specific exception is signed." },
      { el: "Όχι, οι μηχανές έχουν +20 χλμ/ώρα.", en: "No, motorcycles may add 20 km/h." },
      { el: "Μόνο αν έχει και δεύτερο σήμα.", en: "Only if a second sign is present." }
    ],
    correct: 0
  }),
  q({
    id: "m-10",
    category: "moto",
    chapter: "danger-signs",
    difficulty: "medium",
    sign: "slippery",
    text: { el: "Ολισθηρό οδόστρωμα για μηχανή σημαίνει:", en: "A slippery-road sign for a motorcycle means:" },
    answers: [
      { el: "Εξαιρετικά αυξημένος κίνδυνος ολίσθησης. Πολύ ήπιο γκάζι και φρένο.", en: "A much higher slide risk. Be very gentle with throttle and brake." },
      { el: "Καλύτερη πρόσφυση λόγω μικρότερης επιφάνειας.", en: "Better grip because of a smaller contact patch." },
      { el: "Δεν σας αφορά.", en: "It does not concern you." }
    ],
    correct: 0
  }),
  q({
    id: "m-11",
    category: "moto",
    chapter: "distance",
    difficulty: "easy",
    text: { el: "Πίσω από αυτοκίνητα η μηχανή πρέπει:", en: "Behind cars a motorcycle should:" },
    answers: [
      { el: "Να κρατά απόσταση και να μην κρύβεται στο τυφλό σημείο.", en: "Keep a gap and stay out of the blind spot." },
      { el: "Να κολλάει στον προφυλακτήρα.", en: "Sit on the bumper." },
      { el: "Να αλλάζει λωρίδα χωρίς φλας.", en: "Change lane without signalling." }
    ],
    correct: 0
  }),
  q({
    id: "m-12",
    category: "moto",
    chapter: "eco",
    difficulty: "easy",
    text: { el: "Ομαλό γκάζι σε μηχανή:", en: "Smooth throttle on a motorcycle:" },
    answers: [
      { el: "Μειώνει κατανάλωση και αυξάνει την ασφάλεια.", en: "Cuts fuel use and improves safety." },
      { el: "Καταστρέφει τον συμπλέκτη.", en: "Destroys the clutch." },
      { el: "Απαγορεύεται σε κατοικημένη περιοχή.", en: "Is forbidden in town." }
    ],
    correct: 0
  }),
  q({
    id: "m-13",
    category: "moto",
    chapter: "parking",
    difficulty: "medium",
    text: { el: "Στάθμευση μοτοσικλέτας στο πεζοδρόμιο:", en: "Parking a motorcycle on the pavement:" },
    answers: [
      { el: "Επιτρέπεται μόνο όπου δεν εμποδίζει πεζούς και το επιτρέπει η σήμανση/τοπικοί κανόνες.", en: "Only where it does not block pedestrians and local rules allow it." },
      { el: "Επιτρέπεται παντού.", en: "Is allowed everywhere." },
      { el: "Απαγορεύεται ακόμη και σε ειδικές θέσεις.", en: "Is forbidden even in marked bays." }
    ],
    correct: 0
  }),
  q({
    id: "m-14",
    category: "moto",
    chapter: "markings",
    difficulty: "easy",
    sign: "stop",
    text: { el: "Σε STOP με μηχανή:", en: "At a STOP on a motorcycle:" },
    answers: [
      { el: "Σταματάτε πλήρως, με τα δύο πόδια στο έδαφος αν χρειάζεται.", en: "Come to a complete stop, both feet down if needed." },
      { el: "Αρκεί να περάσετε με 5 χλμ/ώρα.", en: "Rolling through at 5 km/h is enough." },
      { el: "Σταματάτε μόνο τη νύχτα.", en: "Stop only at night." }
    ],
    correct: 0
  }),
  q({
    id: "m-15",
    category: "moto",
    chapter: "alcohol",
    difficulty: "easy",
    text: { el: "Αλκοόλ και μοτοσικλέτα:", en: "Alcohol and motorcycles:" },
    answers: [
      { el: "Ο κίνδυνος πτώσης αυξάνεται δραματικά ακόμη και με λίγο αλκοόλ.", en: "The fall risk rises sharply even with a little alcohol." },
      { el: "Το κράνος εξουδετερώνει την επίδραση.", en: "A helmet cancels the effect." },
      { el: "Επιτρέπεται περισσότερο αλκοόλ από ό,τι στο αυτοκίνητο.", en: "More alcohol is allowed than in a car." }
    ],
    correct: 0
  }),

  q({
    id: "t-1",
    category: "truck",
    chapter: "speed",
    difficulty: "easy",
    text: { el: "Σε αυτοκινητόδρομο το σύνηθες ανώτατο όριο φορτηγού άνω των 3,5 τόνων είναι:", en: "On a motorway the usual limit for a lorry over 3.5 t is:" },
    answers: [
      { el: "80 χλμ/ώρα, εκτός άλλης σήμανσης.", en: "80 km/h unless signed otherwise." },
      { el: "130 χλμ/ώρα.", en: "130 km/h." },
      { el: "50 χλμ/ώρα.", en: "50 km/h." }
    ],
    correct: 0
  }),
  q({
    id: "t-2",
    category: "truck",
    chapter: "distance",
    difficulty: "medium",
    text: { el: "Η απόσταση ασφαλείας φορτηγού:", en: "A lorry's safety distance:" },
    answers: [
      { el: "Πρέπει να είναι μεγαλύτερη λόγω μάζας και χρόνου πέδησης.", en: "Must be greater because of mass and braking time." },
      { el: "Είναι ίδια με του ΙΧ.", en: "Is the same as a car's." },
      { el: "Δεν απαιτείται σε κατηφόρα.", en: "Is not required downhill." }
    ],
    correct: 0
  }),
  q({
    id: "t-3",
    category: "truck",
    chapter: "mechanics",
    difficulty: "medium",
    text: { el: "Πριν ξεκινήσετε με φορτίο ελέγχετε:", en: "Before leaving with a load you check:" },
    answers: [
      { el: "Στερέωση φορτίου, πίεση ελαστικών και φρένα.", en: "Load security, tyre pressures and brakes." },
      { el: "Μόνο το ταχόγραφο.", en: "Only the tachograph." },
      { el: "Μόνο τα καθρέφτες αριστερά.", en: "Only the left mirrors." }
    ],
    correct: 0
  }),
  q({
    id: "t-4",
    category: "truck",
    chapter: "documents",
    difficulty: "easy",
    text: { el: "Το ταχόγραφο καταγράφει:", en: "The tachograph records:" },
    answers: [
      { el: "Χρόνους οδήγησης, ανάπαυσης και ταχύτητα.", en: "Driving time, rest and speed." },
      { el: "Μόνο την κατανάλωση.", en: "Fuel use only." },
      { el: "Τις κλήσεις του κινητού.", en: "Phone calls." }
    ],
    correct: 0
  }),
  q({
    id: "t-5",
    category: "truck",
    chapter: "overtaking",
    difficulty: "hard",
    text: { el: "Προσπέραση με φορτηγό σε ανήφορο:", en: "Overtaking in a lorry uphill:" },
    answers: [
      { el: "Γίνεται μόνο αν είστε βέβαιοι ότι δεν θα εμποδίσετε αντίθετα ή πίσω οχήματα.", en: "Only if you are sure you will not block oncoming or following traffic." },
      { el: "Επιβάλλεται πάντα για να κρατήσετε ρυθμό.", en: "Is always required to keep pace." },
      { el: "Επιτρέπεται πάνω σε συνεχή γραμμή.", en: "Is allowed over a solid line." }
    ],
    correct: 0
  }),
  q({
    id: "t-6",
    category: "truck",
    chapter: "alcohol",
    difficulty: "easy",
    text: { el: "Για επαγγελματία οδηγό το όριο αλκοόλης είναι:", en: "For a professional driver the alcohol limit is:" },
    answers: [
      { el: "Αυστηρότερο από το γενικό (0,20 g/l).", en: "Stricter than the general limit (0.20 g/l)." },
      { el: "Ίδιο με όλους (0,50 g/l).", en: "The same as everyone (0.50 g/l)." },
      { el: "Δεν υπάρχει όριο αν έχετε ΠΕΙ.", en: "There is no limit if you hold a CPC." }
    ],
    correct: 0
  }),
  q({
    id: "t-7",
    category: "truck",
    chapter: "priority",
    difficulty: "medium",
    sign: "yield",
    text: { el: "Φορτηγό σε παραχώρηση:", en: "A lorry at a give-way:" },
    answers: [
      { el: "Χρειάζεται περισσότερο χώρο και χρόνο για να περάσει με ασφάλεια.", en: "Needs more space and time to cross safely." },
      { el: "Περνάει πρώτο λόγω μεγέθους.", en: "Goes first because of its size." },
      { el: "Αγνοεί το σήμα αν είναι άδειος ο δρόμος στα αριστερά μόνο.", en: "Ignores the sign if the road is empty only to the left." }
    ],
    correct: 0
  }),
  q({
    id: "t-8",
    category: "truck",
    chapter: "eco",
    difficulty: "easy",
    text: { el: "Πρόβλεψη στην επαγγελματική οδήγηση:", en: "Anticipation in professional driving:" },
    answers: [
      { el: "Μειώνει φρένα, καύσιμο και φθορά.", en: "Reduces braking, fuel and wear." },
      { el: "Αυξάνει τα απότομα προσπεράσματα.", en: "Increases sudden overtakes." },
      { el: "Απαιτεί συνεχές ρελαντί.", en: "Requires constant idling." }
    ],
    correct: 0
  }),
  q({
    id: "t-9",
    category: "truck",
    chapter: "first-aid",
    difficulty: "medium",
    text: { el: "Σε ακινητοποίηση φορτηγού στον αυτοκινητόδρομο:", en: "If a lorry is stranded on a motorway:" },
    answers: [
      { el: "Φώτα έκτακτης ανάγκης, γιλέκο, τρίγωνο και απομάκρυνση των επιβαινόντων σε ασφαλές σημείο.", en: "Hazards, vest, triangle, and move everyone to a safe place." },
      { el: "Μένετε στη ΛΕΑ χωρίς σήμανση.", en: "Stay on the hard shoulder with no warning." },
      { el: "Σπρώχνετε το όχημα στη μεσαία λωρίδα.", en: "Push the vehicle into the middle lane." }
    ],
    correct: 0
  }),
  q({
    id: "t-10",
    category: "truck",
    chapter: "lights",
    difficulty: "easy",
    text: { el: "Τα πλευρικά φώτα οριοθέτησης:", en: "Side marker lights:" },
    answers: [
      { el: "Κάνουν το μακρύ όχημα ορατό τη νύχτα.", en: "Make a long vehicle visible at night." },
      { el: "Χρησιμοποιούνται αντί για φλας.", en: "Replace indicators." },
      { el: "Ανάβουν μόνο σε κατοικημένη περιοχή.", en: "Are used only in town." }
    ],
    correct: 0
  }),

  q({
    id: "b-1",
    category: "bus",
    chapter: "documents",
    difficulty: "easy",
    text: { el: "Ο οδηγός λεωφορείου είναι υπεύθυνος:", en: "A bus driver is responsible:" },
    answers: [
      { el: "Για την ασφαλή μεταφορά των επιβατών και την τήρηση των ωραρίων ανάπαυσης.", en: "For passenger safety and observing rest-time rules." },
      { el: "Μόνο για τα εισιτήρια.", en: "Only for tickets." },
      { el: "Μόνο για το καύσιμο.", en: "Only for fuel." }
    ],
    correct: 0
  }),
  q({
    id: "b-2",
    category: "bus",
    chapter: "priority",
    difficulty: "medium",
    text: { el: "Όταν λεωφορείο αναχωρεί από στάση σε κατοικημένη περιοχή:", en: "When a bus leaves a stop in a built-up area:" },
    answers: [
      { el: "Οι άλλοι οδηγοί οφείλουν να διευκολύνουν την εκκίνησή του.", en: "Other drivers should help it pull out." },
      { el: "Το λεωφορείο δεν έχει καμία ιδιαιτερότητα.", en: "The bus has no special status." },
      { el: "Τα ΙΧ πρέπει να το προσπερνούν από δεξιά πάνω στη στάση.", en: "Cars must overtake it on the right at the stop." }
    ],
    correct: 0
  }),
  q({
    id: "b-3",
    category: "bus",
    chapter: "mechanics",
    difficulty: "medium",
    text: { el: "Πριν την αναχώρηση δρομολογίου ελέγχετε:", en: "Before a service departs you check:" },
    answers: [
      { el: "Πόρτες, φρένα, φώτα, εξόδους κινδύνου και εξοπλισμό ασφαλείας.", en: "Doors, brakes, lights, emergency exits and safety equipment." },
      { el: "Μόνο τον αριθμό θέσεων.", en: "Only the seat count." },
      { el: "Μόνο το ραδιόφωνο της καμπίνας.", en: "Only the cab radio." }
    ],
    correct: 0
  }),
  q({
    id: "b-4",
    category: "bus",
    chapter: "speed",
    difficulty: "easy",
    text: { el: "Με επιβάτες σε λεωφορείο:", en: "With passengers on a bus:" },
    answers: [
      { el: "Οδηγείτε ομαλά, αποφεύγοντας απότομα φρένα και επιταχύνσεις.", en: "Drive smoothly, avoiding sudden braking and acceleration." },
      { el: "Κρατάτε το ανώτατο όριο συνεχώς.", en: "Hold the maximum limit at all times." },
      { el: "Χρησιμοποιείτε μόνο την αριστερή λωρίδα.", en: "Use only the left lane." }
    ],
    correct: 0
  }),
  q({
    id: "b-5",
    category: "bus",
    chapter: "first-aid",
    difficulty: "hard",
    text: { el: "Σε εκκένωση λεωφορείου:", en: "When evacuating a bus:" },
    answers: [
      { el: "Σταματάτε σε ασφαλές σημείο, ανοίγετε εξόδους και καθοδηγείτε ήρεμα τους επιβάτες.", en: "Stop somewhere safe, open the exits and guide passengers calmly." },
      { el: "Αφήνετε τους επιβάτες να πηδήξουν εν κινήσει.", en: "Let passengers jump while moving." },
      { el: "Κλειδώνετε τις πόρτες μέχρι να έρθει η τροχαία.", en: "Lock the doors until police arrive." }
    ],
    correct: 0
  }),
  q({
    id: "b-6",
    category: "bus",
    chapter: "parking",
    difficulty: "easy",
    text: { el: "Στάση λεωφορείου:", en: "A bus stop:" },
    answers: [
      { el: "Δεν μπλοκάρετε ράμπες, διαβάσεις και την ορατότητα των άλλων.", en: "Do not block ramps, crossings or other people's visibility." },
      { el: "Σταματάτε όπου σας βολεύει στη μέση του δρόμου.", en: "Stop wherever is convenient in the middle of the road." },
      { el: "Αφήνετε τον κινητήρα στα μέγιστα για τον κλιματισμό πάντα.", en: "Always leave the engine at maximum for air-conditioning." }
    ],
    correct: 0
  }),
  q({
    id: "b-7",
    category: "bus",
    chapter: "alcohol",
    difficulty: "easy",
    text: { el: "Ο επαγγελματίας οδηγός λεωφορείου:", en: "A professional bus driver:" },
    answers: [
      { el: "Υπόκειται σε αυστηρότερο όριο αλκοόλης (0,20 g/l).", en: "Is subject to a stricter alcohol limit (0.20 g/l)." },
      { el: "Μπορεί να πιει αν δεν έχει επιβάτες.", en: "May drink if there are no passengers." },
      { el: "Εξαιρείται από ελέγχους αλκοτέστ.", en: "Is exempt from breath tests." }
    ],
    correct: 0
  }),
  q({
    id: "b-8",
    category: "bus",
    chapter: "eco",
    difficulty: "medium",
    text: { el: "Ομαλή οδήγηση λεωφορείου:", en: "Smooth bus driving:" },
    answers: [
      { el: "Προστατεύει επιβάτες, μειώνει κατανάλωση και φθορά.", en: "Protects passengers and cuts fuel and wear." },
      { el: "Καθυστερεί πάντα το δρομολόγιο.", en: "Always makes the service late." },
      { el: "Απαγορεύεται σε υπεραστικά.", en: "Is forbidden on intercity routes." }
    ],
    correct: 0
  }),
  q({
    id: "b-9",
    category: "bus",
    chapter: "lights",
    difficulty: "easy",
    text: { el: "Σε στάση νύχτα εκτός κατοικημένης περιοχής:", en: "When stopped at night outside a built-up area:" },
    answers: [
      { el: "Χρησιμοποιείτε τα κατάλληλα φώτα θέσης ώστε το όχημα να είναι ορατό.", en: "Use the proper position lights so the vehicle is visible." },
      { el: "Σβήνετε όλα τα φώτα.", en: "Switch off every light." },
      { el: "Ανάβετε μόνο τα μεγάλα φώτα προς τα αντίθετα.", en: "Use only main beam toward oncoming traffic." }
    ],
    correct: 0
  }),
  q({
    id: "b-10",
    category: "bus",
    chapter: "distance",
    difficulty: "medium",
    text: { el: "Η απόσταση πέδησης λεωφορείου με επιβάτες:", en: "A loaded bus braking distance:" },
    answers: [
      { el: "Είναι μεγαλύτερη από ενός κενού ΙΧ.", en: "Is longer than that of an empty car." },
      { el: "Είναι πάντα μικρότερη λόγω μεγαλύτερων φρένων.", en: "Is always shorter because of bigger brakes." },
      { el: "Δεν αλλάζει με το φορτίο.", en: "Does not change with load." }
    ],
    correct: 0
  })
];
