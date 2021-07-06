---
date: "2021-07-05"
title: "MacOS - Setup and Shell"
section: 'software'
---

So...I just made the switch to an M1 MacBook Air. _Much like many others._ _Unlike_ many others, I don't have much experience with zsh, or configuring it. Or even how it compares to bash, or any other shell.

I've always just used the CLI in a get in, do the job, and get out manner.


## Bombarded: Drowning in Tools

It had been a while since my last foray with Mac OS, so I figured a little searching around would suit me well before installing tools and possibly mucking up my environment. 

_I was wrong._

Immediately, I was hit with:

- homebrew
- iTerm2
- zsh (as opposed to bash?)
- OhMyZsh
- nvm (for managing `npm`)

**_Cue flashbacks to the explosion of JS tools in 2015 web development._**


## So, what's the shortest, smartest path to running `npm`?

- Answer: which shell am I running?
- zsh (default) -> may as well install OhMyZsh then
- reload terminal, install `nvm`


### What's my shell, again?

_(yes, a Blink182 reference)_

Ref: [https://stackoverflow.com/questions/43417162/which-shell-i-am-using-in-mac](https://stackoverflow.com/questions/43417162/which-shell-i-am-using-in-mac)

Of course, StackOverflow has the answer. Short answer is, `zsh` is likely your default. To verify, you can check from Terminal's menubar by Terminal -> Preferences -> General, or running the following:

```bash
// for currently running
ps -o comm= $$
// for default
echo $SHELL
```


### False Start, need a profile

After determining my shell, I then attempted to install `nvm` (to better manage `npm`).

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```

However, this is where I received an error stating I didn't have a shell profile available.

[ *NOTE: Insert pic of error message showing missing profile configs* ]

- `~/.bashrc`
- `~/.bash_profile`
- `~/.zshrc`
- `~/.profile`

Ref: [https://justinwride.medium.com/install-node-and-npm-natively-on-apple-silicon-mac-m1-7432c826389b](https://justinwride.medium.com/install-node-and-npm-natively-on-apple-silicon-mac-m1-7432c826389b)


### Oh My Zsh

So, at this point I've determined I'm using `zsh` and tools are telling me I need a profile. I may as well start using Oh My Zsh since I need a profile (`~/.zshrc`) and it's built for managing exactly that.

To install "Oh My Zsh":

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

To learn more:

[https://github.com/ohmyzsh/ohmyzsh](https://github.com/ohmyzsh/ohmyzsh)

## Works Now

Recap; I'm using zsh, install Oh My Zsh, and restarted the terminal now. So any PATH variables changes have been loaded into the current session.

Let's install `nvm` again, and it works this time!

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```

Then we can install `npm`. Just note, this command will take a few minutes to run. From what I've read elsewhere nvm is compiling npm from source.

```bash
nvm install v15
```