#!/usr/bin/env node

/*
 * Author: Tej
 * GitHub: tpkahlon
 * name: unstar
 * version: 0.0.1
 */

"use-strict";

const inquirer = require("inquirer");
const { Octokit } = require("@octokit/core");

async function logic(pat) {
  try {
    const octokit = new Octokit({ auth: pat });
    const { data } = await octokit.request(`GET /user/starred`);
    if (Array.isArray(data) && data.length !== 0) {
      data.forEach(async (item) => {
        await octokit.request("DELETE /user/starred/{owner}/{repo}", {
          owner: item.owner.login,
          repo: item.name,
        });
      });
      return true;
    }
    return false;
  } catch (err) {
    console.log(err);
    return null;
  }
}

async function unstarPlease(pat) {
  let ran = await logic(pat);
  while (ran) {
    if (!ran) return;
    ran = await logic(pat);
  }
}

inquirer
  .prompt([
    {
      type: "input",
      name: "pat",
      message: "Please enter your Personal access token:",
      default: "",
    },
  ])
  .then(function ({ pat }) {
    unstarPlease(pat);
  })
  .catch(function (error) {
    if (error.isTtyError) console.error(error.isTtyError, error);
    console.error(error);
  });
