/*
 * Copyright 2023 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Config } from '@backstage/config';

const JIRA_BASE_URL_CONFIG_PATH = 'jiraDashboard.baseUrl';
const JIRA_TOKEN_CONFIG_PATH = 'jiraDashboard.token';
const JIRA_USER_CONFIG_EMAIL_SUFFIX = 'jiraDashboard.userEmailSuffix';
const JIRA_FILTERS = 'jiraDashboard.defaultFilters';

export function resolveJiraBaseUrl(config: Config): string {
  try {
    return config.getString(JIRA_BASE_URL_CONFIG_PATH);
  } catch (error) {
    throw new Error(`Invalid Jira baseUrl, ${error}`);
  }
}

export function resolveJiraToken(config: Config): string {
  try {
    return config.getString(JIRA_TOKEN_CONFIG_PATH);
  } catch (error) {
    throw new Error(`Invalid Jira token, ${error}`);
  }
}

export function resolveUserEmailSuffix(config: Config): string | undefined {
  try {
    return config.getOptionalString(JIRA_USER_CONFIG_EMAIL_SUFFIX) || '';
  } catch (error) {
    throw new Error(`Invalid Jira user path, ${error}`);
  }
}
export function resolveJiraFilters(config: Config): Config[] | undefined {
  try {
    return config.getOptionalConfigArray(JIRA_FILTERS);
  } catch (error) {
    throw new Error(`Invalid Jira defaultFilters, ${error}`);
  }
}
