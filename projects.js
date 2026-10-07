/* ============================================================
   THE CONNECTED SET — SITE DATA & COPY (V2)
   ------------------------------------------------------------
   Single source of truth: projects, categories, intro copy,
   the ABOUT US landing page and the AI page.

   ADD A NEW PROJECT: copy a block in PROJECTS, fill in title,
   client, year, date (number, higher = newer), description,
   image, tags. tags: "television","youtubeandsocial",
   "linkedinvideo","education","brandedcontent","ai".
   Put images in assets/ and point image to "assets/file.jpg",
   or leave a /media/... path to load from the live site for now.
   ============================================================ */

const IMAGE_BASE = "https://theconnectedset.com"; // TODO go-live: set to "" and save images locally

const PROJECTS = [
  { title: "Live Lessons", client: "BBC Bitesize for Teachers / CBBC", year: "2022", date: 20221223,
    description: "A three season RTS NW Award-winning longform educational series for the BBC. We took classroom learning on the road, delivering half-hour interactive live programmes from culturally significant locations across the UK to bring the primary curriculum to life. Streamed live on BBC iPlayer, BBC Bitesize for Teachers and broadcast on CBBC.",
    image: "assets/projects/240117_WINNER_Live_Lessons_RTS_Award_Website_Asset_1.jpg", tags: ["television", "education"] },

  { title: "Don't @ Me Babes", client: "E4", year: "2024", date: 20240117,
    description: "TikTok sensation Chezablonde fronts a digital chat show for E4, developed through the E4 Academy to feel truly authentic to her and her audience. Cheza pulls deep secrets from guests like Lottie Moss and Ella Thomas, with games built from her own socials.",
    image: "assets/projects/Dont__Me_Babes_Option_2.jpg", tags: ["youtubeandsocial"] },

  { title: "Homewards", client: "The Royal Foundation", year: "2024", date: 20240117,
    description: "The hero launch film for Homewards, a multi-year campaign by HRH Prince William and The Royal Foundation to end homelessness across the UK. We had the privilege of filming with Prince William and campaign ambassadors.",
    image: "assets/projects/Homewards.jpg", tags: ["youtubeandsocial"] },

  { title: "Unreal! with Olivia Neill", client: "BBC Three", year: "2023", date: 20230531,
    description: "A documentary for BBC Three and BBC Northern Ireland. Belfast-born social star Olivia Neill, with a digital reach of over three million, investigates the most 'unreal' life choices trending among her generation, exploring whether you can find true love dating in the Metaverse.",
    image: "assets/projects/OLIVIA_NEILL_THUMBNAIL_2.jpg", tags: ["television"] },

  { title: "Mashed", client: "YouTube / Snapchat Discover", year: "2014–25", date: 20251231,
    description: "With 8 million fans across multiple platforms, Mashed is a social-first brand featuring 100% fresh and funny animations for switched-on, game-loving 16–34s. New clips drop regularly on YouTube, Snapchat, TikTok and FAST. Mashed is the winner of 4 TellyCast Digital Awards and a Global Entertainment Marketing Academy of Arts & Sciences award for its branded content. In 2025 Mashed was spun into a new company, Spud Gun Studios, based in Bath.",
    link: { label: "spudgunstudios.com", url: "https://spudgunstudios.com" },
    image: "assets/projects/Mashed.jpg", tags: ["youtubeandsocial"] },

  { title: "What If? with Munya Chawawa", client: "E4", year: "2021", date: 20210120,
    description: "A three-episode shortform series for E4's social channels. Breakthrough comic Munya Chawawa imagines what would really happen if big hypothetical situations came to pass, combining gags, sketches and graphics in fast-paced, topical episodes.",
    image: "assets/projects/WhatIf_E01_Alcohol_THUMBNAIL.jpg", tags: ["youtubeandsocial"] },

  { title: "Moodboosters", client: "BBC", year: "2022", date: 20221223,
    description: "A collection of 50 films shot on greenscreen and set within animated worlds, with famous faces delivering fun, participation-based videos that help primary-aged children manage their feelings and build emotional and social skills. Featuring Oti Mabuse, Ade Adepitan MBE, Dr Ranj and more.",
    image: "assets/projects/BBC_Moodboosters_1.jpg", tags: ["education"] },

  { title: "The Fake Podcast Show", client: "Channel 4", year: "2021", date: 20211223,
    description: "A prank format for Channel 4's social platforms. Comedians create brand-new podcasts with a big twist: none of them are real. Unsuspecting celebrity guests think they've been booked on the latest hot podcast, but things are about to get weird. Featuring Luke McQueen, Lily Phillips and Erika Ehler.",
    image: "assets/projects/Fake_Podcast_Thumbnail_TCS_website.jpg", tags: ["youtubeandsocial"] },

  { title: "Stacey Dooley Investigates: Gypsy Kids Taken From Home", client: "BBC Three", year: "2018", date: 20180302,
    description: "Stacey Dooley goes to Hungary to uncover the complex reasons so many Gypsy children are removed from their families by the authorities, witnessing the shocking reality of life for kids taken into children's homes.",
    image: "assets/projects/StaceyDooleyInvestigates.jpg", tags: ["television"] },

  { title: "Suped Up Set Up", client: "E4", year: "2021", date: 20211223,
    description: "A series for E4's social channels. Six deserving teens with dreams of turning their gaming passion into a career get the bedroom makeover of their lives, surprised by their gaming icon with the latest tech and the perfect space to stream and train. Featuring Daz Black, MarzBar, Nihachu and more.",
    image: "assets/projects/SUSU_website_image.jpg", tags: ["youtubeandsocial"] },

  { title: "Porn Laid Bare", client: "BBC Three", year: "2019", date: 20190314,
    description: "Six British people in their 20s with different attitudes to pornography visit Spain to explore its sprawling adult film industry. Meeting producers, performers, whistleblowers and police, they confront ugly truths and complex dilemmas about who makes porn, how, why and who profits.",
    image: "assets/projects/Picture_2.jpg", tags: ["television"] },

  { title: "Levi's House Proud", client: "Levi's / Channel 4", year: "2021", date: 20210805,
    description: "A series of short films sponsored by Levi's and published on Channel 4's social channels, intercutting the stories of two LGBTQ+ households sharing their experiences of pride, progress and activism as they prepare for a photoshoot for the new Queer Britain museum.",
    image: "assets/projects/Thumbnail_House_Proud_1_1.jpg", tags: ["linkedinvideo"] },

  { title: "Can't Look Away", client: "Multi-platform / Twitch", year: "2021", date: 20211125,
    description: "Six famous gamers play iconic console games without losing focus as ridiculous distractions unfold around them, with specialist eye-tracking tech measuring their concentration. Featuring Daz Black, Leahviathan and more, with bespoke edits for YouTube, Snapchat, Instagram, TikTok and a live Twitch event.",
    image: "assets/projects/211125_Cant_Look_Away_Thumbnail.jpg", tags: ["youtubeandsocial"] },

  { title: "Beauty Laid Bare", client: "BBC Three", year: "2020", date: 20200202,
    description: "A three-part series for BBC Three: an eye-opening journey into the $500bn beauty industry. Four young people with different attitudes to makeup spend two weeks in America meeting manufacturers, scientists, influencers and law enforcement. Every episode of the BBC One repeat was the most-watched show in its slot.",
    image: "assets/projects/Screenshot_2020-04-02_at_16.34.52.jpg", tags: ["television"] },

  { title: "Teens Taking on Deliveroo", client: "BBC Three", year: "2017", date: 20171121,
    description: "As Britain's gig economy grows and employs more young people, this BBC Three documentary follows two teenagers who decide to challenge the practices of one of the biggest companies in the sector, Deliveroo.",
    image: "assets/projects/Picture_1.jpg", tags: ["youtubeandsocial"] },

  { title: "Craic Addicts", client: "Channel4.com", year: "2014", date: 20140801,
    description: "Hosted by Irish YouTube sensations Chris Greene and Peter Ganley, Craic Addicts reviews the messed-up internet and real-life trends set to dominate your life. Part of the first wave of digital shorts for Channel4.com, each episode runs under four minutes with no trend off limits.",
    image: "assets/projects/Craic-Addicts-Sting_2800px_wide_LO_RES.jpg", tags: ["youtubeandsocial"] },

  { title: "Drag Queens of London", client: "London Live", year: "2014", date: 20140301,
    description: "A ten-part docusoap commissioned by London Live following the spectacular lives of some of the most fabulous drag performers on the world's biggest drag scene, celebrating its diversity and revealing the stories behind the performers.",
    image: "assets/projects/DragQueens.jpg", tags: ["television"] },

  { title: "Beano Toons", client: "Beano Studios", year: "2017", date: 20170515,
    description: "Commissioned by Beano Studios, Beano Toons is a mischievous, silly and sometimes gross original weekly animation strand, central to Beano's multiplatform offering. Fresh toons publish every week for 7–10 year olds in a safe, trusted world full of cheekiness and energy.",
    image: "assets/projects/Sequence_01.00_00_09_00.Still001.jpg", tags: ["youtubeandsocial"] },

  { title: "Rent Like A Boss", client: "BBC Three", year: "2020", date: 20201027,
    description: "Two young estate agents, Tobias and Big V, take a road trip through the UK to help young renters and aspiring tenants looking for inspiration and advice to beat the housing crisis.",
    image: "assets/projects/Rent-Like-A-Boss-BBC-Three-.jpg", tags: ["television"] },

  { title: "Under My Skin", client: "NHS / Channel 4", year: "2021", date: 20210124,
    description: "An NHS-funded shortform series for Channel 4's social channels, raising awareness of blood donation in the British black community where there is a shortage of donors. Each episode pairs two people with opposite beliefs donating blood side by side, finding common ground.",
    image: "assets/projects/Under_My_Skin_Thumbnail_1.jpg", tags: ["linkedinvideo"] },

  { title: "Sexy in 60 Minutes", client: "TV2", year: "2016", date: 20160404,
    description: "A dramatic, fast-paced makeover format reflecting the busy lifestyle of today's time-poor but aspirational woman. An army of beauticians and fashion experts works head-to-toe to transform a look in just one hour, putting each makeover against the clock for maximum drama and an attainable reveal. Over 20 episodes were produced for TV2 in Norway.",
    image: "assets/projects/Si60-Thumbnail.jpg", tags: ["television"] },

  { title: "Face The Consequences", client: "BBC Three", year: "2018", date: 20180626,
    description: "Across two series for BBC Three, we meet young people making reckless lifestyle choices who then come face to face with someone whose life was destroyed by the same kind of behaviour. Nominated for a Broadcast Digital Award.",
    image: "assets/projects/3_Lip_Fillers.jpg", tags: ["youtubeandsocial"] },

  { title: "Confession Couch", client: "Channel 4", year: "2021", date: 20210816,
    description: "Ordinary Brits with burning secrets come to confess all to their nearest and dearest on the Confession Couch. Covering relevant social issues in a buzz-worthy format, each episode one person reveals their secret to someone whose opinion and approval they value.",
    image: "assets/projects/Thumbnail_Confession_Couch.jpg", tags: ["youtubeandsocial"] },

  { title: "How to be a Young Billionaire", client: "Channel 4", year: "2014", date: 20141201,
    description: "Following three bright young British tech entrepreneurs as they join scores of twenty-something app developers drawn to San Francisco by billions in investment. Exclusive, unrestricted access to three start-ups fighting for their share of investment in the fastest-moving industry in the world.",
    image: "assets/projects/Howtobeayoungbillionaire.jpg", tags: ["television"] },

  { title: "Bitesize Careers", client: "BBC Bitesize / The Open University", year: "2022", date: 20221223,
    description: "Three series of films for BBC Bitesize and The Open University profiling lesser-known careers across three sectors: healthcare, the environment, and jobs requiring modern languages.",
    image: "assets/projects/BBC_Bitesize_Careers_2.jpg", tags: ["education"] },

  { title: "Learn on TikTok", client: "E4 / Channel 4", year: "2021", date: 20210816,
    description: "To celebrate the launch of E4 and Channel 4 on TikTok, we created 100 TikToks featuring famous C4 and E4 faces sharing expertise on everything from art history to sex education, as part of the #LearnOnTikTok initiative. Featuring Rosie Jones, Tom Read Wilson, Scarlette Douglas and more.",
    image: "assets/projects/Learn_on_TikTok_2.jpg", tags: ["youtubeandsocial", "education"] },

  { title: "Tiny Happy People", client: "BBC", year: "2020", date: 20200402,
    description: "The BBC Tiny Happy People campaign supports parents with their children's communication skills, from before birth to age five. We delivered over 150 shortform films featuring more than 200 diverse contributors across the UK, demonstrating simple activities and the science behind early development.",
    image: "assets/projects/TinyHappyPeople.jpg", tags: ["education", "youtubeandsocial"] },

  { title: "Konnie & Harry's Anti-Bullying Advice", client: "BBC Bitesize Parents' Toolkit", year: "2022", date: 20221223,
    description: "For BBC Bitesize's Parents' Toolkit, McFly drummer Harry Judd and TV presenter Konnie Huq discuss their own experiences of bullying at school, how to spot the signs and ways to approach the subject with your child.",
    image: "assets/projects/BBC_Bitesize_Anti-Bullying_PTK.png", tags: ["education"] },

  { title: "Homeschooling Hacks", client: "BBC", year: "2021", date: 20210217,
    description: "With most of Britain's parents home-schooling during lockdown, we produced fast-turnaround short films with Sophie Ellis-Bextor and Romesh Ranganathan sharing easy hacks to make learning from home less stressful. Six clips published on the BBC website and across socials.",
    image: "assets/projects/Schooling-Hacks_2b.jpg", tags: ["education"] },

  { title: "When The Going Gets Tough", client: "BBC", year: "2020", date: 20201029,
    description: "Marnie Simpson, Stephanie Davis and Chelsee Healey open up about their parenting journeys, sharing honest advice on sleep deprivation, parenting with autism, returning to work and more.",
    image: "assets/projects/WTTGT_Thumbnail.jpg", tags: ["education"] },

  { title: "Bitesize Daily", client: "BBC", year: "2020", date: 20201215,
    description: "Over 150 short animated explainers for BBC Bitesize Daily primary lessons, aired on BBC iPlayer and online during the first COVID-19 lockdown. Colourful, eye-catching infographics illustrated key Science, Maths and English concepts, plus Geography sequences voiced by Sir David Attenborough.",
    image: "assets/projects/Bitesize_Daily_2b.jpg", tags: ["education"] },

  { title: "Selfie Addicts", client: "Channel4.com", year: "2016", date: 20160304,
    description: "A shortform series for Channel4.com. We meet six people going the extra mile to be picture perfect, with a selfie obsession that has changed their lives for better or worse, revealing the timeless human need to connect with others.",
    image: "assets/projects/SA-LITE.jpg", tags: ["youtubeandsocial"] },

  { title: "Ask Me Everything", client: "Snapchat Discover", year: "2016", date: 20160814,
    description: "One of two series produced for the launch of Snapchat channel Brother. This series of 22 shortform videos profiled young men with extraordinary jobs, featuring contributors from across the globe including Navy SEALs, stuntmen, racing drivers and crime scene cleaners.",
    image: "assets/projects/AMA_THUMBNAIL.jpg", tags: ["youtubeandsocial"] },

  { title: "\"Fake Homeless\": Who's Begging on the Streets?", client: "BBC Three", year: "2018", date: 20181125,
    description: "Is Britain being duped by 'fake homeless', chancers posing as destitute to boost takings? Or is this a scare story to demonise the real homeless? Ellie Flynn investigates.",
    image: "assets/projects/FakeHomeless.jpg", tags: ["television"] },

  { title: "The Maths Show", client: "Bitesize for Teachers", year: "2019", date: 20190327,
    description: "Mathematician and comedian Matt Parker provides tips and advice on specific topics for students struggling to pass their maths GCSE. Designed as a revision tool using examiner reports to identify common errors and explore appropriate exam questions.",
    image: "assets/projects/The-Maths-Show.jpg", tags: ["education"] },

  { title: "Dr Emeka's Essential First Aid", client: "Bitesize for Teachers", year: "2021", date: 20210112,
    description: "A series of short, fun and informative films for Bitesize for Teachers supporting the teaching of first aid, mixing live action and animated illustration. Each film is presented by TikTok Doctor Dr Emeka as he teaches pupils and teachers the fundamentals of first aid.",
    image: "assets/projects/Dr-Emekas-Essential-First-Aid_1c.jpg", tags: ["education"] },

  { title: "Teensplain This", client: "BBC Three", year: "2017", date: 20170812,
    description: "An online format for BBC Three in which teens give honest, straight-talking opinions on funny, shareable, tag-able topics guaranteed to get their peers hot under the collar.",
    image: "assets/projects/TeensplainWEBSITE.jpg", tags: ["youtubeandsocial"] },

  { title: "Students on the Edge", client: "Shortform series", year: "2018", date: 20181009,
    description: "Drug dealing on campus, selling sex to pay tuition fees, buying essays online and taking study drugs for top grades. This shortform series explores the shocking real stories of students from the extreme end of British university life.",
    image: "assets/projects/STUDENTS_TCS_MASHUP.jpg", tags: ["youtubeandsocial"] },

  { title: "Should I Work At?", client: "Snapchat Discover", year: "2016", date: 20160814,
    description: "One of two series produced for the launch of Snapchat channel Brother, updated hourly in the Discover area. An animated series offering a musical and fun insight into life at the biggest and best-known companies and organisations in the world.",
    image: "assets/projects/Should_I_Work_At_Thumbnail.jpg", tags: ["youtubeandsocial"] },

  { title: "Sex on The Edge", client: "BBC Three", year: "2017", date: 20170515,
    description: "A shortform documentary series for BBC Three about people who take sex to the edge of morality and legality, from breath play to chastity and the question of where consent lies, exploring extreme role-play and the cultural contradictions and moral dilemmas it raises.",
    image: "assets/projects/SexOnTheEdge.jpg", tags: ["youtubeandsocial"] },

  { title: "Are There Fascists Next Door?", client: "BBC Three", year: "2017", date: 20170515,
    description: "A quick-turnaround documentary for BBC Three meeting the young people in France campaigning for the far right, and those opposed. How did Front National become popular among French millennials, and could the far right ever win the youth vote across Europe?",
    image: "assets/projects/AreThereFascistsNextDoor.jpg", tags: ["youtubeandsocial"] },

  { title: "Where There's Blame, There's A Claim", client: "Channel 5", year: "2017", date: 20170627,
    description: "A three part, factual series for Channel 5 that reveals the stories behind the pay-outs, freak accidents and preventable calamities.",
    image: "assets/projects/blame-claim.jpg", tags: ["television"] },

  // ---------- EDUCATION (added) ----------
  { title: "History of Women's Cricket", client: "The Open University", year: "2025", date: 20250630,
    description: "To support the launch of Freddie Flintoff's Field of Dreams, in which he created his first ever girls' team in Blackpool, we produced a bonus animated explainer exploring the fascinating history of women's cricket through the ages. This was devised with academic experts from The Open University for the OU Connect website and was broadcast at the end of the first episode of Field of Dreams on BBC One.",
    image: "assets/projects/history-of-womens-cricket-v2.jpg", tags: ["education"] },
  { title: "BBC micro:bit - the next gen", client: "BBC Bitesize", year: "2023", date: 20230630,
    description: "This series of educational videos for BBC Bitesize encouraged students to use the micro:bit device to survey their playground in the first ever UK-wide survey of playgrounds. The videos showed seven fun, cross-curricular activities, designed to work flexibly to help teachers fit the learning into a busy timetable. Hosted by Shereen Cukelvin, Big Manny, Tilly Lockey and Yussef Rafik. The series was part of the re-launch campaign to encourage head teachers to understand the creative potential of the micro:bit and how it can put coding power in the hands of children.",
    image: "assets/projects/microbit-next-gen.jpg", tags: ["education"] },
  { title: "Exam Essentials", client: "BBC Bitesize", year: "2022", date: 20220630,
    description: "Exam Essentials delivered a fresh take and new look for BBC Bitesize's established series of practical tips and advice. Each episode featured relatable and diverse contributors to appeal to the core 14-16 year old audience, alongside an expert.",
    image: "assets/projects/exam-essentials.jpg", tags: ["education"] },
  { title: "The Mind Set", client: "BBC Bitesize", year: "2022", date: 20220630,
    description: "The Mind Set is a series of films produced by The Connected Set to help support students through their GCSEs and Nationals with advice from a group of amazing young coaches who appear in the films. The young coaches have been through their GCSEs or National Qualifications already. They come from all different backgrounds and all corners of the UK and they've all faced different challenges in getting to grips with exam revision. They offer heaps of exam revision tips, advice, helpful hints, hacks and wonderful words of wisdom they want to share with you. Published on the Bitesize Study Support pages and produced in both English and Welsh languages.",
    image: "assets/projects/the-mind-set.jpg", tags: ["education"] },
  { title: "Managing Mini Emotions", client: "CBeebies Parenting", year: "2021", date: 20210630,
    description: "This series of short, funny and informative animations helps parents understand the tricky stages in their child's emotional development. The films mix cartoon-style animation with motion graphics and lighthearted voice over to illustrate and explain the main emotional and behavioural stages for an age range of 12-18 months to 4 years, offering tips to tackle these challenging moments. Each episode offers clear, positive and engaging takeaway information in a comedic tone. Currently available on the CBeebies Parenting website.",
    image: "assets/projects/managing-mini-emotions-v2.jpg", tags: ["education"] },

  // ---------- COMING SOON (placeholder tiles) ----------
  { title: "Dani Dyer: Parenting Unscripted", client: "CBeebies Parenting", year: "2026", date: 20261003,
    description: "Strictly star Dani Dyer has three children under five and wants to know whether her parenting style is really working. Across this emotional and relatable CBeebies Parenting documentary she explores the main parenting styles, screen time and the daily mealtime battle with expert Dr Martha, searching for the firm but loving boundaries that suit her family.",
    image: "assets/projects/dani-dyer.jpg", tags: ["youtubeandsocial", "television", "education"] },
  { title: "Charlie Hedges: Parenting Unscripted", client: "CBeebies Parenting", year: "2026", date: 20261002,
    description: "Radio 1 DJ Charlie Hedges can perform in front of thousands, yet the school gate fills her with dread. In this emotional and relatable CBeebies Parenting documentary she confronts her social anxiety head on, determined not to pass it to her four-year-old daughter, with help from child psychologist Laverne Antrobus and fellow parent Jordan Banjo.",
    image: "assets/projects/charlie-hedges.jpg", tags: ["youtubeandsocial", "television", "education"] },
  { title: "Leanne Quigley: Parenting Unscripted", client: "CBeebies Parenting", year: "2026", date: 20261001,
    description: "Traitors series 3 champion Leanne Quigley faced her toughest challenge at home, raising twin boys born prematurely and after ninety-one days in neonatal intensive care. In this moving CBeebies Parenting documentary she confronts the anxiety that comes with it, from a fear of germs to the twins starting school, with support from fellow parents and a mindfulness group.",
    image: "assets/projects/leanne-quigley.jpg", tags: ["youtubeandsocial", "television", "education"] },

  // ---------- BRANDED & B2B (client showcase) ----------
  // NOTE: pop-up descriptions below are placeholders — replace with the real
  // project details for each client (Jason to supply).
  { title: "Independent Age", client: "B2B & LinkedIn", year: "2026", date: 20260901,
    description: "LinkedIn strategy and video format development sprint, auditing Independent Age's LinkedIn presence, defining their audience and content pillars, and building an actionable publishing roadmap with scroll-stopping video formats to move them from visibility to authority on LinkedIn.", image: "assets/projects/independent-age-logo.jpeg", tags: ["linkedinvideo"] },
  { title: "SLOW", client: "B2B & LinkedIn", year: "2026", date: 20260901,
    description: "LinkedIn strategy and video format development sprint to help SLOW build a presence on LinkedIn from scratch, shaping content pillars and video formats to support their corporate partnership and training goals, with a clear, outcome-focused publishing roadmap.", image: "assets/projects/slow.jpg", tags: ["linkedinvideo"] },
  { title: "K7 Media", client: "B2B & LinkedIn", year: "2026", date: 20260201,
    description: "A people-first hero film for K7 Media to replace their corporate video, plus 18 individual consultant profile films, scripted and optimised for LinkedIn. These films foreground K7's global network of consultants and their human approach.", image: "assets/projects/k7-media.jpg", tags: ["linkedinvideo"] },
  { title: "Let's Talk Talent", client: "B2B & LinkedIn", year: "2026", date: 20260601,
    description: "LinkedIn video production engagement which included research, scripting, filming, editing and delivery of a batch of over 50 social-ready videos to grow the team's presence and authority on LinkedIn as they launch their services in the UAE.", image: "assets/projects/lets-talk-talent.jpg", tags: ["linkedinvideo"] },
  { title: "Mediorite", client: "B2B & LinkedIn", year: "2026", date: 20260501,
    description: "LinkedIn content strategy, repositioning Mediorite as a strong choice for senior marketing and communications leaders through smart strategy, story and format development, and scroll-stopping social video, supporting the organisation through production and publishing to LinkedIn.", image: "assets/projects/mediorite.jpg", tags: ["linkedinvideo"] },

  // ---------- EDUCATION (added) ----------
  { title: "World of Wellbeing", client: "BBC", year: "2024–25", date: 20250630,
    description: "World of Wellbeing is a mental-health vodcast and podcast produced for the BBC across two series, fronted by NHS GP and Radio 1 broadcaster Dr Radha Modgil alongside social-media creator Ami Charlize. Across short, conversational episodes on BBC Bitesize and BBC Sounds, they tackle the topics that matter most to teenagers and young adults, from confidence and self-esteem to anxiety, friendships, self-care and sleep.", image: "assets/projects/world-of-wellbeing.jpg", tags: ["education"] }
];

