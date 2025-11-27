---
sidebar_position: 103
title: "Credit Usage Guide"
pagination_prev: null
---

# Credits Usage Guide

## Overview

Your usage on the platform is measured using **credits**, based on the number of **input tokens** and **output tokens** processed by an AI model. This document explains how credits are calculated and lists the credit values for all supported models.

## What Are Tokens?

Tokens represent pieces of text used by AI models.

- **1 token ≈ 4 characters**
- **~75 tokens ≈ 1 sentence**
- **~1000 tokens ≈ 750 words**

Models charge separately for:
- **Input tokens** (your request)
- **Output tokens** (AI response)

## How Credits Are Calculated

```
Input Credits  = (input_tokens  / 1000) × input_credit_per_1k
Output Credits = (output_tokens / 1000) × output_credit_per_1k
Total Credits = Input Credits + Output Credits
```

Credits ensure consistent and predictable billing across models and providers.


## KnowledgeBase Credits

The Knowledge Base credit consumption uses a different mechanism.  Credits are consumed for:

### 1. URL-based Knowledge Base
| Component | Description | Credits |
|----------|-------------|---------|
| URL Crawl | Cost applied per URL crawled | 5 |
| Embedding Cost | Text extracted from pages is embedded | Based on embedding model credits consumption |

### 2. Document-based Knowledge Base
| Component | Description | Credits |
|----------|-------------|---------|
| Document Page | Cost applied per page of uploaded document | 6 |
| Embedding Cost | Text extracted from pages is embedded | Based on embedding model credits consumption |

Embedding credits follow the same table as models in the **Embedding** section below.

## Supported Models & Credits

Below are the credit tables grouped by provider within tabs.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="providers">

<TabItem value="openai" label="OpenAI">

<!-- ### 🟦 OpenAI Models -->

| Model | Input Credits / 1K Tokens | Output Credits / 1K Tokens |
|--------|------------------|-------------------|
| chatgpt-4o-latest | 5 | 15 | 
| gpt-4o | 2.5 | 10 | 
| gpt-4o-mini | 0.15 | 0.6 | 
| gpt-5 | 1.25 | 10 | 
| gpt-5-mini | 0.25 | 2 | 
| gpt-5-nano | 0.05 | 0.4 |
| text-embedding-3-small | 0.13 | 0 | 
| text-embedding-3-large | 0.02 | 0 |
| text-embedding-ada-002 | 0.10 | 0 |

</TabItem>

<TabItem value="anthropic" label="Anthropic">

<!-- ### 🟧 Anthropic Models -->

| Model | Input Credits / 1K Tokens | Output Credits / 1K Tokens |
|--------|------------------|-------------------|
| claude-opus-4-1-20250805 | 15 | 75 |
| claude-sonnet-4-5-20250929 | 6 | 22.5 |
| claude-haiku-4-5-20251001 | 1 | 5 | 

</TabItem>

<TabItem value="google" label="Google">

<!-- ### 🟩 Google Models -->

| Model | Input Credits / 1K Tokens | Output Credits / 1K Tokens |
|--------|------------------|-------------------|
| gemini-2.5-pro | 2.5 | 15 |
| gemini-2.5-flash | 0.3 | 2.5 |
| gemini-2.5-flash-lite | 0.1 | 0.4 |
| gemini-2.0-flash | 0.1 | 0.4 |
| gemini-2.0-flash-lite | 0.075 | 0.3 |
| gemini-embedding-001 | 0.15 | 0 |

</TabItem>

</Tabs>


## Summary

- Credits standardize costs across different AI providers.
- Each model defines separate rates for **input** and **output** tokens.
- Total credits = input credits + output credits.
- These tables ensure transparent and predictable usage billing.

