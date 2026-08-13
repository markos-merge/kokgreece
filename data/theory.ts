import type { ChapterId, Localized } from "@/lib/types";

export const THEORY: Record<ChapterId, Localized[]> = {
  "danger-signs": [
    {
      el: "Τα σήματα κινδύνου είναι τρίγωνα με κόκκινο περίγραμμα και προειδοποιούν για κατάσταση που ακολουθεί, δεν δίνουν από μόνα τους εντολή στάσης.",
      en: "Danger signs are triangles with a red border. They warn of what is ahead; they do not themselves order a stop."
    },
    {
      el: "Μόλις τα δείτε, μειώνετε ταχύτητα, αυξάνετε την απόσταση και ετοιμάζεστε να σταματήσετε.",
      en: "As soon as you see them, slow down, increase your gap and be ready to stop."
    }
  ],
  "regulatory-signs": [
    {
      el: "Οι ρυθμιστικές πινακίδες είναι συνήθως κυκλικές. Κόκκινο περίγραμμα = απαγόρευση. Μπλε κύκλος = υποχρέωση.",
      en: "Regulatory signs are usually circular. A red border means a ban. A blue disc means an obligation."
    },
    {
      el: "Το STOP απαιτεί πλήρη στάση. Το ανεστραμμένο τρίγωνο απαιτεί παραχώρηση, όχι απαραίτητα στάση αν ο δρόμος είναι ελεύθερος.",
      en: "STOP requires a complete halt. The inverted triangle requires yielding, not a stop if the road is clear."
    }
  ],
  "info-signs": [
    {
      el: "Οι πληροφοριακές πινακίδες καθοδηγούν: οδός προτεραιότητας, αυτοκινητόδρομος, νοσοκομείο, μονόδρομος.",
      en: "Information signs guide you: priority road, motorway, hospital, one-way street."
    },
    {
      el: "Ο κίτρινος ρόμβος σας δίνει προτεραιότητα μέχρι να δείτε το τέλος του.",
      en: "The yellow diamond gives you priority until you see its end sign."
    }
  ],
  markings: [
    {
      el: "Συνεχής γραμμή: δεν την υπερβαίνετε. Διακεκομμένη: επιτρέπεται όταν είναι ασφαλές.",
      en: "A solid line must not be crossed. A broken line may be crossed when it is safe."
    },
    {
      el: "Σε διάβαση πεζών χωρίς φανάρι οι πεζοί έχουν προτεραιότητα μόλις εισέλθουν ή είναι έτοιμοι να διασχίσουν.",
      en: "At an unsignalised zebra crossing, pedestrians have priority once they enter or are about to cross."
    }
  ],
  priority: [
    {
      el: "Χωρίς σήμανση ισχύει προτεραιότητα από δεξιά. Σε κυκλικό κόμβο συνήθως παραχωρείτε σε όσους ήδη κινούνται μέσα.",
      en: "Without signing, priority comes from the right. At a roundabout you usually give way to traffic already on it."
    },
    {
      el: "Οχήματα έκτακτης ανάγκης με φάρους και σειρήνα έχουν απόλυτη προτεραιότητα.",
      en: "Emergency vehicles using beacons and a siren have absolute priority."
    }
  ],
  speed: [
    {
      el: "Κατοικημένη περιοχή: 50 χλμ/ώρα. Συμβατική οδός εκτός: 90. Αυτοκινητόδρομος: 130, εκτός άλλης σήμανσης.",
      en: "Built-up area: 50 km/h. Ordinary road outside: 90. Motorway: 130, unless signed otherwise."
    },
    {
      el: "Το νόμιμο όριο είναι το ανώτατο, όχι στόχος. Οι συνθήκες μπορεί να απαιτούν χαμηλότερη ταχύτητα.",
      en: "The legal limit is a maximum, not a target. Conditions may require a lower speed."
    }
  ],
  distance: [
    {
      el: "Κανόνας 2 δευτερολέπτων σε στεγνό οδόστρωμα, 3 ή περισσότερα σε βροχή.",
      en: "Use a 2-second gap on dry roads and 3 or more in rain."
    },
    {
      el: "Η συνολική απόσταση ακινητοποίησης = χρόνος αντίδρασης + απόσταση πέδησης.",
      en: "Total stopping distance = reaction distance + braking distance."
    }
  ],
  lights: [
    {
      el: "Μεγάλα φώτα: όταν δεν ενοχλείτε αντίθετους ή τον μπροστινό. Φώτα ομίχλης: μόνο σε πολύ μειωμένη ορατότητα.",
      en: "Main beam: when you will not dazzle oncoming or followed traffic. Fog lights: only in very poor visibility."
    },
    {
      el: "Φλας έγκαιρα, πριν την αλλαγή πορείας, και έλεγχος νεκρής γωνίας.",
      en: "Signal early, before you change course, and check the blind spot."
    }
  ],
  overtaking: [
    {
      el: "Προσπέραση από αριστερά, με ορατότητα, χωρίς συνεχή γραμμή και χωρίς να εκθέτετε αντίθετα οχήματα.",
      en: "Overtake on the left, with visibility, no solid line, and without endangering oncoming traffic."
    },
    {
      el: "Αν σας προσπερνούν, κρατήστε σταθερή πορεία και μην επιταχύνετε.",
      en: "If you are being overtaken, hold a steady line and do not speed up."
    }
  ],
  parking: [
    {
      el: "Στάση είναι η σύντομη ακινητοποίηση. Στάθμευση είναι όταν αφήνετε το όχημα.",
      en: "A stop is a brief halt. Parking is when you leave the vehicle."
    },
    {
      el: "Απαγορεύεται σε διαβάσεις, γωνίες, στάσεις λεωφορείου και όπου η σήμανση το ορίζει.",
      en: "Forbidden on crossings, corners, bus stops and wherever signing says so."
    }
  ],
  alcohol: [
    {
      el: "Γενικό όριο 0,50 g/l. Νέοι και επαγγελματίες: 0,20 g/l. Η μόνη ασφαλής επιλογή πριν την οδήγηση είναι μηδέν.",
      en: "General limit 0.50 g/l. Novices and professionals: 0.20 g/l. The only safe choice before driving is zero."
    },
    {
      el: "Η κόπωση προκαλεί παρόμοια μείωση αντίδρασης με το αλκοόλ. Σταματήστε και ξεκουραστείτε.",
      en: "Fatigue slows you much like alcohol. Stop and rest."
    }
  ],
  mechanics: [
    {
      el: "Ελάχιστο πέλμα 1,6 χιλ. Σωστή πίεση μειώνει κατανάλωση και κίνδυνο εκρήξεως.",
      en: "Minimum tread 1.6 mm. Correct pressure cuts fuel use and blow-out risk."
    },
    {
      el: "Λυχνία λαδιού ή θερμοκρασίας: σταματήστε μόλις είναι ασφαλές.",
      en: "Oil or temperature warning: stop as soon as it is safe."
    }
  ],
  documents: [
    {
      el: "Άδεια οδήγησης, άδεια κυκλοφορίας, ασφάλεια. Ζώνη για όλους. Παιδιά σε κατάλληλο κάθισμα.",
      en: "Licence, registration, insurance. Belts for everyone. Children in a suitable seat."
    },
    {
      el: "Το κινητό στο χέρι κατά την οδήγηση απαγορεύεται.",
      en: "A handheld phone while driving is forbidden."
    }
  ],
  "first-aid": [
    {
      el: "Ασφάλεια σκηνής, κλήση 112, φροντίδα τραυματιών. Μην μετακινείτε βαριά τραυματία χωρίς λόγο.",
      en: "Scene safety, call 112, then care for the injured. Do not move a seriously injured person without cause."
    },
    {
      el: "Τρίγωνο σε επαρκή απόσταση, γιλέκο, φώτα έκτακτης ανάγκης.",
      en: "Triangle at a sufficient distance, high-vis vest, hazard lights."
    }
  ],
  eco: [
    {
      el: "Ομαλό γκάζι, σωστή σχέση, πρόβλεψη και σωστή πίεση ελαστικών μειώνουν κατανάλωση και ρύπους.",
      en: "Smooth throttle, the right gear, anticipation and correct tyre pressure cut fuel and emissions."
    },
    {
      el: "Άσκοπο βάρος και σχάρες οροφής αυξάνουν την αντίσταση του αέρα.",
      en: "Needless weight and roof racks increase drag."
    }
  ]
};
