import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import proof from '../images/perpetual-income-365-reviews.png';
import dashboard from '../images/dashboard.png';
import email from '../images/email-swipes.jpg';
import income from '../images/constant-income.jpg';
import moneyback from '../images/60-Day-Guarantee.png';
import support from '../images/support.jpg';

/* https://equi-well.com/ */

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Perpetual Income 365 Review
          </h1>
          <p className="text-xl lg:text-2xl mt-6 ">
            How Ordinary People Are Manipulating This{' '}
            <span className="text-orange-700 font-bold">SECRET ALGORITHM </span>To Make Perpetual
            Income Every Month!
          </p>
          <p className="mt-8 md:mt-12">
            <AnchorLink className="px-4" href="#intro">
              <Button size="lg">Product Review</Button>
            </AnchorLink>
          </p>
          <p className="mt-4 text-gray-600">Digital Marketing Is The New GoldRush</p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="intro" className="max-w-3xl mx-auto py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold prime-color">
          What Is Perpetual Income 365?
        </h2>
        <p className="text-lg font-semibold mt-4 text-justify">
          We all dream of a life where we have financial freedom and able to do the things we’ve
          ever wanted like traveling around the world, enjoying quality time with the family, and
          experiencing the more beautiful things in life.
        </p>
        <p className="text-lg font-semibold mt-4 text-justify">
          Perpetual Income 365 is an affiliate marketing system designed for those who don’t have
          the time or the knowledge to go through the whole tedious procedure to make money online.
        </p>
        <p className="text-lg font-semibold mt-4 text-justify">
          Affiliate marketing is marketing another company’s or person’s products or services and
          earning affiliate commission in the process.It might sound simple, but it can get
          complicated.
        </p>
        <p className="text-lg font-semibold mt-4 text-justify">
          Perpetual Income 365 was designed to take care of the nitty-gritty details while still
          providing you with maximum recurring income.
        </p>
        <p className="text-lg font-semibold mt-4 text-justify">
          Perpetual Income 365 is a brainchild of Shawn Josiah of Singapore. He devised the program
          to establish making money online business for ordinary people who want to augment their
          current income or eventually go full-time with affiliate marketing. The program does all
          the hard work for you while you reap all its benefits.
        </p>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold prime-color">Main Features</h2>
        <div className="flex flex-col lg:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8" style={{ minHeight: '550px' }}>
              <p className="font-semibold text-xl prime-color ">
                {' '}
                It Does the Heavy Lifting for You{' '}
              </p>
              <p className="mt-4 text-lg font-semibold">
                Shawn Josiah designed Perpetual Income 365 to be accessible and understandable by
                all users of the system – from the greenhorns to the veterans of affiliate
                marketing.
              </p>
              <p className="mt-4 text-lg font-semibold">
                For those who have always wanted to earn through affiliate marketing, this system
                works very well and is easy to understand and implement.
              </p>
              <p className="mt-4 text-lg font-semibold">
                You just follow the process (only once) step by step to ‘fire and forget’ and let
                Perpetual Income 365 do its work in the background.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8" style={{ minHeight: '550px' }}>
              <p className="font-semibold text-xl prime-color">Creates Residual Income</p>
              <p className="mt-4 text-lg font-semibold">
                Perpetual Income 365 creates what is referred to as residual or monthly recurring
                income using minimal, ‘one-off’ effort.
              </p>

              <p className="mt-4 text-lg font-semibold">
                That means the work you put in earns for you continuously or, as the name implies,
                perpetually.
              </p>

              <p className="mt-4 text-lg font-semibold">
                Once you’ve done the initial steps, it just runs on its own. This feature of the
                system has helped the system’s creator as well as many other people earn monthly on
                a consistent basis with just a single action.
              </p>
            </Card>
          </div>

          <div className="flex-1 px-3">
            <Card className="mb-8" style={{ minHeight: '550px' }}>
              <p className="font-semibold text-xl prime-color">It’s Fully Automated</p>
              <p className="mt-4 text-lg font-semibold">
                This is perhaps Perpetual Income 365’s biggest timesaver.
              </p>
              <p className="mt-4 text-lg font-semibold">
                Perpetual Income 360 offers squeeze pages for free. There are different designs to
                choose from, and the user is free to choose whatever one he/she likes.
              </p>
              <p className="mt-4 text-lg font-semibold">
                After you join Perpetual Income 365, you get bonus ebooks for free! These books are
                available to download from there.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight prime-color">Convenient Dashboard</h3>
          <p className="mt-8 text-xl  leading-relaxed">
            Beginners friendly. The menu bar is easy and quick. You only start from top to bottom,
            and every move is completed with quick video guidance.
          </p>
        </div>
      }
      secondarySlot={<img src={dashboard} alt="easy dashboard" />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight prime-color">
            Swipes for Free Email
          </h3>
          <p className="mt-8 text-xl leading-relaxed">
            Writing an email sequence worth 31 days is a fantastic work for email marketers who are
            brand new. That’s undoubtedly a saver of time.
          </p>
        </div>
      }
      secondarySlot={<img src={email} alt="email swipes" />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight prime-color">
            Constant value benefit{' '}
          </h3>
          <p className="mt-8 text-xl leading-relaxed">
            You will build your website when you begin to follow the directions. You just need to
            sit and rest and watch your bank get money. You will daily receive up to $433 a day.
          </p>
        </div>
      }
      secondarySlot={<img src={income} alt="constant income" />}
    />

    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight prime-color">No Waiting Period </h3>
          <p className="mt-8 text-xl  leading-relaxed">
            There are no waiting periods that take anywhere between a couple of hours to a couple of
            days before you can start using your intended program as in wealthy affiliate. <br />
            The moment you pay for your fees, you’ll instantly gain access to everything you need to
            start utilizing the program to your best advantage.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight prime-color">
            60-day Money Back Guarantee{' '}
          </h3>
          <p className="mt-8 text-xl  leading-relaxed">
            What if you realize that it’s not the system for you? What if you find out that it’s not
            working and you’re just wasting your time? The creator of Perpetual Income 365 is so
            confident about the product that he’s willing to give a 60-day money-back guarantee. But
            really, you won’t quit while you’re ahead, right? And with this system, you’ll always be
            ahead.
          </p>
        </div>
      }
      secondarySlot={<img src={moneyback} alt="Money Back Guaranteed" />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight prime-color">A Supportive Group </h3>
          <p className="mt-8 text-xl  leading-relaxed">
            Seeing users of Perpetual Income 365 earning consistent monthly earnings is sure to
            inspire you to continue with the program until you make it to the elite circle.
            Purchasing the system makes you a member of a very supportive Facebook group where you
            can get sound advice and insider tips on the ins and outs of affiliate marketing.
          </p>
        </div>
      }
      secondarySlot={<img alt="support group" src={support} />}
    />

    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center ">
        <h2 className="text-3xl lg:text-5xl font-semibold prime-color">How Much You Can Earn?</h2>
        <div className="container mx-auto max-w-3xl text-center">
          <p className="mt-6 text-xl font-semibold">
            Let’s put it this way, the amount you’re willing to spend will likewise equate to the
            amount of earning potential you’ll get from the traffic you pay.
          </p>
          <p className="mt-6 text-xl font-semibold">
            Truth be told, anything that tells you they’ll get you great results at no cost should
            be an instant red flag.
          </p>
          <p className="mt-6 text-xl font-semibold prime-color">
            You need to spend some to get some, that’s just fair, right?.
          </p>
          <p className="mt-6 text-xl font-semibold">
            With that said, you may have your reservations because this system is so affordable that
            it sounds kinda iffy. All you need to pay is $47 each month as your monthly membership
            fee for upsell that is Perpetual Income Engine software (MCCA Toolbox) which provides
            everything done for you so you can sit back and relax.
          </p>
          <p className="mt-6 text-xl font-semibold">
            IF you follow the system ‘to a T’ and everything goes well, you can be on the way to
            earning $432 per day.
          </p>
        </div>
        <LabelText className="text-gray-900 mt-8 max-w-xl mx-auto">
          People in the private group share daily results. Here is what we noticed they can earn per
          day depending on experience
        </LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="$80-150" secondaryText="Week 2-4" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="$200-300" secondaryText="2 Month" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+450$/Day" secondaryText="4 Months+" />
          </div>
        </div>

        <div className="container max-w-xl mx-auto mt-8">
          <img alt="testimonial" src={proof} />
        </div>
      </div>
    </section>

    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to start your business?</h3>
      <p className="mt-8 text-xl mx-auto max-w-3xl">
        More businesses than ever are using affiliate marketing as a cost-effective way to reach
        targeted audiences. Annual spending in this industry is projected to reach $8.2 billion by
        2022 in the U.S.
      </p>
      <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
      </p>
    </section>
  </Layout>
);