/* Categories — order controls the nav and the prev/next sequence.
   colour: the section's theme colour (TCS sub-colours, brand guide p10).
   dark: true when the colour is light and needs dark text. */
const CATEGORIES = [
  { tag: "about",            label: "ABOUT US",        type: "about", colour: "#522491", dark: false },
  { tag: "television",       label: "TELEVISION",                     colour: "#f7941d", dark: true },
  { tag: "youtubeandsocial", label: "YOUTUBE & SOCIAL",               colour: "#ee2b74", dark: false },
  { tag: "linkedinvideo",    label: "BRANDED & B2B",   type: "b2b",   colour: "#00c0f3", dark: true },
  { tag: "education",        label: "EDUCATION",                      colour: "#cbdb2a", dark: true, tagColour: "#4a7a12" },
  { tag: "ai",               label: "AI",              type: "ai",    colour: "#b92f92", dark: false }
];

/* Section bylines. <span class="hl"> marks a highlighted word (rendered as HTML). */
const CATEGORY_INTROS = {
  television: `<span class="hl">Award</span>-winning <span class="hl">television</span> for the UK's biggest <span class="hl">broadcasters</span> and beyond. From popular <span class="hl">factual</span> and <span class="hl">documentary</span> to <span class="hl">formats</span> and <span class="hl">entertainment</span>, we make shows that connect with young audiences and the young-at-heart.`,
  youtubeandsocial: `Scroll-stopping <span class="hl">social video</span> that builds <span class="hl">fandoms</span> across <span class="hl">YouTube</span>, <span class="hl">TikTok</span>, <span class="hl">Snapchat</span>, <span class="hl">Instagram</span> and <span class="hl">Facebook</span>. We even built our own <span class="hl">8m+ follower social brand</span> from zero, so we walk the walk.`,
  linkedinvideo: `<span class="hl">Branded content</span>, <span class="hl">B2B video</span> and <span class="hl">corporate video</span> that drive awareness, authority and commercial outcomes. From helping business leaders build trust through <span class="hl">LinkedIn</span> and <span class="hl">thought-leadership</span>, to <span class="hl">consumer</span> facing <span class="hl">video formats</span> that earn attention through <span class="hl">entertainment</span> and high-quality editorial.`,
  education: `<span class="hl">Educational video</span> content across socials and TV. From <span class="hl">live</span> 30 minute <span class="hl">shows</span> to scroll stopping <span class="hl">socials</span>, <span class="hl">YouTube first docs</span>, <span class="hl">animations</span> and visualised <span class="hl">podcasts</span> for educational partners, we bring learning to life.`
};

