import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import breakpoints from "../helpers/styles/breakpoints";

const PrivacyPolicyContainer = styled.div`
  display: block;
  position: relative;
  padding: 25px;
  @media ${breakpoints.mobileX} {
    width: calc(100% - 130px);
    margin: auto;
  }
  a {
    color: #191919;
  }
`;

const PrivacyPolicy = () => {
  return (
    <PrivacyPolicyContainer>
      <span>
        <Link to="/"> ...Back to home</Link>
      </span>

      <h1>Tartan Tech Talks Privacy Policy</h1>

      <h2>1. INTRODUCTION</h2>

      <p>
        Tartan Tech Talks are committed to protecting and respecting your
        privacy. This policy (together with our terms of use and any other
        documents referred to on it) sets out the basis on which any personal
        data we collect from you, or that you provide to us, will be processed
        by us. Please read the following carefully to understand our views and
        practices regarding your personal data and how we will treat it. For the
        purpose of General Data Protection Regulations (“the Act”), the data
        controller is TechPods IT LTD (company number 11604025) of Waterworks
        House, Pluckley Road, Charing, Kent, United Kingdom, TN27 0AH
      </p>

      <h2>2. INFORMATION WE MAY COLLECT FROM YOU</h2>

      <p>We may collect and process the following data about you:</p>

      <p>
        • Information that you provide by filling in forms on our sites, and
        which may be amended from time to time (“our sites“). This includes
        information provided at the time of registering to use our site,
        subscribing to our service, posting material or requesting further
        services. We may also ask you for information when you report a problem
        with our site.
      </p>

      <p>• If you contact us, we may keep a record of that correspondence.</p>

      <p>
        • We may also ask you to complete surveys that we use for research
        purposes, although you do not have to respond to them.
      </p>

      <p>
        • Details of your visits to our site including, but not limited to,
        traffic data, location data, weblogs and other communication data,
        whether this is required for our own billing purposes or otherwise and
        the resources that you access.
      </p>

      <h2> 3. IP ADDRESSES</h2>

      <p>
        We may collect information about your computer, including where
        available your IP address, operating system and browser type, for system
        administration and to report aggregate information to our advertisers.
        This is statistical data about our users’ browsing actions and patterns
        and does not identify any individual.
      </p>

      <h2> 4. COOKIES</h2>

      <p>
        For the same reason, we may obtain information about your general
        internet usage by using a cookie file which is stored on your browser or
        the hard drive of your computer. Cookies contain information that is
        transferred to your computer’s hard drive. They help us to improve our
        site and to deliver a better and more personalised service. Some of the
        cookies we use are essential for the site to operate. For detailed
        information on the cookies we use and the purposes for which we use them
        see our Cookies Policy for more information.
      </p>

      <h2> 5. WHERE WE STORE YOUR PERSONAL DATA</h2>

      <p>
        The data that we collect from you may be transferred to, and stored at,
        a destination outside the European Economic Area (“EEA”). It may also be
        processed by staff operating outside the EEA working for us or for one
        of our suppliers i.e. Google as we use Google for Business applications
        and have no control over their data policies. Such staff may be engaged
        in, among other things, the fulfilment of your order, the processing of
        your payment details and the provision of support services. By
        submitting your personal data, you agree to this transfer, storing or
        processing. We will take all steps reasonably necessary to ensure that
        your data is treated securely, in accordance with your rights and in
        accordance with this privacy policy. All information you provide to us
        is stored on our secure servers. Any payment transactions will be
        encrypted. Where we have given you (or where you have chosen) a password
        which enables you to access certain parts of our site, you are
        responsible for keeping this password confidential. We ask you not to
        share a password with anyone. Unfortunately, the transmission of
        information via the internet is not completely secure. Although we will
        do our best to protect your personal data, we cannot guarantee the
        security of your data transmitted to our site; any transmission is at
        your own risk. Once we have received your information, we will use
        strict procedures and security features to try to prevent unauthorised
        access.
      </p>

      <h2> 6. USES MADE OF THE INFORMATION</h2>

      <p>We use information held about you in the following ways:</p>

      <p>
        • To ensure that content from our site is presented in the most
        effective manner for you and for your computer.
      </p>
      <p>
        • To administer our site or subscription services and for internal
        operations, including troubleshooting, data analysis, testing, research,
        statistical and survey purposes
      </p>

      <p>
        • To provide you with information, products or services that you request
        from us or which we believe may interest you based on the data you give
        us or your preferences, or where you have consented to be contacted for
        such purposes, such as a whitepaper or an invitation to an event.
      </p>

      <p>
        • To carry out our obligations arising from any contracts entered into
        between you and us.
      </p>

      <p>
        • To allow you to participate in interactive features of our service,
        when you choose to do so.
      </p>

      <p>
        • To notify you about changes to our service, your subscription or our
        contract with you.
      </p>

      <p>
        We may also use your data, or permit selected third parties to use your
        data, to provide you with information about goods and services which may
        be of interest to you and we or they may contact you about these by
        post, email or telephone. If you are an existing customer, we will only
        contact you by electronic means (e-mail or SMS) with information about
        goods and services similar to those which were the subject of a previous
        sale to you. If you are a new customer, and where we permit selected
        third parties to use your data, we (or they) will contact you using
        methods appropriate to the data you have submitted to us or the data we
        hold. If you do not want us to use your data in this way, or to pass
        your details on to third parties for marketing purposes, please tick the
        relevant box on the registration form or, alternatively, do not provide
        your consent to pass on those details when prompted. Please note, if you
        request a whitepaper prepared by or an invitation to an event hosted by
        a third party, we will pass your details to that third party to fulfil
        your request.
      </p>

      <h2> 7. HOW WE PROTECT YOUR DATA</h2>
      <p>
        We have put in place security procedures and technical and
        organisational measures to safeguard your personal information. Access
        to all internal data servers is limited to the specialist data
        protection personnel and is controlled via active directory
        authentication using defined policies to control password expiry and
        renewal.
      </p>

      <h2> 8. DISCLOSURE OF YOUR INFORMATION</h2>

      <p>
        We may disclose your personal information to any member of our Group. We
        may also disclose your personal information to third parties under the
        following circumstances:
      </p>
      <p>
        • business partners, suppliers and sub-contractors for the performance
        of any contract we enter into with you including in relation to the
        supply of information or invitations to events;
      </p>

      <p> • business partners and suppliers where you have agreed to this;</p>

      <p>
        • in the event that we sell or buy any business or assets, in which case
        we may disclose your personal data to the prospective seller or buyer of
        such business or assets.
      </p>

      <p>
        • if Tartan Tech Talks or substantially all of its assets are acquired
        by a third party, in which case personal data held by it about its
        customers will be one of the transferred assets.
      </p>

      <p>
        • if we are under a duty to disclose or share your personal data in
        order to comply with any legal obligation, or in order to enforce or
        apply our rights, to view our terms and conditions of use and other
        agreements; or to protect the rights, property, or safety of Tartan Tech
        Talks, our customers, or others. This includes exchanging information
        with other companies and organisations for the purposes of fraud
        protection and credit risk reduction.
      </p>

      <h2> 9. HOW LONG WE WILL KEEP YOUR DATA</h2>

      <p>
        We will keep your data all the time you have a current subscription or
        contract with us. We may keep data you provide us for 24 months. We may
        keep other data about you for 36 months.
      </p>

      <h2> 10. YOUR RIGHTS</h2>
      <p>
        You have the right to ask us not to process your personal data for
        marketing purposes. We will usually inform you (before collecting your
        data) if we intend to use your data for such purposes or if we intend to
        disclose your information to any third party for such purposes. You can
        exercise your right to prevent such processing by ticking certain boxes
        on the forms we use at the time we collect your data or at any other
        time.
      </p>

      <p> You also have the right to:</p>

      <p>
        • request access to, deletion of or correction of, your personal data
      </p>
      <p>• restrict or object to processing your personal data</p>
      <p>
        • withdraw your consent where the processing was based on that consent,
        but note that this does not affect any processing not based on your
        consent
      </p>

      <p> • request we transfer your personal data to another person</p>
      <p>
        • complain to our nominated representative in which case we will follow
        our internal complaints procedure
      </p>

      <p>
        You can also complain to the Information Commissioner’s Office or other
        relevant supervisory authority.
      </p>

      <h2> 11. EXTERNAL LINKS</h2>

      <p>
        Our site may, from time to time, contain links to and from the websites
        of our partner networks, advertisers and affiliates. If you follow a
        link to any of these websites, please note that these websites have
        their own privacy policies and that we do not accept any responsibility
        or liability for these policies. Please check these policies before you
        submit any personal data to these websites.
      </p>

      <h2> 12. ACCESS TO INFORMATION</h2>

      <p>
        You have the right to request a copy of the information that we hold
        about you. If you would like a copy of some or all of your personal
        information, please contact Benjamin Kane by email to ben@techpods.co.
      </p>
      <p>
        We want to ensure that your personal information is accurate and up to
        date. If any of the information that you have provided to us changes,
        for example if you change your email address or name, please let us know
        the correct details. You may ask us, or we may ask you, to correct
        information you or we think is inaccurate, and you may also ask us to
        remove information which is inaccurate.
      </p>

      <h2> 13. CHANGES TO OUR PRIVACY POLICY</h2>

      <p>
        Any changes we may make to our privacy policy in the future will be
        posted on this page and, where appropriate, notified to you by email.
      </p>
    </PrivacyPolicyContainer>
  );
};

export default PrivacyPolicy;
