    OfficersViewModel = function() {
        var self = this;
        self.officers = ko.observableArray([]);

        self.selectOfficer = function(data) {
            self.selectedOfficer(data);
        };

        self.openPopUp = function() {
            $(".modal2").empty();
            $(".modal2").append(
                '<h1>' + self.selectedOfficer().officerName + '</h1><div class="modalInner2 flexParent"><div class="modalClose2"><span>x</span></div><div class="col-sm-3 centerText"><img src="' + self.selectedOfficer().officerImg + '"/></div><div class="col-sm-9">' + self.selectedOfficer().description + '</div></div>'
            );
            $(".modal2").show();
            /*click handlers*/
            $(".modalClose2").on("click", function() {
                $(".modal2").hide();
            });
        };


        self.officers.push({
            officerImg: "../static/images/officers/Allison.jpg",
            officerNumber: 1,
            officerName: "Robert James Allison",
            agency: "Kingsburg Constable",
            date: "3/21/1889",
            description: "<p>Constable Allison was 40 years of age, with 6 years of service, at the time of his death.  The cause of his death was Gunfire in an unprovoked attack by the brother of a man that Constable Allison had previously arrested.</p>"
        }, {
            officerNumber: 2,
            officerImg: "../static/images/officers/Wilson.jpg",
            officerName: "Vernon Coke Wilson",
            agency: "US Marshal's Service",
            date: "9/13/1892",
            description: "<p>On Tuesday, September 13, 1892 at 1000 hours, Deputies Wilson and McGinnis was shot and killed from ambush by Chris Evans and John Sontag, the notorious Central Valley train robbers. The robbers were staying at Jim Young’s cabin, Sampson flat in remote, mountainous eastern Fresno County. The pursuing posse of nine lead by Will Smith, Southern Pacific R.R. Detective and deputized U.S Marshal knew that they were close, they did not know how close. They broke camp and rode single file to Young’s cabin where they were going to dig up potatoes and pick roasting corn for their breakfast.</p><p>The posse arrived at Young’s cabin, dismounted and tied up their horses, some on the fence surrounding the front of the cabin, others under shade trees. Deputies Wilson and McGinnis were already inside the gate walking across the garden approaching the cabin. They did not know the cabin was occupied by Evans and Sontag, who waited with the front door ajar armed with shotguns and Winchesters. Evans thrust his weapon through a glass pane and Sontag fired through the doorway. McGinnis was shot first followed by Wilson, both men died where they stood.</p><p>Vernon Coke Wilson was born in Virginia in 1859. Wilson ended up in Texas where he joined the Texas Rangers when he reached majority, rising to the rank of Lieutenant. In 1885, President Grover Cleveland appointed Wilson Chief of the mounted Customhouse Inspectors with headquarters in Tombstone, Arizona Territory. Wilson held this post for four years during which he met his wife, Minnie Knapp. Wilson briefly tried farming at the conclusion of his term but found it uninteresting. In 1890, Wilson was appointed a Special Agent for the Southern Pacific Railroad covering Arizona and New Mexico. Wilson was returned to Tucson, Arizona for burial.</p>"
        }, {
            officerImg: "../static/images/officers/McGinnis.jpg",
            officerNumber: 3,
            officerName: "Andrew W. McGinnis",
            agency: "US Marshal's Service",
            date: "9/13/1892",
            description: "<p>On Tuesday, September 13, 1892 at 1000 hours, Deputies Wilson and McGinnis were shot and killed due an ambush by notorious Central Valley train robbers.  See Vernon Coke Wilson for details.</p><p>Andrew W. McGinnis was born in Georgia in 1852 and arrived in San Francisco via the Isthmus on June 1, 1856. The family moved about California finally settling in Knights Ferry, Stanislaus County, California. In 1868, McGinnis, age16, had an encounter on the streets of Knights Ferry. The teacher of McGinnis’s siblings, Mr. Cheshire made some comments that resulted in a confrontation between Cheshire and McGinnis’s father. Pistols were produced, shots fired and Cheshire was left standing. McGinnis picked up his dead father’s pistol and killed Cheshire. McGinnis was tried and acquitted. McGinnis went on to serve in Stanislaus County as a Deputy Constable and Deputy Sheriff. While living in Modesto, McGinnis became acquainted with Evans and Sontag who ran a livery stable. McGinnis enjoyed a reputation as being a very good officer. McGinnis was survived by a wife and daughter. McGinnis was interred at Modesto.</p>"
        }, {
            officerImg: "../static/images/officers/VanMeter.jpg",
            officerNumber: 4,
            officerName: "Harry Van Meter",
            agency: "Fresno Police Department",
            date: "2/21/1907",
            description: "<p>On February 21, 1907, Officer Harry Van Meter was shot while attempting to capture a burglar near Inyo and Broadway at the old 'Boss Dye Works.'  Officer Van Meter died the following day, and became the first Fresno Police Officer to be placed on the Honor Roll of officers killed in the line of duty.  Before he died, Officer Van Meter named his killer, but the man provided witnesses who swore he had been playing cards in a local tavern at the time of the shooting, and the killer of Harry Van Meter was never brought to trial. The prime suspect in the case was also the prime suspect in the murder of Deputy Joe Price of the Fresno County Sheriff's Department.</p>"
        }, {
            officerImg: "../static/images/officers/Price.jpg",
            officerNumber: 5,
            officerName: "Joe D. Price",
            agency: "Fresno Sheriff's Department",
            date: "3/13/1907",
            description: "<p>On March 2, 1907, Joseph W. Grayless, a rancher of Temperance Colony, reported the theft of a fall-top buggy and a white horse from the Courthouse Park.  Dep. Joe Price investigated the case.  He recovered the buggy in the Centerville area on March9,1907, and developed James ‘Jim’ Richardson as a suspect. </p><p>On March 13,1907, Dep. Price, accompanied by Joseph Grayless, served a search warrant at the Farrabee wood camp, 1 ½ miles above the Squaw Valley Post Office, where Richardson was living with his sister and brother-in-law.  Items stolen from the buggy were discovered in a tent where Richardson was staying.  Dep. Price advised Richardson that he was under arrest.  Richardson wheeled around on Price with a pistol and pulled the trigger several times.  Richardson’s gun misfired and he surrendered when Price pulled his gun.  Price, who had no handcuffs, had Richardson kneel and Grayless bound him with a rope.  Price and Grayless then placed Richardson in their buggy and departed. A short distance from the Farrabee camp they came across the stolen horse.   Grayless got out of the buggy and saddled his horse as Price continued on.</p><p>During the trip down the hill, Richardson loudly complained that he was hungry, and Price stopped at the Ockenden Store in Squaw Valley, untying Richardson and getting him food to eat.  When they started back down the hill, Price apparently did not tie Richardson back up.  Grayless also stopped in Squaw Valley for a meal, and it was 5 PM, when he came upon Price’s buggy on the Centerville Rd at Dunnigan’s Gap, 5-6 miles above Centerville.  Grayless discovered the body of Dep. Price in the buggy with a fatal stab wound to the neck.</p><p>Richardson returned briefly to his relative’s home to collect some food and clothing before fleeing and told them that he’d killed Price.  Posses of officers and mountaineers combed the area fruitlessly for a month before conceding that Richardson had slipped out of the area.  Richardson was never arrested on Price’s murder.</p><p>Joe Price was born in Academy, where his father was a rancher.  He had been the Sanger Constable for four years prior to being appointed Deputy Sheriff.  He was murdered on his 32nd birthday.  Price was survived by his mother, a sister and a brother.   Avenue.</p>"
        }, {
            officerImg: "",
            officerNumber: 6,
            officerName: "Lucius C. Smith",
            agency: "Fresno Police Department",
            date: "10/10/1907",
            description: "<p>No Photo Available</p><p>On October 10,1907, at 0235 hours, Special Policeman/Night Watchman Lucius C. Smith was shot and killed by a burglar in the alley located between J and K streets behind the Barton Opera House. Officer Smith and his four- legged partner, Jim, were on foot patrol in Smith's beat, which encompassed the downtown area of the City of Fresno. A brief and deadly gun battle ensued in which eight shots were fired, one from Smith's .41 Colt and seven from the assailant's automatic pistol. Smith was shot four times and died at the scene.</p>"
        }, {
            officerImg: "../static/images/officers/Helms.jpg",
            officerNumber: 7,
            officerName: "Clay V. Helms",
            agency: "Fresno Police Department",
            date: "5/15/1911",
            description: "<p>Patrolman Helms succumbed to injuries received four months earlier in a train derailment. He was escorting a mental patient to the Stockton State Hospital when the train they were riding in collided with a three-car work train and derailed.</p>"
        }, {
            officerImg: "../static/images/officers/Rouse.jpg",
            officerNumber: 8,
            officerName: "Charles Rouse",
            agency: "Fresno Police Department",
            date: "4/16/1916",
            description: "<p>Patrolman C. L. Rouse, who had been on the department for two years, became the second Fresno Police Officer to be killed in the line of duty when he was shot in the back and killed at the corner of Tulare and 'F' Streets while attempting to get help for a man who had been stabbed.  His assailant, Albert Pena, was shot and killed in a gun battle with police in San Luis Obispo nine days later.</p>"
        }, {
            officerImg: "../static/images/officers/French.jpg",
            officerNumber: 9,
            officerName: "Fred French",
            agency: "Kingsburg Police Department",
            date: "11/1/1916",
            description: "<p>A suspect was involved in a disturbance in a pool hall and was arrested by Officer French.  At the jail, the suspect apologized and asked to be allowed to go home and go to bed. He was released. The suspect went home and armed himself with a double barrel shotgun. He walked to the business district and locating French, sneaked up on him and shot him twice in the back with the shotgun.</p>"
        }, {
            officerImg: "../static/images/officers/Chamness.jpg",
            officerNumber: 10,
            officerName: "A.B. Chamness",
            agency: "Fowler Constable",
            date: "9/27/1917",
            description: "<p>On September 22,1917,at about 1900 hours, an intoxicated hit & run driver struck a buggy carrying a woman and her children on the south end of Fresno. The driver of a motor stage, taking passengers from Fresno to Selma, followed and obtained a license plate number. The stage driver drove to the home of Fowler Constable A.B.Chamness to report the incident. Constable Chamness boarded the stage, which returned to the state highway in time to observe the suspect vehicle southbound. The stage passed the suspect vehicle and approximately a mile south of Fowler Constable Chamness attempted to flag down the suspect. The suspect failed to stop and ran over the Constable, inflicting fatal injuries from which the Constable died. Sheriff Horace Thorwaldson arrested the suspect, a Parlier farmer, later that evening.</p><p> Constable Chamness, a native of Texas, had been the Constable of Fowler since 1910.He had previously served as a Police Officer in Midland, Texas, as a Texas Ranger and as the Fowler City Marshal.  He was survived by his wife, Hattie, five daughters and two sons. Funeral services were held on September 27th at the Fowler Baptist Church and he was buried at Fowler Cemetery.</p>"
        }, {
            officerImg: "../static/images/officers/Smartt.jpg",
            officerNumber: 11,
            officerName: "Frederick J. Smartt",
            agency: "Fresno Constable",
            date: "9/16/1918",
            description: "<p>On August 15,1918,at approximately 1830 hours, Deputy Constable Fred Smartt of the Fresno Judicial District, was involved in a traffic accident while returning to the Constable’s Office. Deputy Constable Smartt rode a motorcycle while attending to his duties, and as he proceeded westbound on Ventura Blvd. an eastbound fruit truck turned north on First St., into Smartt’s path. Deputy Constable Smartt attempted to avoid the oncoming truck, but he was struck and seriously injured. He was operated on that evening at County Hospital, but died of abdominal injuries at 1130 hours, the following morning.</p><p> Deputy Constable Smartt was sworn in on February 11,1918. He was a native of Salinas and lived most of his life in Fresno County. He had been a peace officer off and on for twenty years. He had previously served as the Reedley Constable and as a Fresno County Deputy Sheriff. He also worked as a butcher and as a railroad man.</p><p>Deputy Constable Smartt was survived by his wife Dorothy, two brothers and three sisters.</p>"
        }, {
            officerImg: "../static/images/officers/Harris.jpg",
            officerNumber: 12,
            officerName: "Jack C. Harris",
            agency: "A.T.& S.F. R.R. Police",
            date: "7/15/1919",
            description: "<p>Special Officer Harris was shot and killed at the Calwa Rail Yard in Fresno County, California, while investigating two hobos in a Wabash coal car. Officer Harris was notified of the two by a rail worker at approximately 0100 hours and went to investigate them. While in the coal car the suspects fired five shots, striking Officer Harris in the head.</p>"
        }, {
            officerImg: "../static/images/officers/Aubery.jpg",
            officerNumber: 13,
            officerName: "Wellington L. Aubery",
            agency: "Fresno County DA's Office",
            date: "1/14/1921",
            description: "<p>On January 14, 1921, at approximately 1100 Hrs., Fresno County Chief Traffic Officer Wellington L. “Bill” Aubery was pursuing a speeder westbound on Kearney Blvd. west of Marks Ave.  It was a foggy day and Officer Aubery’s vehicle skidded out of control on the wet roadway, striking a palm tree and overturning.  Officer Aubery was pinned beneath the vehicle.  A passing motorist discovered the accident and freed Aubery from the wreckage and summoned an ambulance.  He was transported to the Burnett Sanitarium, but died at 4 PM that afternoon from chest injuries.</p><p> A native of Mountain View, Santa Clara County, Officer Aubery had been appointed Chief Traffic Officer by District Attorney M.F. McCormick when the county began enforcing traffic laws in 1917.  He had previously served as a Police Officer for the City of Fresno and as a Deputy Constable in the Fresno Judicial District.  His police service totaled sixteen years.</p><p>He was survived by his wife, Mary, a son and three daughters.</p>"
        }, {
            officerImg: "../static/images/officers/Hardenbrook.jpg",
            officerNumber: 14,
            officerName: "James M. Hardenbrook",
            agency: "Fresno Police Department",
            date: "7/31/1922",
            description: "<p>Sgt. Jim Hardenbrook was killed while attempting to capture three escapees from the Preston School of Industry, who were also wanted for armed robbery.  Sgt. Hardenbrook cornered the trio in the 200 block of Broadway, and in the ensuing gun battle, was shot through the forehead and chest, and died a short time later.  His assailants, who escaped, were captured one at a time during the following two weeks and were later brought to trial and sentenced to life imprisonment.  The shooter was paroled in 1932.</p>"
        }, {
            officerImg: "../static/images/officers/Boyle.jpg",
            officerNumber: 15,
            officerName: "George W. Boyle",
            agency: "Kingsburg Constable",
            date: "11/18/1924",
            description: "<p>On the evening of November 14,1924, Kingsburg Constable George Boyle and Deputy City Marshal Vic Linman confronted four occupants of a wanted vehicle at the Main Garage on the state highway (now Draper St.) in Kingsburg. Three of the four subjects were prison escapees and they had been involved in a murder and a string of residential robberies at Japanese owned farms from Lodi to Parlier. Constable Boyle approached their vehicle, ordering them out. He was met by gunfire, suffering four wounds. Linman returned fire, seriously wounding one of the suspects, before they roared off in the suspect vehicle to Fresno. Three of the four were arrested within hours, and the wounded robber died two weeks later. Constable Boyle, wounded in the neck, the abdomen and twice in the back, died of peritonitis on November 18th.</p><p>Constable Boyle was a native of Missouri. He had been the Kingsburg Constable for twenty-four years. Before immigrating to California he had served as a Deputy Sheriff in Lincoln County, Kansas, for several years.  He was survived by his two sons and three grandchildren.</p>"
        }, {
            officerImg: "",
            officerNumber: 16,
            officerName: "Dallas A. Roberts",
            agency: "ATF-Prohibition Bureau",
            date: "1/20/1926",
            description: "<p>No Photo Available</p><p>Agent Roberts succumbed to injuries sustained two days earlier when he was involved in an automobile accident in Fresno County, California. He had taken part in a raid in Firebaugh and was transporting three prisoners to jail, along with the Fresno County deputy district attorney, when the accident occurred. Agent Roberts suffered a broken neck and died two days later.</p>"
        }, {
            officerImg: "../static/images/officers/Thorwaldson.jpg",
            officerNumber: 17,
            officerName: "Horace Thorwaldson",
            agency: "ATF-Prohibition Bureau",
            date: "12/19/1926",
            description: "<p>Agent Thorwaldson was conducting an investigation, when he was killed in an automobile accident near Fresno, California, while en route to Raisin City. During the drive he braked to avoid another car, causing his car to go out of control and roll over. He was transported to a local hospital where he died of his injuries.</p>"
        }, {
            officerImg: "../static/images/officers/Brame.jpg",
            officerNumber: 18,
            officerName: "John Brame",
            agency: "Fresno Police Department",
            date: "1/22/1931",
            description: "<p>Sergeant Brame was shot and killed by the same suspect who had shot and killed Detective Frank Campbell one week earlier. Officers received information that the man had returned to his home. When the officers went there to arrest him Sergeant Brame was shot and killed. The suspect was shot and killed by other officers.</p>"
        }, {
            officerImg: "../static/images/officers/OLeary.jpg",
            officerNumber: 19,
            officerName: "John J. O'Leary",
            agency: "Fresno Sheriff's Department",
            date: "3/31/1931",
            description: "<p>On March 30,1931, Deputies John J. O’Leary and Glen Vernon transported two prisoners to San Quentin State Prison. In San Francisco the following morning, O’Leary suffered a fatal heart attack as the two deputies prepared to return to Fresno.</p><p>In January, Deputy O’Leary had suffered a debilitating attack of influenza. While ill, Deputy O’Leary arose from his sick bed to join in a search for Leo Soldo, who had murdered two Fresno PD officers. The manhunt for Soldo started on January 15,1931 and concluded on January 22,1931. Soldo being cornered and killed by law enforcement.  After the capture, O'Leary was seized with a relapse and taken to Dr. G.T.Mountford.  He had contracted rheumatism of the heart as a result of the Soldo hunt. He was  warned against over exertion and was detailed to lighter work in the sheriff’s office. O’Leary had returned to work for only two days before his death.</p><p>Deputy O’Leary was born on October.12, 1886, in San Francisco and moved to Coalinga in 1909 to open a blacksmith shop. He began his law enforcement career in 1910, as Deputy Marshal for the City Of Coalinga, later transferring to the Coalinga Fire Department. In the late 1920’s Deputy O’Leary returned to law enforcement as a Deputy Constable in Coalinga. He was appointed Deputy Sheriff  in January 1931.</p><p>Deputy O’Leary was survived by his wife Elsie, two sons, John and Edgar, and a daughter, Janice.</p>"
        }, {
            officerImg: "../static/images/officers/Campbell.jpg",
            officerNumber: 20,
            officerName: "Frank Campbell",
            agency: "Fresno Police Department",
            date: "1/15/1931",
            description: "<p>Detective Campbell shot and killed while attempting to arrest a suspect in a residence. The suspect fled the scene but returned to the house one week later. When officers returned to the scene the suspect shot and killed Sergeant John Brame. The suspect was shot and killed by return gunfire.</p>"
        }, {
            officerImg: "../static/images/officers/Collins.jpg",
            officerNumber: 21,
            officerName: "Harry W. Collins",
            agency: "Fresno Sheriff's Department",
            date: "2/25/1937",
            description: "<p>On the afternoon of February 7, 1934, Deputy Harry Collins and Undersheriff C.A. “Jack” Tarr were searching in the Sacramento area for a key witness in an upcoming murder trial.  They were driving near Galt, when their vehicle was struck by a gasoline tanker.  Deputy Collins suffered a fractured skull, fractured shoulder, and broken ribs and was listed in critical condition.  He never fully recovered from his injuries and died three years later of a stroke attributed to his original injuries.</p><p>Deputy Collins was a native of Hayward and moved to Fresno County at the age of thirteen.  Prior to his law enforcement career he was employed on cattle ranches around the county.</p><p> <p>Deputy Collins was survived by his wife, Deputy Ruth Collins, jail matron, who worked for the Sheriff’s Department 1941-62, and his son, Deputy Albert Collins, who served 1937-72.  Albert Collins was sworn in as his father’s replacement by Sheriff George Overholt two weeks prior to Harry Collins’s death.</p>"
        }, {
            officerImg: "../static/images/officers/Carr.jpg",
            officerNumber: 22,
            officerName: "E.R. Carr",
            agency: "California Highway Patrol",
            date: "1/26/1938",
            description: "<p>Sergeant E.R. 'Ed' Carr, 57, was investigating a stalled vehicle on the Golden Gate Highway Pass, near Fresno, when he was struck and killed by a passing automobile.</p><p>The 17-year-old driver claimed he did not see Carr as he walked toward the stalled vehicle.  Investigating officers found a lighted flashlight in Carr's hand. Carr had just been promoted to the rank of sergeant one day before he was killed.</p>"

        }, {
            officerImg: "../static/images/officers/Forsman.jpg",
            officerNumber: 23,
            officerName: "Elmer Forsman",
            agency: "Fresno Police Department",
            date: "10/7/1946",
            description: "<p>Motorcycle Officer Elmer Forsman died from injuries received on October 6, 1946, in a collision between his motorcycle and a passenger car.  The accident occurred at the corner of Blackstone and Thomas Streets, while Officer Forsman was engaged in traffic enforcement duties.</p>"
        }, {
            officerImg: "../static/images/officers/Mitchell.jpg",
            officerNumber: 24,
            officerName: "Oliver P. Mitchell",
            agency: "Laton Constable",
            date: "4/29/1950",
            description: "<p>On April 29,1950,Laton Constable O.P.Mitchell died of a cerebral hemorrhage, the result of being struck in the head by an arrestee about a year prior. He had been in poor health since the time of the incident.</p><p>Born on February 1,1888, Mitchell was a native of DeKalb County, Missouri. He resided in Laton for eighteen years and was Constable of the Laton Judicial District for twelve years. He also operated a garage business. Mitchell was a member of numerous fraternal organizations and the Fresno County Peace Officer’s Association.</p><p>On May 2nd,Masonic funeral services were held. Constable Mitchell was survived by his wife, Alice, daughters Mary Ann and Belle, and the foster children he raised as his own.</p>"
        }, {
            officerImg: "../static/images/officers/Brown.jpg",
            officerNumber: 25,
            officerName: "C. L. Brown",
            agency: "Coalinga Game Warden",
            date: "04/03/1959",
            description: "<p>On April 03, 1959, at approximately 2100 hours, Warden Brown was returning home from patrol in the Warthan Canyon area, just outside of Coalinga.  He was involved in a single vehicle accident 5.8 miles west of Coalinga on Hwy. 198.  He lost control of his vehicle, causing it to leave the roadway and roll 200 feet to the bottom of a canyon, killing him instantly.  He was to retire in July three months after his fatal accident.</p><p>Warden Clarence Lester Brown was born in Bronson, Kansas on January 12, 1899.  He came to California in 1916 and to Fresno County in 1942.  He lived in the Coalinga area for the last fifteen years of his life and served as the Coalinga Game Warden when he passed.  He was with the Department of Fish and Game for approximately 31 years, where he started his career as a trapper and then later became a game warden.</p><p>Warden Brown was married to Elsie Brown and had two daughters Lorraine and Marilyn. </p>"
        }, {
            officerImg: "../static/images/officers/Bain.jpg",
            officerNumber: 26,
            officerName: "Richard T. Bain",
            agency: "Fresno Sheriff's Department",
            date: "11/16/1961",
            description: "<p>On 11/16/61, at approximately 0150 Hrs., while on duty, Sergeant Richard T. Bain was driving eastbound on Dayton Ave., east of Blackstone Ave.  At the intersection of Dayton and Diana he lost control of his vehicle, which jumped a curb and struck the front of a residence.  Sergeant Bain suffered severe chest injuries, which resulted in his death prior to his arrival at Fresno County General Hospital.</p><p> Sergeant Bain was the supervisor of the misdemeanor follow-up detail.  Prior to his service with the Sheriff’s Department, he had served 1 ½ years as a Deputy Constable in the Fresno Constable’s Office.</p><p> Sergeant Bain was a native of North Carolina and a Marine Corps veteran of WWII.  He was survived by his wife, Betty, and his daughters, Bonnie, Judy and Patti Jo.</p>"
        }, {
            officerImg: "../static/images/officers/Johanson.jpg",
            officerNumber: 27,
            officerName: "Iver W. Johanson",
            agency: "Selma Constable",
            date: "12/15/1961",
            description: "<p>On Thursday evening, December 15,1961, at approximately 2340 hours, Constable Johanson, while struggling with an intoxicated, combative suspect, suffered a fatal heart attack.  While patrolling through the Freeway Lanes bowling alley parking lot, at Dinuba Avenue and Highway 99, Constable Johanson observed a hit and run accident involving a vehicle driven by Ortiz and a parked car. Ortiz failed to stop with Johanson in pursuit. Constable Johanson activated his vehicle’s emergency equipment and followed Ortiz onto Highway 99, where Ortiz finally yielded.</p><p>Deputy Lopez, who was on foot nearby, observed the vehicle stop and as Johanson successfully removed the combative Ortiz from his vehicle.  Johanson managed to handcuff one of Ortiz’s hands when Ortiz increased his resistance. Lopez went to Johanson’s aid as a fight ensued during which Constable Johanson was attacked with his own blackjack. Johanson was knocked down to the ground and was semi-conscious, while Lopez and Ortiz fought. Lopez recovered the blackjack and used it to subdue Ortiz.</p><p>Constable Johanson was transported to Selma District Hospital where he was pronounced dead.  He was born in Sweden on June 14,1904, immigrated with his family to this country in 1905, and grew up in Fresno County. Johanson, a twenty year law enforcement veteran, had been a police officer for the City of Selma and was elected Constable in 1950.  Johanson was survived by his wife and stepson.</p>"
        }, {
            officerImg: "../static/images/officers/Valdez.jpg",
            officerNumber: 28,
            officerName: "Richard P. Valdez",
            agency: "Fowler Constable",
            date: "1/26/1962",
            description: "<p>On January 26,1962,at approximately 2200 hours, Fowler Constable Richard Valdez was southbound on Highway 99 (Golden State Blvd.) north of Clayton Ave., returning to Fowler from Fresno. Constable Valdez lost control of his vehicle, which skidded into the center divider and struck a tree. Constable Valdez was thrown from the vehicle and suffered fatal chest injuries.</p><p>Constable Valdez was born on September 7,1921, the native of Tres Pinos, San Benito County was a veteran of World War II. He had previously served as a peace officer in San Benito County and as a Fowler PD Officer.  He was Constable of the Fowler Judicial District for four and a half years.</p><p>Constable Valdez was survived by his wife Lucy and two daughters and a son.</p>"
        }, {
            officerImg: "../static/images/officers/Turre.jpg",
            officerNumber: 29,
            officerName: "Jerry E. Turre",
            agency: "California Highway Patrol",
            date: "4/21/1962",
            description: "<p>Officer Jerry E. Turre was investigating an accident scene near Fresno at 2 a.m. and was laying flares when he was struck and killed by a hit-and-run driver.</p><p>The accident occurred on a clear night and the flares were visible for 1/4 mile at the time of the accident, leading investigators to conclude that the hit-and-run driver was also under the influence</p>"
        }, {
            officerImg: "../static/images/officers/Hurst.jpg",
            officerNumber: 30,
            officerName: "Harold Hurst",
            agency: "Fresno Sheriff's Department",
            date: "10/2/1968",
            description: "<p>On September 28, 1968, at 0021 Hrs., Deputy Harold Hurst was traveling northbound on Fowler Avenue in a marked Sheriff’s patrol vehicle.  As he arrived at the uncontrolled Southern Pacific Railroad tracks in the 1000 block of South Fowler, his vehicle collided with a westbound freight train.  Deputy Hurst was thrown from his patrol car and suffered a skull fracture and other injuries.  He was transported to Fresno County General Hospital for treatment, but he developed pneumonia and died on October 2nd. Before serving with the Fresno County Sheriff’s Department, Deputy Hurst had spent three years as a Deputy Sheriff with the San Joaquin County Sheriff’s Department.  He was also a U.S. Army veteran</p>.<p>Deputy Hurst, a Stockton native, was survived by his wife, Janet, and two daughters from a prior marriage.</p>"
        }, {
            officerImg: "../static/images/officers/Reagan.jpg",
            officerNumber: 31,
            officerName: "Gerald M. Reagan",
            agency: "CA. DOJ-BNE",
            date: "11/5/1969",
            description: "<p>Agent Reagan was active in the Reserves Unit which is affiliated with the Fresno County Sheriff's Department. In the spring of 1969 he was chosen by his instructors and peers as the Reserve Officer of the Year. Upon graduation in June, 1969, he was hired by the Bureau of Narcotics Enforcement (BNE) as a Narcotics Agent, based in Fresno.</p><p>On a rainy evening of November 5, 1969, while en route to the stake-out of a lab in Merced, Jerry's car was hit broadside and he died instantly. He was laid to rest on his 22nd birthday.</p>"
        }, {
            officerImg: "../static/images/officers/Holland.jpg",
            officerNumber: 32,
            officerName: "Homer L. Holland",
            agency: "Fresno Police Department",
            date: "9/27/1972",
            description: "<p>Homer Lee Holland joined the Fresno Police Department on October 1, 1955.  He started his career on foot patrol, then went to a patrol car, and then to the motorcycle patrol unit.  He eventually became a day dispatcher and held that position for approximately ten years until his death.  On September 27, 1972, he was at work when he became ill and died from a massive heart attack while on duty.  He was survived by his wife, Helen, two daughters, Sandra and Karen, two brothers, Larry and Harold, five sisters, Louise, Lou Ann, Nadine, Patsy, and Alice.</p>"
        }, {
            officerImg: "../static/images/officers/Mosqueda.jpg",
            officerNumber: 33,
            officerName: "Salvador G. Mosqueda",
            agency: "Fresno Police Department",
            date: "9/20/1973",
            description: "<p>Sergeant Mosqueda was shot and killed while responding to the home of a robbery suspect. The man had robbed a grocery store and tracked back to his residence. As Sergeant Mosqueda drove into the area the suspect opened fire, fatally wounding him. The man then held other officers at bay and was killed in a fire which resulted after tear gas canisters were shot into the home.</p>"
        }, {
            officerImg: "../static/images/officers/Houtchens.jpg",
            officerNumber: 34,
            officerName: "Robert B. Houtchens",
            agency: "Coalinga Police Department",
            date: "12/8/1973",
            description: "<p>While on duty Capt. Houtchens passed away from a massive heart attack.</p>"
        }, {
            officerImg: "../static/images/officers/Nix.jpg",
            officerNumber: 35,
            officerName: "W.R. 'Dub' Nix",
            agency: "Coalinga Police Department",
            date: "12/29/1973",
            description: "<p>While on duty Sgt. Nix passed away from a massive heart attack. It should be noted that he served as a pallbearer at Capt. Houtchens funeral.</p>"
        }, {
            officerImg: "../static/images/officers/Medrano.jpg",
            officerNumber: 36,
            officerName: "Perfecto Medrano",
            agency: "Sanger Police Department",
            date: "6/11/1975",
            description: "<p>Officer Medrano was killed in an automobile accident during a vehicle pursuit of a stolen car driven by a 13-year-old female suspect. </p><p>The suspect ran the stop sign at Clovis Avenue on North Avenue and another vehicle hit Officer Medrano's car as he went through the intersection</p>"
        }, {
            officerImg: "../static/images/officers/Fuller.jpg",
            officerNumber: 37,
            officerName: "Henry A. Fuller",
            agency: "Fresno Co. Probation",
            date: "6/17/1975",
            description: "<p>On June 17, 1975, Deputy Probation Officer Henry Fuller drowned at Pine Flat Lake during a boating incident while supervising youths."
        }, {
            officerImg: "../static/images/officers/Maldonado.jpg",
            officerNumber: 38,
            officerName: "Sixto Maldonado",
            agency: "Firebaugh Police Department",
            date: "8/19/1975",
            description: "<p>Maldonado, 23, was shot in the back while on duty as the night dispatcher at the Firebaugh police station about 2:30 a.m. on Aug. 19, 1975. He died a few hours later.</p><p>The suspect, James C. Heather, 22, of Firebaugh, apparently killed himself in a vacant building near the station not long after allegedly shooting Maldonado.</p>"
        }, {
            officerImg: "../static/images/officers/Palacios.jpg",
            officerNumber: 39,
            officerName: "John Palacios",
            agency: "Huron Police Department",
            date: "6/13/1976",
            description: "<p>Officer Palacios was struck and killed by a drunk driver while assisting at the scene of an accident on State Route 198, near State Route 269 in Fresno County.</p><p>Officer Palacios was struck by the drunk driver while conducting traffic control at the accident scene. The suspect was taken into custody after being detained by three citizens.</p>"
        }, {
            officerImg: "../static/images/officers/Sims.jpg",
            officerNumber: 40,
            officerName: "Jack Sims",
            agency: "Fresno Police Department",
            date: "2/6/1977",
            description: "<p>Officer Jack D. Sims passed away while on duty February 6, 1977.  Jack went on duty as usual on the morning of February 6, 1977, but later he was found in his patrol car, dead of natural causes.  (Possible heart attack)</p>"
        }, {
            officerImg: "../static/images/officers/Stevenson.jpg",
            officerNumber: 41,
            officerName: "Lanny 'Skip' Stevenson",
            agency: "Fresno Police Department",
            date: "12/8/1979",
            description: "<p>Officer Stevenson was shot and killed after he broke up an argument between another off-duty officer and a man at a party. As the two officers left the party the suspect opened fire, killing Officer Stevenson. The suspect was arrested four hours later and charged with murder.</p>"
        }, {
            officerImg: "../static/images/officers/Holloway.jpg",
            officerNumber: 42,
            officerName: "Donald R. Holloway",
            agency: "California Highway Patrol",
            date: "1/4/1980",
            description: "<p>Officer Donald R. Holloway, a licensed private pilot, was using his personal aircraft to fly to a court appearance where he was testifying in a criminal case Holloway was returning to his home in Coalinga when his aircraft crashed, killing him instantly.</p>"
        }, {
            officerImg: "../static/images/officers/LHolloway.jpg",
            officerNumber: 43,
            officerName: "Luella K. Holloway",
            agency: "Coalinga Police department",
            date: "1/4/1980",
            description: "<p>Chief Holloway and her husband, Donald R. Holloway, were killed when the Cessna 172 the Chief and husband were flying in crashed due to poor weather and visibility conditions.  She was returning from a Police Officers Standards and Training (POST) commission meeting in Sacramento along with her husband, CHP officer Don Holloway at the time. They had crashed into a field 20 miles east of Coalinga located off of interstate 5 and Derrick Ave.</p><p>Chief Holloway was California’s first female police chief. Prior to that she served with the Los Angeles County Sheriff’s Office for 21 years.</p>"
        }, {
            officerImg: "../static/images/officers/Hissong.jpg",
            officerNumber: 44,
            officerName: "John R. Hissong II",
            agency: "Fresno Police Department",
            date: "7/4/1981",
            description: "<p>Officer Hissong suffered a fatal attack during a foot pursuit of a vandalism suspect. Officer Hissong had responded to a local hotel after receiving reports of vandalism. When he arrived at the hotel he was taken to the rear of the hotel where the vandalism had taken place.</p><p>Officer Hissong located the suspect prior to the arrival of backup officers. He pursued the suspect on foot for approximately 150 feet, at which point he caught the suspect but immediately collapsed on top of the man. Responding officers located Officer Hissong and immediately started CPR. He was transported to St. Agnes Medical Center where he was pronounced dead.</p><p>Officer Hissong had served with the Fresno Police Department for 2 years and had previously served with the Weld County, Colorado, Sheriff's Department. He was survived by his wife, daughter, and son</p>"
        }, {
            officerImg: "../static/images/officers/Avila.gif",
            officerNumber: 45,
            officerName: "Michael Avila",
            agency: "Parlier Police Department",
            date: "11/15/1981",
            description: "<p>On November 15, 1981, at 2315 hrs., Patrolman Avila was shot and killed after responding to a man with a gun call.  The call was to a local Parlier tavern, where he and another officer became involved in a struggle with a subject who drew a 9mm handgun.  During the struggle, a second subject opened fire on the officers with a .25 handgun, striking Officer Avila three times.  Officer Avila died immediately.  The second officer, who was also struck by gunfire and wounded, was able to return fire and fatally struck the second suspect, who had shot Officer Avila.  The first suspect escaped from the scene, but was later apprehended in southern California. Officer Avila, aged 36, was a 13 year veteran of law enforcement.</p>"
        }, {
            officerImg: "../static/images/officers/Graves.jpg",
            officerNumber: 46,
            officerName: "David G. Graves",
            agency: "Fresno Sheriff's Department",
            date: "11/5/1982",
            description: "<p>On November 5, 1982, at approximately 2335 Hrs., Deputy David Graves was on routine patrol on Shaw Avenue west of Hwy 99 in a marked Sheriff’s patrol vehicle.  As he passed westbound through the intersection of Shaw and Dickenson, his vehicle was struck by a northbound pick-up truck, which had run the stop sign.  Deputy Graves suffered severe head injuries, which resulted in his death prior to his arrival at Valley Medical Center.</p><p>Investigation by the California Highway Patrol revealed that the driver of the pick-up truck, a 28 year-old Clovis man, was intoxicated at the time of the crash.  The suspect’s wife was also killed in the accident.  The suspect was subsequently sentenced to four years in state prison for the two deaths.</p><p>During his time with the Sheriff’s Department Deputy Graves served in the Patrol Division, working out of the Selma Substation and in the Metro area.  He was also a member of Search and Rescue. </p><p>Deputy Graves was a native of Fresno and a graduate of Hoover High School and Fresno City College. Before entering law enforcement he had worked as a carpenter and had operated his own construction business.  He had also served as a volunteer member of the FSD Search and Rescue Unit.  Deputy Graves was survived by his wife, Karen, and his daughters, Kelly and Christine.</p>"
        }, {
            officerImg: "../static/images/officers/Walker.jpg",
            officerNumber: 47,
            officerName: "Joseph L. Walker",
            agency: "Kerman Police Department",
            date: "3/3/1989",
            description: "<p>Officer Walker, a Vietnam Navy veteran, passed away while on duty March 3, 1989.  Joseph went on duty as usual, but later died of a massive heart attack.</p>"
        }, {
            officerImg: "../static/images/officers/Connelly.jpg",
            officerNumber: 48,
            officerName: "Keith Connelly",
            agency: "US Border Patrol",
            date: "9/6/1989",
            description: "<p>Agent Connelly was shot and killed during an undercover investigation in Fresno, California. He and his partner were posing as employers offering cash for illegal immigrants. As they attempted to make an arrest in a convenience store parking lot the suspects opened fire, wounding both agents. Agent Connelly later succumbed to his wound.  The suspected shooter pleaded guilty to murdering Agent Connelly and was sent to prison. He is eligible for release in 2013.</p>"
        }, {
            officerImg: "../static/images/officers/Lehn.jpg",
            officerNumber: 49,
            officerName: "William E. Lehn",
            agency: "Fresno Police Department",
            date: "6/21/1994",
            description: "<p>Officer Lehn, 38, was killed when his motorcycle was struck by another vehicle during a pursuit. He was pursuing a stolen car when a motorist pulled out in front of him, causing him to be ejected from his motorcycle.</p><p>Officer Lehn had served with the agency for 7 years. He is survived by his wife, three daughters, step-son, grandson, mother and brother.</p>"
        }, {
            officerImg: "../static/images/officers/Morgenson.jpg",
            officerNumber: 50,
            officerName: "James R. Morgenson",
            agency: "US Department Of Interior/National Parks Service",
            date: "7/22/1997",
            description: "<p>Ranger Morgenson drowned after being swept over a waterfall while on a backcountry patrol in the Sequoia and Kings Canyon National Park, California. Other rangers began to search for him after he failed to check in with dispatch at the regular time following the first day of the patrol.</p><p>Despite an exhaustive search, his remains were not found until July 2001 in Fresno County, nearly five years after he went missing. It is believed that Ranger Morgenson fell into a stream while attempting to cross it and was swept over the waterfall.</p><p>Ranger Morgenson had served with the agency for 27 years. He was survived by his wife.</p>"
        }, {
            officerImg: "../static/images/officers/Isaac.jpg",
            officerNumber: 51,
            officerName: "Jeffrey S. Isaac",
            agency: "Fresno Sheriff's Department",
            date: "9/8/1997",
            description: "<p>On 9/8/97, at approximately 0100 Hrs. Deputy Jeff Isaac was driving a marked Sheriff’s patrol car eastbound on Manning Avenue near Rio Vista Avenue in the Reedley area.  The patrol car struck the center divider, over corrected, and overturned on a bridge abutment.  The accident was reported by a passing citizen.  Emergency personnel quickly responded to the scene and worked to free Deputy Isaac, who was trapped in the wreckage.  After he was removed from the vehicle, Deputy Isaac was transported to University Medical Center, where he underwent surgery.  At approximately 5 am he died of chest and abdominal injuries suffered in the accident.</p><p>Deputy Isaac, the son of a state parole officer, spent most of his life in the Reedley area.  He graduated from Immanuel Academy in 1988, and attended Kings River Junior College.  He also served four years in the United States Air Force.</p><p>Deputy Isaac was survived by his wife, Bridget, a daughter, Chantelle, and a son, Spencer.</p> "
        }, {
            officerImg: "../static/images/officers/Hillman.jpg",
            officerNumber: 52,
            officerName: "Peter P. Hillman",
            agency: "US Marshal's Service",
            date: "6/8/2000",
            description: "<p>Deputy Marshal Hillman was killed when the prisoner transport van he was riding in was struck by a tractor trailer that crossed the median of Highway 65 in Bakersfield, California, after its driver fell asleep at the wheel. </p><p>Deputy Marshal Hillman and another deputy marshal were transporting three federal prisoners when the incident occurred. Deputy Marshal Hillman, all three prisoners, and a fourth person were killed. The other deputy marshal was injured in the accident.</p>"
        }, {
            officerImg: "../static/images/officers/Telen.jpg",
            officerNumber: 53,
            officerName: "Erik J. Telen",
            agency: "Fresno Sheriff's Department",
            date: "8/21/2001",
            description: "<p>Deputy Erik Telen was shot and killed investigating a burglary call at a local residence at about 7:00 pm. </p><p>Neighbors of the home had called deputies after they were confronted by a suspicious man who threatened them and then walked towards the house. Contact was made with relatives of the home's owner who stated the owners were out of town.</p><p>When the deputies arrived they located an open window. They entered the house in an attempt to locate the suspect and as they entered a hallway, the heavily armed suspect opened fire, fatally wounding Deputy Telen.</p>"
        }, {
            officerImg: "../static/images/officers/Phelps.jpg",
            officerNumber: 54,
            officerName: "Dennis E. Phelps",
            agency: "Fresno Sheriff's Department",
            date: "5/19/2002",
            description: "<p>Deputy Dennis Phelps was shot and killed after stopping a vehicle at 2345 hrs that was involved in a shooting 45 minutes earlier.</p><p>Radio contact was lost after he advised dispatch of the stop on Highway 168/Shepherd, near Clovis. A responding deputy found Deputy Phelps on the ground, and his gun, badge, radio, and patrol car had been stolen. Another deputy located the suspect driving the patrol car and pursued the suspect, who opened fire, shooting out the responding officer's patrol car windows. The suspect crashed and fled on foot and remained at large during a large manhunt involving over 100 officers from 8 agencies.</p><p>On May 25, 2002, the suspect was shot and killed when he opened fire on officers after being surrounded in a trailer in the Prather area.</p>"
        }, {
            officerImg: "../static/images/officers/Lancaster.jpg",
            officerNumber: 55,
            officerName: "Joshua C. Lancaster",
            agency: "Fresno Sheriff's Department",
            date: "5/29/2003",
            description: "<p>Deputy Lancaster was killed when his unmarked vehicle was broadsided by a stolen car being pursued by a neighboring agency.</p><p>Deputy Lancaster pulled away from a stop sign when his vehicle was struck on the driver's side at 0009 hours. The suspect, who was wanted for kidnapping, was estimated to be driving at 90 mph at the time of the collision. The suspect was seriously injured and a pregnant female passenger was also killed.</p>"
        }, {
            officerImg: "../static/images/officers/Wahlenmaier.jpg",
            officerNumber: 56,
            officerName: "Joel Wahlenmaier",
            agency: "Fresno Sheriff's Department",
            date: " 2/25/2010",
            description: "<p>Deputy Joel Wahlenmaier was shot and killed as he and another deputy assisted in the service of a warrant on a suspected arsonist in Minkler, California. </p> <p>As the deputies and officers entered the suspect's mobile home the man opened fire on them, fatally wounding Deputy Wahlenmaier and wounding a second deputy. Officer Javier Bejar, of the Reedley Police Department, responded to the report of an officer down and was shot and critically wounded during a standoff with the suspect. He died from his wounds four days later.  The suspect was found dead inside the home after a standoff that lasted several hours.</p> <p>Deputy Wahlenmaier had served with the Fresno County Sheriff's Department for 12 years. He is survived by his wife, son, daughter, and parents.</p>"
        }, {
            officerImg: "../static/images/officers/Bejar.jpg",
            officerNumber: 57,
            officerName: "Javier Bejar",
            agency: "Reedley Police Department",
            date: "03/01/2010",
            description: "<p>Officer Bejar responded to the officer down call on February 25th, 2010.  Approximately thirty minutes after the initial shooting, the suspect opened fire again with a high-powered rifle, outfitted with a scope, and shot and critically wounded Officer Bejar, who was using his patrol car as cover, from a range of approximately 80 yards.</p><p>Officer Bejar was taken to Community Medical Center where he died from his wound days later.  The suspect was found dead inside the home after a standoff that lasted several hours.</p><p>Officer Bejar served with the Reedley Police Department for 5 years.  He also served with the department as an Explorer when he was a teenager. He served with the United States Marine Corps and was a combat veteran of Operation Iraqi Freedom.  He is survived by his wife.</p>"
        }, {
            officerImg: "../static/images/officers/Law.jpg",
            officerNumber: 58,
            officerName: "Brian Law",
            agency: "CALIFORNIA HIGHWAY PATROL",
            date: "02/17/2014",
            description: "<p>Officer Law and Officer Juan Gonzalez were responding to a crash, on Highway 99, in Fresno County, when their cruiser flipped.  Both Officers died at the scene. </p><p>On Monday, February 24, 2014, a memorial was held for the officers.  The memorial was attended by thousands.  CHP Commissioner Joseph Farrow called them heroes.</p>"
        }, {
            officerImg: "../static/images/officers/Gonzalez.jpg",
            officerNumber: 59,
            officerName: "Juan Gonzalez",
            agency: "CALIFORNIA HIGHWAY PATROL",
            date: "02/17/2014",
            description: "<p>Officer Law and Officer Juan Gonzalez were responding to a crash, on Highway 99, in Fresno County, when their cruiser flipped.  Both Officers died at the scene. </p><p>On Monday, February 24, 2014, a memorial was held for the officers.  The memorial was attended by thousands.  CHP Commissioner Joseph Farrow called them heroes.</p>"
        });

        self.selectedOfficer = ko.observable(self.officers()[0]);
    }
