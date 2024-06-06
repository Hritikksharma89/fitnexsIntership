import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const PrivacyPolicy = () => {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <>
            <div className=" mx-3  md:mx-10 lg:mx-15 ">
                <div className="mx-3 md:mx-5 lg:mx-10">
                    <div className="text-center mx-1 md:mx-3 lg:mx-5 my-20">
                        <h2 className="font-bold mb-8 text-[20px]">
                            PRIVACY POLICY
                        </h2>
                        <div className="">
                            <p className="text-justify md:leading-7 font-normal text-[14px]">
                                Thank you for visiting Koza Aesthetic Care
                                website {''}
                                <a
                                    href="https://kozacare.org"
                                    target="_"
                                    className="text-[blue] underline"
                                >
                                    https://kozacare.org
                                </a>{' '}
                                {''}
                                and reviewing our privacy policy. Koza Aesthetic
                                care is owned and operated by [•] a [company/
                                partnership, LLP] registered under the laws of
                                India, Registered office address, Floor No.: 3rd
                                floor Building No./Flat No.: S No, 54, Site.14/2
                                Name Of Premises/Building: R.S.Emporia
                                Road/Street: Hosur Main Road NH-7 Locality/Sub
                                Locality: Bommasandra City/Town/Village:
                                Bengaluru District: Bengaluru Urban State:
                                Karnataka PIN Code: 560099, India, (which is
                                referred to as either ‘Koza Aesthetic care’,
                                ‘Company’, or ‘we ‘or ‘us’).
                            </p>
                        </div>

                        <div className="py-2 text-[14px]">
                            <p className="text-justify md:leading-7 font-normal">
                                Koza Aesthetic care, as you may know is one of
                                India’s best skin, hair and body clinics,
                                Founder and partner Dr. Ruthuja Athawale did her
                                fellowship in reproductive medicine from BACC
                                HEALTHCARE AND PRIVATE LIMITED. She did a
                                fellowship in MINIMAL ACCESS SURGERIES from
                                Rajiv Gandhi University of Health Sciences. She
                                has 8 yrs experience in the field of INFERTILITY
                                MANAGEMENT, LAPAROSCOPIC SURGERIES & HIGH-RISK
                                PREGNANCY MANAGEMENT.
                            </p>
                        </div>

                        <div className="pt-6 text-[14px]">
                            <p className="text-justify md:leading-7 font-normal">
                                These are the general terms and conditions of
                                our privacy policy applicable to all our users
                                (referred to as ‘you’ and ‘user’). Some of you
                                might be asked to visit our site for using our
                                services on behalf of an organization; in such
                                cases, you are agreeing to these terms and
                                conditions for that organization and
                                representing that you have the authority to bind
                                that organization to these terms (in such case,
                                ‘you’, ‘your’ and ‘yours’ will refer to that
                                organization).
                            </p>
                        </div>

                        <div className="py-2 text-[14px]">
                            <p className="text-justify md:leading-7 font-normal">
                                This privacy policy
                                (https://kozacare.org/privacy-policy) tells you
                                how Koza Aesthetic care gathers and manages
                                information about you. We are committed to
                                keeping the information you share with us
                                confidential and giving you a powerful and safe
                                online experience by taking all reasonable
                                measures to help protect the confidentiality,
                                security, and integrity of your data that is
                                stored on our systems.
                            </p>
                        </div>

                        <div className="py-2">
                            <p className="text-justify md:leading-7 font-normal text-[14px]">
                                The information we receive and collect depends
                                on what you provide while accessing and using
                                Koza Aesthetic care and the information received
                                from your device. {''}
                                <p className="text-[#023e8a] font-semibold pt-2">
                                    Please note: Any information that you
                                    provide when you use certain services on
                                    Koza Aesthetic care and where such
                                    information is in an open public environment
                                    or forum including, without limitation,
                                    blogs, community or discussion board do not
                                    constitute personal information and as such
                                    is not subject to protection under this
                                    Policy.
                                </p>
                                <p className="font-normal text-[14px]">
                                    {' '}
                                    You are accordingly cautioned to be careful
                                    when deciding to share any of your personal
                                    information on such public forums, while
                                    accessing or using Koza Aesthetic care and
                                    remain mindful that any disclosure of
                                    information on such forums on Koza Aesthetic
                                    care shall be at your own risk.
                                </p>
                            </p>
                        </div>

                        <div className="py-2 text-justify">
                            <p className="md:leading-7 font-normal text-[14px]">
                                We may change this Policy at any time, without
                                notice, by updating this page. You are requested
                                to check this page from time to time to ensure
                                that you are familiar with any changes. Here is
                                how we handle information we receive from you
                                and your device.
                            </p>
                            <p className="text-[#023e8a] font-semibold  py-2 md:leading-7">
                                Information on your Device, & from Google/Meta
                                ads Log-Files and Other Tracking Technologies
                            </p>
                        </div>

                        <div className="py-2 text-justify">
                            <p className=" md:leading-7 font-normal text-[14px]">
                                We may collect limited information from your
                                device when you visit our website to browse,
                                read pages, or download information. Such
                                information may include your device type, device
                                ID, and date and time stamps of Koza Aesthetic
                                care use.  In addition, we may
                                deploy log-files and tracking technologies
                                within Koza Aesthetic care to help us gather
                                aggregate statistics. {''}
                            </p>
                            <p className="text-[#023e8a] font-semibold  py-2">
                                Such information about your visit is
                                automatically gathered and stored without
                                identifying you personally.
                            </p>
                            <p className="font-normal text-[14px]">
                                This type of information is gathered so that we
                                can enhance and customize your online experience
                                with us as per your browsing preferences. For
                                statistical purposes, we may collect these
                                unnamed statistics, which do not personally
                                identify you, and use only the aggregated data
                                obtained about your general internet usage. ,
                                but we do not use any personal information of
                                our customers for such purposes.
                            </p>
                        </div>

                        <div className="py-2 text-justify md:leading-7">
                            <p className="font-normal text-[14px]">
                                In addition, this information may be used to
                                provide us insight into the number of visitors
                                to our site and the types of technology used. We
                                reserve the right to perform statistical
                                analyses of user behavior and characteristics in
                                order to measure interest in and use of the
                                various areas of Bidzapp.
                            </p>
                        </div>

                        <div className="py-2 text-justify md:leading-7">
                            <p className="font-normal text-[14px]">
                                Your web browser software automatically
                                transmits information through{' '}
                                <span className="text-[#023e8a] font-semibold ">
                                    “Cookies”
                                </span>
                                , which is a small text file that a web site can
                                place on your computer’s hard drive to record a
                                visitor’s activities. No data from your computer
                                unrelated to Koza Aesthetic care is accessed.
                                Our cookies assign each visitor’s browser with a
                                random, unique number without disclosing any
                                personal information about the person using the
                                browser. Please note that your web browser
                                software automatically transmits most of the
                                following information to us without identifying
                                you personally.
                            </p>
                        </div>
                        <div className="py-2 ">
                            <ul className="list-disc ml-10 text-justify font-normal text-[14px]">
                                <li>
                                    The numeric IP address (an IP address is a
                                    number that is automatically assigned to
                                    your computer whenever you are surfing the
                                    web) from which you access Koza Aesthetic
                                    care
                                </li>
                                <li>
                                    The type of browser and operating system
                                    used to access Koza Aesthetic care
                                </li>
                                <li>
                                    The date and time you access Koza Aesthetic
                                    care
                                </li>
                                <li>
                                    The pages you visit, including graphics
                                    loaded from each page and other documents
                                    you download, such as PDF (Portable Document
                                    Format) files and word processing documents
                                </li>
                                <li>
                                    If you linked to Koza Aesthetic care from
                                    another website, the address of that
                                    website. Again, your web browser software
                                    transmits this information to us.
                                </li>
                            </ul>
                        </div>

                        <div className="py-2 text-justify md:leading-7">
                            <p className="font-normal text-[14px]">
                                <span className="text-[#023e8a] font-semibold ">
                                    You may refuse to accept cookies by
                                    activating the setting on your browser that
                                    allows you to refuse the setting of cookies.
                                </span>{' '}
                                However, if you select this setting, you may be
                                unable to access certain parts of our site.
                                Unless you have adjusted your browser setting so
                                that it will refuse cookies, our system will
                                issue cookies when you use our Site. The ‘Help’
                                menu of the toolbar on most browsers will tell
                                you how to prevent your browser from accepting
                                new cookies, how to have the browser notify you
                                when you receive a new cookie, or how to disable
                                cookies altogether
                            </p>
                        </div>

                        <div className="text-[#023e8a] font-semibold  py-2 text-justify md:leading-7">
                            <p>
                                Information Provided to access certain features
                                of Koza Aesthetic care
                            </p>
                        </div>

                        <div className="py-2">
                            <p className="text-justify md:leading-7 font-normal text-[14px]">
                                In addition to the information gathered
                                automatically above, Bidzapp may require you to
                                provide certain user information if you wish to
                                access certain services we offer. For this Koza
                                Aesthetic care may require you to go through our
                                registration processes and provide certain
                                personally identifiable user information and
                                documents. This information may be shared with
                                us in various forms as decided by Koza Aesthetic
                                care and may include email message, online forms
                                for registration. Sensitive personal data or
                                information requested may include all or any of
                                the following.
                            </p>
                        </div>

                        <div className="">
                            <ul className="list-disc ml-10 text-justify font-normal text-[14px]">
                                <li>
                                    Personal Information that you provide when
                                    you register for an online or in-person
                                    service, for example, your areas of your
                                    name, gender, marital status, age,
                                    profession, location, preferences, medical
                                    conditions or other information related to
                                    the service you desire
                                </li>
                                <li>
                                    Contact details such as your postal address,
                                    telephone, email address
                                </li>
                                <li>
                                    Financial information such as details
                                    pertaining to your bank account or credit
                                    card or debit card or other payment
                                    instruments
                                </li>
                                <li>
                                    Subscription account related information
                                    such as your username, password account
                                    history, billing information and
                                    communication, transactional and payment
                                    history, payment information
                                </li>
                                <li>
                                    Information concerning your preferences and
                                    interests expressed in the course of using
                                    our services
                                </li>
                                <li>
                                    Other content and data that you provide
                                    while using Koza Aesthetic care for example,
                                    blogs, discussion boards, chat messages,
                                    membership of mailing lists and other data,
                                    documents and images stored on our servers.
                                </li>
                            </ul>
                        </div>

                        <div className="py-2">
                            <p className="text-justify md:leading-7 font-normal text-[14px]">
                                In addition, as Koza Aesthetic care grows, it
                                may offer additional features that may require
                                additional information. Further, when you use an
                                online service on Koza Aesthetic care, we log
                                your username and other information provided by
                                you for the reasons mentioned below.
                            </p>
                        </div>

                        <div className="">
                            <ul className="list-disc ml-10 text-justify font-normal text-[14px]">
                                <li>
                                    To manage our relationship with you,
                                    communicate with you and provide services
                                    effectively to you
                                </li>
                                <li>
                                    To compile statistical and demographic
                                    profiles and data for our business and
                                    marketing activities
                                </li>
                                <li>
                                    To monitor your use of the Koza Aesthetic
                                    care and its services to both enhance your
                                    experience and to ensure your compliance
                                    with our terms of service
                                </li>
                                <li>
                                    For any other purpose required for
                                    development of Koza Aesthetic care as
                                    permitted by law.
                                </li>
                            </ul>
                        </div>
                        <p className="py-2 text-justify md:leading-7 font-normal text-[14px]">
                            If you choose to provide us with personal
                            information, we will use that information to respond
                            to your messages and to help us get you the service
                            or information you have requested.{' '}
                        </p>
                        <div className="py-2 text-justify md:leading-7">
                            <span className="text-[#023e8a] font-semibold ">
                                Registered users, if any can edit their account
                                information
                            </span>
                            <span className="font-normal text-[14px]">
                                {' '}
                                through the Profile section of Koza Aesthetic
                                care.{' '}
                            </span>
                        </div>
                        <p className="text-[#023e8a] font-semibold  py-2 text-justify">
                            Information sharing with third-parties{' '}
                        </p>
                        <div className="py-2 text-justify md:leading-7 font-normal text-[14px]">
                            <span>
                                We treat your information or your use of our
                                platform and services as private and
                                confidential and we do not check, edit, publish
                                or reveal it to any third parties except as
                                stated in this Policy and under the Terms and
                                Conditions of use of Koza Aesthetic care.
                            </span>
                            <span className="text-[#023e8a] font-semibold ">
                                By choosing to provide us with personal
                                information, you consent to our sharing this
                                information with third parties that we deal with
                                to help us get you the service or information
                                you have requested
                            </span>
                            <span className="font-normal text-[14px]">
                                {' '}
                                (to know more about our consent policy please
                                read our Terms and Conditions of use).
                                Typically, information is shared with
                                third-parties under the following circumstances.
                            </span>
                            <span className="text-[#023e8a] font-semibold ">
                                {' '}
                                (Please note we are not responsible for the
                                authenticity of the personal information
                                supplied by the provider).
                            </span>
                        </div>

                        <div className="py-2">
                            <ul className="list-disc ml-10 text-justify font-normal text-[14px]">
                                <li>
                                    If it is needed to provide the product or
                                    service you have requested (e.g., we use a
                                    third-party billing company, and we send
                                    information for billing purposes only)
                                </li>
                                <li>
                                    If it is needed to send such information to
                                    companies who work on our behalf to provide
                                    a product or service to you (e.g., a
                                    shipping company or a customer support
                                    services company)
                                </li>
                                <li>
                                    If required by government order, notice
                                    issued by a regulatory agency, law,
                                    subpoena, court order or legal process
                                </li>
                                <li>
                                    If your actions with respect to Koza
                                    Aesthetic care violates our Terms and
                                    Conditions or any of our usage guidelines
                                    for specific products or services and such
                                    information is required to address such
                                    breach.
                                </li>
                            </ul>
                        </div>

                        <p className="py-2 text-justify font-normal text-[14px]">
                            Your personal information will not be sold or
                            otherwise transferred to any unaffiliated third
                            parties unless otherwise stated at the time of
                            collection or unless you approve such sharing, as
                            the case may be.
                        </p>

                        <p className="py-2 text-justify text-[#023e8a] font-semibold ">
                            Notifications
                        </p>
                        <div className="py-2 text-justify md:leading-7">
                            <span className="font-normal text-[14px]">
                                We will not send you any unsolicited
                                information, except where you specifically agree
                                or unless it is necessary for operational or
                                regulatory reasons.
                            </span>{' '}
                            <span className="text-[#023e8a] font-semibold ">
                                If you do not opt out, we may use your e-mail
                                addresses to send occasional emails pertaining
                                to information about our
                            </span>
                        </div>
                        <p className="pt-2 text-justify text-[#023e8a] font-semibold ">
                            {' '}
                            services.
                        </p>
                        <p className="text-justify leading-7 font-normal text-[14px]">
                            You can nevertheless unsubscribe from receipt of
                            such emails by following instructions provided. If
                            you believe that you are receiving our
                            communications in error or no longer desire to
                            receive them, please inform us and we will remove
                            your name from our mailing lists.
                        </p>

                        <p className="pt-2 text-justify text-[#023e8a] font-semibold ">
                            Links to Other Sites
                        </p>
                        <p className="text-justify md:leading-7 py-2 font-normal text-[14px]">
                            Koza Aesthetic care may contain links to other
                            websites or services not under Koza Aesthetic care’s
                            control. Your privacy rights are protected as per
                            this Policy on our systems and the Koza Aesthetic
                            care platform controlled by us, however, we are not
                            responsible or liable for any unauthorized or
                            unlawful disclosures of your personal and
                            confidential information made by third parties who
                            are not subject to our control, such as advertisers
                            and websites that might have links to Koza Aesthetic
                            care. Once you access any such other website or
                            service, you are subject to the privacy policy of
                            the newly accessed website or service. You are
                            advised to familiarize yourself with the privacy
                            policies and practices of our business partners,
                            advertisers, sponsors or other sites to which we
                            provide hyperlinks, as privacy policies differ in
                            content and application.
                        </p>
                        <p className="pt-2 text-justify text-[#023e8a] font-semibold ">
                            Security{' '}
                        </p>
                        <div className="py-2 text-justify md:leading-7 font-normal text-[14px]">
                            <p className="py-1">
                                It is our policy to protect your identity on our
                                website. We have taken all reasonable measures
                                to ensure that the use of Koza Aesthetic care
                                and information provided to us is secured as per
                                the compliance standards specified under the
                                Information Technology Act, 2000, the
                                Information Technology (Amendment) Act, 2008 and
                                the rules made thereunder including the
                                Information Technology (Information Security
                                Practices and Procedures for Protected System)
                                Rules, 2018 and with such laws, rules and
                                regulations. We have also taken all reasonable
                                measures to institute industry-standard security
                                measures for all information systems under our
                                control so that information may not be lost,
                                misused or altered to the detriment of our
                                customers.
                            </p>

                            <p className="py-1 font-normal">
                                Your account information is password-protected
                                for your privacy and security. In certain areas,
                                as with credit card transactions, Koza Aesthetic
                                care uses industry-standard secure socket layer
                                (SSL) encryption to protect data transmission.{' '}
                            </p>

                            <p className="py-1 font-normal">
                                For security purposes and to ensure that our
                                services remain available to all users, we
                                employ software programs to monitor traffic to
                                identify unauthorized attempts to upload or
                                change our content, information, services,
                                offerings or otherwise cause damage.
                                Notwithstanding anything stated above, we
                                reserve the right to use information from these
                                sources to help identify the individual or
                                entity responsible or prosecute malicious use or
                                misuse of Koza Aesthetic care.{' '}
                            </p>
                        </div>

                        <p className="pt-2 text-justify text-[#023e8a] font-semibold ">
                            Safety and Privacy of Minors{' '}
                        </p>
                        <div className="py-2 text-justify md:leading-7 font-normal text-[14px]">
                            <p className="py-1 tex">
                                Koza Aesthetic care is not directed to persons
                                under the age of 18 and does not knowingly
                                collect personal information from children/
                                minors.{' '}
                            </p>

                            <p className="py-1 font-normal text-[14px]">
                                In particular, the Koza Aesthetic care does not
                                knowingly permit children who are 18 years of
                                age or younger (
                                <span className="text-[#023e8a] font-semibold ">
                                    Minor
                                </span>
                                ) to avail of our services directly. We will not
                                knowingly collect, utilize or distribute
                                personal information from Minors, without
                                parental consent. If you are a parent or
                                guardian and discover that your child who is 18
                                years or younger has a registered account with
                                Koza Aesthetic care, without your consent,
                                please alert us at [
                                <span className="text-[#023e8a] font-semibold ">
                                    koza.a.care@gmail.com
                                </span>
                                ] with a request for us to delete such account
                                and personal information from our systems. {' '}
                            </p>
                        </div>
                        <p className="pt-2 text-justify text-[#023e8a] font-semibold ">
                            Copyright{' '}
                        </p>
                        <p className="py-2 text-justify md:leading-7 font-normal text-[14px]">
                            The contents of Koza Aesthetic care shall not be
                            displayed or printed in any form in part or whole,
                            or copied, modified, uploaded, downloaded, published
                            or republished, transmitted or otherwise distributed
                            for commercial purposes without our prior written
                            approval. Subject to the Koza Aesthetic care Terms
                            and Conditions of Use, reproduction of any
                            information or material provided on our website or
                            by Koza Aesthetic care, with or without any
                            modification, is prohibited without prior written
                            authorization, and shall amount to violation of
                            copyright and as such deemed an illegal act. Breach
                            of this provision will be considered a material
                            breach and as such the Company reserves to take all
                            measures necessary to protect its rights as stated
                            in the Terms and Conditions of use of Koza Aesthetic
                            care and as available to Koza Aesthetic care under
                            applicable law.
                        </p>
                        <p className="pt-2 text-justify text-[#023e8a] font-semibold ">
                            Contact Us{' '}
                        </p>
                        <p className="py-2 text-justify md:leading-7 font-normal text-[14px]">
                            If you have any grievances or further questions
                            about this Policy, please contact us at [•].
                        </p>
                        <p className="pt-2 text-justify text-[#023e8a] font-semibold ">
                            Registered office address{' '}
                        </p>
                        <p className="py-2 text-justify md:leading-7 font-normal text-[14px]">
                            Floor No.: 3rd floor Building No./Flat No.: S No,
                            54, Site.14/2 Name Of Premises/Building: R.S.Emporia
                            Road/Street: Hosur Main Road NH-7 Locality/Sub
                            Locality: Bommasandra City/Town/Village: Bengaluru
                            District: Bengaluru Urban State: Karnataka PIN Code:
                            560099{' '}
                        </p>
                        <p className="text-justify font-normal text-[14px]  ">
                            Call: +91 96060 09079
                        </p>
                        <div className="text-justify">
                            <a
                                href="Email: koza.a.care@gmail.com"
                                alt=""
                                className="text-justify font-normal text-[14px] "
                            >
                                Email: koza.a.care@gmail.com
                            </a>
                        </div>

                        <p className="py-4 text-justify font-normal text-[14px]">
                            Thankyou!
                        </p>
                    </div>
                </div>{' '}
            </div>
        </>
    )
}

export default PrivacyPolicy
