const API_KEY = "AIzaSyBkCbrIopKUkeeSZ0mwghMH6_g226WLR0o";
const PLAYLIST_ID = "PLzTcs3XW84t3erU2kRFy_JwQloJBYdJSL";
let videos = [];
let currentIndex = 0;

// Lyrics mapped by videoId
const songs = [
  {
    title: "Channa Mereya - Ae Dil Hai Mushkil | Karan Johar | Ranbir | Anushka | Pritam | Arijit Singh",
    videoId: "bzSTpdcs-EI",
    lyrics: `Acha chalta hoon

Duaon mein yaad rakhna
Mere zikr ka zubaan pe swaad rakhna
<br>
Acha chalta hoon
Duaon mein yaad rakhna
Mere zikr ka zubaan pe swaad rakhna
<br>
Dil ke sandookon mein
Mere ache kaam rakhna
Chitthi taaron mein bhi
Mera tu salaam rakhna
<br>

Andhera tera maine le liya
Mera ujla sitaara tere naam kiya
<br>
Channa mereya mereya
Channa mereya mereya
Channa mereya mereya beliya
O piya..
<br>
Channa mereya mereya
Channa mereya mereya
Channa mereya mereya beliya
O piya..
<br>

O piyaa.. piya.. piya..
O Piyaa.. Oohh..

<br>
Mm.. mehfil me teri hum naa reh jo
Gham toh nahi hai, gham toh nahi hai
Qisse humare nazdeekiyon ke
Kam to nahi hai, kam to nahi hai
Kitni dafaa subah ko meri
Tere aangan mein baithe shaam kiya

<br>
Channa mereya mereya
Channa mereya mereya
Channa mereya mereya beliya
O piya..
<br>
Channa mereya mereya
Channa mereya mereya
Channa mereya mereya beliya
O piyaaaaaaaaa..
<br>

O Piyaa.. piyaa..
<br>
(Channa mereya mereya
Channa mereya mereya
Channa mereya mereya o piya
<br>
Channa mereya mereya
Channa mereya mereya
Channa mereya mereya beliya
O piya..
<br>
Tere rukh se apna raasta mod ke chala
Chandan hoon main
Apni khushboo chodke chala
<br>
Mann ki maya rakhke tere takiye tale
<br>
(Channa mereya mereya
Channa mereya mereya
Channa mereya mereya)

`
  },
  {
    title: "O Bedardeya (Film Version) Tu Jhoothi Main Makkaar | Ranbir, Shraddha | Pritam, Arijit S, Amitabh B",
    videoId: "npwn6KVMtFI",
    lyrics: `Pyaar jhootha tha, jataya hi kyun?<br>
Pyaar jhootha tha, jataya hi kyun?<br>
Aise jaana tha toh aaya hi kyun?<br>
Aise jaana tha toh aaya hi kyun?<br>
Ae sitamgar, tu zara aur sitam kar de, aa<br>
Aaja, bewajah sa yeh rishta khatam kar de, aa<br>
Oh, bedardeya, yaar bedardeya<br>
Oh, bedardeya, yaar bedardeya<br>
Oh, bedardeya, yaar bedardeya<br>
Oh, bedardeya, yaar bedardeya, oh<br>
Dard-e-dil ke bina mehfil hi kya<br>
Dard-e-dil ke bina mehfil hi kya<br>
Jo na toota kabhi woh dil hi kya<br>
Jo na toota kabhi woh dil hi kya<br>
Hai mera haal bura, aur bura kar de, aa
Mere zakhmon ko zara aur hara kar de, aa
Oh, bedardeya, yaar bedardeya
Oh, bedardeya, yaar bedardeya
Oh, bedardeya, yaar bedardeya
Oh, bedardeya, yaar bedardeya, oh
Kyun, saaiyaan, maahi mera saudaaiya?
Dhoop loot ke jo de gaya parchhaaiyaan
Umm, badle wafa ke maine paayi kyun tabaahiyaan?
Rabba, jiske dil mein tu ishq duniya-bhar ka deta hai
Usi ke dilbar ko aakhir kyun dil patthar ka deta hai?
Hum mein jo tha woh raha kyun nahin?
Hum mein jo tha woh raha kyun nahin?
Dil mein tha kuch toh kaha kyun nahin?
Dil mein tha kuch toh kaha kyun nahin?
Tha kabhi pyaar toh insaaf mera kar de, aa
Ya kabhi tha hi nahin, saaf mana kar de, aa
Oh, bedardeya, yaar bedardeya
Oh, bedardeya, yaar bedardeya
Oh, bedardeya, yaar bedardeya
Oh, bedardeya, yaar bedardeya
Oh, bedardeya, yaar bedardeya
Oh, bedardeya, yaar bedardeya
Oh, bedardeya, yaar bedardeya
Oh, bedardeya, itna rehem kar de, aa
Oh, bedardeya, bedardeya
Oh, yaar bedardeya, bedardeya, bedardeya
Yaar bedardeya, bedardeya, yaar bedardeya, oh
Kaisa banjar seena hoga
Ismein jab tu hi na hoga
Tujh bin jee toh loonga
Lekin jeena kya woh jeena hoga?

`
  },
  {
    title: "Hamari Adhuri Kahani - Lyrical Song | Arjit Singh | Emraan Hashmi, Vidya Balan | Jeet Gannguli",
    videoId: "sVRwZEkXepg",
    lyrics: `Paas aaye..
Dooriyaan phir bhi kam
Na huyi.. Ek adhuri
Si humari kahaani rahi

Aasmaan ko zameen
Yeh zaroori nahi
Jaa mile.. ja mile..


Ishq saccha wahi
Jisko milti nahi
Manzilein manzilein..

Rang thhe noor tha
Jab kareeb tu tha
Ek jannat sa tha
Yeh jahaan...

Waqt ke ret pe
Kuch mere naam sa
Likh ke chhod gaya
Tu kahaan..

Hamari adhuri kahani
Hamari adhuri kahani..
Hamari adhuri kahani
Hamari adhuri kahani..


Khushbuon se teri
Yunhi takra gaye
Chalte chalte
Dekho na hum kahaan aa gaye

Jannatein agar yaheen
Tu dikhe kyun nahin
Chaand sooraj sabhi, hai yahaan
Intezar tera, sadiyon se kar raha
Pyasi baithi hai kab, se yahaan


Hamari adhuri kahani
Hamari adhuri kahani..
Hamari adhuri kahani
Hamari adhuri kahani..


Pyaas ka yeh safar
Khatam ho jayega
Kuch adhura sa joh tha
Pura ho jayega

Jhuk gaya aasmaan
Mil gaye do jahaan
Har taraf hai milan ka sama
Doliya hain saji
Khushbuein har kaheen

Padhne aaya Khuda khud yahaan

Hamari adhuri kahani
Hamari adhuri kahani..
Hamari adhuri kahani
Hamari adhuri kahani..
`
  },
  {
    title: "Full Video: Raanjhan | Do Patti | Kriti Sanon, Shaheer Sheikh | Parampara Tandon | Sachet-Paramparas",
    videoId: "lBvbNxiVmZA",
    lyrics: `Dhadkan tak tainu rasta diya, sajna
Tu taan saare dil 'te hi kabza karke beh gaya
Ab na Heer kade dil da yaqeen kar paayegi
Tu taan ishq hi thug baitha, sajna
Ja, Raanjhan, Raanjhan, Raanjhan
Tu bhi kya yaad rakhega
Ja, Heer ne tainu chhod diya
Ja, Raanjhan, Raanjhan, Raanjhan
Tu bhi kya yaad rakhega
Ja, Heer ne tainu chhod diya
Aise na Jao, piya, aise na Jao, piya
Judi hain raahein saari tujhse meri
Aise na Jao, piya, aise na Jao, piya
Judi hain raahein saari tujhse meri
Ja, Raanjhan, Raanjhan, Raanjhan
Tu bhi kya yaad rakhega
Ja, Heer ne tainu chhod diya
Lakh samjhaaun main taan
Dil samajh nahin paata
Maange teri khairiyaan
Sona tha tera ve jhootha
Rang do dinon mein chhoota
Kaise bhulaaun, bairiya?
Ja, Raanjhan, Raanjhan, Raanjhan
Tu bhi kya yaad rakhega
Ja, Heer ne tainu chhod diya
Ja, Raanjhan, Raanjhan, Raanjhan
Tu bhi kya yaad rakhega
Ja, Heer ne tainu chhod diya
Har koi yaar ni hunda, ve bulleya
Har koi yaar ni hunda
Kade kalleya beh ke tu soch te sahi
Har koi baanh pakad ke taal se taal nahin milaanda
Kade kalleya uth ke nach te sahi
Aise na Jao, piya, aise na Jao, piya
Judi hain raahein saari tujhse meri
Aise na Jao, piya, aise na Jao, piya
Judi hain raahein saari tujhse meri
`
  },
  {
    title: "Sanam Teri Kasam, (Lyrical Video) - Harshvardhan, Mawra | Ankit Tiwari | Palak M | Himesh Reshammiya",
    videoId: "kKljXVVkgS4",
    lyrics: `Betahasha dil ne
Tujhko hi chaaha hai
Har duaa mein maine
Tujhko hi maanga hai
Tera jaana jaise koi baddua
Tera jaana jaise koi baddua
Door jaaoge jo tum
Mar jaayenge hum
Sanam teri kasam o..
Sanam teri kasam o..
Sanam teri kasam..

Tumhe dekhte hi aankhen ho jaati nam

Sanam teri kasam o..
Sanam teri kasam o..
Sanam teri kasam..


Huaa ye kya hashar mera
Judaa huaa sabar mera
Main tere bin ek lamha
Kyun kabhi naa jiya
Raat bhar ashqo ne tujhko pukara hai
Har dua main maine tujhko hi maanga hai
Tera jaana jaise koi baddua
Door jaaoge jo tum
Mar jaayenge hum
Sanam teri kasam o..
Sanam teri kasam o..
Sanam teri kasam..

Tumhe dekhte hi aankhen ho jaati nam

Sanam teri kasam o..
Sanam teri kasam o..
Sanam teri kasam..


Nasha tera dil ko lagaa
Dena nahi mujhko dagaa
Main teri aadat ka maara
Hai kya meri khataa
Tere bin naamumkin
Apna guzaara hai
Har duaa mein maine
Tujhko hi maanga hai
Tera jaana jaise koi baddua
Door jaaoge jo tum
Mar jaayenge hum
Sanam teri kasam o..
Sanam teri kasam o..
Sanam teri kasam..

Tumhe dekhte hi aakhen ho jaati nam`
  },
  {
    title: "Tune Jo Na Kaha Song | New York | John Abraham, Katrina Kaif, Neil Nitin M | Mohit Chauhan | Pritam",
    videoId: "dTu5dTEzVM4",
    lyrics: `Tune jo naa kahaa main vo sunta raha
Khwaah-makhaah, bevajaah khwaab bunata rahaa
Jane kiski hamen lag gai he nazar
Is shahar main naa apana thikaana rahaa
Dur chahat se main apni chalata rahaa
Khwaah-makhaah, bevajaah khwaab bunata rahaa
Dard pehle se he zyaada
Khud se phir ye kiya vaada
Khamosh nazaren rahen bezubaan
Baton main pehle si baaten hai
Bolo to lab thartharaate hai
Raaj ye dil kaa naa ho bayaan
Ho gaya ki asar koyi hum pe nahin
Ham safar main to hai, hamasafar he nahin
Dur jaataa rahaa, paas aata rahaa
Khwaah-makhaah, bevajaah khwaab bunata rahaa
Dur chahat se main apni chalata rahaa
Bujh gai aag thi, daag jalataa rahaa
`
  },
  {
    title: "Kabira Full Song Yeh Jawaani Hai Deewani | Pritam | Ranbir Kapoor, Deepika Padukone",
    videoId: "jHNNMj5bNQw",
    lyrics: `Kaisi Teri Khudgarzi

Na Dhoop Chune Na Chhaaon

Kaisi Teri Khudgarzi

Kisi Thor Tike Na Paaon


Ban Liya Apna Paigambar

Tar Liya Tu Saat Samandar

Phir Bhi Sookha Mann Ke Andar

Kyun Reh Gaya


Re Kabira Maan Jaa

Re Faqeera Maan Jaa

Aaja Tujhko Pukaare Teri Parchhaaiyan

Re Kabira Maan Ja

Re Faqeera Maan Ja

Kaisa Tu Hai Nirmohi Kaisa Harjaaiya


Tooti Chaarpaai Wohi

Thandi Purvaai Rasta Dekhe

Doodhon Ki Malaai Wohi

Mitti Ki Suraahi Rasta Dekhe..



Kaisi Teri Khudgarzi

Lab Namak Rame Na Misri

Kaisi Teri Khudgarzi

Tujhe Preet Purani Bisri..

Mast Maula, Mast Kalander

Tu Hawa Ka Ek Bavandar

Bujh Ke Yun Andar Hi Andar

Kyun Reh Gaya..



Re Kabira Maan Jaa

Re Faqeera Maan Jaa

Aaja Tujhko Pukaare Teri Parchhaaiyan

Re Kabira Maan Ja

Re Faqeera Maan Ja

Kaisa Tu Hai Nirmohi Kaisa Harjaaiya...

`
  },
  {
    title: "Anuv Jain - HUSN (Official Video)",
    videoId: "gJLVTKhTnog",
    lyrics: `Haan, haan


Dekho, dekho, kaisi baatein yahaan ki
Hain saath par hain saath naa bhi
Kya itni aasaan hain?
Dekho, dekho, jaise mere iraade
Vaise kahan tere yahaan the
Haan, kitni nadaan main


Mere husn ke ilaawa kabhi dil bhi maang lo naa
Haaye, pal mein main pighal jaaun, haan
Abh aisa naa karo ki dil jud naa paaye vaapis
Teri baaton se bikhar jaaun, haan

Maana zamana hai deewana
Isiliye tune naa jaana
Tere liye main kaafi hun
Dekho, dekho, yeh zamaane se thak kar
Aate ho kyun masoom ban kar?
Tere liye main kya hi hun? (Haan)


Phir aate kyun yahaan karne aankhon mein ho baarish?
Abh aaye toh theher jaao na
Aur puchcho naa zara merе din ke baare mein bhi
Bas itnе mein sambhal jaaun, haan
See upcoming pop shows
Get tickets for your favorite artists
You might also like
Ram Siya Ram
Sachet Tandon, Parampara Tandon & Manoj Muntashir
CARNIVAL
¥$, Kanye West & Ty Dolla $ign & Rich The Kid
The Tortured Poets Department
Taylor Swift
[Post-Chorus]
Haan, ek din kabhi koi
Jab bhi padhe kahani teri
Lagta mujhe mere naam ka
Zikr kahi bhi hoga nahi


Haan, main yahin
Meri yeh aankhon mein, aankhon mein toh dekho
Dekho, yeh dil ka haal kya
Honthon se hota na bayaan
Meri yeh aankhon mein, aankhon mein toh dekho
Kaisa naseeb hai mera
Milke bhi naa mujhe mila
Meri yeh aankhon mein, aankhon mein toh dekho
Teri adhoori si wafa
Maangu, main maangu aur naa
Meri yeh aankhon mein, aankhon mein toh dekho


Dekho, dekho, kaisi kheenchi lakeerein
Chahe bhi dil toh bhi naa jeete
Main iss daud mein nahin
Dekho, dekho, kaisi baatein yahaan ki
Baatein yahin dekhun jahan bhi
Main iss daur se nahi`
  },
  {
    title: "Bekhayali Full Song | Kabir Singh | Shahid K,Kiara A|Sandeep Reddy Vanga | Sachet-Parampara | Irshad",
    videoId: "VOLKJJvfAbg",
    lyrics: `Hmm...

Bekhayali mein bhi tera hi khayal aaye

Kyun bichhadna hai zaroori ye sawaal aaye

Teri nazdeekiyon ki khushi behisaab thi

Hisse mein faasle bhi tere bemisaal aaye

Main jo tumse door hoon

Kyun door main rahoon

Tera guroor hoon

Aa tu faasla mita

Tu khwaab sa mila

Rs 1 Trial
Kyun khwaab tod doon

Bekhayali mein bhi tera hi khayal aaye

Kyun judaai de gaya tu ye sawaal aaye

Thoda sa main khafa ho gaya apne aap se

Thoda sa tujhpe bhi bewajah hi malaal aaye

Hai ye tadpan, hai ye uljhan

Kaise jee loon bina tere

Meri ab sab se hai ann ban

Bante kyun ye Khuda mere

Hmm...

Ye jo log baag hain

Jungle ki aag hain

Kyun aag mein jalun

Ye nakaam pyaar mein

Khush hai yeh haar mein

Inn jaisa kyun banun

Raatein dengi bata

Neendon mein teri hi baat hai

Bhoolun kaise tujhe

Tu toh khayalon mein saath hai

Bekhayali mein bhi tera hi khayal aaye

Kyun bichhadna hai zaroori ye sawaal aaye

Nazar gira de har ik manzar

Ret ki tarah bikhar raha hai

Dard tumhara badan mein mere

Zeher ki tarah utar raha hai

Nazar gira de har ik manzar

Ret ki tarah bikhar raha hai

Dard tumhara badan mein mere

Zeher ki tarah utar raha hai

Aa zamaane aazma le roothta nahi

Faaslon se hosla ye tootta nahi

Naa hai woh bewafa, aur na main hoon bewafa

Woh meri aadaton ki tarah chhootta nahi`
  },
  {
    title: "Maana Ke Hum Yaar Nahin | Duet | Full Song | Meri Pyaari Bindu | Ayushmann, Parineeti | Sonu Nigam",
    videoId: "D9N7qAyLofE",
    lyrics: `Maana ke hum yaar nahin
Lo tay hai ke pyaar nahin (x2)

Phir bhi nazrein na tum milaana
Dil ka aitbaar nahi
Maana ke hum yaar nahi…

Raaste mein jo milo toh
Haath milaane ruk jaana

Ho…
Saath mein koi ho tumhare
Door se hi tum muskaana

Lekin muskaan ho aisi
Ki jisme ikraar nahi (x2)

Nazron se na karna tum bayaan
Woh jis’se inkaar nahi
Maana ke hum yaar nahi…

Phool jo band hai panno mein
Tum usko dhool bana dena

Baat chhide jo meri kahin
Tum usko bhool bataa dena

Lekin wo bhool ho aisi
Jis’se bezaar nahin (x2)

Tu jo soye toh meri tarah
Ik pal ko bhi karaar nahin
Maana ki hum yaar nahi…

Rs 1 Trial
Kisi daraaz ke kone mein
Teri tasveer mili hai
Phir wohi kaanton ka safar
Wahi phoolon ki gali
Wahi phoolon ki gali

`
  },
  {
    title: "'Tujhe Bhula Diya (Full Song) Anjaana Anjaani | Ranbir Kapoor, Priyanka Chopra",
    videoId: "-Hb2DeHvvEg",
    lyrics: `Naina lageeyan baarishan
Te sukke sukke sapne vi pijj gaye
Naina lageeyan baarishan
Rove palkein de kone vich neendh meri
Naina laggeyan baarishan
Hanju digde ne chot lage dil te
Naina laggeyan baarishan
Rut birha de badlan di chaa gayi
Kaali kaali khaali raaton se
Hone lagi hai dosti
Khoya khoya inn raahon mein
Ab mera kuch bhi nahi
Har pal har lamha
Main kaise sehta hoon
Har pal har lamha
Main khudh se ye kehta rehta hoon
Tujhe bhula diya oh
Tujhe bhula diya oh
Tujhe bhula diya oh
Phir kyun teri yaadon ne
Mujhe rula diya oh
Mujhe rula diya
Teri yaadon mein likhe jo lafz dete hai sunayi
Beetay lamhe poochte hai kyun hue aise judaa
Khuda, khuda mila jo ye faasla hai
Khuda tera hi ye faisla hai
Khuda hona tha woh ho gaya
Jo tune tha likha
Kaali kaali khaali raaton se
Hone lagi hai dosti
Khoya khoya inn raahon mein
Ab mera kuch bhi nahi
Har pal har lamha
Main kaise sehta hoon
Har pal har lamha
Main khudh se ye kehta rehta hoon
Tujhe bhula diya
Tujhe bhula diya
Tujhe bhula diya
Phir kyun teri yaadon ne
Mujhe rula diya
Mujhe rula diya
Naina lageeyan baarishan
Te sukke sukke sapne vi pijj gaye
Naina lageeyan baarishan
Rut birha de badlan di cha gayi
Do pal tujhse juda tha
Aise phir raasta muda tha
Tujhse mein khone laga
Juda jaise hone laga
Mujhse kuch mera
Tu hi meri liye ab kar dua
Tu hi iss dard se kar de juda
Tera hoke tera jo main na raha
Main yeh khud se kehta hoon
Tujhe bhula diya oh
Tujhe bhula diya oh
Tujhe bhula diya oh
Phir kyun teri yaadon ne
Mujhe rula diya oh
Mujhe rula diya`
  },
  {
    title: "Roke Na Ruke Naina Lyrical Video | Arijit Singh | Varun, Alia | Amaal Mallik Badrinath Ki Dulhania",
    videoId: "HyLCgkQtluw",
    lyrics: `Too jo nazaron ke saamane kal hoga nahin
Tujhko dekhe bin maar na jayoon kahin<br>
Too jo nazaron ke saamane kal hoga nahin
Tujhko dekhe bin maar na jayoon kahin<br>
Tujko bhool jaaoon kaise?
Maane na, manaoon kaise?<br>
Tu bata
Roke na ruke naina<br>
Teri ore hai inhen to rahanaa
Roke na ruke naina<br>
Katata hoon lakhon lamhen, katate nahin hain
Sae teri yaadon ke hatate nahin hain
<br>
Katata hoon lakhon lamhen, katate nahin hain
Sae teri yaadon ke hatate nahin hain<br>
Sukh gaaye hai aansu teri judaayi ke
Paalkon se phir bhi badal, chhat te nahi hai<br>
Khudko main hasaoon
Maane na, manaoon kaise?<br>
Tu bata
Roke na ruke naina<br>
Teri ore hai inhen to rahanaa
Roke na ruke naina<br>
Haato ki laakire do milti jaha hai
Jisko pata hai bata de, jagah woh kahan hai<br>
Haato ki laakire do milti jaha hai
Jisko pata hai bata de, jagah woh kahan hai<br>
Ishq mein jaane kaisi yeh bebasi hai
Dhadkano se milkar bhi dil tanha hai<br>
Doori main mitaoon kaise?
Maane na, manaoon kaise?<br>
Tu bata
Roke na ruke naina<br>
Teri ore hai inhen to rahanaa
Roke na ruke naina`
  },
  {
    title: "Phir Le Aya Dil - Video Edit - Barfi|Pritam|Arijit|Ranbir|Priyanka|Ileana D'Cruz",
    videoId: "k6BnSIs3XUQ",
    lyrics: `Fir lay aayaa dil majaboor, kiya kijie?
Fir lay aayaa dil majaboor, kiya kijie?<br>
Raas na aayaa rahanaa daur, kiya kijie?
Dil kah raha use mukammal kar bhi aao<br>
Wo jo adhoori si baat baaqi hai
Wo jo adhoori si yaad baaqi hai<br>
Wo jo adhoori si yaad baaqi hai
Karte hain hum aaj kabuul, kiya kijie<br>
Ho gai thi jo hum se bhool, kiya kijie
Karte hain hum aaj kabuul, kiya kijie<br>
Ho gai thi jo hum se bhool, kiya kijie
Dil kah raha hai use messara kar bhi aao<br>
Wo jo dabi si aas baaqi hai
Wo jo dabi si aanch baaqi hai<br>
Wo jo dabi si aanch baaqi hai
Wo jo dabi si aanch baaqi hai<br>
Kismat ko hai ye manzoor, kiya kijie
Milte rahiin hum ba dastuur, kiya kijie<br>
Kismat ko hai ye manzoor, kiya kijie
Milte rahiin hum ba dastuur, kiya kijie<br>
Dil kah raha use musalasal kar bhi aao
Wo jo ruki si raah baaqi hai<br>
Wo jo ruki si chaah baaqi hai
Wo jo ruki si chaah baaqi hai<br>
Wo jo ruki si chaah baaqi hai
Haai, haai`
  },
  {
    title: "Arjun Kanungo, Momina Mustehsan - Aaya Na Tu | Kunaal Vermaa",
    videoId: "PHULePbksEU",
    lyrics: `um kabhi naa kahoge
Kyun naa ham hi ye bol de
<br>
Ho kahan ye bataao
Ham vahaan chal ke aa jaaenge
<br>
Bhiige-bhiige mausam khile the jahaan
Tere mere raste mili the jahaan
<br>
Bahon main teri din dhale the jahaan
Aa gaya main, wo-o-o-o-o...
<br>
Magar aayaa naa tu
Aayaa naa tu
<br>
Aayaa naa tu
Magar aayaa naa tu
<br>
Aayaa naa tu
Aayaa naa tu
<br>
Baithe-baithe sochuun kabhi main tuje
Ankho ko meri tu kahin naa dikhe
<br>
Aise main main awaz don to kise
Hoon yaheen main wo-o-o-o-o...
<br>
Magar aayaa naa tu
Aayaa naa tu
<br>
Aayaa naa tu
Magar aayaa naa tu
<br>
Aayaa naa tu
Aayaa naa tu
<br>
Sochaa tha agar main miloongi tuje
Mere dil kii baaten kahoongi tuje
<br>
Shaayad tu badi dur he ja chukaa
Main akeli rah gayi, naa jane tu kahan kho gaya
<br>
Jate-jate tu mud ke phir dekh le
Dil kahata he phir ek dfa dhund le
<br>
Aegi kabhi wo yaheen laut ke
Hoon yaheen main ho-o-o-o-o...
<br>
Magar aayaa naa tu
Aayaa naa tu
<br>
Aayaa naa tu
Magar aayaa naa tu
<br>
Aayaa naa tu
Aayaa naa tu
<br>
Magar aayaa naa tu
Aayaa naa tu
<br>
Aayaa naa tu
Magar aayaa naa tu
<br>
Aayaa naa tu
Aayaa naa tu`
  },
  {
  title: "Aditya Rikhari - Paaro (Official Video)",
  videoId: "DxsDekHDKXo",
  lyrics:  `Paro, meri paro
Ishaaron-ishaaron mein baath samajh lenaa
Dil ke tukade hazaaron
<br>
Bikarane se pehle aaj pakad lenaa
Ke sharaaben khatam, die saare zaium tere bhar naa sake, ਸੋਹਣਿਆ
<br>
Ho naa raatein khatam, ke sula de, sanam, muje banhon mein mera
Ek jaan gayi, ek jaatee nahin, ek aur sitam naa kar
<br>
Jise paanaa tha, use kho baithe, ye kaafee nahin hai kya?
Ke ab kuch hosh nahin hai, too mujko pilaa degi kya?
<br>
Main pee kar jo bhee kahoonga, too sabah bhula degi kya?
Too banhon mein rakh le do pal, phir chaahe door hataa de
<br>
Main god mein rakh loon agar sar, too mujko sula degi kya?
Jaatee nahin teri yaaden, qasam se, ke dil ka bharam hai too
<br>
Baaqee nahin ab koyi sharam, jaanaa, ek dharam hai too
Jo kehtee thi, mat piyo naa, meri jaan, zahar hai ye
<br>
Use dekhtaa hoon koyi gair chhue ab, aur zahar kya piyun?`

  }

];



