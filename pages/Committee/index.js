import React, { useState, useEffect } from "react";
import gradients from "../../styles/customGradient.module.css";
import ProfileCard from "../../components/ProfileCard";
import {
  cheifpatrons,
  patrons,
  honChairs,
  genChairs,
  confChairs,
  ProgramChair,
  FinChairs,
  PublicChairs,
  OrgChair,
  KeynoteChair,
  EventManagementChair,
  EventManagementCoChair,
  HospitalityChair,
  IndustryInteractionChair,
  IndustryInteractionCoChair,
  AcademicOutreachChair,
  SponsorshipChair,
  MarketingChair,
  SocialMediaChair,
  WebsiteChair,
  WorkshopChair,
  WorkshopCoChair,
  RegistrationChair,
  RegistrationCoChair,
  LocalArrangementsChair,
  LocalArrangementsCoChair,
} from "../../data/committee";
import { useScrollLock, useViewportSize } from "@mantine/hooks";
import CommitteeSidebar from "../../components/CommitteeSidebar";

const Committee = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollLocked, setScrollLocked] = useScrollLock(false);
  const { height, width } = useViewportSize();

  useEffect(() => {
    if (width > 768) {
      setIsOpen(true);
      setScrollLocked(false);
    }
  }, [width]);

  return (
    <>
      <div className={`mt-14 ${gradients.homePage} text-black`}>
        <div className="relative md:flex ">
          <CommitteeSidebar
            width={width}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
          <div className="md:w-[70%] lg:w-[75%] pb-8">
            <div className="mt-2 mx-2 p-8 rounded-box flex flex-col gap-2 items-center">
              {/* <div>
                <div id="chiefpatron" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-4 text-xl md:text-3xl font-bold">
                  Chief Patron
                </h1>

                <ProfileCard
                  //title="Dr."
                  fullName="B. K. Das"
                  post="DG (ECS),"
                  organisation="DRDO, India"
                  profileImage="/bkdas.png"
                />
              </div> */}
              <div>
                <div id="patron" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold">Patron</h1>
                <div className="flex gap-8 flex-wrap">
                  {patrons.map((patron) => (
                    <ProfileCard
                      key={patron.fullName}
                      // title={patron.title}
                      fullName={patron.fullName}
                      post=""
                      profileImage={patron.profileImage}
                      organisation={patron.organisation}
                    />
                  ))}
                </div>
              </div>

              {/* Commented out "Honorary Chairs" */}
              {/* <div>
                <div id="honchairs" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold">
                  Honorary Chair
                </h1>
                <div className="flex gap-8 flex-wrap">
                  {honChairs.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={
                        chair.profileImage ? chair.profileImage : null
                      }
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div> */}
              {/* <div>
                <div id="orgChair" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold">
                  {" "}
                  Organizing Chair
                </h1>
                <div className="flex gap-8 flex-wrap">
                  {OrgChair.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={chair.profileImage}
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div> */}
              <div>
                <div id="genchairs" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold">
                  {" "}
                  General Chair
                </h1>
                <div className="flex gap-8 flex-wrap">
                  {genChairs.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={chair.profileImage}
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div>

              <div>
                <div id="confchairs" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold text-center">
                  Conference Chairs
                </h1>
                <div className="flex gap-8 flex-wrap">
                  {confChairs.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={
                        chair.profileImage ? chair.profileImage : null
                      }
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div>
              {/* <div>
                <div id="programchairs" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold">
                  {" "}
                  Program Chair
                </h1>
                <div className="flex gap-8 flex-wrap">
                  {ProgramChair.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={
                        chair.profileImage ? chair.profileImage : null
                      }
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div> */}

              {/* <div>
                <div id="eventmanagechair" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold">
                  {" "}
                  Event Management Chair
                </h1>
                <div className="flex gap-8 flex-wrap">
                  {EventManagementChair.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={
                        chair.profileImage ? chair.profileImage : null
                      }
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div> */}

              {/* <div>
                <div
                  id="eventmanagecochair"
                  className="h-20 mb-16 md:mb-0"
                ></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold">
                  {" "}
                  Event Management Co-Chair
                </h1>
                <div className="flex gap-8 flex-wrap">
                  {EventManagementCoChair.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={
                        chair.profileImage ? chair.profileImage : null
                      }
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div> */}

              {/* <div>
                <div id="keynotechair" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold flex-">
                  {" "}
                  Keynote Chair
                </h1>
                <div className="flex gap-8 flex-wrap">
                  {KeynoteChair.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={chair.profileImage}
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div> */}

              {/* <div>
                <div id="hospitalitychair" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold">
                  {" "}
                  Hospitality Chair
                </h1>
                <div className="flex gap-8 flex-wrap">
                  {HospitalityChair.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={
                        chair.profileImage ? chair.profileImage : null
                      }
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div> */}

              {/* <div>
                <div id="industryintchair" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold">
                  {" "}
                  Industry Interaction Chair
                </h1>
                <div className="flex gap-8 flex-wrap">
                  {IndustryInteractionChair.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={
                        chair.profileImage ? chair.profileImage : null
                      }
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div> */}

              {/* <div>
                <div
                  id="industryintcochair"
                  className="h-20 mb-16 md:mb-0"
                ></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold">
                  {" "}
                  Industry Interaction Co-Chair
                </h1>
                <div className="flex gap-8 flex-wrap">
                  {IndustryInteractionCoChair.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={
                        chair.profileImage ? chair.profileImage : null
                      }
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div> */}

              {/* <div>
                <div id="academicout" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold">
                  {" "}
                  Academic Outreach Chair
                </h1>
                <div className="flex gap-8 flex-wrap">
                  {AcademicOutreachChair.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={
                        chair.profileImage ? chair.profileImage : null
                      }
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div> */}

              {/* <div>
                <div id="sponsorshipchair" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold">
                  {" "}
                  Sponsorship Chair
                </h1>
                <div className="flex gap-8 flex-wrap">
                  {SponsorshipChair.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={
                        chair.profileImage ? chair.profileImage : null
                      }
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div> */}

              {/* <div>
                <div id="marketingchair" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold">
                  {" "}
                  Marketing Chair
                </h1>
                <div className="flex gap-8 flex-wrap">
                  {MarketingChair.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={
                        chair.profileImage ? chair.profileImage : null
                      }
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div> */}

              {/* <div>
                <div id="socialmdchair" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold">
                  {" "}
                  Social Media Chair
                </h1>
                <div className="flex gap-8 flex-wrap">
                  {SocialMediaChair.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={
                        chair.profileImage ? chair.profileImage : null
                      }
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div> */}

              {/* <div>
                <div id="websitechair" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold">
                  {" "}
                  Website Chair
                </h1>
                <div className="flex gap-8 flex-wrap">
                  {WebsiteChair.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={
                        chair.profileImage ? chair.profileImage : null
                      }
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div> */}

              {/* <div>
                <div id="workshopchair" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold">
                  {" "}
                  Workshop Chair
                </h1>
                <div className="flex gap-8 flex-wrap">
                  {WorkshopChair.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={
                        chair.profileImage ? chair.profileImage : null
                      }
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div> */}

              {/* <div>
                <div id="workshopcochair" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold">
                  {" "}
                  Workshop Co-Chair
                </h1>
                <div className="flex gap-8 flex-wrap">
                  {WorkshopCoChair.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={
                        chair.profileImage ? chair.profileImage : null
                      }
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div> */}

              {/*               
              <div>
                <div id="regchair" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold">
                  {" "}
                  Registration Chair
                </h1>
                <div className="flex gap-8 flex-wrap">
                  {RegistrationChair.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={
                        chair.profileImage ? chair.profileImage : null
                      }
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div> */}

              {/* <div>
                <div id="regcochair" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold">
                  {" "}
                  Registration Co-Chair
                </h1>
                <div className="flex gap-8 flex-wrap">
                  {RegistrationCoChair.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={
                        chair.profileImage ? chair.profileImage : null
                      }
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div> */}
              {/* <div>
                <div
                  id="localarrangechair"
                  className="h-20 mb-16 md:mb-0"
                ></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold">
                  {" "}
                  Local Arrangements Chair
                </h1>
                <div className="flex gap-8 flex-wrap">
                  {LocalArrangementsChair.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={
                        chair.profileImage ? chair.profileImage : null
                      }
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div> */}
              {/* <div>
                <div
                  id="localarrangecochair"
                  className="h-20 mb-16 md:mb-0"
                ></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold">
                  {" "}
                  Local Arrangements Co-Chair
                </h1>
                <div className="flex gap-8 flex-wrap">
                  {LocalArrangementsCoChair.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={
                        chair.profileImage ? chair.profileImage : null
                      }
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div> */}
              <div>
                <div id="finchairs" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold">
                  {" "}
                  Finance Chair
                </h1>
                <div className="flex gap-8 flex-wrap">
                  {FinChairs.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={chair.profileImage}
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div>

              <div>
                <div id="pubchairs" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold">
                  {" "}
                  Publicity Chair
                </h1>
                <div className="flex gap-8 flex-wrap">
                  {PublicChairs.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={chair.profileImage}
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Committee;
