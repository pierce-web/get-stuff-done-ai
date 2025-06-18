# GitHub Issue: Update Calendly Links for Round-Robin Scheduling

## Title
Update Calendly links to use round-robin format for consultation scheduling

## Description
Following the implementation of associate pricing tiers, we need to update our Calendly integration to support a round-robin scheduling format that can distribute consultation calls among team members.

## Tasks
- [ ] Create round-robin Calendly event for free consultations
- [ ] Update all "Schedule Free Consultation" links across the site to use the new round-robin link
- [ ] Set up individual Calendly events for each associate with Stripe integration
- [ ] Create associate-specific booking links once associates are onboarded

## Current Links to Update
1. **Free Consultation Links** (currently using `https://calendly.com/gsdatwork/free-consult`):
   - Navigation header
   - Homepage Hero section
   - Service cards
   - AI Action Workshop page
   - AI Oracle Session page
   - 10x Executive page
   - Triple-A Transformation page
   - About page
   - EngagementLevels component

2. **Founder Workshop Link** (currently using `https://calendly.com/gsdatwork/ai-workshop`):
   - AI Action Workshop page (Founder-led tier)

## Implementation Notes
- Associates will set up their own Calendly accounts with Stripe integration
- The round-robin format should distribute leads fairly among available team members
- Consider adding availability indicators if possible
- Ensure consistent messaging about consultation vs direct booking

## Related PR
Feature branch: `feature/associate-pricing-tiers`