# kylehickman.net

Personal technical blog built with [Hugo](https://gohugo.io) and the [Gokarna](https://github.com/gokarna-theme/gokarna-hugo) theme.

## Creating New Posts

Create a new post file in `content/posts/`:

```bash
hugo new content/posts/my-new-post.md
```

Or manually create a markdown file with the following front matter:

```markdown
+++
title = 'My Post Title'
date = 2026-01-16
type = "post"
tags = ["tag1", "tag2"]
description = "Brief description of the post"
+++

Your content here...
```

**Important:** Posts must have `type = "post"` to appear in the post list.

## Development

Start the local development server (including drafts):

```bash
hugo server -D
```

## Documentation

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Gokarna Theme Documentation](https://github.com/gokarna-theme/gokarna-hugo)