async function fetchPlaylistItems() {
  const res = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${PLAYLIST_ID}&key=${API_KEY}`);
  const data = await res.json();
  videos = data.items.map(item => ({
    title: item.snippet.title,
    videoId: item.snippet.resourceId.videoId
  }));
  displaySongList();
  loadSong(currentIndex);
}

function displaySongList() {
  const songListDiv = document.getElementById("song-list");
  songListDiv.innerHTML = "";
  videos.forEach((video, index) => {
    const btn = document.createElement("button");
    btn.textContent = video.title;
    btn.onclick = () => {
      currentIndex = index;
      loadSong(index);
    };
    songListDiv.appendChild(btn);
  });
}

function loadSong(index) {
  const video = videos[index];
  document.getElementById("player").src = `https://www.youtube.com/embed/${video.videoId}?autoplay=1`;
  document.getElementById("song-title").textContent = video.title;

  const songWithLyrics = songs.find(song => song.videoId === video.videoId);
const lyrics = songWithLyrics ? songWithLyrics.lyrics : "Lyrics not available for this song.";
document.getElementById("lyricsBox").innerHTML = lyrics;

}

function playSong() {
  loadSong(currentIndex);
}

function nextSong() {
  currentIndex = (currentIndex + 1) % videos.length;
  loadSong(currentIndex);
}

function prevSong() {
  currentIndex = (currentIndex - 1 + videos.length) % videos.length;
  loadSong(currentIndex);
}

fetchPlaylistItems();
function filterSongs() {
  const input = document.getElementById("searchBar").value.toLowerCase();
  const songs = document.getElementById("song-list").getElementsByTagName("button");

  for (let i = 0; i < songs.length; i++) {
    const songTitle = songs[i].innerText.toLowerCase();
    if (songTitle.includes(input)) {
      songs[i].style.display = "";
    } else {
      songs[i].style.display = "none";
    }
  }
}
