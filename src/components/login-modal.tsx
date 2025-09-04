"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, ArrowLeft, Eye, EyeOff } from "lucide-react"
import Image from "next/image"
import { Dialog, DialogTitle, DialogHeader, DialogContent, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import useLoginModalStore from "@/store/loginModalStore"
import AppAsset from "@/core/AppAsset"

import axios from "@/utils/axios";
import toast from "react-hot-toast"
import useUserStore from "@/store/userStore"

type AuthType = "email" | "phone" | "google"
type AuthMode = "login" | "signup"
type AuthStep = "selection" | "form" | "verification"

interface AuthState {
  step: AuthStep
  mode: AuthMode
  type: AuthType
  email: string
  phone: string
  password: string
  confirmPassword: string
  firstName: string
  lastName: string
  verificationCode: string
  showPassword: boolean
  showConfirmPassword: boolean
  loading: boolean
  error: string
  emailError: string
  phoneError: string
}

export default function AuthModal() {
  const { open, setOpen: onOpenChange } = useLoginModalStore();
  const { login } = useUserStore();

  const [authState, setAuthState] = useState<AuthState>({
    step: "selection",
    mode: "login",
    type: "email",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    verificationCode: "",
    showPassword: false,
    showConfirmPassword: false,
    loading: false,
    error: "",
    emailError: "",
    phoneError: "",
  })

  const updateAuthState = (updates: Partial<AuthState>) => {
    setAuthState((prev) => ({ ...prev, ...updates }))
  }

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      setAuthState({
        step: "selection",
        mode: "login",
        type: "email",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        verificationCode: "",
        showPassword: false,
        showConfirmPassword: false,
        loading: false,
        error: "",
        emailError: "",
        phoneError: "",
      })
    }
    onOpenChange(newOpen)
  }

  const handleAuthTypeSelect = (type: AuthType) => {
    if (type === "google") {
      handleGoogleAuth()
    } else {
      updateAuthState({
        type,
        step: "form",
        error: "",
        emailError: "",
      })
    }
  }

  const handleGoogleAuth = async () => {
    updateAuthState({ loading: true, error: "" })

    try {
      // Placeholder for Google OAuth integration
      console.log("Initiating Google OAuth...")

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Simulate checking if user exists
      const userExists = Math.random() > 0.5 // Random for demo

      if (userExists) {
        console.log("User exists, logging in...")
        // Handle successful login
        handleOpenChange(false)
      } else {
        console.log("New user, creating account...")
        // Handle account creation
        handleOpenChange(false)
      }
    } catch (error) {
      updateAuthState({
        error: "Google authentication failed. Please try again.",
        loading: false,
      })
    }
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (authState.type === "email" && !validateEmail(authState.email)) {
      updateAuthState({ emailError: "Please enter a valid email address" })
      return
    }

    if (authState.type === "phone" && !validatePhone(authState.phone)) {
      updateAuthState({ phoneError: "Please enter a valid phone number" })
      return
    }

    updateAuthState({ loading: true, error: "" })

    try {
      const { type, mode, email, phone, password, firstName, lastName } = authState

      if (type === "email") {
        if (mode == "login") {
          axios.post("/auth/user-login", {
            type,
            email,
            password,
          }).then((response) => {
            const status = response.status;

            if (status == 200) {
              toast.success("Login Success");
              const data = response.data;
              localStorage.setItem("id", data.id);
              login({
                id: data.id,
                name: data.name,
                role: data.role,
                photo_url: "",
                isLoggedIn: true,
              });
              handleOpenChange(false);
              updateAuthState({ loading: false, error: "" })
            }
          }).catch((error) => {
            console.log(error);
            // const status = error.response.status;

            // if (status == 402) {
            //   const message = error.response.data.msg;
            //   if (message == "user_not_found") {
            //     toast.error("User Not Found");
            //     updateAuthState({
            //       mode: "signup",
            //       loading: false,
            //       error: "No account found. Please sign up.",
            //       emailError: "",
            //     })
            //     return
            //   } else if (message == "invalid_credentials") {
            //     toast.error("Email or Password Incorrect");
            //   }
            // }
          });
        } else {
          axios.post("/auth/user-register", {
            type,
            name: `${firstName} ${lastName}`,
            email,
            phone,
            password,
          }).then((response) => {
            const status = response.status;
            if (status == 200) {
              const data = response.data;
              toast.success("Registration Success");
              localStorage.setItem("id", data.id);
              login({
                id: data.id,
                name: data.name,
                role: data.role,
                photo_url: "",
                isLoggedIn: true,
              });
              handleOpenChange(false);
            }
          }).catch((error) => {
            const status = error.response.status;
            if (status == 402) {
              const msg = error.response.data.msg;
              updateAuthState({ loading: false, error: "" });
              if (msg == "email_in_use") {
                toast.error("Email in use");
              } else if (msg == "phone_in_use") {
                toast.error("Phone in use");
              }
            } else {
              toast.error("Internal Server Error");
            }
          });
        }

      } else if (type === "phone") {
        console.log(`${mode} with phone:`, { phone, firstName, lastName })

        await new Promise((resolve) => setTimeout(resolve, 1500))

        if (mode === "login") {
          const userExists = phone.includes("555")
          axios.post("/auth/user-login")
          if (!userExists) {
            updateAuthState({
              mode: "signup",
              loading: false,
              error: "No account found. Please sign up.",
              emailError: "",
            })
            return
          }
        }

        updateAuthState({
          step: "verification",
          loading: false,
          emailError: "",
        })
        return
      }

      // handleOpenChange(false)
    } catch (error) {
      updateAuthState({
        error: "Authentication failed. Please try again.",
        loading: false,
        emailError: "",
      })
    }
  }

  const handleVerification = async (e: React.FormEvent) => {
    e.preventDefault()
    updateAuthState({ loading: true, error: "" })

    try {
      console.log("Verifying code:", authState.verificationCode)

      await new Promise((resolve) => setTimeout(resolve, 1500))

      handleOpenChange(false)
    } catch (error) {
      updateAuthState({
        error: "Invalid verification code. Please try again.",
        loading: false,
        emailError: "",
      })
    }
  }

  const toggleMode = () => {
    updateAuthState({
      mode: authState.mode === "login" ? "signup" : "login",
      error: "",
      emailError: "",
    })
  }

  const goBack = () => {
    if (authState.step === "verification") {
      updateAuthState({ step: "form" })
    } else if (authState.step === "form") {
      updateAuthState({ step: "selection" })
    }
  }

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value
    updateAuthState({
      email,
      emailError: email && !validateEmail(email) ? "Please enter a valid email address" : "",
    })
  }

  const validatePhone = (phone: string): string => {
    // Check if only digits
    if (!/^\d+$/.test(phone)) {
      return "Phone number must contain only numbers"
    }

    // Check length and prefix
    const phoneRegex = /^(?:09\d{8}|07\d{8}|2519\d{8})$/
    if (!phoneRegex.test(phone)) {
      return "Please enter a valid phone number starting with 09, 07, or 2519"
    }

    return "" // no error
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phone = e.target.value
    console.log(phone)
    const error = phone ? validatePhone(phone) : ""
    console.log(error)

    updateAuthState({
      phone,
      phoneError: error,
    })
  }

  const renderContent = () => {
    if (authState.step === "selection") {
      return (
        <>
          <DialogHeader>
            <DialogTitle>
              Welcome
            </DialogTitle>
            <DialogDescription>
              Choose your preferred sign-in method
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-3">
            <Button
              variant="outline"
              className="h-12 justify-center gap-3 bg-transparent hover:bg-white cursor-pointer"
              onClick={() => handleAuthTypeSelect("email")}>
              <Mail className="w-7 h-7" />
              Continue with Email
            </Button>

            <Button
              variant="outline"
              className="h-12 justify-center gap-3 bg-transparent hover:bg-white cursor-pointer"
              onClick={() => handleAuthTypeSelect("google")}
              disabled={authState.loading}>
              <Image
                src={AppAsset.GoogleIcon}
                alt={`Google Icon`}
                className='w-4 h-4' />
              {
                authState.loading &&
                  authState.type === "google" ?
                  "Connecting..." :
                  "Continue with Google"
              }
            </Button>
            <Button
              variant="outline"
              className="h-12 justify-center gap-3 bg-transparent hover:bg-white cursor-pointer"
              onClick={() => handleAuthTypeSelect("phone")}>
              <Phone className="w-5 h-5" />
              Continue with Phone
            </Button>
          </div>
        </>
      )
    }

    if (authState.step === "form") {
      const isSignup = authState.mode === "signup"
      const isEmail = authState.type === "email"

      return (
        <>
          <DialogHeader>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={goBack} className="p-1 h-8 w-8">
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <DialogTitle>{isSignup ? "Create Account" : "Welcome Back"}</DialogTitle>
            </div>
            <DialogDescription>
              {isSignup
                ? `Create your account with ${isEmail ? "email" : "phone number"}`
                : `Sign in with your ${isEmail ? "email" : "phone number"}`}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            {isSignup && (
              <div className="grid grid-cols-2 gap-3">
                <div className="w-full flex flex-col items-start justify-start gap-3">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={authState.firstName}
                    onChange={(e) => updateAuthState({ firstName: e.target.value })}
                    required
                  />
                </div>
                <div className="w-full flex flex-col items-start justify-start gap-3">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={authState.lastName}
                    onChange={(e) => updateAuthState({ lastName: e.target.value })}
                    required
                  />
                </div>
              </div>
            )}

            {isEmail && (
              <div className="flex flex-col items-start justify-start gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={authState.email}
                  onChange={handleEmailChange}
                  required />
                {authState.emailError && <p className="text-sm text-red-600 mt-1">{authState.emailError}</p>}
              </div>
            )}

            {(isSignup || !isEmail) &&
              (
                <div className="flex flex-col items-start justify-start gap-3">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={authState.phone}
                    // onChange={(e) => updateAuthState({ phone: e.target.value })}
                    onChange={handlePhoneChange}
                    placeholder="09xxxxxxxx"
                    required />
                  {authState.phoneError && <p className="text-sm text-red-600 mt-1">{authState.phoneError}</p>}
                </div>)}

            {isEmail && (
              <>
                <div className="w-full flex flex-col items-start justify-start gap-3">
                  <Label htmlFor="password">Password</Label>
                  <div className="w-full relative">
                    <Input
                      className="w-full"
                      id="password"
                      type={authState.showPassword ? "text" : "password"}
                      value={authState.password}
                      onChange={(e) => updateAuthState({ password: e.target.value })}
                      required />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3"
                      onClick={() => updateAuthState({ showPassword: !authState.showPassword })}>
                      {authState.showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>

                {isSignup && (
                  <div className="w-full flex flex-col items-start justify-start gap-3">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="w-full relative">
                      <Input
                        id="confirmPassword"
                        type={authState.showConfirmPassword ? "text" : "password"}
                        value={authState.confirmPassword}
                        onChange={(e) => updateAuthState({ confirmPassword: e.target.value })}
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => updateAuthState({ showConfirmPassword: !authState.showConfirmPassword })}>
                        {authState.showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>
                )}
              </>
            )}

            {authState.error && <p className="text-sm text-red-600">{authState.error}</p>}

            <Button
              type="submit"
              className="w-full text-black cursor-pointer border border-gray-200"
              disabled={authState.loading}>
              {authState.loading
                ? isEmail
                  ? "Authenticating..."
                  : "Sending Code..."
                : isSignup
                  ? "Create Account"
                  : "Sign In"}
            </Button>

            <div className="text-center text-black">
              <Button
                type="button"
                variant="link"
                onClick={toggleMode}
                className="text-sm text-black cursor-pointer">
                {isSignup ?
                  "Already have an account? Sign in" :
                  "Don't have an account? Sign up"
                }
              </Button>
            </div>
          </form>
        </>
      )
    }

    if (authState.step === "verification") {
      return (
        <>
          <DialogHeader>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={goBack} className="p-1 h-8 w-8">
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <DialogTitle>Verify Your Phone</DialogTitle>
            </div>
            <DialogDescription>Enter the verification code sent to {authState.phone}</DialogDescription>
          </DialogHeader>

          <form onSubmit={handleVerification} className="space-y-4">
            <div>
              <Label htmlFor="verificationCode">Verification Code</Label>
              <Input
                id="verificationCode"
                value={authState.verificationCode}
                onChange={(e) => updateAuthState({ verificationCode: e.target.value })}
                placeholder="Enter 6-digit code"
                maxLength={6}
                required
              />
            </div>

            {authState.error && <p className="text-sm text-red-600">{authState.error}</p>}

            <Button type="submit" className="w-full" disabled={authState.loading}>
              {authState.loading ? "Verifying..." : "Verify Code"}
            </Button>

            <div className="text-center">
              <Button type="button" variant="link" className="text-sm" onClick={() => console.log("Resend code")}>
                {`Didn't`} receive a code? Resend
              </Button>
            </div>
          </form>
        </>
      )
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">{renderContent()}</DialogContent>
    </Dialog>
  )
}