/* Client logo strips shown above the projects on specific sections. */
const CATEGORY_LOGOS = {
  television: ["BBC.png", "ITV.png", "Channel 4.png", "Channel 5.png", "E4.png", "NBC.png", "WBD.png", "Hallmark.png", "MTV.png", "TV2.png"],
  youtubeandsocial: ["Meta.png", "Snapchat.png", "NHS.png", "Levis.png", "Royal Foundation.png", "Open University.png", "Beano.png", "Playstation.png", "Xbox.png", "Ubisoft.png", "BBC.png", "Channel 4.png", "E4.png", "VICE.png"]
};

/* ABOUT US landing page content. */
const ABOUT = {
  p1: "The Connected Set is an award-winning independent digital video and TV production company based in the UK. Spanning genres including education, formats, factual, animation and branded content, we specialise in content that grows audiences, unlocks revenue and builds long-lasting fans.",
  platformsLead: "We work across multiple platforms: ",
  platforms: [
    { tag: "television",       label: "Television",      note: " (BBC, Channel 4, WBD and NBC)" },
    { tag: "youtubeandsocial", label: "YouTube & Social", note: " (building our YouTube channel from zero to over 5 million subs)" },
    { tag: "linkedinvideo",    label: "Branded & B2B",   note: " (branded content, thought leadership video & LinkedIn)" },
    { tag: "education",        label: "Education",       note: " (The Open University and BBC Bitesize)" },
    { tag: "ai",               label: "AI",              note: " training/consultancy" }
  ],
  p3: "Founded in 2010 by Jason Mitchell and Jake Cassels, our award-winning team creates TV formats that have sold in 25 territories worldwide. We've earned top industry honours, including RTS, BETT, and Global Entertainment Marketing Academy of Arts & Sciences awards. Plus, we were named one of Broadcast's Best Places to Work in TV. From a single idea to a finished video or TV series, we handle content strategy, development, video production and post in-house, and we pride ourselves on being quick, collaborative and genuinely good to work with.",
  vimeo: "https://player.vimeo.com/video/588898488?h=449e2badfd",
  photo: "assets/jason-and-jake.jpg",
  founders: [
    { name: "Jason Mitchell", role: "Co-Founder", linkedin: "https://www.linkedin.com/in/mitchelljason/" },
    { name: "Jake Cassels",   role: "Co-Founder", linkedin: "https://www.linkedin.com/in/jakecassels/" }
  ]
};

