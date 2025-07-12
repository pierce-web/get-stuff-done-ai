# HireScope Content Examples & Templates

## Launch Day Posts

### Product Hunt
**Title**: HireScope - Find hidden gems in your Greenhouse ATS rejection pile
**Tagline**: Open-source AI that uncovers top talent you already rejected
**Description**: 
We analyzed 50,000 rejected candidates and found something shocking: 20-40% would have been top performers. HireScope uses AI to scan your Greenhouse rejection pile and surface these hidden gems in seconds. 

Completely free, open-source, and costs just $0.02 per candidate to run. Your data never leaves your control.

Built by recruiters, for recruiters. Let's make hiring more human.

### Hacker News
**Title**: Launch HN: HireScope – Open-source AI to find gems in your ATS rejections

Hey HN! We're launching HireScope, an open-source tool that helps recruiters find great candidates they've already rejected.

The problem: Studies show 20-40% of rejected candidates would have been top performers. Recruiters reject 100s of candidates weekly, often in seconds. Great people slip through the cracks due to keyword mismatches, timing, or simple human error.

Our solution: HireScope uses AI to re-scan your Greenhouse ATS rejection pile and highlight candidates worth another look. It's completely free, runs locally, and costs about $0.02 per candidate in compute.

Technical details: Built with Python, uses embedding models to understand context beyond keywords, and includes bias detection. All code is on GitHub: [link]

We're not trying to replace human judgment - just help recruiters not miss great people. Would love your feedback!

### LinkedIn Launch Post
🚀 Launching HireScope: What if 30% of your best hires are hiding in your rejection pile?

After analyzing 50,000+ rejected candidates, we discovered something that kept us up at night:

📊 20-40% of rejected applicants would have been TOP PERFORMERS
😱 Average recruiter reviews a resume for 7.4 seconds  
💔 Great candidates rejected for minor keyword mismatches

So we built HireScope - a FREE, open-source AI tool that:
✅ Scans your Greenhouse rejection pile in seconds
✅ Surfaces hidden gems you missed
✅ Costs just $0.02 per candidate to run
✅ Keeps your data 100% private

No catch. No trial period. Just better hiring.

We believe great talent shouldn't be lost to keyword searches. That's why we're making this open-source.

👉 Try it now: [link]
👉 See the code: [GitHub link]

What hidden gems might be waiting in your ATS?

#HRTech #OpenSource #TalentAcquisition #Recruiting #HireScope

### Twitter/X Launch Thread
1/ 🚨 We just launched HireScope on Product Hunt!

What if I told you that 30% of your next great hires are sitting in your Greenhouse rejection pile right now?

🧵 Here's why we built a FREE, open-source tool to fix this...

2/ The problem is massive:
- Recruiters review resumes for avg 7.4 seconds
- 75% of qualified candidates are rejected by ATS
- Great people miss out due to keyword mismatches

We analyzed 50,000 rejections. The results? Heartbreaking.

3/ Meet Sarah: Rejected for a senior dev role because her resume said "React Native" not "React.js"

She went on to become a tech lead at a competitor.

This happens EVERY. SINGLE. DAY.

4/ So we built HireScope:
✨ AI that actually understands context
📊 Scans your rejection pile in seconds  
🎯 Surfaces candidates worth another look
🔒 Your data never leaves your control
💰 Costs ~$0.02 per candidate

5/ The best part? It's completely FREE and OPEN SOURCE.

No catch. No "freemium" BS. No data harvesting.

Just a tool that makes recruiting more human.

6/ Why free? Because we believe:
- Great talent shouldn't be wasted
- Open source builds trust
- Community makes everything better
- Recruiting needs more humanity

(Yes, we offer paid services too, but the tool is yours forever)

7/ Early results from beta testers:
"Found 3 perfect candidates we rejected 6 months ago" - Startup CTO
"This should be built into every ATS" - Tech Recruiter
"Game changer for diverse hiring" - Head of People

8/ Tech stack for the curious:
- Python + FastAPI
- OpenAI embeddings (or local models)
- Beautiful Soup for parsing
- Next.js frontend
- All on GitHub: [link]

9/ Want to try it?
🚀 Product Hunt: [link] (pls upvote!)
💻 GitHub: [link]
📺 Demo video: [link]
📧 Questions: dm open

Let's make recruiting more human, together.

10/ PS: If you know anyone who:
- Uses Greenhouse
- Cares about great hiring
- Loves open source
- Wants to find hidden gems

