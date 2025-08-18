"use client";
import React, { JSX } from 'react'

import DefaultLayout from '@/layouts/default-layout';
import FlowerSVG from '@/components/flower-svg';

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
              <h1 className='text-2xl md:text-3xl font-bold '>Terms of Service</h1>
              <h1 className='text-xl md:text-2xl font-semibold'>Welcome to Melu Clothes Shop!</h1>
            </div>

            {/* Primary Text*/}
            <div className='flex flex-col '>
              <p className='text-base md:text-lg'>These Terms of Service {`("Terms")`} govern your use of our website located at <a className='underline text-primary' href="https://melushop.sale.et">https://melushop.sale.et</a> {`(the "Website")`} and the services offered by Melu Clothes Shop {`(the "Services")`}.
                By accessing or using the Website or Services, you agree to be bound by these Terms. If you disagree with any part of these Terms, then you may not access or use the Website or Services.</p>
            </div>

            {/* Website Terms and Conditions */}
            <div className='w-full flex flex-col '>
              <ul className='list-decimal list-inside flex flex-col gap-5'>
                {/* User Accounts */}
                <div className='flex flex-col gap-2 text-base md:text-lg'>
                  <li className='font-bold'>User Accounts</li>
                  <p>You may be required to create an account to access certain features of the Website or Services, including making purchases, tracking orders, and managing your preferences.
                    You are responsible for maintaining the confidentiality of your account information, including your username and password.
                    You are also fully responsible for all activities that occur under your account, including any purchases made.
                    You agree to notify Melu Clothes Shop immediately of any unauthorized use of your account or any other security breach.
                    Melu Clothes Shop reserves the right to refuse service, terminate accounts, or remove or edit content at its sole discretion.</p>
                </div>

                {/* Use of the Website and Services */}
                <div className='flex flex-col gap-2 text-base md:text-lg'>
                  <li className='font-bold '>Use of the Website and Services</li>
                  <div className='flex flex-col gap-2'>
                    <p className=''>The Website and Services are provided for your personal use. You agree not to use the Website or Services for any purpose that is unlawful or prohibited by these Terms.
                      Here are some examples of prohibited uses:</p>
                    <ul className='list-disc list-inside text-sm md:text-base'>
                      <li>Violating any applicable laws or regulations.</li>
                      <li>Infringing upon the intellectual property rights of others.</li>
                      <li>Transmitting any harmful or malicious content, such as viruses or malware.</li>
                      <li>Disrupting the use of the Website or Services by others.</li>
                      <li>Collecting or storing personal data about other users without their consent.</li>
                      <li>Using automated systems or bots to access the Website or make purchases.</li>
                      <li>Attempting to circumvent security measures or access restricted areas.</li>
                      <li>Reselling products purchased from our Website without authorization.</li>
                    </ul>
                  </div>
                </div>

                {/* Orders and Payments */}
                <div className='flex flex-col gap-2 text-base md:text-lg'>
                  <li className='font-bold'>Orders and Payments</li>
                  <div className='flex flex-col gap-2'>
                    <p>When you place an order through our Website, you agree to provide accurate and complete information. All orders are subject to acceptance by Melu Clothes Shop.</p>
                    <ul className='list-disc list-inside text-sm md:text-base'>
                      <li>Prices are displayed in the currency specified on the Website and are subject to change without notice.</li>
                      <li>Payment must be received before we process your order.</li>
                      <li>We accept various payment methods as specified during checkout.</li>
                      <li>You are responsible for any taxes, duties, or fees associated with your purchase.</li>
                      <li>We reserve the right to cancel orders for any reason, including product unavailability or pricing errors.</li>
                    </ul>
                  </div>
                </div>

                {/* Shipping and Returns */}
                <div className='flex flex-col gap-2 text-base md:text-lg'>
                  <li className='font-bold'>Shipping and Returns</li>
                  <div className='flex flex-col gap-2'>
                    <p>Our shipping and return policies are detailed separately on our Website. By making a purchase, you agree to these policies, which include:</p>
                    <ul className='list-disc list-inside text-sm md:text-base'>
                      <li>Shipping times and costs vary based on location and shipping method selected.</li>
                      <li>Risk of loss passes to you upon delivery to the carrier.</li>
                      <li>Returns must be made within the specified timeframe in original condition.</li>
                      <li>Some items may not be eligible for return due to hygiene or customization reasons.</li>
                      <li>Refunds will be processed to the original payment method within the specified timeframe.</li>
                    </ul>
                  </div>
                </div>

                {/* Intellectual Property */}
                <div className='flex flex-col gap-2 text-base md:text-lg'>
                  <li className='font-bold '>Intellectual Property</li>
                  <p>The Website and Services contain intellectual property owned by Melu Clothes Shop, including trademarks, copyrights, product designs, and trade secrets. You agree not to reproduce, modify, distribute, or commercially exploit any of this intellectual property without the express written permission of Melu Clothes Shop. This includes but is not limited to product images, descriptions, logos, and website content.</p>
                </div>

                {/* Product Information */}
                <div className='flex flex-col gap-2 text-base md:text-lg'>
                  <li className='font-bold'>Product Information</li>
                  <p>We strive to provide accurate product descriptions, images, and pricing. However, we do not warrant that product descriptions, colors, or other content is accurate, complete, reliable, or error-free. Colors shown in product images may vary due to monitor settings and lighting conditions. If a product is not as described, your sole remedy is to return it in accordance with our return policy.</p>
                </div>

                {/* Disclaimers */}
                <div className='flex flex-col gap-2 text-base md:text-lg'>
                  <li className='font-bold'>Disclaimers</li>
                  <p >The Website and Services are provided {`"as is"`} and without warranties of any kind, whether express or implied.
                    Melu Clothes Shop disclaims all warranties, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                    Melu Clothes Shop does not warrant that the Website or Services will be uninterrupted, secure, or error-free.
                    Melu Clothes Shop does not warrant that the results that may be obtained from the use of the Website or Services will be accurate or reliable.</p>
                </div>

                {/* Limitation of Liability */}
                <div className='flex flex-col gap-2 text-base md:text-lg'>
                  <li className='font-bold '>Limitation of Liability</li>
                  <p>In no event shall Melu Clothes Shop be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Website or Services.
                    This includes, but is not limited to, damages for loss of profits, data loss, business interruption, or personal injury. Our total liability shall not exceed the amount you paid for the specific product or service that gave rise to the claim.</p>
                </div>

                {/* Termination */}
                <div className='flex flex-col gap-2 text-base md:text-lg'>
                  <li className='font-bold '> Termination</li>
                  <p>Melu Clothes Shop may terminate your access to the Website or Services at any time for reasons including, but not limited to, violation of these Terms, fraudulent activity, chargebacks, or abusive behavior.
                    Melu Clothes Shop may also, in its sole discretion, remove any content that you submit to the Website. Upon termination, your right to use the Website and Services ceases immediately.</p>
                </div>

                {/* Governing Law */}
                <div className='flex flex-col gap-2 text-base md:text-lg'>
                  <li className='font-bold'>Governing Law</li>
                  <p>These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where Melu Clothes Shop is incorporated, without regard to its conflict of law provisions. Any legal action arising from these Terms shall be filed in the appropriate courts of that jurisdiction.</p>
                </div>

                {/* Dispute Resolution */}
                <div className='flex flex-col gap-2 text-base md:text-lg'>
                  <li className='font-bold'>Dispute Resolution</li>
                  <p>We encourage you to contact us first to resolve any disputes. If we cannot resolve a dispute through direct communication, any dispute arising out of or relating to these Terms shall be resolved through binding arbitration in accordance with the rules of a recognized arbitration association. The arbitration shall be conducted in English and the decision shall be final and binding.</p>
                </div>

                {/* Entire Agreement */}
                <div className='flex flex-col gap-2 text-base md:text-lg'>
                  <li className='font-bold'>Entire Agreement</li>
                  <p>These Terms, together with our Privacy Policy and any other policies referenced herein, constitute the entire agreement between you and Melu Clothes Shop regarding your use of the Website and Services. If any provision of these Terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.</p>
                </div>

                {/* Changes to the Terms of Service */}
                <div className='flex flex-col gap-2 text-base md:text-lg'>
                  <li className='font-bold'>Changes to the Terms of Service</li>
                  <p>Melu Clothes Shop reserves the right to update these Terms at any time.
                    We will notify you of any material changes by posting the new Terms on the Website and updating the {`"Last Updated"`} date.
                    Your continued use of the Website or Services after the posting of any revised Terms means that you accept and agree to the changes. We recommend reviewing these Terms periodically.</p>
                </div>

                {/* Contact Us */}
                <div className='flex flex-col gap-2 text-base md:text-lg'>
                  <li className='font-bold'>Contact Us</li>
                  <p>If you have any questions about these Terms, please contact us at:</p>
                  <ul className='list-disc list-inside px-2'>
                    <li>Email: <a className='underline text-primary' href="mailto:legal@melu-clothes-shop.com">legal@melu-clothes-shop.com</a></li>
                    <li>Customer Service: <a className='underline text-primary' href="mailto:support@melu-clothes-shop.com">support@melu-clothes-shop.com</a></li>
                    <li>General Inquiries: <a className='underline text-primary' href="mailto:hello@melu-clothes-shop.com">hello@melu-clothes-shop.com</a></li>
                  </ul>
                </div>

                {/* Last Updated */}
                <div className='flex flex-col gap-2 text-base md:text-lg'>
                  <li className='font-bold'>Last Updated</li>
                  <p>These Terms of Service were last updated on August 17, 2025.</p>
                </div>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}