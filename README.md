<div align="center">

<img src="media/banner.svg" alt="Gaussian Pets — A portrait. A presence." width="100%">

**Starting from a pet portrait. Bringing a 3D companion to life.**

3D Gaussian Splatting · Rigging · Living Motion

[Demos](#demos) · [Progress](#progress) · [Animation research](docs/animation-notes.md) · [Compare notes](https://github.com/CharlesJunyuLiao/gaussian-pets/issues)

</div>

## Gaussian Pets

I'm building 3D digital pets that preserve the expression and fur detail of a portrait, while adding the subtle movements that make a character feel alive.

I've implemented an experimental workflow that starts from a front-facing pet photo and produces a static 3D Gaussian character, rigging, and breathing animation. My next focus is more natural eye movement and stable appearance during larger body motions.

## Demos

<table>
<tr><th align="left">01 / Seated companion</th><th align="left">02 / Standing companion</th></tr>
<tr><td><img src="media/seated-breath.gif" alt="Seated Gaussian pet: breathing and subtle head motion" width="420"></td><td><img src="media/standing-breath.gif" alt="Standing Gaussian pet: chest and abdomen breathing motion" width="420"></td></tr>
<tr><td>Breathing with subtle head motion</td><td>Gentle chest and abdomen motion</td></tr>
</table>

These animations are exported from actual Gaussian model renders. The seated and standing characters are separate assets; they do not demonstrate a completed sit-to-stand transition. Lightweight GIF previews and higher-quality MP4 files are available in `media/`.

## Progress

| Capability | Status |
| :--- | :--- |
| Static Gaussian characters starting from a front-facing pet photo | Implemented for the current pet examples |
| Skeleton / proxy binding and animation playback | Experimental workflow implemented |
| Breathing and subtle idle motion | Implemented; actual results shown above |
| Blinking | Experimental; eyelid occlusion and closed-eye appearance need refinement |
| Sitting down, standing up, and larger movements | In research; not yet visually satisfactory |
| Automatic binding across breeds and species | A target direction, not yet validated |

## What I'm exploring

**Movement that preserves character.** For a furry Gaussian pet, moving the skeleton is only part of the problem. Eye coverage, joint folding, translucent boundaries, and volume preservation need to work together.

I'm exploring local eyelid representation, anatomically appropriate binding and weights, and stable Gaussian covariance and appearance under larger deformations. Observations are collected in [Animation Notes](docs/animation-notes.md).

If you're working on animatable Gaussians, character rigging, or digital pets, feel free to share observations and experiments in [Issues](https://github.com/CharlesJunyuLiao/gaussian-pets/issues).

## About me

I'm **Charles Liao**. I completed my **graduate studies in Physics at Boston University in 2022** and currently work at **Shenzhen Novis Pet Intelligent Technology Co., Ltd.** I work on pet technology, product development, and hands-on engineering.

## What's in this repository

This is the project's public showcase and animation research repository. It contains the presentation site's source code, actual rendered demos, and progress notes. The asset-generation system and complete internal development workflow are outside this release; this repository is not a complete generation toolkit.

To view the showcase locally (Node.js 18+, no dependencies required):

```sh
node serve.cjs
```

Open `http://127.0.0.1:8800/`. The page plays exported model animations; it does not provide an online generation service.

## Credits and licensing

Animation experiments use the proxy binding and deformation baking capabilities of [KIRI 3DGS Render for Blender](https://github.com/Kiri-Innovation/3dgs-render-blender-addon). Actual Gaussian previews are rendered with [PlayCanvas](https://github.com/playcanvas/engine). Thanks to these projects and the 3DGS research community.

The independently authored showcase code is MIT-licensed. Demo media has separate terms in [MEDIA-LICENSE](MEDIA-LICENSE.md). Upstream algorithms and tools belong to their respective authors; see [CREDITS](CREDITS.md).

---

Built by **[Charles Liao](https://github.com/CharlesJunyuLiao)** · Shenzhen · 2026