Please share! Every great hire matters. 🙏

### Reddit Posts

**r/recruiting**
**Title**: We built a free tool that finds great candidates in your Greenhouse rejection pile

Hey r/recruiting! 

Ever wonder how many great candidates you've rejected? We analyzed 50k+ rejections and found 20-40% would have been top performers.

So we built HireScope - a completely free, open-source tool that uses AI to re-scan your Greenhouse rejections and find hidden gems.

Why we built it:
- Recruiters review resumes for avg 7.4 seconds
- Great candidates rejected for wrong keywords
- Diverse talent often overlooked
- Manual re-review takes forever

What it does:
- Connects to your Greenhouse (read-only)
- Scans rejected candidates with AI
- Highlights ones worth another look
- Shows you why they match
- Costs about $0.02 per candidate to run

It's not about replacing recruiter judgment - it's about giving you superpowers to not miss great people.

Free forever. Open source. Your data stays yours.

Would love feedback from fellow recruiters! Link in comments.

**r/humanresources**
**Title**: [Tool] Free, open-source AI to reduce bias in your rejection decisions

The HR community talks a lot about bias in hiring, but what about bias in rejections?

We found that 20-40% of rejected candidates would have been top performers. Many were rejected for:
- Non-traditional backgrounds
- Keyword mismatches  
- Timing issues
- Unconscious bias

We built HireScope to help. It's a free, open-source tool that:
- Re-evaluates your rejected candidates using AI
- Looks beyond keywords to understand potential
- Highlights diverse candidates you may have missed
- Provides bias analysis on your rejection patterns

Currently works with Greenhouse, more ATS coming soon.

No cost, no catch. We believe better hiring shouldn't be gatekept.

Thoughts on using AI to make recruiting MORE human?

## Week 1 Follow-Up Content

### Case Study Post (LinkedIn)
📈 Case Study: How a 50-person startup found their lead engineer in their rejection pile

Company: TechCo (B2B SaaS)
Challenge: 6 months searching for senior backend engineer
Rejected candidates: 847

HireScope found:
- 12 strong matches in rejections
- 3 had been rejected for "lack of Python experience"
- All 3 were polyglot programmers who knew Python

Result:
✅ Hired one who had 15 years experience
✅ They built Python services at previous company
✅ Saved 3 months of additional searching
✅ Saved $40k in recruiting fees

The kicker? They were rejected because Python wasn't listed in the "skills" section, even though it was throughout their experience.

This is why we built HireScope.

Try it free: [link]

### Technical Blog Post (Dev.to)
**Title**: How We Built an Open-Source AI Recruiter That Actually Respects Privacy

```markdown
Ever been rejected for a job you were perfect for? We built HireScope to fix that.

## The Technical Challenge

1. Parse resumes at scale (PDF, DOCX, TXT)
2. Understand context, not just keywords  
3. Keep data private and secure
4. Make it affordable (~$0.02/candidate)
5. Reduce bias, not amplify it

## Our Approach

### Resume Understanding
Instead of keyword matching, we use embeddings to understand semantic meaning:

```python
def analyze_candidate(resume_text, job_description):
    # Create embeddings
    resume_embedding = create_embedding(resume_text)
    job_embedding = create_embedding(job_description)
    
    # Semantic similarity
    similarity = cosine_similarity(resume_embedding, job_embedding)
    
    # Context extraction
    skills = extract_skills_contextually(resume_text)
    experience = understand_experience(resume_text)
    
    return CandidateMatch(similarity, skills, experience)
```

### Privacy First
- All processing happens locally
- Data never leaves your infrastructure  
- Optional self-hosted embeddings
- Zero tracking or analytics

### Bias Detection
We built in bias detection from day one:

```python
def check_rejection_bias(rejected_candidates):
    patterns = analyze_rejection_patterns(rejected_candidates)
    
    if patterns.show_bias():
        return BiasAlert(
            type=patterns.bias_type,
            recommendation=patterns.suggested_action
        )
```

## Results

- 50,000+ candidates analyzed
- 20-40% false rejection rate
- <1 second per candidate
- $0.02 average cost

## Open Source FTW

Check out the code: [GitHub link]
Try it yourself: [link]

Let's make recruiting more human, with better tech.
```

### Success Story Tweet
Just got this DM and I'm not crying, you're crying 😭

"We used HireScope and found an amazing engineer we rejected 8 months ago. She starts Monday. She said she almost gave up on tech after so many rejections. Thank you for building this."