/* Client logos for the scrolling marquee on the landing page.
   PNG files live in assets/client logos/. Add or remove freely. */
const CLIENT_LOGOS = [
  "BBC.png", "ITV.png", "Channel 4.png", "Channel 5.png", "E4.png", "NBC.png", "WBD.png",
  "Hallmark.png", "MTV.png", "VICE.png", "Meta.png", "Snapchat.png", "Spotify.png",
  "NHS.png", "Levis.png", "Royal Foundation.png", "Open University.png",
  "TV2.png", "Canal+.png", "Virgin Media.png", "Beano.png", "Playstation.png", "Xbox.png", "Ubisoft.png"
];

/* AI page content. AI services are delivered by Jason Mitchell (co-Founder),
   with full detail on his site jasonmitchell.co.uk. */
const AI = {
  note: `Our AI services and training are delivered by Jason Mitchell, co-Founder of The Connected Set. You can find full details on`,
  noteBtn: { label: "Jason's website", url: "https://jasonmitchell.co.uk" },
  heroImage: "assets/jason-headshot.jpg",
  expertise: {
    heading: "AI for content & creative businesses",
    body: "The Connected Set's Co-Founder Jason Mitchell is one of the industry's go-to trainers on incorporating AI into content businesses. His focus is on how AI systems in day-to-day processes can free up more time for human creativity. He has delivered training for dozens of companies and presented on stage at global events including Content London, KDPA Korea, Content Americas and Prime Time Canada."
  },
  servicesHeading: "Services",
  services: [
    { heading: "Talks & Workshops",
      body: "Live, demo-heavy AI keynotes and hands-on workshops for your event or team. Booked by Telemundo, Channel 4, E4, Keshet, Screen Australia and more.",
      url: "https://jasonmitchell.co.uk/#talks" },
    { heading: "Claude Cowork Cohort",
      body: "A four-week, small-group online course that gets your team building real AI workflows in Claude Cowork, live.",
      url: "https://jasonmitchell.co.uk/#cohort" },
    { heading: "Made-For-You Consultancy",
      body: "A done-for-you Claude Cowork build, tailored to how your business works: context, custom skills, connectors and automations, handed over ready to use.",
      url: "https://jasonmitchell.co.uk/#consultancy" }
  ],
  cta: { label: "Explore AI services at jasonmitchell.co.uk", url: "https://jasonmitchell.co.uk" },
  clientsHeading: "AI training & consultancy clients",
  clients: [
    { name: "Telemundo", meta: "USA · Full-day AI Tools Workshop, Miami" },
    { name: "Sofa Digital", meta: "Brazil · 90-min AI Tools Presentation" },
    { name: "Keshet International", meta: "Israel · 60-min AI Tools Presentation" },
    { name: "Screen Australia", meta: "Australia · 90-min AI Tools Presentation" },
    { name: "Alberta Producers Accelerator", meta: "Canada · 90-min AI Tools Presentation" },
    { name: "Channel 4 Television", meta: "UK · 75-min AI Tools Presentation, Leeds" },
    { name: "E4 Television", meta: "UK · 60-min AI Tools Presentation, London" },
    { name: "Jungle Creations", meta: "UK · 75-min AI Tools Presentation, London" },
    { name: "Blue Door", meta: "UK · Full 5-day Cowork Setup Service" },
    { name: "Beezr Studios", meta: "UK · Cowork Cohort, 4 weeks online" },
    { name: "Taitt Media", meta: "USA · Cowork Cohort, 4 weeks online" },
    { name: "Peahi Consulting", meta: "UK · Cowork Cohort, 4 weeks online" }
  ],
  keynotesHeading: "International keynotes & festivals",
  keynotes: [
    { name: "Content London", meta: "75 minute keynote", logo: "Content London.png" },
    { name: "Content Americas", meta: "75 minute keynote", logo: "Content Americas.png" },
    { name: "Content Warsaw", meta: "75 minute keynote", logo: "Content Warsaw.png" },
    { name: "Content Canada", meta: "90 minute keynote", logo: "Content Canada.png" },
    { name: "KPDA Korea", meta: "2 hour keynote", logo: "KPDA Seoul.png" },
    { name: "CMPA Prime Time Canada", meta: "75 min keynote + 45 min workshop", logo: "Prime Time Canada.png" },
    { name: "Belfast Media Festival", meta: "Panel with demos", logo: "Belfast Media Festival.png" },
    { name: "NFIS Lagos", meta: "60 minute keynote", logo: "NIFS Lagos.png" }
  ]
};

