"use client";
import React, { JSX } from 'react'

import FlowerSVG from '@/components/flower-svg';
import DefaultLayout from '@/layouts/default-layout';

export default function Page(): JSX.Element {
  return (
    <DefaultLayout>
      <div className='min-h-screen bg-gradient-to-br from-orange-50 via-amber-25 to-yellow-50 relative overflow-hidden' style={{ backgroundColor: '#fcefe3' }}>
        {/* Top Right Flower */}
        <FlowerSVG
          className="absolute top-0 right-0 w-80 h-80 opacity-40 animate-pulse"
          position="top-right"
        />

        {/* Bottom Left Flower */}
        <FlowerSVG
          className="absolute bottom-0 left-0 w-96 h-96 opacity-30 animate-pulse"
          position="bottom-left"
        />

        {/* Additional decorative elements */}
        <div className="absolute top-20 right-40 w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' } as React.CSSProperties} />
        <div className="absolute top-32 right-60 w-3 h-3 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '1s' } as React.CSSProperties} />
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '1.5s' } as React.CSSProperties} />
        <div className="absolute bottom-60 left-40 w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '2s' } as React.CSSProperties} />

        {/* Floating animation elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-orange-300 rounded-full opacity-60 animate-ping" style={{ animationDelay: '3s' } as React.CSSProperties} />
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-amber-400 rounded-full opacity-60 animate-ping" style={{ animationDelay: '4s' } as React.CSSProperties} />

        <div className='relative z-10 w-full mx-auto md:container h-full min-h-screen flex flex-col gap-10 items-center py-10'>
          <div className='w-full md:w-2/3 flex flex-col gap-8 px-5 md:px-2 text-gray-600'>

            {/* Title */}
            <div className='flex flex-col gap-5'>
              <h1 className='text-2xl md:text-3xl font-bold '>Privacy Policy</h1>
            </div>

            {/* Primary Text*/}
            <div className='flex flex-col '>
              <p className='text-base md:text-lg'>Your privacy is important to Melu Clothes Shop. This Privacy Policy explains how we collect, use,
                and disclose information from and about you when you use our website located at <a className='underline text-black' href="https://melushop.sale.et/">https://melushop.sale.et</a> {`(the "Website")`}
                and the services offered by Melu Clothes Shop {`(the "Services")`}.</p>
            </div>

            {/* Content */}
            <div className='w-full flex flex-col '>
              <ul className='list-decimal list-inside flex flex-col gap-5'>

                {/* Information We Collect */}
                <div className='flex flex-col gap-2 text-base md:text-lg'>
                  <li className='font-bold'>Information We Collect</li>
                  <p>We may collect several different types of information when you use our Website and Services:</p>
                  <ul className='list-disc list-inside px-2'>
                    <li><b>Information You Provide Directly:</b> This includes personal information you enter when you create an account, make a purchase, contact us, or subscribe to our newsletter. This may include your name, email address, phone number, billing and shipping addresses, payment information, and order details.</li>
                    <li><b>Information Collected Automatically:</b> We may collect certain usage data automatically when you use the Website. This data may include your IP address, browser type, operating system, referring URL, pages visited, products viewed, and time spent on the Website.</li>
                    <li><b>Cookies and Similar Technologies:</b> We may use cookies and similar tracking technologies to collect and store certain information. Cookies are small data files that are placed on your device when you visit a website.
                      They can be used to remember your preferences, track your activity on the website, maintain your shopping cart, and understand how you interact with our content.</li>
                  </ul>
                </div>

                {/* Use of Information */}
                <div className='flex flex-col gap-2 text-base md:text-lg'>
                  <li className='font-bold'>Use of Information</li>
                  <p>We may use the information we collect for the following purposes:</p>
                  <ul className='list-disc list-inside px-2'>
                    <li>To process and fulfill your orders, including payment processing and shipping.</li>
                    <li>To provide customer service and support for your purchases.</li>
                    <li>To send you order confirmations, shipping updates, and other transactional communications.</li>
                    <li>To send you marketing communications about new products, sales, and promotions (only with your consent).</li>
                    <li>To personalize your shopping experience and show you relevant product recommendations.</li>
                    <li>To analyze website usage, shopping patterns, and customer preferences.</li>
                    <li>To improve our products, services, and website functionality.</li>
                    <li>To prevent fraud and ensure the security of our platform.</li>
                    <li>To comply with legal obligations and enforce our Terms of Service.</li>
                  </ul>
                </div>

                {/* Information Sharing */}
                <div className='flex flex-col gap-2 text-base md:text-lg'>
                  <li className='font-bold'>Information Sharing</li>
                  <p>We may share your information with the following third parties:</p>
                  <ul className='list-disc list-inside px-2'>
                    <li><b>Payment Processors:</b> We share payment information with secure payment processing services to complete your transactions.</li>
                    <li><b>Shipping Partners:</b> We share shipping information with delivery services to fulfill your orders.</li>
                    <li><b>Service Providers:</b> We may share information with third-party service providers who help us operate the Website, process orders, send emails, or analyze data.</li>
                    <li><b>Legal Requirements:</b> We may disclose information if required by law, court order, or government regulation.</li>
                    <li><b>Business Transfers:</b> In the event of a merger, acquisition, or sale of assets, customer information may be transferred to the acquiring entity.</li>
                  </ul>
                </div>

                {/* Your Rights and Choices */}
                <div className='flex flex-col gap-2 text-base md:text-lg'>
                  <li className='font-bold'>Your Rights and Choices</li>
                  <p>You have the following rights regarding your information:</p>
                  <ul className='list-disc list-inside px-2'>
                    <li><b>Access and Update Your Information:</b> You can access and update your account information through your account dashboard or by contacting us at <a className='underline text-blakc' href="mailto:support@melu-clothes-shop.com">support@melu-clothes-shop.com</a>.</li>
                    <li><b>Delete Your Account:</b> You can request deletion of your account and personal information by contacting us.</li>
                    <li><b>Opt-Out of Marketing Communications:</b> {`You can unsubscribe from our marketing communications by clicking the "unsubscribe" link at the bottom of any email you receive from us or by managing your preferences in your account settings.`}</li>
                    <li><b>Cookie Preferences:</b> You can manage your cookie preferences through your browser settings, though this may affect some website functionality.</li>
                  </ul>
                </div>

                {/* Data Retention */}
                <div className='flex flex-col gap-2 text-base md:text-lg'>
                  <li className='font-bold'>Data Retention</li>
                  <p>We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, including:</p>
                  <ul className='list-disc list-inside px-2'>
                    <li>Account information: Until you request deletion or close your account</li>
                    <li>Order information: For at least 7 years for tax and accounting purposes</li>
                    <li>Marketing preferences: Until you unsubscribe or request deletion</li>
                    <li>Website usage data: Typically for 2-3 years for analytics purposes</li>
                  </ul>
                </div>

                {/* Security */}
                <div className='flex flex-col gap-2 text-base md:text-lg'>
                  <li className='font-bold'>Security</li>
                  <p>We take the security of your personal and payment information seriously. We implement industry-standard security measures including:</p>
                  <ul className='list-disc list-inside px-2'>
                    <li>SSL encryption for all data transmission</li>
                    <li>Secure payment processing through certified payment providers</li>
                    <li>Regular security audits and monitoring</li>
                    <li>Access controls and employee training</li>
                  </ul>
                  <p>However, no website or internet transmission is completely secure. We cannot guarantee absolute security of your information.</p>
                </div>

                {/*  Children's Privacy */}
                <div className='flex flex-col gap-2 text-base md:text-lg'>
                  <li className='font-bold'>{`Children's Privacy`}</li>
                  <p>Our Website and Services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you believe your child has provided us with personal information, please contact us immediately. We will take steps to remove the information from our systems.</p>
                </div>

                {/* International Transfers */}
                <div className='flex flex-col gap-2 text-base md:text-lg'>
                  <li className='font-bold'>International Transfers</li>
                  <p>Your information may be transferred to and processed in countries other than your own, including the United States and other countries where our service providers operate. These countries may have different data protection laws than your own country. By using our Website and Services, you consent to the transfer of your information to these countries. We ensure appropriate safeguards are in place to protect your information during such transfers.</p>
                </div>

                {/* Changes to this Privacy Policy */}
                <div className='flex flex-col gap-2 text-base md:text-lg'>
                  <li className='font-bold'>Changes to this Privacy Policy</li>
                  <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the new Privacy Policy on the Website and updating the {`"Last Updated"`} date. For significant changes, we may also send you an email notification. You are advised to review this Privacy Policy periodically for any changes.</p>
                </div>

                {/* Contact Us */}
                <div className='flex flex-col gap-2 text-base md:text-lg'>
                  <li className='font-bold'>Contact Us</li>
                  <p>If you have any questions about this Privacy Policy, our privacy practices, or would like to exercise your privacy rights, please contact us at:</p>
                  <ul className='list-disc list-inside px-2'>
                    <li>Email: <a className='underline text-black' href="mailto:privacy@melu-clothes-shop.com">privacy@melu-clothes-shop.com</a></li>
                    <li>Customer Service: <a className='underline text-black' href="mailto:support@melu-clothes-shop.com">support@melu-clothes-shop.com</a></li>
                    <li>Business Inquiries: <a className='underline text-black' href="mailto:hello@melu-clothes-shop.com">hello@melu-clothes-shop.com</a></li>
                  </ul>
                  <p className='mt-2'>We will respond to your inquiry within 30 days of receipt.</p>
                </div>

                {/* Last Updated */}
                <div className='flex flex-col gap-2 text-base md:text-lg'>
                  <li className='font-bold'>Last Updated</li>
                  <p>This Privacy Policy was last updated on August 17, 2025.</p>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}