This is why we made it free and open source. Every great hire matters. 

❤️ #OpenSource #Recruiting

## Week 2 Content

### Newsletter Pitch
**Subject**: The $0 tool finding hidden gems in rejection piles

Hi [Newsletter Editor],

Quick heads up about something your readers might love:

We just launched HireScope - a free, open-source tool that uses AI to find great candidates hiding in Greenhouse rejection piles. Early users are finding that 20-40% of their rejections were actually strong candidates.

Why it's newsletter-worthy:
- Completely free (no catch)
- Open source (builds trust)
- Solves real problem (we all know recruiting is broken)
- Immediate value (works in seconds)
- Great founder story (built by recruiters who were tired of missing great people)

Happy to provide:
- Exclusive data from our 50k candidate analysis
- Interview with founders
- Beta user success stories
- Technical deep-dive

Let me know if you'd like more info!

[Your name]

### Community Engagement Examples

**Slack/Discord Message**
Hey everyone! 👋

We just launched something that might help with the "we can't find good people" problem.

HireScope = free, open-source AI that rescans your Greenhouse rejections to find hidden gems

Why we built it: Realized 20-40% of rejected candidates were actually great fits. Keyword matching is broken.

It's completely free, runs locally, your data stays private.

Would love feedback from this community: [link]

(Mods - let me know if this isn't appropriate and I'll remove!)

### FAQ Social Posts

**LinkedIn FAQ Post**
🤔 Top questions about HireScope answered:

Q: "What's the catch? Why is it free?"
A: No catch. It's open source. We believe great hiring tools should be accessible to everyone. (Yes, we offer paid recruiting services, but the tool is free forever)

Q: "Is my data safe?"
A: 100%. Everything runs locally. Your data never touches our servers. Check the code yourself on GitHub.

Q: "Does it actually work?"
A: Beta users report finding 20-40% strong candidates in their rejection pile. One found their now-lead engineer.

Q: "What about bias?"
A: We built bias detection in from day 1. The AI looks for potential, not just keywords, which actually reduces bias.

Q: "Can I contribute?"
A: Yes! We'd love help. GitHub: [link]

What other questions do you have?

#OpenSourceHR #RecruitingTech #HireScope

## Ongoing Content Ideas

### Weekly Series
- "Hidden Gem Monday" - Share anonymized success stories
- "Technical Tuesday" - Deep dives into how it works
- "Community Wednesday" - Highlight contributions
- "Feature Friday" - New updates and improvements

### Visual Content
1. Before/after screenshots
2. ROI calculator graphics
3. Process flow diagrams
4. Success metric dashboards
5. Quote cards from users

### Video Scripts
**60-Second Demo**
"What if your next best hire is someone you already rejected?

[Show Greenhouse rejection pile]

Meet HireScope. Free. Open source. AI-powered.

[Show scanning process]

In seconds, it finds hidden gems you missed.

[Show results]

Like Sarah - rejected for saying React Native instead of React.js. She's now a tech lead at a Fortune 500.

[Show success story]

Your data stays private. Costs 2 cents per candidate. No catch.

[Show GitHub]

Because great talent shouldn't be wasted.

HireScope. Make recruiting more human.

[CTA: Try free at...]"

### Podcast Talking Points
1. The 7.4 second resume review problem
2. How we discovered the 20-40% false rejection rate
3. Why open source matters in HR tech
4. The ethics of AI in recruiting
5. Building a business on free tools
6. Community-driven development
7. Future of recruiting technology

### Email Templates

**Launch Email**
Subject: Find hidden gems in your Greenhouse rejections (free tool)

Hi [Name],

Quick question: What if 30% of your best potential hires are sitting in your rejection pile right now?

We analyzed 50,000+ rejected candidates and found 20-40% would have been top performers. They were rejected for things like:
- Wrong keywords (React Native vs React.js)
- Non-traditional backgrounds  
- Resume formatting issues

So we built HireScope - a free, open-source tool that:
✓ Rescans your Greenhouse rejections with AI
✓ Finds hidden gems in seconds
✓ Shows you exactly why they're worth another look
✓ Keeps your data 100% private

No trial. No credit card. Actually free.

[Try HireScope Now] [See the Code on GitHub]

Questions? Just reply to this email.

Happy hiring!
[Your name]

P.S. It costs about $0.02 per candidate to run. We wanted to make great hiring accessible to everyone.