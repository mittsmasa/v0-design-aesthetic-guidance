"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { PaperPlaneTilt } from "@phosphor-icons/react"

export function FormsSection() {
  const [sliderValue, setSliderValue] = useState([40])

  return (
    <section id="forms">
      <div className="mb-12">
        <h2 className="mb-3 font-serif text-2xl font-light tracking-wide text-foreground md:text-3xl">
          Form Elements
        </h2>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          丁寧なインタラクション。フォーム要素にも手触りと余白を。
        </p>
      </div>

      <div className="grid gap-16 md:grid-cols-2">
        {/* Left column */}
        <div className="flex flex-col gap-10">
          {/* Text Input */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Text Input
            </h3>
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="disabled-input">Disabled</Label>
              <Input id="disabled-input" placeholder="Cannot edit" disabled />
            </div>
          </div>

          {/* Textarea */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Textarea
            </h3>
            <div className="flex flex-col gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="What brings you here..."
                className="min-h-28"
              />
            </div>
          </div>

          {/* Select */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Select
            </h3>
            <div className="flex flex-col gap-2">
              <Label>Category</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="development">Development</SelectItem>
                  <SelectItem value="branding">Branding</SelectItem>
                  <SelectItem value="strategy">Strategy</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-10">
          {/* Checkbox */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Checkbox
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm font-normal">
                  Agree to terms of service
                </Label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox id="newsletter" defaultChecked />
                <Label htmlFor="newsletter" className="text-sm font-normal">
                  Subscribe to newsletter
                </Label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox id="disabled-check" disabled />
                <Label htmlFor="disabled-check" className="text-sm font-normal">
                  Disabled option
                </Label>
              </div>
            </div>
          </div>

          {/* Radio */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Radio Group
            </h3>
            <RadioGroup defaultValue="option-1">
              <div className="flex items-center gap-3">
                <RadioGroupItem value="option-1" id="r1" />
                <Label htmlFor="r1" className="text-sm font-normal">Minimal</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="option-2" id="r2" />
                <Label htmlFor="r2" className="text-sm font-normal">Standard</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="option-3" id="r3" />
                <Label htmlFor="r3" className="text-sm font-normal">Custom</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Switch */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Switch
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="notifications" className="text-sm font-normal">
                  Notifications
                </Label>
                <Switch id="notifications" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="dark-mode" className="text-sm font-normal">
                  Dark Mode
                </Label>
                <Switch id="dark-mode" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-save" className="text-sm font-normal">
                  Auto Save
                </Label>
                <Switch id="auto-save" defaultChecked />
              </div>
            </div>
          </div>

          {/* Slider */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Slider
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-normal">Volume</Label>
                <span className="text-xs text-muted-foreground font-mono">
                  {sliderValue[0]}%
                </span>
              </div>
              <Slider
                value={sliderValue}
                onValueChange={setSliderValue}
                max={100}
                step={1}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Composed form */}
      <div className="mt-16 rounded-sm border border-border/50 bg-card p-8">
        <h3 className="mb-6 font-serif text-lg font-light text-foreground">
          Composed Form
        </h3>
        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="compose-first">First Name</Label>
              <Input id="compose-first" placeholder="Taro" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="compose-last">Last Name</Label>
              <Input id="compose-last" placeholder="Yamada" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="compose-email">Email Address</Label>
            <Input id="compose-email" type="email" placeholder="taro@example.com" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="compose-message">Message</Label>
            <Textarea id="compose-message" placeholder="How can we help..." className="min-h-24" />
          </div>
          <div className="flex items-center gap-3">
            <Checkbox id="compose-agree" />
            <Label htmlFor="compose-agree" className="text-sm font-normal text-muted-foreground">
              I agree to the privacy policy
            </Label>
          </div>
          <div className="flex gap-4">
            <Button type="submit" className="tracking-wider">
              <PaperPlaneTilt weight="light" size={18} />
              Submit
            </Button>
            <Button type="button" variant="outline" className="tracking-wider">Cancel</Button>
          </div>
        </form>
      </div>
    </section>
  )
}