/* BRANDED & B2B: the sell shown below the projects. */
const B2B = {
  heading: "Why B2B & LinkedIn video works",
  lead: "Traditional sales, marketing and PR playbooks are losing their edge, and LinkedIn has become the main channel for business storytelling. As AI-generated content floods the feed, real human presence on camera is worth more, not less.",
  stats: [
    { figure: "71%", label: "higher likelihood of purchase when leaders are active on social" },
    { figure: "5x", label: "more engagement for video, and 20x more shares, on LinkedIn" },
    { figure: "+20%", label: "year-on-year growth in video views on LinkedIn" }
  ],
  servicesHeading: "How we help",
  services: [
    { heading: "LinkedIn Strategy", body: "A focused sprint across three phases: Diagnose, Define and Delivery Plan. We audit your presence and your competitors, define your audience, content pillars and point of view, develop the video formats that suit you, and hand over an actionable publishing roadmap." },
    { heading: "B2B & LinkedIn Video Production", body: "We script, shoot, edit and deliver the video itself, from hero films and leader-led thought leadership to profile films and social-ready cutdowns, all optimised for LinkedIn and the platforms where your customers make decisions." }
  ]
};

/* Watch/visit links (title -> URL), from Jason's project list. */
const PROJECT_LINKS = {
  "Homewards": "https://youtu.be/ui_8TnpH7t0?si=ystyLw4JM8kAdtbn",
  "Beauty Laid Bare": "https://www.bbc.co.uk/programmes/p08119sn",
  "\"Fake Homeless\": Who's Begging on the Streets?": "https://www.bbc.co.uk/programmes/p06r9xbq",
  "Live Lessons": "https://www.bbc.co.uk/iplayer/episodes/m000c60c/bbc-live-lessons",
  "Porn Laid Bare": "https://www.bbc.co.uk/programmes/p072n07k",
  "Rent Like A Boss": "https://www.bbc.co.uk/programmes/p08tj52s",
  "Stacey Dooley Investigates: Gypsy Kids Taken From Home": "https://www.bbc.co.uk/programmes/p05x5rh4",
  "Unreal! with Olivia Neill": "https://www.bbc.co.uk/programmes/m001mfbx",
  "Are There Fascists Next Door?": "https://www.bbc.co.uk/programmes/p051xdmn",
  "Beano Toons": "https://www.youtube.com/playlist?list=PLuxZoXOedd0NDLOhQngqg617Z6hh9mEhW",
  "Can't Look Away": "https://www.youtube.com/watch?v=6PadwQXoiJA&list=PLSfobYjyRoTCrI_v7sCQk_28rTbjDITg5&index=1",
  "Confession Couch": "https://www.youtube.com/watch?v=VX1FOtsvlM8",
  "Don't @ Me Babes": "https://www.youtube.com/watch?v=rzGkcF9r_x0&list=PLM7fuyQoRuLHUaoz5yuFMlb_-1ymMDMyf&index=2",
  "Face The Consequences": "https://www.bbc.co.uk/programmes/p0695q8f/episodes/guide",
  "Mashed": "https://www.youtube.com/mashed",
  "Selfie Addicts": "https://www.channel4.com/programmes/selfie-addicts",
  "Sex on The Edge": "https://www.bbc.co.uk/programmes/p04gb9n1",
  "Students on the Edge": "https://www.bbc.co.uk/programmes/p06lnbjv",
  "Suped Up Set Up": "https://www.youtube.com/playlist?list=PLSfobYjyRoTAmIXiyQOLaw72xehTmflAV",
  "Teens Taking on Deliveroo": "https://www.bbc.co.uk/programmes/p05hy4ty",
  "The Fake Podcast Show": "https://www.youtube.com/playlist?list=PLGmQ1G5rNbwRXNjA0y892b534qOaBIH8x",
  "Tiny Happy People": "https://www.bbc.co.uk/tiny-happy-people",
  "What If? with Munya Chawawa": "https://www.youtube.com/playlist?list=PLSfobYjyRoTAiaKHHStWoTBl7wHwYeUNm",
  "Let's Talk Talent": "https://www.linkedin.com/in/jotaylorc4/recent-activity/videos/",
  "Levi's House Proud": "https://www.youtube.com/watch?v=VsfIvnbVh3o",
  "Mediorite": "https://www.linkedin.com/in/lucy-ferguson-mbe-she-her-2471293/recent-activity/videos/",
  "Under My Skin": "https://www.youtube.com/watch?v=sfzH_wXo9-Y",
  "Bitesize Careers": "https://www.bbc.co.uk/bitesize/careers",
  "Bitesize Daily": "https://www.bbc.co.uk/iplayer/episodes/p0893dfq/bitesize-daily-57-year-olds",
  "Dr Emeka's Essential First Aid": "https://www.bbc.co.uk/teach/class-clips-video/articles/zhtq8hv",
  "Exam Essentials": "https://www.bbc.co.uk/bitesize/articles/zn3497h#zq2nf82",
  "History of Women's Cricket": "https://connect.open.ac.uk/fieldofdreams/",
  "Konnie & Harry's Anti-Bullying Advice": "https://www.bbc.co.uk/bitesize/articles/zr3r8p3",
  "Managing Mini Emotions": "https://www.bbc.co.uk/tiny-happy-people/behaviour-and-wellbeing",
  "Moodboosters": "https://www.bbc.co.uk/teach/moodboosters",
  "The Maths Show": "https://www.bbc.co.uk/teach/class-clips-video/articles/z4f692p",
  "World of Wellbeing": "https://www.bbc.co.uk/bitesize/articles/zcmdh4j"
};
