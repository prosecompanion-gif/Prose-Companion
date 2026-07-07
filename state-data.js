// Pro Se Legal Resources - State Data
// All links point to official government websites
const stateData = {

    "AL": {
        name: "Alabama",
        judiciary: { name: "Alabama Judicial System", url: "https://judicial.alabama.gov/" },
        courtRules: { name: "Alabama Rules of Court", url: "https://judicial.alabama.gov/library/rules" },
        statutes: { name: "Code of Alabama", url: "http://alisondb.legislature.state.al.us/alison/codeofalabama/1975/coatoc.htm" },
        selfHelp: { name: "Alabama Legal Help", url: "https://www.alabamalegalhelp.org/" },
        legalAid: [
            { name: "Legal Services Alabama", url: "https://www.legalservicesalabama.org/" },
            { name: "Alabama State Bar Volunteer Lawyers", url: "https://www.alabar.org/public/volunteer-lawyers-program/" }
        ]
    },
    "AK": {
        name: "Alaska",
        judiciary: { name: "Alaska Court System", url: "https://courts.alaska.gov/" },
        courtRules: { name: "Alaska Rules of Court", url: "https://courts.alaska.gov/rules/index.htm" },
        statutes: { name: "Alaska Statutes", url: "http://www.akleg.gov/basis/statutes.asp" },
        selfHelp: { name: "Alaska Court Self-Help Center", url: "https://courts.alaska.gov/shc/index.htm" },
        legalAid: [
            { name: "Alaska Legal Services Corporation", url: "https://www.alsc-law.org/" },
            { name: "Alaska Bar Association Pro Bono", url: "https://alaskabar.org/for-the-public/" }
        ]
    },

    "AZ": {
        name: "Arizona",
        judiciary: { name: "Arizona Judicial Branch", url: "https://www.azcourts.gov/" },
        courtRules: { name: "Arizona Rules of Court", url: "https://www.azcourts.gov/rules" },
        statutes: { name: "Arizona Revised Statutes", url: "https://www.azleg.gov/arstitle/" },
        selfHelp: { name: "Arizona Self-Service Center", url: "https://www.azcourts.gov/selfservicecenter" },
        legalAid: [
            { name: "Community Legal Services", url: "https://clsaz.org/" },
            { name: "Arizona Foundation for Legal Services", url: "https://www.azflse.org/" }
        ]
    },
    "AR": {
        name: "Arkansas",
        judiciary: { name: "Arkansas Judiciary", url: "https://www.arcourts.gov/" },
        courtRules: { name: "Arkansas Court Rules", url: "https://www.arcourts.gov/rules-and-administrative-orders" },
        statutes: { name: "Arkansas Code", url: "https://www.lexisnexis.com/hottopics/arcode/" },
        selfHelp: { name: "Arkansas Legal Services Online", url: "https://www.arlegalservices.org/" },
        legalAid: [
            { name: "Center for Arkansas Legal Services", url: "https://www.arlegalservices.org/" },
            { name: "Legal Aid of Arkansas", url: "https://arlegalaid.org/" }
        ]
    },

    "CA": {
        name: "California",
        judiciary: { name: "California Courts", url: "https://www.courts.ca.gov/" },
        courtRules: { name: "California Rules of Court", url: "https://www.courts.ca.gov/rules.htm" },
        statutes: { name: "California Law", url: "https://leginfo.legislature.ca.gov/faces/codes.xhtml" },
        selfHelp: { name: "California Courts Self-Help", url: "https://www.courts.ca.gov/selfhelp.htm" },
        legalAid: [
            { name: "Legal Aid Foundation of Los Angeles", url: "https://lafla.org/" },
            { name: "Bay Area Legal Aid", url: "https://baylegal.org/" },
            { name: "California LawHelp", url: "https://www.lawhelpca.org/" }
        ]
    },
    "CO": {
        name: "Colorado",
        judiciary: { name: "Colorado Judicial Branch", url: "https://www.courts.state.co.us/" },
        courtRules: { name: "Colorado Rules of Civil Procedure", url: "https://www.courts.state.co.us/Courts/Supreme_Court/Rule_Changes.cfm" },
        statutes: { name: "Colorado Revised Statutes", url: "https://leg.colorado.gov/colorado-revised-statutes" },
        selfHelp: { name: "Colorado Self-Help Center", url: "https://www.courts.state.co.us/Self_Help/index.cfm" },
        legalAid: [
            { name: "Colorado Legal Services", url: "https://www.coloradolegalservices.org/" },
            { name: "Colorado Bar Pro Bono", url: "https://www.cobar.org/For-the-Public/Free-Legal-Help" }
        ]
    },

    "CT": {
        name: "Connecticut",
        judiciary: { name: "Connecticut Judicial Branch", url: "https://www.jud.ct.gov/" },
        courtRules: { name: "Connecticut Practice Book (Rules)", url: "https://www.jud.ct.gov/pb.htm" },
        statutes: { name: "Connecticut General Statutes", url: "https://www.cga.ct.gov/current/pub/titles.htm" },
        selfHelp: { name: "CT Judicial Self-Help", url: "https://www.jud.ct.gov/selfhelp.htm" },
        legalAid: [
            { name: "Statewide Legal Services of CT", url: "https://www.slsct.org/" },
            { name: "Connecticut Legal Services", url: "https://ctlegal.org/" }
        ]
    },
    "DE": {
        name: "Delaware",
        judiciary: { name: "Delaware Courts", url: "https://courts.delaware.gov/" },
        courtRules: { name: "Delaware Court Rules", url: "https://courts.delaware.gov/rules/" },
        statutes: { name: "Delaware Code", url: "https://delcode.delaware.gov/" },
        selfHelp: { name: "Delaware Courts Self-Help", url: "https://courts.delaware.gov/help/" },
        legalAid: [
            { name: "Delaware Volunteer Legal Services", url: "https://www.dvls.org/" },
            { name: "Community Legal Aid Society", url: "https://www.declasi.org/" }
        ]
    },

    "FL": {
        name: "Florida",
        judiciary: { name: "Florida Courts", url: "https://www.flcourts.gov/" },
        courtRules: { name: "Florida Rules of Court", url: "https://www.flcourts.gov/Resources-Services/Court-Rules" },
        statutes: { name: "Florida Statutes", url: "http://www.leg.state.fl.us/statutes/" },
        selfHelp: { name: "Florida Courts Self-Help", url: "https://www.flcourts.gov/Resources-Services/Court-Self-Help" },
        legalAid: [
            { name: "Florida Legal Services", url: "https://www.floridalegal.org/" },
            { name: "Florida Bar Pro Bono", url: "https://www.floridabar.org/public/probono/" },
            { name: "Florida LawHelp", url: "https://www.floridalawhelp.org/" }
        ]
    },
    "GA": {
        name: "Georgia",
        judiciary: { name: "Georgia Courts", url: "https://www.georgiacourts.gov/" },
        courtRules: { name: "Georgia Court Rules", url: "https://www.georgiacourts.gov/court-rules" },
        statutes: { name: "Official Code of Georgia", url: "https://www.legis.ga.gov/legislation/codes" },
        selfHelp: { name: "Georgia Legal Aid", url: "https://www.georgiadvit.org/" },
        legalAid: [
            { name: "Georgia Legal Services Program", url: "https://www.glsp.org/" },
            { name: "Atlanta Legal Aid Society", url: "https://atlantalegalaid.org/" }
        ]
    },

    "HI": {
        name: "Hawaii",
        judiciary: { name: "Hawaii State Judiciary", url: "https://www.courts.state.hi.us/" },
        courtRules: { name: "Hawaii Court Rules", url: "https://www.courts.state.hi.us/legal_references/rules" },
        statutes: { name: "Hawaii Revised Statutes", url: "https://www.capitol.hawaii.gov/hrscurrent/" },
        selfHelp: { name: "Hawaii Self-Help Center", url: "https://www.courts.state.hi.us/self-help" },
        legalAid: [
            { name: "Legal Aid Society of Hawaii", url: "https://www.legalaidhawaii.org/" },
            { name: "Volunteer Legal Services Hawaii", url: "https://www.vlsh.org/" }
        ]
    },
    "ID": {
        name: "Idaho",
        judiciary: { name: "Idaho Supreme Court", url: "https://isc.idaho.gov/" },
        courtRules: { name: "Idaho Court Rules", url: "https://isc.idaho.gov/rules" },
        statutes: { name: "Idaho Statutes", url: "https://legislature.idaho.gov/statutesrules/idstat/" },
        selfHelp: { name: "Idaho Court Assistance", url: "https://courtselfhelp.idaho.gov/" },
        legalAid: [
            { name: "Idaho Legal Aid Services", url: "https://www.idaholegalaid.org/" },
            { name: "Idaho Volunteer Lawyers Program", url: "https://isb.idaho.gov/ilf/ivlp/" }
        ]
    },

    "IL": {
        name: "Illinois",
        judiciary: { name: "Illinois Courts", url: "https://www.illinoiscourts.gov/" },
        courtRules: { name: "Illinois Supreme Court Rules", url: "https://www.illinoiscourts.gov/supreme-court-rules" },
        statutes: { name: "Illinois Compiled Statutes", url: "https://www.ilga.gov/legislation/ilcs/ilcs.asp" },
        selfHelp: { name: "Illinois Legal Aid Online", url: "https://www.illinoislegalaid.org/" },
        legalAid: [
            { name: "Legal Aid Chicago", url: "https://www.legalaidchicago.org/" },
            { name: "Land of Lincoln Legal Aid", url: "https://lincolnlegal.org/" },
            { name: "Illinois LawHelp", url: "https://www.illinoislegalaid.org/" }
        ]
    },
    "IN": {
        name: "Indiana",
        judiciary: { name: "Indiana Courts", url: "https://www.in.gov/courts/" },
        courtRules: { name: "Indiana Rules of Court", url: "https://www.in.gov/courts/rules/" },
        statutes: { name: "Indiana Code", url: "http://iga.in.gov/laws/current/ic" },
        selfHelp: { name: "Indiana Self-Service Legal Center", url: "https://www.in.gov/courts/selfservice/" },
        legalAid: [
            { name: "Indiana Legal Services", url: "https://www.indianalegalservices.org/" },
            { name: "Indiana Bar Pro Bono", url: "https://www.inbar.org/page/ProBono" }
        ]
    },

    "IA": {
        name: "Iowa",
        judiciary: { name: "Iowa Judicial Branch", url: "https://www.iowacourts.gov/" },
        courtRules: { name: "Iowa Court Rules", url: "https://www.legis.iowa.gov/law/courtRules" },
        statutes: { name: "Iowa Code", url: "https://www.legis.iowa.gov/law/iowaCode" },
        selfHelp: { name: "Iowa Courts Self-Help", url: "https://www.iowacourts.gov/for-the-public/representing-yourself" },
        legalAid: [
            { name: "Iowa Legal Aid", url: "https://www.iowalegalaid.org/" },
            { name: "Iowa State Bar Lawyer Referral", url: "https://www.iowabar.org/page/FindALawyer" }
        ]
    },
    "KS": {
        name: "Kansas",
        judiciary: { name: "Kansas Judicial Branch", url: "https://www.kscourts.org/" },
        courtRules: { name: "Kansas Court Rules & Orders", url: "https://www.kscourts.org/rules-orders" },
        statutes: { name: "Kansas Laws & Statutes", url: "https://www.kslegislature.gov/b2025_26/laws/" },
        selfHelp: { name: "Kansas Self-Help Center", url: "https://www.kscourts.org/Public/Self-Help" },
        legalAid: [
            { name: "Kansas Legal Services", url: "https://www.kansaslegalservices.org/" },
            { name: "Kansas Bar Pro Bono", url: "https://www.ksbar.org/page/pro_bono" }
        ]
    },

    "KY": {
        name: "Kentucky",
        judiciary: { name: "Kentucky Court of Justice", url: "https://courts.ky.gov/" },
        courtRules: { name: "Kentucky Rules of Court", url: "https://courts.ky.gov/courts/supreme/Rules/Pages/default.aspx" },
        statutes: { name: "Kentucky Revised Statutes", url: "https://legislature.ky.gov/law/statutes/pages/default.aspx" },
        selfHelp: { name: "Kentucky Court Self-Help", url: "https://courts.ky.gov/resources/legalhelp/Pages/default.aspx" },
        legalAid: [
            { name: "Legal Aid of the Bluegrass", url: "https://www.lablaw.org/" },
            { name: "Kentucky Legal Aid", url: "https://www.klaid.org/" }
        ]
    },
    "LA": {
        name: "Louisiana",
        judiciary: { name: "Louisiana Supreme Court", url: "https://www.lasc.org/" },
        courtRules: { name: "Louisiana Court Rules", url: "https://www.lasc.org/rules" },
        statutes: { name: "Louisiana Laws", url: "https://www.legis.la.gov/legis/Laws.aspx" },
        selfHelp: { name: "Louisiana Self-Help Resource Center", url: "https://www.la2ndcircuit.com/self-help-resource-center" },
        legalAid: [
            { name: "Southeast Louisiana Legal Services", url: "https://www.slls.org/" },
            { name: "Acadiana Legal Service Corporation", url: "https://www.la-law.org/" }
        ]
    },

    "ME": {
        name: "Maine",
        judiciary: { name: "Maine Judicial Branch", url: "https://www.courts.maine.gov/" },
        courtRules: { name: "Maine Rules of Court", url: "https://www.courts.maine.gov/rules/index.html" },
        statutes: { name: "Maine Revised Statutes", url: "https://legislature.maine.gov/statutes/" },
        selfHelp: { name: "Maine Courts Self-Help", url: "https://www.courts.maine.gov/self-help/index.html" },
        legalAid: [
            { name: "Pine Tree Legal Assistance", url: "https://ptla.org/" },
            { name: "Volunteer Lawyers Project", url: "https://www.vlp.org/" }
        ]
    },
    "MD": {
        name: "Maryland",
        judiciary: { name: "Maryland Courts", url: "https://www.mdcourts.gov/" },
        courtRules: { name: "Maryland Rules", url: "https://www.mdcourts.gov/rules" },
        statutes: { name: "Maryland Code", url: "https://mgaleg.maryland.gov/mgawebsite/Laws/Statutes" },
        selfHelp: { name: "Maryland Courts Self-Help", url: "https://www.mdcourts.gov/selfhelp" },
        legalAid: [
            { name: "Maryland Legal Aid", url: "https://www.mdlab.org/" },
            { name: "Maryland Volunteer Lawyers Service", url: "https://mvlslaw.org/" },
            { name: "People's Law Library of Maryland", url: "https://www.peoples-law.org/" }
        ]
    },

    "MA": {
        name: "Massachusetts",
        judiciary: { name: "Massachusetts Court System", url: "https://www.mass.gov/courts" },
        courtRules: { name: "Massachusetts Court Rules", url: "https://www.mass.gov/lists/court-rules" },
        statutes: { name: "Massachusetts General Laws", url: "https://malegislature.gov/Laws/GeneralLaws" },
        selfHelp: { name: "Massachusetts Court Self-Help", url: "https://www.mass.gov/topics/courts-self-help" },
        legalAid: [
            { name: "Greater Boston Legal Services", url: "https://www.gbls.org/" },
            { name: "Massachusetts Legal Aid", url: "https://masslegalhelp.org/" }
        ]
    },
    "MI": {
        name: "Michigan",
        judiciary: { name: "Michigan Courts", url: "https://www.courts.michigan.gov/" },
        courtRules: { name: "Michigan Court Rules", url: "https://www.courts.michigan.gov/rules/" },
        statutes: { name: "Michigan Compiled Laws", url: "http://www.legislature.mi.gov/mileg.aspx?page=legislativeinfo" },
        selfHelp: { name: "Michigan Legal Help", url: "https://michiganlegalhelp.org/" },
        legalAid: [
            { name: "Michigan Legal Services", url: "https://www.milegalservices.org/" },
            { name: "Legal Aid of Western Michigan", url: "https://www.lawestmi.org/" }
        ]
    },

    "MN": {
        name: "Minnesota",
        judiciary: { name: "Minnesota Judicial Branch", url: "https://www.mncourts.gov/" },
        courtRules: { name: "Minnesota Court Rules", url: "https://www.mncourts.gov/CourtRules.aspx" },
        statutes: { name: "Minnesota Statutes", url: "https://www.revisor.mn.gov/statutes/" },
        selfHelp: { name: "Minnesota Self-Help Center", url: "https://www.mncourts.gov/Help-Topics.aspx" },
        legalAid: [
            { name: "Legal Aid State Support", url: "https://www.lawhelpmn.org/" },
            { name: "Mid-Minnesota Legal Aid", url: "https://mylegalaid.org/" }
        ]
    },
    "MS": {
        name: "Mississippi",
        judiciary: { name: "Mississippi Judiciary", url: "https://courts.ms.gov/" },
        courtRules: { name: "Mississippi Rules of Court", url: "https://courts.ms.gov/rules/rules.php" },
        statutes: { name: "Mississippi Code", url: "https://law.justia.com/codes/mississippi/" },
        selfHelp: { name: "Mississippi Access to Justice", url: "https://www.msbar.org/for-the-public/" },
        legalAid: [
            { name: "Mississippi Center for Legal Services", url: "https://www.mscenterforlegalservices.org/" },
            { name: "North Mississippi Rural Legal Services", url: "https://www.nmrls.com/" }
        ]
    },

    "MO": {
        name: "Missouri",
        judiciary: { name: "Missouri Courts", url: "https://www.courts.mo.gov/" },
        courtRules: { name: "Missouri Court Rules", url: "https://www.courts.mo.gov/courts/ClerkHandbooksP2RusijJoint.htm" },
        statutes: { name: "Missouri Revised Statutes", url: "https://revisor.mo.gov/main/HomeMain.aspx" },
        selfHelp: { name: "Missouri Self-Help Center", url: "https://www.courts.mo.gov/page.jsp?id=704" },
        legalAid: [
            { name: "Legal Services of Eastern Missouri", url: "https://www.lsem.org/" },
            { name: "Legal Aid of Western Missouri", url: "https://www.lawmo.org/" }
        ]
    },
    "MT": {
        name: "Montana",
        judiciary: { name: "Montana Judicial Branch", url: "https://courts.mt.gov/" },
        courtRules: { name: "Montana Rules of Court", url: "https://courts.mt.gov/courts/supreme/rules" },
        statutes: { name: "Montana Code Annotated", url: "https://leg.mt.gov/bills/mca/index.html" },
        selfHelp: { name: "Montana Self-Help Law Center", url: "https://courts.mt.gov/selfhelp" },
        legalAid: [
            { name: "Montana Legal Services Association", url: "https://www.mtlsa.org/" },
            { name: "State Bar of Montana Lawyer Referral", url: "https://www.montanabar.org/page/LawyerReferral" }
        ]
    },

    "NE": {
        name: "Nebraska",
        judiciary: { name: "Nebraska Judicial Branch", url: "https://supremecourt.nebraska.gov/" },
        courtRules: { name: "Nebraska Court Rules", url: "https://supremecourt.nebraska.gov/supreme-court-rules" },
        statutes: { name: "Nebraska Revised Statutes", url: "https://nebraskalegislature.gov/laws/laws.php" },
        selfHelp: { name: "Nebraska Self-Help", url: "https://supremecourt.nebraska.gov/self-help" },
        legalAid: [
            { name: "Legal Aid of Nebraska", url: "https://www.legalaidofnebraska.org/" },
            { name: "Nebraska State Bar Volunteer Lawyers", url: "https://www.nebar.com/page/vlp" }
        ]
    },
    "NV": {
        name: "Nevada",
        judiciary: { name: "Nevada Judiciary", url: "https://nvcourts.gov/" },
        courtRules: { name: "Nevada Rules of Court", url: "https://www.leg.state.nv.us/CourtRules/" },
        statutes: { name: "Nevada Revised Statutes", url: "https://www.leg.state.nv.us/NRS/" },
        selfHelp: { name: "Nevada Self-Help Center", url: "https://selfhelp.nvcourts.gov/" },
        legalAid: [
            { name: "Nevada Legal Services", url: "https://nlslaw.net/" },
            { name: "Legal Aid Center of Southern Nevada", url: "https://www.lacsn.org/" }
        ]
    },

    "NH": {
        name: "New Hampshire",
        judiciary: { name: "New Hampshire Judicial Branch", url: "https://www.courts.nh.gov/" },
        courtRules: { name: "NH Court Rules", url: "https://www.courts.nh.gov/resources/court-rules" },
        statutes: { name: "NH Revised Statutes", url: "http://www.gencourt.state.nh.us/rsa/html/indexes/default.html" },
        selfHelp: { name: "NH Court Self-Help", url: "https://www.courts.nh.gov/self-help" },
        legalAid: [
            { name: "NH Legal Assistance", url: "https://www.nhla.org/" },
            { name: "603 Legal Aid", url: "https://www.603legalaid.org/" }
        ]
    },
    "NJ": {
        name: "New Jersey",
        judiciary: { name: "New Jersey Courts", url: "https://www.njcourts.gov/" },
        courtRules: { name: "NJ Rules of Court", url: "https://www.njcourts.gov/attorneys/rules-of-court" },
        statutes: { name: "New Jersey Statutes", url: "https://lis.njleg.state.nj.us/nxt/gateway.dll?f=templates&fn=default.htm&vid=Publish:10.1048/Enu" },
        selfHelp: { name: "NJ Courts Self-Help", url: "https://www.njcourts.gov/self-help" },
        legalAid: [
            { name: "Legal Services of New Jersey", url: "https://www.lsnj.org/" },
            { name: "NJ LawHelp", url: "https://www.lsnjlaw.org/" }
        ]
    },

    "NM": {
        name: "New Mexico",
        judiciary: { name: "New Mexico Courts", url: "https://www.nmcourts.gov/" },
        courtRules: { name: "NM Rules of Court", url: "https://www.nmcourts.gov/court-rules/" },
        statutes: { name: "New Mexico Statutes", url: "https://nmonesource.com/nmos/nmsa/en/nav.do" },
        selfHelp: { name: "NM Courts Self-Help", url: "https://www.nmcourts.gov/self-help/" },
        legalAid: [
            { name: "New Mexico Legal Aid", url: "https://www.newmexicolegalaid.org/" },
            { name: "Law Access New Mexico", url: "https://www.lawaccess.org/" }
        ]
    },
    "NY": {
        name: "New York",
        judiciary: { name: "New York State Courts", url: "https://www.nycourts.gov/" },
        courtRules: { name: "NY Rules of Court", url: "https://www.nycourts.gov/rules/index.shtml" },
        statutes: { name: "New York State Laws", url: "https://www.nysenate.gov/legislation/laws/CONSOLIDATED" },
        selfHelp: { name: "NY Courts Self-Help", url: "https://www.nycourts.gov/courthelp/" },
        legalAid: [
            { name: "Legal Aid Society", url: "https://www.legalaidnyc.org/" },
            { name: "NY LawHelp", url: "https://www.lawhelpny.org/" },
            { name: "Legal Services NYC", url: "https://www.legalservicesnyc.org/" }
        ]
    },

    "NC": {
        name: "North Carolina",
        judiciary: { name: "North Carolina Judicial Branch", url: "https://www.nccourts.gov/" },
        courtRules: { name: "NC Rules of Court", url: "https://www.nccourts.gov/documents/rules" },
        statutes: { name: "NC General Statutes", url: "https://www.ncleg.gov/Laws/GeneralStatutes" },
        selfHelp: { name: "NC Courts Self-Help", url: "https://www.nccourts.gov/help" },
        legalAid: [
            { name: "Legal Aid of North Carolina", url: "https://www.legalaidnc.org/" },
            { name: "NC Pro Bono Resource Center", url: "https://www.ncprobono.org/" }
        ]
    },
    "ND": {
        name: "North Dakota",
        judiciary: { name: "North Dakota Courts", url: "https://www.ndcourts.gov/" },
        courtRules: { name: "ND Rules of Court", url: "https://www.ndcourts.gov/rules" },
        statutes: { name: "North Dakota Century Code", url: "https://www.ndlegis.gov/general-information/north-dakota-century-code" },
        selfHelp: { name: "ND Self-Help Center", url: "https://www.ndcourts.gov/legal-self-help" },
        legalAid: [
            { name: "Legal Services of North Dakota", url: "https://www.legalassist.org/" },
            { name: "ND Bar Lawyer Referral", url: "https://www.sband.org/page/lawyerreferral" }
        ]
    },

    "OH": {
        name: "Ohio",
        judiciary: { name: "Supreme Court of Ohio", url: "https://www.supremecourt.ohio.gov/" },
        courtRules: { name: "Ohio Rules of Court", url: "https://www.supremecourt.ohio.gov/rules/" },
        statutes: { name: "Ohio Revised Code", url: "https://codes.ohio.gov/ohio-revised-code" },
        selfHelp: { name: "Ohio Legal Help", url: "https://www.ohiolegalhelp.org/" },
        legalAid: [
            { name: "Legal Aid Society of Cleveland", url: "https://lasclev.org/" },
            { name: "Ohio State Legal Services", url: "https://www.oslsa.org/" }
        ]
    },
    "OK": {
        name: "Oklahoma",
        judiciary: { name: "Oklahoma State Courts", url: "https://www.oscn.net/" },
        courtRules: { name: "Oklahoma Court Rules", url: "https://www.oscn.net/applications/oscn/Index.asp?ftdb=STOKRU" },
        statutes: { name: "Oklahoma Statutes", url: "https://www.oscn.net/applications/oscn/Index.asp?ftdb=STOKST" },
        selfHelp: { name: "Oklahoma Law Help", url: "https://oklaw.org/" },
        legalAid: [
            { name: "Legal Aid Services of Oklahoma", url: "https://www.legalaidok.org/" },
            { name: "Oklahoma Indian Legal Services", url: "https://www.oilsinc.org/" }
        ]
    },

    "OR": {
        name: "Oregon",
        judiciary: { name: "Oregon Judicial Department", url: "https://www.courts.oregon.gov/" },
        courtRules: { name: "Oregon Rules of Court", url: "https://www.courts.oregon.gov/rules/Pages/default.aspx" },
        statutes: { name: "Oregon Revised Statutes", url: "https://www.oregonlegislature.gov/bills_laws/Pages/ORS.aspx" },
        selfHelp: { name: "Oregon Courts Self-Help", url: "https://www.courts.oregon.gov/self-help/Pages/default.aspx" },
        legalAid: [
            { name: "Oregon Law Center", url: "https://www.oregonlawcenter.org/" },
            { name: "Legal Aid Services of Oregon", url: "https://lasoregon.org/" },
            { name: "Oregon State Bar Lawyer Referral", url: "https://www.osbar.org/public/" }
        ]
    },
    "PA": {
        name: "Pennsylvania",
        judiciary: { name: "Unified Judicial System of PA", url: "https://www.pacourts.us/" },
        courtRules: { name: "Pennsylvania Rules of Court", url: "https://www.pacourts.us/courts/supreme-court/court-rules" },
        statutes: { name: "Pennsylvania Consolidated Statutes", url: "https://www.legis.state.pa.us/cfdocs/legis/LI/Public/cons_index.cfm" },
        selfHelp: { name: "PA Courts Self-Help", url: "https://www.pacourts.us/learn" },
        legalAid: [
            { name: "Pennsylvania Legal Aid Network", url: "https://palegalaid.net/" },
            { name: "Philadelphia Legal Assistance", url: "https://philalegal.org/" },
            { name: "PA LawHelp", url: "https://www.palawhelp.org/" }
        ]
    },

    "RI": {
        name: "Rhode Island",
        judiciary: { name: "Rhode Island Judiciary", url: "https://www.courts.ri.gov/" },
        courtRules: { name: "RI Rules of Court", url: "https://www.courts.ri.gov/Courts/SupremeCourt/Pages/Rules.aspx" },
        statutes: { name: "Rhode Island General Laws", url: "http://webserver.rilegislature.gov/Statutes/Statutes.html" },
        selfHelp: { name: "RI Courts Self-Help", url: "https://www.courts.ri.gov/PublicResources/Pages/Self-Help.aspx" },
        legalAid: [
            { name: "Rhode Island Legal Services", url: "https://www.rils.org/" },
            { name: "RI Bar Pro Bono", url: "https://www.ribar.com/For%20the%20Public/Lawyer%20Referral%20Service.aspx" }
        ]
    },
    "SC": {
        name: "South Carolina",
        judiciary: { name: "South Carolina Judicial Branch", url: "https://www.sccourts.org/" },
        courtRules: { name: "SC Court Rules", url: "https://www.sccourts.org/courtReg/" },
        statutes: { name: "South Carolina Code of Laws", url: "https://www.scstatehouse.gov/code/statmast.php" },
        selfHelp: { name: "SC Access to Justice", url: "https://www.sccourts.org/selfHelp/" },
        legalAid: [
            { name: "South Carolina Legal Services", url: "https://www.sclegal.org/" },
            { name: "SC Bar Pro Bono", url: "https://www.scbar.org/public/get-legal-help/" }
        ]
    },

    "SD": {
        name: "South Dakota",
        judiciary: { name: "South Dakota Unified Judicial System", url: "https://ujs.sd.gov/" },
        courtRules: { name: "SD Rules of Court", url: "https://ujs.sd.gov/Supreme_Court/Rules.aspx" },
        statutes: { name: "South Dakota Codified Laws", url: "https://sdlegislature.gov/Statutes/Codified_Laws" },
        selfHelp: { name: "SD Courts Self-Help", url: "https://ujs.sd.gov/Self_Help/" },
        legalAid: [
            { name: "East River Legal Services", url: "https://www.erlservices.org/" },
            { name: "Dakota Plains Legal Services", url: "https://www.dpls.org/" }
        ]
    },
    "TN": {
        name: "Tennessee",
        judiciary: { name: "Tennessee State Courts", url: "https://www.tncourts.gov/" },
        courtRules: { name: "Tennessee Rules of Court", url: "https://www.tncourts.gov/rules" },
        statutes: { name: "Tennessee Code", url: "https://www.lexisnexis.com/hottopics/tncode/" },
        selfHelp: { name: "Tennessee Self-Help Center", url: "https://www.tncourts.gov/programs/self-help-center" },
        legalAid: [
            { name: "Legal Aid Society of Middle Tennessee", url: "https://www.las.org/" },
            { name: "Tennessee Alliance for Legal Services", url: "https://www.tals.org/" }
        ]
    },

    "TX": {
        name: "Texas",
        judiciary: { name: "Texas Judicial Branch", url: "https://www.txcourts.gov/" },
        courtRules: { name: "Texas Rules of Court", url: "https://www.txcourts.gov/rules-forms/" },
        statutes: { name: "Texas Statutes", url: "https://statutes.capitol.texas.gov/" },
        selfHelp: { name: "Texas Law Help", url: "https://texaslawhelp.org/" },
        legalAid: [
            { name: "Texas RioGrande Legal Aid", url: "https://www.trla.org/" },
            { name: "Lone Star Legal Aid", url: "https://www.lonestarlegal.org/" },
            { name: "Legal Aid of NorthWest Texas", url: "https://lanwt.org/" }
        ]
    },
    "UT": {
        name: "Utah",
        judiciary: { name: "Utah State Courts", url: "https://www.utcourts.gov/" },
        courtRules: { name: "Utah Rules of Court", url: "https://www.utcourts.gov/rules/" },
        statutes: { name: "Utah Code", url: "https://le.utah.gov/xcode/code.html" },
        selfHelp: { name: "Utah Courts Self-Help", url: "https://www.utcourts.gov/selfhelp/" },
        legalAid: [
            { name: "Utah Legal Services", url: "https://www.utahlegalservices.org/" },
            { name: "Utah State Bar Pro Bono", url: "https://www.utahbar.org/public-services/" }
        ]
    },

    "VT": {
        name: "Vermont",
        judiciary: { name: "Vermont Judiciary", url: "https://www.vermontjudiciary.org/" },
        courtRules: { name: "Vermont Rules of Court", url: "https://www.vermontjudiciary.org/about-vermont-judiciary/rules-and-policies" },
        statutes: { name: "Vermont Statutes", url: "https://legislature.vermont.gov/statutes/" },
        selfHelp: { name: "Vermont Courts Self-Help", url: "https://www.vermontjudiciary.org/self-help" },
        legalAid: [
            { name: "Legal Services Vermont", url: "https://www.legalservicesvt.org/" },
            { name: "Vermont Bar Pro Bono", url: "https://www.vtbar.org/for-the-public/find-a-lawyer/" }
        ]
    },
    "VA": {
        name: "Virginia",
        judiciary: { name: "Virginia Judicial System", url: "https://www.vacourts.gov/" },
        courtRules: { name: "Virginia Rules of Court", url: "https://www.vacourts.gov/courts/scv/rulesofcourt.html" },
        statutes: { name: "Code of Virginia", url: "https://law.lis.virginia.gov/vacode/" },
        selfHelp: { name: "Virginia Self-Help", url: "https://selfhelp.vacourts.gov/" },
        legalAid: [
            { name: "Legal Aid Justice Center", url: "https://www.justice4all.org/" },
            { name: "Virginia Legal Aid Society", url: "https://www.vlas.org/" },
            { name: "Virginia LawHelp", url: "https://www.valegalaid.org/" }
        ]
    },

    "WA": {
        name: "Washington",
        judiciary: { name: "Washington Courts", url: "https://www.courts.wa.gov/" },
        courtRules: { name: "Washington Court Rules", url: "https://www.courts.wa.gov/court_rules/" },
        statutes: { name: "Revised Code of Washington", url: "https://apps.leg.wa.gov/rcw/" },
        selfHelp: { name: "Washington LawHelp", url: "https://www.washingtonlawhelp.org/" },
        legalAid: [
            { name: "Northwest Justice Project", url: "https://nwjustice.org/" },
            { name: "Columbia Legal Services", url: "https://columbialegal.org/" }
        ]
    },
    "WV": {
        name: "West Virginia",
        judiciary: { name: "West Virginia Judiciary", url: "https://www.courtswv.gov/" },
        courtRules: { name: "WV Rules of Court", url: "https://www.courtswv.gov/legal-community/court-rules.html" },
        statutes: { name: "West Virginia Code", url: "http://www.wvlegislature.gov/WVCODE/code.cfm" },
        selfHelp: { name: "WV Courts Self-Help", url: "https://www.courtswv.gov/public-resources/self-help.html" },
        legalAid: [
            { name: "Legal Aid of West Virginia", url: "https://legalaidwv.org/" },
            { name: "WV Senior Legal Aid", url: "https://www.seniorlegalaid.org/" }
        ]
    },

    "WI": {
        name: "Wisconsin",
        judiciary: { name: "Wisconsin Court System", url: "https://www.wicourts.gov/" },
        courtRules: { name: "Wisconsin Court Rules", url: "https://www.wicourts.gov/scrules/index.htm" },
        statutes: { name: "Wisconsin Statutes", url: "https://docs.legis.wisconsin.gov/statutes" },
        selfHelp: { name: "Wisconsin Self-Help", url: "https://www.wicourts.gov/services/public/selfhelp/index.htm" },
        legalAid: [
            { name: "Legal Action of Wisconsin", url: "https://www.legalaction.org/" },
            { name: "Wisconsin Judicare", url: "https://www.judicare.org/" }
        ]
    },
    "WY": {
        name: "Wyoming",
        judiciary: { name: "Wyoming Judicial Branch", url: "https://www.courts.state.wy.us/" },
        courtRules: { name: "Wyoming Court Rules", url: "https://www.courts.state.wy.us/court-rules/" },
        statutes: { name: "Wyoming Statutes", url: "https://wyoleg.gov/NXT/gateway.dll?f=templates&fn=default.htm" },
        selfHelp: { name: "Wyoming Self-Help Center", url: "https://www.courts.state.wy.us/self-help-center/" },
        legalAid: [
            { name: "Legal Aid of Wyoming", url: "https://www.lawyoming.org/" },
            { name: "Wyoming State Bar Lawyer Referral", url: "https://www.wyomingbar.org/for-the-public/hire-a-lawyer/" }
        ]
    },

    "DC": {
        name: "District of Columbia",
        judiciary: { name: "DC Courts", url: "https://www.dccourts.gov/" },
        courtRules: { name: "DC Court Rules", url: "https://www.dccourts.gov/court-rules" },
        statutes: { name: "DC Code", url: "https://code.dccouncil.gov/" },
        selfHelp: { name: "DC Courts Self-Help Center", url: "https://www.dccourts.gov/services/self-help-center" },
        legalAid: [
            { name: "Legal Aid Society of DC", url: "https://www.legalaiddc.org/" },
            { name: "DC Bar Pro Bono Center", url: "https://www.dcbar.org/pro-bono" }
        ]
    }
};
