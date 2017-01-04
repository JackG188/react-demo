"use strict";

const players = [
  {
    'id': 'kc',
    'name': 'Kevin Cuthbert',
    'country': 'sco',
    'birth': '8th September 1982',
    'image': 'KEVIN-CUTHBERT.jpg',
    'cover': 'kc-cover.jpg',
    'social': '',
    'hasSocial': false,
    'link': 'http://www.transfermarkt.co.uk/kevin-cuthbert/profil/spieler/14578',
    'about': 'The former Hamilton stopper, known as "The Cat", was a key member of Accies promotion winning team last season where his last actions were saving two penalties in that dramatic and unforgettable Premiership Play Off shoot out at Easter Road in May 2014. \r\n Kevin has over 260 appearances for St Johnstone, Morton, Ayr United and Hamilton behind him, Kevin made his Rovers debut against Inverness Caledonian Thistle in a pre-season friendly on 19th July 2014 although his appearances during the 2014-15 season were hampered by injury. \r\n Kevin established himself as the No. 1 choice last season and was an ever-present in all competitive games in the 2015-16 season, He was awarded both the Managers and Players Player of the Year trophies for 2015-16. In April 2016, Kevin signed a contract extension committing himself to Raith Rovers until the summer of 2018.',
    'stats': {  'position': 'Goalkeeper',
                'goals':'0',
                'apps':'16',
                'yellows':'0',
                'reds':'0'
              }
  },

  {
    'id': 'jt',
    'name': 'Jason Thomson',
    'country': 'sco',
    'birth': '26th July 1987',
    'image': 'jt.jpg',
    'cover': 'jt-cover.jpg',
    'hasSocial': true,
    'link': 'http://www.transfermarkt.co.uk/jason-thomson/profil/spieler/41526',
    'social': 'https://twitter.com/jasethomson20',
    'about': "Raith Rovers club captain, Jason is a product of the Hearts Youth Academy and made over 30 first team appearances for the Tynecastle club before spending 6 months at Dunfermline at the start of season 2011-12 where he made 14 starts for the Pars."
              +"\nJason came to Starks Park on loan in March 2012 and helped the club move away from the relegation zone at the end of the season. He made his move to Stark Park permanent in the summer of 2012."
              +"\nJason has been club captain under the management of John McGlynn, Grant Murray and Ray McKinnon." 
              +"\nJason signed a two year contract extension in March 2016 which will see him stay at Stark's Park until summer 2018."
              +"\nThe full-back secured both the Player’s Player of the Year and the Supporter’s Club Player of the Year awards for 2012-13 and signed a new one-year contract in May 2013 and extended that contract in May 2014."
              +"\nJason was an ever-present in the 2014-15 season playing every minute of every league and cup game."
              +"\nJason picked up a back injury in the game against Livingston on 31st October which has kept him out for a number of games. He returned to first team action as a second half substitute against Falkirk on 13th February 2016."
              +"\nJason has missed 11 consecutive league games in the 2016-17 season with injury but made a welcome return against Hibernian on 24th December, 2016 playing in the unfamiliar left back slot.",
    'stats': {  'position': 'Defender',
                'goals':'0',
                'apps':'10',
                'yellows':'0',
                'reds':'0'
              }
  },

  {
    'id': 'km',
    'name': 'Kevin McHattie',
    'country': 'sco',
    'birth': '15th July 1993',
    'image': 'km.jpg',
    'cover': 'km-cover.jpg',
    'hasSocial': true,
    'social': 'https://twitter.com/kevmchattie',
    'link': 'http://www.transfermarkt.co.uk/kevin-mchattie/leistungsdaten/spieler/130841',
    'about': "Defender Kevin McHattie signed for Rovers on a one year deal on June 17th, 2016."
              +"The former Hearts and Kilmarnock star, who also has earned 6 Scotland Under 21 caps, previously worked under manager Gary Locke at both of these clubs making a total of 93 appearances in the Premiership."
              +"Kevin is a local lad and went to Auchmuty High School in Glenrothes and his family are all Rovers supporters."
              +"Kevin made his Rovers debut in a 2-0 defeat against Forfar Athletic in a pre-season friendly on 28th June, 2016.",
    'stats': {  'position': 'Defender',
                'goals':'2',
                'apps':'21',
                'yellows':'6',
                'reds':'0'
              }
  },

  {
    'id': 'rc',
    'name': 'Ross Callachan',
    'country': 'sco',
    'birth': '4th September 1993',
    'image': 'rc.jpg',
    'cover': 'rc-cover.jpg',
    'hasSocial': true,
    'social': 'https://twitter.com/RossCallachan',
    'link': 'http://www.transfermarkt.co.uk/ross-callachan/leistungsdaten/spieler/151213',
    'about': "One of five young players whose performances in the youth sides earned him promotion to the senior squad and a full-time contract in June 2010."
              +"Ross got some invaluable experience when temporarily transferred to Musselburgh Athletic until summer 2012. An intelligent player who always looks to open up defences and controls the game from the centre of midfield."
              +"Made 4 league starts in 2012-13 season and signed a new one-year contract in May 2013."
              +"He featured in the pre-season friendlies at the start of the 2012-13 season. In 2013-14 he has really established himself as a first team player and was awarded the 2013-14 Young Player of the year."
              +"Ross established himself as a first team regular in 2014-15 making 31 appearances and scoring twice against Falkirk and Livingston. He also scored the winner against Burntisland Shipyard in the Fife Cup back in August 2014."
              +"Ross extended his Rovers contract through until summer 2017. Ross is currently out injured, and expected to be out for a few weeks, having dislocated his shoulder in a freak accident away from football."
              +"Ross returned to first team action on 7th November coming on as a second half substitute in the 1-2 defeat to Falkirk at Stark's Park having been out for 8 weeks."
              +"Ross has recently made his 150th first team appearance for the club when he played against Partick Thistle on 5th July 2016.", 
    'stats': {  'position': 'Midfielder',
                'goals':'3',
                'apps':'21',
                'yellows':'6',
                'reds':'0'
              }
  },

  {
    'id': 'jym',
    'name': 'Jean-Yves M`voto',
    'country': 'fr',
    'birth': '6th September 1988',
    'image': 'jym.jpg',
    'cover': 'jym-cover.jpg',
    'hasSocial': false,
    'social': '',
    'link': 'http://www.transfermarkt.co.uk/jean-yves-mvoto/leistungsdaten/spieler/55381',
    'about': "Having originally been on the books of Paris Saint-Germain until the age of 20, Jean-Yves most recently starred for Polish second tier side WKS Zawisza Bydgoszcz SA, since he joined them in January 2016 following a brief loan spell with English League 2 side Leyton Orient."
              +"Manager Gary Locke has tracked the player’s progress for some time, having previously watched him several times when he appeared regularly for League 1 sides Oldham Athletic, Barnsley and Southend United between 2009 and 2015 scoring 11 goals in 167 matches."
              +"Jean-Yves made played as a trialist for Rovers against Arbroath on 9th July, 2016 and made his official debut as a Rovers player in the Betfred League Cup tie against Ross County on 23rd July, 2016."
              +"Jean-Yves was nominated for the SPFL team of the year (so far) on 26th December, 2016 where players are selected from all four divisions.", 
    'stats': {  'position': 'Defender',
                'goals':'2',
                'apps':'19',
                'yellows':'2',
                'reds':'0'
              }
  },

  {
    'id': 'kb',
    'name': 'Kyle Benedictus',
    'country': 'sco',
    'birth': '7th December 1991',
    'image': 'kb.jpg',
    'cover': 'kb-cover.jpg',
    'hasSocial': false,
    'social': '',
    'link': 'http://www.transfermarkt.co.uk/kyle-benedictus/leistungsdaten/spieler/91273',
    'about': "Following a seven year period at Dundee, Ray McKinnon was keen to sign the young but experienced defender on 10th June 2015. Kyle had made nearly 80 appearances for the Den's Park club and more recently was a key member of the Alloa team having spent the 2014-15 season on-loan at the Indodrill Stadium."
              +"Although Kyke only joined the Rovers at the start of the 2015-16 campaign, the central defender has already made his 50th appearance for the club in the game against Ross County last Saturday."
              +"He made his first team debut in the pre-season friendly against Hearts on 7th July 2015. It wasn’t long before Kyle got himself on the Rovers scoresheet when he scored the second goal in a 3-0 victory over Albion Rovers at Stark’s Park in the first round of the League Cup. In total, Kyle scored an impressive 5 goals last season and has already got his tally for this season off and running with the opening goal against Cove Rangers in the Betfred League Cup match."
              +"He signed a one year contract extension in early 2016 that will see him stay at Stark's Park until summer 2017.", 
    'stats': {  'position': 'Defender',
                'goals':'1',
                'apps':'21',
                'yellows':'6',
                'reds':'1'
              }
  },

  {
    'id': 'cj',
    'name': 'Chris Johnston',
    'country': 'sco',
    'birth': '3rd September 1994',
    'image': 'cj.jpg',
    'cover': 'cj-cover.jpg',
    'hasSocial': true,
    'social': 'https://twitter.com/cjohnston1994',
    'link': 'http://www.transfermarkt.co.uk/chris-johnston/leistungsdaten/spieler/213114',
    'about': "Chris Johnston signed a one year deal with Rovers, joining the club on 6th June, 2016."
            +"Chris joined Kilmarnock in 2012 and quickly earned his first team debut in March of that year before going on to make 68 appearances for the Rugby Park outfit, scoring 6 goals. Unfortunately, Chris sustained a cruciate ligament injury last August, only 10 days after Lewis Vaughan’s ACL injury, but he has since fought back to fitness and took part in several Development matches towards the end of last season."
            +"Released in May 2016 by Kilmarnock, manager Gary Locke moved swiftly to secure the speedy winger / midfielder’s signature."
            +"Chris made his Rovers debut in the 2-0 defeat against Forfar Athletic in a pre-season friendly on 28th June 2016 and scored his first goal for the club in the friendly against Brechin on 2nd July.", 
    'stats': {  'position': 'Midfielder',
                'goals':'1',
                'apps':'15',
                'yellows':'1',
                'reds':'0'
              }
  },

    {
    'id': 'sr',
    'name': 'Scott Robertson',
    'country': 'sco',
    'birth': '7th April 1985',
    'image': 'sr.jpg',
    'cover': 'sr-cover.jpg',
    'hasSocial': true,
    'social': 'https://twitter.com/scottrobbo8',
    'link': 'http://www.transfermarkt.co.uk/scott-robertson/leistungsdaten/spieler/43521',
    'about': "Scott began his career with Dundee although made his senior debut whilst on-loan at Peterhead in 2004. He went on to make over 100 appearances for the Dens Park club before moving to city rivals United in 2008. He stayed at Tannadice for four seasons, making over 100 appearances and picking up a Cup Winners medal in 2010. In July 2012 he signed a two year deal with Blackpool but the move did not go well and Scott was released from his contract in January 2013. Scott was signed for Hibernian by former manager Pat Fenlon on a two-and-a-half-year deal. He started 41 of Hibs’ 46 competitive matches in the season 2014-15 d and was their third-top-scorer, with six goals. Scott was released by Hibernian in the Summer 2015 and he signed for Romanian club Botosani in June 2015 although only made one appearance. Ray McKinnon snapped up the twice capped Scottish internationalist on 3rd October 2015 until the end of the season, but Scott extended that contract by a year in April 2016."
            +"Scott's start to the 2016-17 season has been so far hampered by injury.", 
    'stats': {  'position': 'Midfielder',
                'goals':'0',
                'apps':'0',
                'yellows':'0',
                'reds':'0'
              }
  },

  {
    'id': 'ms',
    'name': 'Mark Stewart',
    'country': 'sco',
    'birth': '22nd June 1988',
    'image': 'ms.jpg',
    'cover': 'ms-cover.jpg',
    'hasSocial': false,
    'social': '',
    'link': 'http://www.transfermarkt.co.uk/mark-stewart/leistungsdaten/spieler/36772',
    'about': "Mark played youth football for Celtic and Partick Thistle before joining Falkirk in 2006. He scored within two minutes of his professional debut in a 5-0 win over Cowdenbeath. He went on to make nearly 80 appearances for the Bairns, scoring 19 goals. Mark joined Bradford in 2011 with the Yorkshire club paying Falkirk £213,000 for training and development compensation fees. He made 12 appearances for the club and went out on-loan to Hamilton during that period, He joined Dundee in 2012 where he made 15 appearances, scoring 3 goals. He had a trial for Luton Town before joining Kilmarnock in August 2013. He made only four appearances for the Rugby Park Club before breaking his jaw in a training ground accident. He was released after five months and joined Derry City, scoring on his debut against Shamrock Rovers."
            +"Signed for Rovers on June 23rd, 2014 and made his debut against Edinburgh City in a pre-season friendly on 9th July 2014. Mark was top league scorer in both 2014-15 and 2015-16 with 10 goals in each season.", 
    'stats': {  'position': 'Forward',
                'goals':'5',
                'apps':'21',
                'yellows':'2',
                'reds':'0'
              }
  },

  {
    'id': 'lv',
    'name': 'Lewis Vaughan',
    'country': 'sco',
    'birth': '19th December 1995',
    'image': 'lv.jpg',
    'cover': 'lv-cover.jpg',
    'hasSocial': true,
    'social': 'https://twitter.com/lewiis7',
    'link': 'http://www.transfermarkt.co.uk/lewis-vaughan/leistungsdaten/spieler/241542',
    'about': "Lewis was awarded a two and a half year professional contract by then manager John McGlynn in January 2012. Lewis impressed with his performances for the U-19 team having stepped up at the young age of 16."
              +"Edinburgh based Lewis has been at Stark's Park since the age of 14."
              +"Lewis made his first team dubut in the final game of season 2011-12 coming on as a second half substitute in the 3-1 victory over Morton."
              +"Lewis made 3 league appearances in 2012-13 season."
              +"Lewis made a number of valuable contributions during the 2013-14 season with six assists and three goals."
              +"In 2014-15 Lewis became more of a first team regular and went on to make 26 appearances, scoring 7 goals."
              +"Lewis started the 2015-16 season full of promise only to be shattered when he picked up a serious injury rupturing his anterior cruciate ligament against Albion Rovers and did not play another competitive game in the season."
              +"He signed a one year contract extension in March 2016 which will see him stay at the club until the summer 2017."
              +"Lewis has started the 2016-17 season playing in every game and notching 2 goals in the pre-season friendlies and 2 goals in the Betfred League Cup.", 
    'stats': {  'position': 'Forward',
                'goals':'2',
                'apps':'18',
                'yellows':'0',
                'reds':'0'
              }
  }
];

export default players;