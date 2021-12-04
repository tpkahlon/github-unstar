# Introduction

When I created an account on GitHub, I unconsciously starred gazillion repositories. Over the years, I realised the number has accumulated into thousands.

There is no easy way to unstar them. It takes manual labor to click through each repository and unstar it. To add to your frustration, there is a pagination in place. You can only unstar few items at once, then you have to paginate. Annoying, isn't it?

Over time, you will grow as a developer and all these starred repositories make no sense to you. You would prefer to keep this to bookmark certain repositories that you use on a daily basis.

Over past year, I tried many different projects that other created to unstar my repositories. All of them were outdated. Some used Ruby, Python etc. which I am not familiar with enough. Some used older API endpoint which makes them useless.

I went through Github API documentation, always found it hard to track down this specific issue. This weekend, I sit down and explored their API documentation with clear mind again. Wolla, I see a light at the end of the tunnel.

How do I solve this problem?

Come to your resuce in 2021, `npm i -g github-unstar`.

Run the command using `github-unstar`. It will ask for your personal access token. Generate that in GitHub account for one time usage.

In few seconds, all your starred mess will be taken care of. Mind you if you have starred projects in range of 10k+, you may need to run this command few times again because Github API has maximum limit for each loop I run. If that happens, wait for a minute, and rerun the `npm` command again.

## Install

- `npm i -g github-unstar`
- `yarn global add github-unstar`

## Usage

```js
github-unstar;
```

## Does it even work?

See my own account for proof. I had 1K+ stars prior to Dec 3, 2021. Check it now.
