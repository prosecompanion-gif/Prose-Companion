// Episode 1: How to Access Your Case Files as a Party
// Framing: not "does the state have e-access," but "what door does a party use
// to reach the official court record" — online, at the courthouse, by clerk
// request, by copy request, or by motion if access is denied.
//
// Universal party request wording (use in every state):
//   "I am a self-represented party in Case No. ____. Please confirm that I am
//   listed as a party of record and tell me how to access the official court
//   file and current docket. I request access to inspect or obtain copies of all
//   nonrestricted docket entries, pleadings, motions, responses, notices, orders,
//   judgments, minute entries, filed attachments, and nonrestricted exhibits. I am
//   not requesting sealed, confidential, juvenile, victim-protected, informant-
//   protected, or otherwise restricted material. If any item is withheld or
//   redacted, please identify the legal basis and whether a redacted copy is
//   available."

const episodeData = {
    "AL": {
        name: "Alabama",
        systemName: "AlaFile / Alacourt (Just One Look)",
        description: "As an Alabama party, confirm the court record lists you as a party of record, then use AlaFile for digital access or request the official court file from the circuit or district clerk. Portals like Alacourt (Just One Look) mainly surface case information, so the clerk of the court where the case is filed is the reliable fallback for the full file.",
        steps: [
            "Confirm the court record shows you as a party of record or pro se party.",
            "For digital access, register through AlaFile as a pro se/self-represented user if your case type allows it.",
            "If you already have a case, contact the circuit or district clerk and ask whether your AlaFile account can be associated with the existing case.",
            "For the official court file, request access from the clerk of the court where the case is filed.",
            "If documents are not available online, ask to inspect the file in person, use the public terminal, or request copies by mail/email if that clerk allows it.",
            "Ask for the case action summary/docket, pleadings, motions, orders, notices, judgments, and nonrestricted filed exhibits."
        ],
        links: [
            { name: "AlaFile", url: "https://efile.alacourt.gov/" },
            { name: "Alacourt / Just One Look", url: "https://pa.alacourt.com/" },
            { name: "Alabama Court Forms", url: "https://eforms.alacourt.gov/" }
        ]
    },
    "AK": {
        name: "Alaska",
        systemName: "CourtView / TrueFiling",
        description: "In Alaska, confirm the case is in the state court system and that you are a listed party. CourtView helps you locate the case, but it is not the full official file. If online access is incomplete, submit a records request to the clerk of the court where the case is filed.",
        steps: [
            "Confirm the case is in the Alaska state court system and that you are listed as a party.",
            "Use CourtView/search to locate the case, but do not assume it is the full official file.",
            "If the case is eligible for TrueFiling, register and ask the clerk how to connect your account to the case.",
            "If online access is unavailable or incomplete, submit a records request to the clerk of the court where the case is filed.",
            "Ask for inspection, copies, audio records, docket entries, pleadings, orders, and nonrestricted exhibits.",
            "For confidential case types, expect to show ID and prove party status."
        ],
        links: [
            { name: "Alaska Search Cases", url: "https://courts.alaska.gov/main/search-cases.htm" },
            { name: "Alaska TrueFiling", url: "https://courts.alaska.gov/efile/index.htm" },
            { name: "Alaska Court Forms", url: "https://courts.alaska.gov/forms/index.htm" }
        ]
    },
    "AZ": {
        name: "Arizona",
        systemName: "eAccess / County Clerk Portals",
        description: "Arizona has no single statewide file portal. Identify the court level (Superior, Justice, Municipal, appellate, or federal), confirm you are a party of record, and try eAccess for many Superior Court cases. For family, probate, juvenile, sealed, restricted, or older records, go directly to the county clerk.",
        steps: [
            "Identify whether the case is Superior Court, Justice Court, Municipal Court, appellate, or federal.",
            "Confirm you are listed as a party/participant of record.",
            "For many Superior Court civil/criminal cases, try eAccess.",
            "For family, probate, juvenile, sealed, restricted, or older records, contact the county clerk directly.",
            "Justice and Municipal Court records must be requested from the specific court that heard the case.",
            "Ask for the docket, minute entries, pleadings, motions, orders, judgments, and nonrestricted exhibits under Arizona court-record access rules."
        ],
        links: [
            { name: "Arizona Case Search", url: "https://apps.supremecourt.az.gov/publicaccess/caselookup.aspx" },
            { name: "Arizona eAccess", url: "https://www.azcourts.gov/eaccess" },
            { name: "Arizona Superior Court Clerks", url: "https://www.azcourts.gov/AZ-Courts/Superior-Court/Clerk-of-Superior-Court" }
        ]
    },
    "AR": {
        name: "Arkansas",
        systemName: "CourtConnect",
        description: "Arkansas parties can search cases through CourtConnect, but the circuit or district court clerk holds the official file. Confirm you are a named party (or file a pro se appearance), then request the docket sheet and the official court file from the clerk.",
        steps: [
            "Search the case through CourtConnect if available.",
            "Confirm you are a named party or have filed a pro se appearance/notice if needed.",
            "Contact the circuit clerk or district court clerk where the case is pending.",
            "Request the docket sheet and the official court file.",
            "If documents are not online, request in-person inspection, copies, or certified copies from the clerk.",
            "Ask the clerk to identify any sealed, juvenile, adoption, victim-protected, or confidential restrictions."
        ],
        links: [
            { name: "Arkansas CourtConnect", url: "https://caseinfo.arcourts.gov/cconnect/PROD/public/ck_public_qry_main.cp_main_idx" },
            { name: "Arkansas Judiciary", url: "https://www.arcourts.gov/" }
        ]
    },
    "CA": {
        name: "California",
        systemName: "County Superior Court Portals",
        description: "California is county-based. Identify the county Superior Court, search its portal if available, and confirm the record lists you as a party. Some counties offer online party access; others require clerk access or courthouse terminals, and restricted records may need a motion to inspect.",
        steps: [
            "California is county-based, so first identify the county Superior Court.",
            "Search that county's case portal if available.",
            "Confirm the court record lists you as a party or self-represented party.",
            "Some counties offer online party access; others require clerk access or courthouse terminals.",
            "If no digital access is available, request inspection/copies from the clerk or records division.",
            "For restricted records, ask whether party access, redacted copies, or a motion to inspect is required."
        ],
        links: [
            { name: "Find My Court", url: "https://courts.ca.gov/find-my-court.htm" },
            { name: "Viewing Electronic Court Records", url: "https://courts.ca.gov/42512.htm" }
        ]
    },
    "CO": {
        name: "Colorado",
        systemName: "Colorado Court Records Search / E-Filing",
        description: "In Colorado, identify the county and court and confirm your party status and current service information. Use the court record search for docket access, and if the full file is not online, ask the clerk of court whether parties can inspect the electronic file at a courthouse terminal.",
        steps: [
            "Identify the county and court.",
            "Confirm your party status and current address/service information.",
            "Use Colorado court record search tools for docket access where available.",
            "If the full file is not online, contact the clerk of court for that county.",
            "Ask whether parties can inspect the electronic file at a courthouse terminal.",
            "Request copies of pleadings, motions, orders, minute entries, judgments, and nonrestricted exhibits."
        ],
        links: [
            { name: "Colorado Court Records", url: "https://www.courts.state.co.us/Courts/Records/Choose.cfm" },
            { name: "Colorado Self-Help", url: "https://www.courts.state.co.us/Self_Help/Index.cfm" },
            { name: "Colorado E-Filing", url: "https://www.jbits.courts.state.co.us/efiling/web/login.htm" }
        ]
    },
    "CT": {
        name: "Connecticut",
        systemName: "Judicial Branch E-Services / Case Look-Up",
        description: "Connecticut self-represented parties should file or confirm their appearance and can register for E-Services. The public case look-up shows docket information; for documents not available digitally, contact the clerk's office where the case is pending.",
        steps: [
            "File or confirm your appearance if you are self-represented.",
            "Register for Connecticut Judicial Branch E-Services if the case type allows it.",
            "Use the public case lookup for docket information.",
            "If the documents are not available digitally, contact the clerk's office where the case is pending.",
            "Request to inspect or obtain copies of the official file.",
            "If replacing counsel, confirm the court record shows you should receive notices directly."
        ],
        links: [
            { name: "Connecticut E-Services", url: "https://www.jud.ct.gov/external/super/E-Services/efile/" },
            { name: "Civil/Family Case Lookup", url: "https://civilinquiry.jud.ct.gov/" },
            { name: "Connecticut Judicial Branch", url: "https://www.jud.ct.gov/" }
        ]
    },
    "DE": {
        name: "Delaware",
        systemName: "CourtConnect / eFiling",
        description: "Delaware access depends on the specific court (Superior, Common Pleas, Family, Justice of the Peace, Chancery, or appellate). Use CourtConnect for case lookup, confirm party status with the clerk, and request inspection or copies from that court's clerk when documents are not online.",
        steps: [
            "Identify the specific court: Superior Court, Court of Common Pleas, Family Court, Justice of the Peace Court, Chancery, or appellate court.",
            "Use CourtConnect where available for docket/case lookup.",
            "Confirm your party status with the clerk.",
            "If eFiling access applies, register and ask how to connect to the existing case.",
            "If documents are not available online, request inspection or copies from that court's clerk.",
            "Family, juvenile, sealed, and confidential matters may require direct clerk handling."
        ],
        links: [
            { name: "Delaware CourtConnect", url: "https://courtconnect.courts.delaware.gov/" },
            { name: "Delaware eFiling", url: "https://courts.delaware.gov/efiling/" },
            { name: "Delaware Courts Help", url: "https://courts.delaware.gov/help/" }
        ]
    },
    "FL": {
        name: "Florida",
        systemName: "Florida Courts E-Filing Portal / County Clerk Portals",
        description: "In Florida, the E-Filing Portal lets self-represented litigants file, but it is not always the full case file. Identify the county clerk where the case is filed, use that clerk's records portal, and request inspection or copies from the county clerk for the complete file.",
        steps: [
            "Register as a self-represented litigant in the Florida Courts E-Filing Portal if you need to file electronically.",
            "The e-filing portal may show your filings, but it is not always the full case file.",
            "Identify the county clerk where the case is filed.",
            "Use that clerk's records portal if available.",
            "If the complete file is not online, request inspection/copies from the county clerk.",
            "For confidential family, juvenile, sealed, or protected records, ask the clerk what party verification is required."
        ],
        links: [
            { name: "Florida Courts E-Filing Portal", url: "https://www.myflcourtaccess.com/" },
            { name: "Florida Clerks Directory", url: "https://www.flclerks.com/page/clerksdirectory" },
            { name: "Florida Courts Help", url: "https://help.flcourts.gov/" }
        ]
    },
    "GA": {
        name: "Georgia",
        systemName: "PeachCourt / Odyssey eFileGA",
        description: "Georgia access varies by county and court (Superior, State, Magistrate, Probate, Juvenile, or Municipal). Check whether the court uses PeachCourt or Odyssey eFileGA, save complete copies of any downloadable filings, and otherwise request the official file from the clerk of that court.",
        steps: [
            "Identify the county and court: Superior, State, Magistrate, Probate, Juvenile, or Municipal.",
            "Check whether the court uses PeachCourt or Odyssey eFileGA.",
            "Register if the system allows self-represented party access.",
            "If documents can be downloaded from the docket, save complete copies.",
            "If not, contact the clerk of that court and request the official file.",
            "For older, sealed, juvenile, or restricted records, expect clerk-only handling."
        ],
        links: [
            { name: "PeachCourt", url: "https://peachcourt.com/" },
            { name: "Odyssey eFileGA", url: "https://georgia.tylertech.cloud/OfsWeb" },
            { name: "Georgia Courts", url: "https://georgiacourts.gov/" }
        ]
    },
    "HI": {
        name: "Hawaii",
        systemName: "JEFS / eCourt Kokua",
        description: "Hawaii self-represented litigants can register for JEFS and ask that it be connected to their case to view and print documents. eCourt Kokua handles public docket searches, and the clerk of the court handles nondigital or restricted records.",
        steps: [
            "Register for JEFS as a self-represented litigant if your case is eligible.",
            "Ask that your JEFS account be connected to your case.",
            "Once connected, use JEFS to view/print documents in your own case where allowed.",
            "Use eCourt Kokua for public docket searches or document purchases if needed.",
            "If documents are not digital, contact the clerk of the court where the case is filed.",
            "Sealed/confidential and some older paper records may require courthouse handling."
        ],
        links: [
            { name: "Hawaii eFiling / JEFS", url: "https://www.courts.state.hi.us/legal_references/efiling" },
            { name: "Hawaii Search Court Records", url: "https://www.courts.state.hi.us/legal_references/records/search_court_records" },
            { name: "Hawaii Self-Help", url: "https://www.courts.state.hi.us/self-help" }
        ]
    },
    "ID": {
        name: "Idaho",
        systemName: "iCourt Portal / File & Serve",
        description: "Idaho parties search the iCourt Portal and can register for File & Serve for electronic filing/service, confirming they are linked to the case. Download available document images, and otherwise contact or visit the county clerk for the register of actions and filed documents.",
        steps: [
            "Search the case through the iCourt Portal.",
            "Register for File & Serve if you need electronic filing/service.",
            "Confirm you are linked to the case as a self-represented party.",
            "If document images are available online, download them.",
            "If not, contact or visit the county clerk.",
            "Ask for the register of actions, pleadings, orders, judgments, and nonrestricted filed exhibits."
        ],
        links: [
            { name: "Idaho iCourt Portal", url: "https://mycourts.idaho.gov/" },
            { name: "Idaho File & Serve", url: "https://efileid.tylertech.cloud/OfsEfsp/ui/landing" },
            { name: "Idaho Self-Help", url: "https://isc.idaho.gov/self-help" }
        ]
    },
    "IL": {
        name: "Illinois",
        systemName: "eFileIL / re:SearchIL / Judici",
        description: "In Illinois, file an appearance or confirm your self-represented status, register through eFileIL, and try re:SearchIL to view documents connected to your case. Judici or the county circuit clerk site handles docket lookup, and the circuit clerk can associate you with the case.",
        steps: [
            "File an appearance or confirm you are listed as a self-represented party.",
            "Register through eFileIL if e-filing applies.",
            "Try re:SearchIL to view documents connected to your case.",
            "Use Judici or the county circuit clerk site for docket lookup where available.",
            "If documents are missing online, contact the circuit clerk and ask to be associated with the case.",
            "Request courthouse terminal access or copies from the clerk."
        ],
        links: [
            { name: "eFileIL", url: "https://efile.illinoiscourts.gov/" },
            { name: "re:SearchIL", url: "https://researchil.tylerhost.net/" },
            { name: "Judici", url: "https://www.judici.com/" },
            { name: "Illinois Self-Help", url: "https://www.illinoiscourts.gov/self-help" }
        ]
    },
    "IN": {
        name: "Indiana",
        systemName: "MyCase / E-Filing",
        description: "Indiana parties search the case on MyCase, create an account, and request an access code or case-linking for party-level access. Older or restricted documents that are not online can be requested from the county clerk.",
        steps: [
            "Search the case on MyCase.",
            "Create an account if needed.",
            "Request an access code or case-linking process if party-level access is available.",
            "Download any available documents.",
            "If older or restricted documents are not online, contact the county clerk.",
            "Request the official file, chronological case summary, orders, pleadings, and nonrestricted exhibits."
        ],
        links: [
            { name: "Indiana MyCase", url: "https://public.courts.in.gov/mycase" },
            { name: "Indiana E-Filing", url: "https://efile.courts.in.gov/" },
            { name: "Indiana Self-Service Legal Center", url: "https://www.in.gov/courts/selfservice/" }
        ]
    },
    "IA": {
        name: "Iowa",
        systemName: "Iowa Courts Online / eFile (EDMS)",
        description: "Iowa self-represented litigants register for EDMS/eFile and confirm the clerk indexed them as a party. Iowa Courts Online provides case/docket information; if documents don't appear, ask the clerk whether your account is connected, or inspect the file at the courthouse.",
        steps: [
            "Register for EDMS/eFile as a self-represented litigant.",
            "Confirm the clerk has indexed you correctly as a party.",
            "Search Iowa Courts Online for case/docket information.",
            "If documents do not appear, contact the clerk and ask whether your account is connected to the case.",
            "If electronic access is unavailable, inspect the file at the courthouse or request copies.",
            "Criminal defendants, incarcerated persons, and juvenile matters may have different handling."
        ],
        links: [
            { name: "Iowa eFile", url: "https://www.iowacourts.state.ia.us/Efile/" },
            { name: "Iowa Courts Online", url: "https://www.iowacourts.state.ia.us/ESAWebApp/SelectFrame" },
            { name: "Iowa Representing Yourself", url: "https://www.iowacourts.gov/for-the-public/representing-yourself/" }
        ]
    },
    "KS": {
        name: "Kansas",
        systemName: "Public Access Portal / eFiling",
        description: "Kansas parties register for the District Court Public Access Portal and search by county/case number. If documents are unavailable due to case type, go-live date, or restriction, use the courthouse public terminal or request copies from the clerk.",
        steps: [
            "Register for the Kansas District Court Public Access Portal.",
            "Search the case by county/case number.",
            "Check whether documents are available online.",
            "If documents are unavailable due to case type, go-live date, or restriction, use the courthouse public terminal.",
            "Contact the clerk for copies or certified copies.",
            "Juvenile, domestic, guardianship, sealed, and restricted records may require clerk-only access or court permission."
        ],
        links: [
            { name: "Kansas Public Access Portal", url: "https://prodportal.kscourts.gov/ProdPortal/" },
            { name: "Kansas eFiling", url: "https://www.kscourts.gov/eCourt/Kansas-Courts-eFiling" },
            { name: "Kansas Court Resources", url: "https://www.kscourts.gov/Public" }
        ]
    },
    "KY": {
        name: "Kentucky",
        systemName: "KYeCourts / CourtNet",
        description: "In Kentucky, identify the county Circuit Court Clerk and use online court tools for docket/case information. CourtNet often provides case data rather than full document images, so contact the Circuit Court Clerk where the case is filed for the complete file.",
        steps: [
            "Identify the county Circuit Court Clerk.",
            "Use Kentucky online court tools for docket/case information where available.",
            "If you are an eFiler, check whether notices/eRetrieval links provide document access.",
            "CourtNet often provides case data, not full document images.",
            "For the complete file, contact the Circuit Court Clerk where the case is filed.",
            "Ask for the official file, copies, or in-person inspection."
        ],
        links: [
            { name: "Kentucky Courts", url: "https://www.kycourts.gov/" },
            { name: "Kentucky eFiling", url: "https://www.kycourts.gov/AOC/Information-and-Technology/Pages/File_Serve(eFiling).aspx/" },
            { name: "Kentucky Legal Help", url: "https://www.kycourts.gov/Legal-Help/Pages/default.aspx" }
        ]
    },
    "LA": {
        name: "Louisiana",
        systemName: "Parish Clerk of Court Portals (eClerks LA / Clerk Connect)",
        description: "Louisiana is parish-based. Identify the parish and court, search that parish clerk's portal (some use subscription systems), confirm you are a party of record, and request inspection or copies from the parish Clerk of Court.",
        steps: [
            "Louisiana is parish-based. Identify the parish and court.",
            "Search that parish clerk's portal if available.",
            "Some parishes use subscription systems; others require direct clerk contact.",
            "Confirm you are listed as a party of record.",
            "Request inspection/copies from the parish Clerk of Court.",
            "If no digital option exists, ask for in-person inspection, mailed copies, emailed copies, or certified copies."
        ],
        links: [
            { name: "eClerks LA", url: "https://www.eclerksla.com/about/statewideportal" },
            { name: "Clerk Connect", url: "https://clerkconnect.com/" },
            { name: "Louisiana Supreme Court", url: "https://www.lasc.org/" }
        ]
    },
    "ME": {
        name: "Maine",
        systemName: "Maine eCourts / re:SearchMaine",
        description: "Maine parties should confirm their email is on the case record and register for re:SearchMaine if the court/case type uses Maine eCourts, asking the clerk to link the account as a party. Cases not in eCourts, or older paper cases, are handled by the clerk.",
        steps: [
            "Confirm your email is on the case record.",
            "Register for re:SearchMaine if your court/case type uses Maine eCourts.",
            "Ask the clerk to confirm your account is linked as a party.",
            "If the case is not in eCourts, request the official file from the clerk.",
            "Some older cases remain paper-based.",
            "Protection-order and child-protection matters may require special access steps/forms."
        ],
        links: [
            { name: "Maine eCourts", url: "https://www.courts.maine.gov/ecourts/" },
            { name: "Maine Records Access", url: "https://www.courts.maine.gov/ecourts/access.html" },
            { name: "Maine Self-Help", url: "https://www.courts.maine.gov/help/index.html" }
        ]
    },
    "MD": {
        name: "Maryland",
        systemName: "MDEC Portal (Party Access, MDJ-004) / CaseSearch",
        description: "Maryland parties register for the Judiciary Record Search/MDEC portal and complete the notarized MDJ-004 Application for Party Access to view documents remotely. CaseSearch is only public docket access, not full party document access.",
        steps: [
            "Register for the Maryland Judiciary Record Search/MDEC portal.",
            "Complete notarized MDJ-004 Application for Party Access to MDEC Cases.",
            "Submit the form to the court for that specific case.",
            "Once approved, view documents remotely through the MDEC portal.",
            "CaseSearch is only public docket access; it is not full party document access.",
            "If access is not approved, contact the clerk and ask what is missing."
        ],
        links: [
            { name: "MDEC Public Info", url: "https://mdcourts.gov/mdec/efilingpublic" },
            { name: "Access to Court Records (Party Access / MDJ-004)", url: "https://www.mdcourts.gov/legalhelp/courtrecords" },
            { name: "Maryland CaseSearch", url: "https://casesearch.courts.state.md.us/casesearch/" },
            { name: "MDEC Portal", url: "https://mdecportal.courts.state.md.us/MDODYSSEYPORTAL" }
        ]
    },
    "MA": {
        name: "Massachusetts",
        systemName: "MassCourts / eFileMA",
        description: "In Massachusetts, search the docket on MassCourts, confirm you are a party or have filed your appearance, and register with eFileMA if filing applies. Many documents are not remotely available to self-represented parties, so use the clerk/register/recorder's office for the full file.",
        steps: [
            "Search the docket on MassCourts.",
            "Confirm you are listed as a party or have filed your appearance.",
            "Register with eFileMA if electronic filing applies.",
            "Many documents are not remotely available to self-represented parties.",
            "For the full official file, go to or contact the clerk/register/recorder's office.",
            "Ask whether document images can be viewed at a courthouse terminal."
        ],
        links: [
            { name: "MassCourts", url: "https://www.masscourts.org/eservices/home.page.2" },
            { name: "eFileMA", url: "https://www.efilema.com/" },
            { name: "Massachusetts Court Self-Help", url: "https://www.mass.gov/topics/courts-self-help" }
        ]
    },
    "MI": {
        name: "Michigan",
        systemName: "MiFILE / County Court Portals",
        description: "Michigan has no single statewide public document portal for every trial court. Identify the specific court, register for MiFILE if the court uses it, add yourself as a service contact, and ask the clerk whether your account can access filed documents.",
        steps: [
            "Identify the specific court.",
            "Register for MiFILE if the court uses it.",
            "Add yourself as a service contact if appropriate.",
            "Ask the clerk whether your account can access filed documents in the case.",
            "Michigan does not have one statewide public document portal for every trial court.",
            "If online documents are unavailable, request inspection/copies from the court clerk."
        ],
        links: [
            { name: "MiFILE", url: "https://mifile.courts.michigan.gov/" },
            { name: "Michigan Court Directory", url: "https://courts.michigan.gov/courts" },
            { name: "Michigan Legal Help e-Filing", url: "https://michiganlegalhelp.org/self-help-tools/e-filing" }
        ]
    },
    "MN": {
        name: "Minnesota",
        systemName: "Minnesota Court Records Online (MCRO) / eFile & eServe",
        description: "Minnesota parties search through MCRO for documents designated for remote access and register for eFile/eServe if filing. Save documents promptly since eFS viewing may be time-limited, and contact the court administrator for anything not available online.",
        steps: [
            "Search the case through Minnesota Court Records Online.",
            "Use MCRO for documents designated for remote access.",
            "Register for eFile/eServe if filing electronically.",
            "Save documents promptly because eFS document viewing may be time-limited.",
            "If documents are not available online, contact the court administrator.",
            "Request copies or courthouse access to the official file."
        ],
        links: [
            { name: "Minnesota Court Records Online", url: "https://publicaccess.courts.state.mn.us/" },
            { name: "Minnesota eFile/eServe", url: "https://www.mncourts.gov/file-a-case.aspx" },
            { name: "Minnesota Self-Help", url: "https://www.mncourts.gov/Help-Topics/Self-Help.aspx" }
        ]
    },
    "MS": {
        name: "Mississippi",
        systemName: "MEC / PAMEC",
        description: "Mississippi access depends on the court (Circuit, Chancery, County, Justice, Municipal, or appellate). Search available MEC/PAMEC tools if the court participates; self-represented parties may have limited e-filing, so ask the clerk about read-only access or use the courthouse terminal.",
        steps: [
            "Identify whether the case is in Circuit, Chancery, County, Justice, Municipal, or appellate court.",
            "Search available MEC/PAMEC tools if the court participates.",
            "Self-represented parties may not have the same e-filing ability as attorneys.",
            "Ask the clerk whether read-only access is available.",
            "If the case type is not remotely available, use the courthouse public terminal or request copies.",
            "Family, domestic, juvenile, sealed, and confidential case types may be restricted."
        ],
        links: [
            { name: "Mississippi MEC", url: "https://courts.ms.gov/mec/mec.php" },
            { name: "PAMEC Registration", url: "https://www.pamecapps.mec.ms.gov/onlinereg/" },
            { name: "Mississippi Judiciary", url: "https://courts.ms.gov/" }
        ]
    },
    "MO": {
        name: "Missouri",
        systemName: "Case.net / eFiling",
        description: "Missouri parties search Case.net and open available docket entries and attachments; documents filed after Missouri's remote-access cutoff may be visible online, while older documents may require a courthouse terminal. Contact the circuit clerk for locked or missing documents.",
        steps: [
            "Search the case on Case.net.",
            "Open available docket entries and attached documents.",
            "Documents filed after Missouri's remote-access cutoff may be visible online.",
            "Older documents may require courthouse terminal access.",
            "If documents are locked or missing, contact the circuit clerk.",
            "Request the official file, copies, or certified copies directly from the clerk."
        ],
        links: [
            { name: "Missouri Case.net", url: "https://www.courts.mo.gov/casenet/welcome.do" },
            { name: "Missouri eFiling", url: "https://www.courts.mo.gov/ecf/index.do" },
            { name: "Missouri Self-Represented Litigants", url: "https://selfrepresent.mo.gov/" }
        ]
    },
    "MT": {
        name: "Montana",
        systemName: "Montana Courts Public Access / eFile",
        description: "In Montana, identify the Clerk of District Court (or lower court clerk) and confirm party status. Public access tools show case information only; self-represented parties often obtain records through the clerk rather than e-filing.",
        steps: [
            "Identify the Clerk of District Court or lower court clerk.",
            "Confirm your party status.",
            "Use public access tools only for case information where available.",
            "Self-represented parties may have to file and obtain records through the clerk rather than e-filing.",
            "Request inspection/copies from the clerk of the court where the case is pending.",
            "Ask for the docket/register, pleadings, orders, judgments, and nonrestricted exhibits."
        ],
        links: [
            { name: "Montana Courts", url: "https://courts.mt.gov/" },
            { name: "Montana Court Forms", url: "https://courts.mt.gov/forms/" },
            { name: "Montana eFile Login", url: "https://mtefile.courts.mt.gov/login" }
        ]
    },
    "NE": {
        name: "Nebraska",
        systemName: "JUSTICE Search / eFiling",
        description: "Nebraska access depends on the court (District, County, Juvenile, appellate, or Supreme Court). Search Nebraska JUSTICE and register for eFiling/eNotice; some details and images require a Nebraska.gov account or fee, so ask about courthouse public terminals to avoid remote fees.",
        steps: [
            "Identify whether the case is District, County, Juvenile, appellate, or Supreme Court.",
            "Search Nebraska JUSTICE if available.",
            "Register for eFiling/eNotice if applicable.",
            "Some case details and images may require a Nebraska.gov account or fee.",
            "To avoid remote fees, ask about courthouse public terminals.",
            "If digital access is incomplete, request copies from the clerk."
        ],
        links: [
            { name: "Nebraska eFiling", url: "https://nebraskajudicial.gov/e-services/efiling" },
            { name: "Nebraska JUSTICE Search", url: "https://www.nebraska.gov/justicecc/ccname.cgi" },
            { name: "Nebraska Self-Help", url: "https://supremecourt.nebraska.gov/self-help" }
        ]
    },
    "NV": {
        name: "Nevada",
        systemName: "eFileNV / County Court Portals",
        description: "Nevada is county-based. Identify the county and court, check the local court or county clerk portal, and register through eFileNV if that court uses it. Clark County, Washoe County, and smaller counties may all use different procedures.",
        steps: [
            "Nevada is county-based. Identify the county and court.",
            "Check the local court or county clerk portal.",
            "Register through eFileNV if that court uses it and your case type allows it.",
            "Ask whether party-level access is available.",
            "If not, request the file from the county clerk or court clerk.",
            "Clark County, Washoe County, and smaller counties may all use different procedures."
        ],
        links: [
            { name: "eFileNV", url: "https://nevada.tylertech.cloud/ofsweb" },
            { name: "Nevada Self-Help", url: "https://selfhelp.nvcourts.gov/" },
            { name: "Nevada Courts", url: "https://www.nvcourts.gov/" }
        ]
    },
    "NH": {
        name: "New Hampshire",
        systemName: "Case Access Portal / File & Serve",
        description: "New Hampshire parties register in the Case Access Portal as a self-represented party/non-attorney, enter the case number, and submit a party-access request. After approval you can view or download eligible documents; confidential cases remain restricted.",
        steps: [
            "Register in the Case Access Portal as a self-represented party/non-attorney.",
            "Enter the case number.",
            "Submit a party-access request.",
            "After approval, view/download eligible case documents.",
            "If access is denied or incomplete, contact the clerk.",
            "Confidential cases/documents remain restricted."
        ],
        links: [
            { name: "NH Case Access Portal", url: "https://odypa.nhecourt.us/portal" },
            { name: "NH File & Serve", url: "https://newhampshire.tylertech.cloud/ofsweb" },
            { name: "NH Self-Help", url: "https://www.courts.nh.gov/self-help" }
        ]
    },
    "NJ": {
        name: "New Jersey",
        systemName: "eCourts / JEDS",
        description: "In New Jersey, create an eCourts account if your case type supports it and request direct access to view the case jacket. JEDS is mainly for document submission, not a full case-file viewer; if your case is not eligible, contact the court clerk.",
        steps: [
            "Create an eCourts account if your case type supports it.",
            "Request direct access to your case.",
            "Use eCourts direct access to view the case jacket where available.",
            "Use JEDS mainly for document submission, not as a full case-file viewer.",
            "If your case is not eligible for direct access, contact the court clerk.",
            "Request in-person inspection/copies or ask what motion/application is needed."
        ],
        links: [
            { name: "NJ Self-Represented Civil eCourts Access", url: "https://www.njcourts.gov/self-help/srl-civil-ecourts-access" },
            { name: "JEDS", url: "https://www.njcourts.gov/self-help/jeds" },
            { name: "NJ eCourts", url: "https://www.njcourts.gov/attorneys/ecourts" }
        ]
    },
    "NM": {
        name: "New Mexico",
        systemName: "Case Lookup / re:Search NM",
        description: "New Mexico parties use Case Lookup for docket information and register for re:Search NM in the proper pro se role for document access. Ask the clerk to confirm your party access; sealed, adoption, abuse/neglect, mental health, juvenile, and protected cases may be restricted.",
        steps: [
            "Use Case Lookup for docket information.",
            "Register for re:Search NM if you need document access.",
            "Apply/request access in the proper self-represented/pro se role.",
            "Ask the clerk to confirm your party access.",
            "If records are not digital, request the official file from the clerk.",
            "Sealed, adoption, abuse/neglect, mental health, juvenile, and protected cases may be restricted."
        ],
        links: [
            { name: "New Mexico Case Lookup", url: "https://caselookup.nmcourts.gov/caselookup" },
            { name: "re:Search NM", url: "https://researchnm.tylerhost.net/" },
            { name: "NM Self-Representation", url: "https://selfrepresentation.nmcourts.gov/" }
        ]
    },
    "NY": {
        name: "New York",
        systemName: "NYSCEF / Case Search",
        description: "In New York, determine whether your court/county/case type is in NYSCEF; if so, create an unrepresented litigant account and connect it to the case to view the e-filed record. Cases not in NYSCEF go through the county or court clerk, and certain sensitive matters require special procedures.",
        steps: [
            "Determine whether your court/county/case type is in NYSCEF.",
            "If yes, create an unrepresented litigant account.",
            "Record consent or connect the account to the case as required.",
            "Use NYSCEF to view/print the e-filed record.",
            "If the case is not in NYSCEF, contact the county clerk or court clerk.",
            "Family Court, sealed criminal, matrimonial, adoption, youthful offender, and protected records may require special procedures."
        ],
        links: [
            { name: "NYSCEF for Unrepresented Litigants", url: "https://www.nycourts.gov/efile-unrepresented" },
            { name: "NYSCEF Case Search", url: "https://iapps.courts.state.ny.us/nyscef/CaseSearch" },
            { name: "NY CourtHelp", url: "https://www.nycourts.gov/courthelp/" }
        ]
    },
    "NC": {
        name: "North Carolina",
        systemName: "eCourts Portal",
        description: "North Carolina parties search the NC eCourts Portal and view public, nonconfidential documents there. If documents are missing, contact the Clerk of Superior Court in the county and ask whether the case is fully migrated and whether party access exists.",
        steps: [
            "Search the case in the NC eCourts Portal.",
            "View public, nonconfidential documents available through the portal.",
            "Register if needed for saved access or e-filing.",
            "If documents are missing, contact the Clerk of Superior Court in the county.",
            "Ask whether the case is fully migrated and whether party access exists.",
            "If not digital, request inspection/copies from the clerk."
        ],
        links: [
            { name: "NC eCourts Portal", url: "https://portal-nc.tylertech.cloud/Portal/" },
            { name: "NC eCourts Services", url: "https://www.nccourts.gov/services/ecourts-services" },
            { name: "NC Help Topics", url: "https://www.nccourts.gov/help-topics" }
        ]
    },
    "ND": {
        name: "North Dakota",
        systemName: "North Dakota Public Search / File & Serve",
        description: "North Dakota parties search Public Search and confirm whether the result includes case information only or document images. Register for File & Serve if filing, and use the courthouse terminal or clerk copies when document images are unavailable.",
        steps: [
            "Search the case through North Dakota Public Search.",
            "Confirm whether the result includes only case information or document images.",
            "Register for File & Serve if filing electronically applies.",
            "Ask the clerk whether your account can be connected as a party.",
            "If document images are unavailable, use the courthouse terminal or request copies.",
            "Juvenile, adoption, mental health, sealed, warrant, and protected records may be restricted."
        ],
        links: [
            { name: "North Dakota Public Search", url: "https://publicsearch.ndcourts.gov/" },
            { name: "ND File & Serve", url: "https://northdakota.tylerhost.net/ofsweb" },
            { name: "ND Legal Self-Help", url: "https://www.ndcourts.gov/legal-self-help" }
        ]
    },
    "OH": {
        name: "Ohio",
        systemName: "County Clerk of Courts Portals / eFileOH",
        description: "Ohio is county-based. Identify the county and court, go to that county Clerk of Courts website, and use its docket/case-search system. If document images are not online, contact the clerk for the docket, file-stamped pleadings, orders, and nonrestricted exhibits.",
        steps: [
            "Ohio is county-based. Identify the county and court.",
            "Go to that county Clerk of Courts website.",
            "Use the county docket/case-search system if available.",
            "If document images are not online, contact the clerk.",
            "Request the docket, file-stamped pleadings, motions, orders, judgments, and nonrestricted exhibits.",
            "For certified copies, follow that county clerk's copy/certification process."
        ],
        links: [
            { name: "Ohio Self-Represented Resources", url: "https://www.supremecourt.ohio.gov/courts/services-to-courts/court-services/access-to-justice-resources/" },
            { name: "Ohio Court of Claims eFileOH", url: "https://www.efileoh.com/" }
        ]
    },
    "OK": {
        name: "Oklahoma",
        systemName: "OSCN (Oklahoma State Courts Network)",
        description: "Oklahoma parties search OSCN and open docket entries to download attached PDFs where available. If a filing is listed but no PDF appears, contact the county court clerk for the official file; municipal, sealed, juvenile, and some older records may not appear on OSCN.",
        steps: [
            "Search the case through OSCN.",
            "Open docket entries and download attached PDFs where available.",
            "If a filing is listed but no PDF appears, contact the county court clerk.",
            "Request the official file or unscanned documents.",
            "Ask for copies, certified copies, or in-person inspection.",
            "Municipal, sealed, juvenile, and some older records may not appear on OSCN."
        ],
        links: [
            { name: "OSCN Docket Search", url: "https://www.oscn.net/dockets/search.aspx" },
            { name: "Oklahoma State Courts Network", url: "https://www.oscn.net/" }
        ]
    },
    "OR": {
        name: "Oregon",
        systemName: "Oregon Records Portal / OJCIN / File & Serve",
        description: "In Oregon, the free portal shows basic case information but not full document access. Register for File & Serve if filing; remote document access through OJCIN may be limited by eligibility/subscription, so use the courthouse public kiosk or request copies from the court.",
        steps: [
            "Use the free portal for basic case information.",
            "Do not assume it includes full document access.",
            "Register for File & Serve if you need to file electronically.",
            "Remote document access through OJCIN may be limited by eligibility/subscription.",
            "If you cannot get remote documents, use the courthouse public kiosk or request copies from the court.",
            "Ask the clerk how a party may inspect their own official file."
        ],
        links: [
            { name: "Oregon Records Portal", url: "https://webportal.courts.oregon.gov/portal/" },
            { name: "OJCIN Online", url: "https://www.courts.oregon.gov/services/online/Pages/ojcin.aspx" },
            { name: "Oregon File & Serve", url: "https://oregon.tylertech.cloud/OfsWeb" }
        ]
    },
    "PA": {
        name: "Pennsylvania",
        systemName: "UJS Web Portal / PACFile",
        description: "Pennsylvania parties search the docket sheet on the UJS Portal and register for PACFile if filing. Docket sheets usually do not include downloadable filings, so contact the county Clerk of Courts or Prothonotary for documents.",
        steps: [
            "Search the docket sheet on the UJS Portal.",
            "Register for PACFile if e-filing applies.",
            "Understand that docket sheets usually do not include downloadable filings.",
            "Contact the county Clerk of Courts or Prothonotary for documents.",
            "Request copies or in-person inspection of the official file.",
            "Juvenile, sealed, expunged, limited-access, and protected records may be restricted."
        ],
        links: [
            { name: "UJS Web Portal", url: "https://ujsportal.pacourts.us/" },
            { name: "PACFile", url: "https://ujsportal.pacourts.us/PACFile/Overview" },
            { name: "Representing Yourself", url: "https://www.pacourts.us/learn/representing-yourself" }
        ]
    },
    "RI": {
        name: "Rhode Island",
        systemName: "RI Public Portal / File & Serve",
        description: "Rhode Island parties search the Public Portal and register for File & Serve if filing. The portal may show docket/register information but not every document, so ask the clerk whether full documents are available through courthouse terminals or by copy request.",
        steps: [
            "Search the case in the Public Portal.",
            "Register for File & Serve if filing electronically applies.",
            "Public portal access may show docket/register information but not every document.",
            "Ask the clerk whether full documents are available through courthouse terminals.",
            "If not, request copies from the clerk's office.",
            "Remote document access may be limited for non-attorney users."
        ],
        links: [
            { name: "RI Public Portal", url: "https://publicportal.courts.ri.gov/PublicPortal/" },
            { name: "RI File & Serve", url: "https://rhodeisland.tylertech.cloud/ofsweb" },
            { name: "Representing Yourself in RI", url: "https://www.courts.ri.gov/Public-Resources/Pages/default.aspx" }
        ]
    },
    "SC": {
        name: "South Carolina",
        systemName: "SC Case Records Search (Public Index) / eFiling",
        description: "South Carolina parties use the Public Index for the county/court and confirm whether documents are online or only docket entries. Self-represented litigants generally file traditionally, and the Clerk of Court handles inspection/copies of the official file.",
        steps: [
            "Use the Public Index for the county/court.",
            "Confirm whether documents are available online or only docket entries.",
            "Self-represented litigants generally file traditionally if e-filing is not available to them.",
            "Contact the Clerk of Court where the case is pending.",
            "Request inspection/copies of the official file.",
            "Ask whether any document is sealed, juvenile, adoption-related, confidential, or courthouse-only."
        ],
        links: [
            { name: "SC Case Records Search", url: "https://www.sccourts.org/case-records-search/" },
            { name: "SC Self-Help", url: "https://www.sccourts.org/selfHelp/" },
            { name: "SC eFiling", url: "https://www.sccourts.org/efiling/" }
        ]
    },
    "SD": {
        name: "South Dakota",
        systemName: "eCourts / PARS",
        description: "South Dakota parties register for eCourts to view available case summaries and use PARS for record searching, understanding summaries are not always the full file. For full open records, use courthouse public terminals or ask the clerk for the party record-request process.",
        steps: [
            "Register for eCourts to view available case summaries.",
            "Use PARS where appropriate for record searching.",
            "Understand that case summaries are not always the full file.",
            "For full open court records, use courthouse public terminals or clerk requests.",
            "As a named party, ask the clerk for the party record-request process.",
            "Request copies/certified copies from the clerk if needed."
        ],
        links: [
            { name: "South Dakota Cases and Records", url: "https://ujs.sd.gov/cases-and-records/" },
            { name: "eCourts", url: "https://ecourts.sd.gov/" },
            { name: "PARS", url: "https://ujspars.sd.gov/" },
            { name: "South Dakota Forms", url: "https://ujs.sd.gov/form-file-search/" }
        ]
    },
    "TN": {
        name: "Tennessee",
        systemName: "Public Case History / County Clerk Portals",
        description: "Tennessee trial-court records are county/court based (Circuit, Criminal, Chancery, General Sessions, Juvenile, Probate, or appellate). Search the county clerk's portal, use Public Case History/C-Track for appellate cases, and request inspection/copies from the county clerk otherwise.",
        steps: [
            "Tennessee trial-court records are county/court based.",
            "Identify the county and court: Circuit, Criminal, Chancery, General Sessions, Juvenile, Probate, or appellate.",
            "Search the county clerk's portal if available.",
            "For appellate cases, use Public Case History/C-Track.",
            "If trial documents are not online, request inspection/copies from the county clerk.",
            "Ask whether remote copies, mailed copies, or in-person public terminal access is available."
        ],
        links: [
            { name: "Tennessee Public Case History", url: "https://www.tncourts.gov/courts/supreme-court/public-case-history" },
            { name: "Tennessee Self-Help", url: "https://www.tncourts.gov/programs/self-help-center" },
            { name: "Tennessee Courts", url: "https://www.tncourts.gov/courts" }
        ]
    },
    "TX": {
        name: "Texas",
        systemName: "eFileTexas / re:SearchTX",
        description: "Texas parties register for eFileTexas and use the same credentials for re:SearchTX where available to check whether party access to documents exists. If the county/case is not in re:SearchTX, contact the District Clerk or County Clerk; access varies heavily by county.",
        steps: [
            "Register for eFileTexas if e-filing applies.",
            "Use the same credentials for re:SearchTX where available.",
            "Search your case and check whether party access to documents is available.",
            "If the county/case is not in re:SearchTX, contact the District Clerk or County Clerk.",
            "Request the official file, docket sheet, orders, pleadings, and nonrestricted exhibits.",
            "Texas access varies heavily by county and clerk system."
        ],
        links: [
            { name: "eFileTexas", url: "https://efile.txcourts.gov/" },
            { name: "re:SearchTX", url: "https://research.txcourts.gov/" },
            { name: "Texas Legal Self-Help", url: "https://www.txcourts.gov/programs-services/self-help/" }
        ]
    },
    "UT": {
        name: "Utah",
        systemName: "MyCase / XChange",
        description: "Utah parties create a MyCase account, complete identity verification, and ask the clerk to link eligible district/justice court cases for free party access to case information and documents. XChange is for public/paid search access.",
        steps: [
            "Create a MyCase account.",
            "Complete identity verification.",
            "Ask the clerk to link all eligible district/justice court cases if they do not appear.",
            "Use MyCase for free party access to eligible case information and documents.",
            "Use XChange only if you need public/paid search access.",
            "If the case type is not eligible, request documents from the clerk."
        ],
        links: [
            { name: "Utah MyCase", url: "https://www.utcourts.gov/en/self-help/services/mycase.html" },
            { name: "Utah XChange", url: "https://xchange.utcourts.gov/" },
            { name: "Utah Self-Help", url: "https://www.utcourts.gov/en/self-help.html" }
        ]
    },
    "VT": {
        name: "Vermont",
        systemName: "Vermont Public Portal / eFiling",
        description: "Vermont parties should confirm their email is on the court record, file a pro se appearance or eServices request if needed, register in the Public Portal, and request elevated access as a case party. If the portal will not link, contact the clerk to match the email on the case.",
        steps: [
            "Make sure your email is on the court record.",
            "File a pro se appearance or eServices request if needed.",
            "Register in the Vermont Public Portal.",
            "Request elevated access as a case party.",
            "If the portal will not link, contact the clerk and confirm the email on the case matches your portal account.",
            "If no digital access exists, request inspection/copies from the clerk."
        ],
        links: [
            { name: "Vermont Public Portal", url: "https://www.vtcourts.gov/about-vermont-judiciary/public-portal" },
            { name: "Vermont eFiling", url: "https://www.vtcourts.gov/about-vermont-judiciary/electronic-access/electronic-filing" },
            { name: "Vermont Forms", url: "https://www.vermontjudiciary.org/court-forms" }
        ]
    },
    "VA": {
        name: "Virginia",
        systemName: "Online Case Information / OCRA",
        description: "Virginia parties use Online Case Information for docket lookup and identify the court level (Circuit, General District, JDR, or appellate). OCRA remote document access is generally for attorneys/government users, so contact the Circuit Court Clerk for in-person inspection or copies.",
        steps: [
            "Use online case information for docket/case lookup.",
            "Identify whether the case is Circuit Court, General District, Juvenile and Domestic Relations, or appellate.",
            "OCRA remote document access is generally for attorneys/government-authorized users, not ordinary pro se parties.",
            "Contact the Circuit Court Clerk or specific court clerk.",
            "Request in-person inspection or copies of the official file.",
            "Ask whether party status gives access beyond the public terminal."
        ],
        links: [
            { name: "Virginia Online Case Information", url: "https://www.vacourts.gov/caseinfo/home.html" },
            { name: "OCRA", url: "https://cisweb.courts.state.va.us/Ocra/" },
            { name: "Virginia Self-Help", url: "https://selfhelp.vacourts.gov/" }
        ]
    },
    "WA": {
        name: "Washington",
        systemName: "Odyssey Portal / eFileWA",
        description: "Washington parties search through Washington Courts search or the Odyssey Portal and register for eFileWA if filing. Anonymous users often see case information but not full documents, so contact the county clerk about party-level, subscription, terminal, or copy access. King and Pierce County may use separate systems.",
        steps: [
            "Search the case through Washington Courts search or Odyssey Portal if covered.",
            "Register for eFileWA if electronic filing applies.",
            "Anonymous users often see case information but not full documents.",
            "Contact the county clerk for document access.",
            "Ask whether the court offers party-level access, subscription access, terminal access, or copy requests.",
            "King and Pierce County may use separate systems."
        ],
        links: [
            { name: "Washington Odyssey Portal", url: "https://odysseyportal.courts.wa.gov/odyportal" },
            { name: "eFileWA", url: "https://www.efilewa.com/" },
            { name: "Washington Courts Search", url: "https://www.courts.wa.gov/search/" }
        ]
    },
    "WV": {
        name: "West Virginia",
        systemName: "West Virginia Court Records (WVPASS)",
        description: "West Virginia access depends on the court (Circuit, Family, Magistrate, or appellate). Use WVPASS or available judiciary record tools, confirm whether the result is a docket or includes documents, and contact the appropriate clerk for the official file and current docket.",
        steps: [
            "Identify the county and court: Circuit, Family, Magistrate, or appellate.",
            "Use WVPASS or available judiciary record tools where applicable.",
            "Confirm whether the search result is only a docket or includes documents.",
            "Contact the circuit clerk, family court clerk, or magistrate court clerk.",
            "Request the official file and current docket.",
            "If records are not digital, ask for counter inspection, public terminal access, mailed copies, or certified copies."
        ],
        links: [
            { name: "West Virginia Court Records", url: "https://www.courtswv.gov/court-record-access" },
            { name: "West Virginia Judiciary", url: "https://www.courtswv.gov/" },
            { name: "Court Information by County", url: "https://www.courtswv.gov/public-resources/court-information-by-county.html" }
        ]
    },
    "WI": {
        name: "Wisconsin",
        systemName: "WCCA (Circuit Court Access) / eFiling",
        description: "Wisconsin parties search WCCA, which usually shows docket/case information rather than complete document images. Opt in to eFiling if your case allows it, and contact the clerk of circuit court for inspection/copies, certified copies, or courthouse terminal access.",
        steps: [
            "Search the case through WCCA.",
            "WCCA usually shows docket/case information, not complete document images.",
            "Opt in to eFiling if your case allows it and you want electronic service/access.",
            "If documents are not visible, contact the clerk of circuit court.",
            "Request inspection/copies of the official file.",
            "Ask whether certified copies or courthouse terminal access are available."
        ],
        links: [
            { name: "WCCA Circuit Court Access", url: "https://wcca.wicourts.gov/" },
            { name: "Wisconsin Circuit Court eFiling", url: "https://www.wicourts.gov/ecourts/efilecircuit/index.htm" },
            { name: "Wisconsin Self-Help", url: "https://www.wicourts.gov/services/public/selfhelp/index.htm" }
        ]
    },
    "WY": {
        name: "Wyoming",
        systemName: "Public Case Search / eFiling",
        description: "Wyoming access depends on the court (trial, district, circuit, municipal, or appellate). Use public case search for docket information and register through the proper eFiling system, asking the clerk whether your self-represented account can access the case file.",
        steps: [
            "Identify whether the case is trial court, district court, circuit court, municipal court, or appellate.",
            "Use available public case search for docket information.",
            "Register through the proper eFiling system if the case type allows it.",
            "Ask the clerk whether your self-represented account can access the case file.",
            "If not digital, request inspection/copies from the clerk.",
            "For sealed/confidential records, ask what motion or court order is required."
        ],
        links: [
            { name: "Wyoming Public Case Search", url: "https://efiling.courts.state.wy.us/public/caseSearch.do" },
            { name: "Wyoming eFiling", url: "https://www.wyocourts.gov/efiling/" },
            { name: "Wyoming Representing Yourself", url: "https://www.wyocourts.gov/self-help-forms/" }
        ]
    },
    "DC": {
        name: "District of Columbia",
        systemName: "DC Courts Case Search / eFiling",
        description: "In the District of Columbia, identify whether the case is in DC Superior Court or the DC Court of Appeals, search the case-search tools, and confirm you are a party of record. If document images are missing, contact the division clerk (Civil, Criminal, Family, Domestic Violence, Probate, Tax, Landlord-Tenant, Small Claims, or Appeals).",
        steps: [
            "Identify whether the case is in DC Superior Court or DC Court of Appeals.",
            "Search the case through DC Courts' case-search tools.",
            "Confirm that you are listed as a party of record.",
            "If eFiling applies, register and connect to the case if allowed.",
            "If document images are missing, contact the division clerk: Civil, Criminal, Family, Domestic Violence, Probate, Tax, Landlord-Tenant, Small Claims, or Appeals.",
            "Request inspection/copies of the official file, subject to sealed/confidential restrictions."
        ],
        links: [
            { name: "DC Courts Case Search", url: "https://www.dccourts.gov/court-resources/search-cases" },
            { name: "DC Courts eFiling", url: "https://www.dccourts.gov/superior-court/file-online-efiling" },
            { name: "DC Legal Assistance / Represent Yourself", url: "https://www.dccourts.gov/services/represent-yourself" }
        ]
    }
};
