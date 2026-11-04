# Animation Notes

I want these pets to keep their expression and fur detail when they move. These notes focus on animation after a Gaussian asset has been created.

## Validated scope

There are currently two independent pet assets: seated and standing. Small chest and abdomen movements are visible, and deformations produced through skeleton / proxy binding can be played in the desktop Gaussian viewer. The seated demo includes subtle head motion; the standing demo uses restrained chest and abdomen movement.

These results validate the small-motion workflow for the current examples. They do not establish one-click automatic binding for arbitrary pets.

## Eye expression

Local Gaussian deformation can move the eye region, but compressing the visible eye is not equivalent to closing a real eyelid. Current artifacts can include a hollow-looking eye, a flattened pupil, and pulling in the surrounding fur. I'm evaluating independent eyelid coverage and local deformation constraints.

Useful comparisons include preserving eyeball volume, inspecting occlusion from front and oblique views, separating the motion support of eyelids, eyeballs, and surrounding fur, and checking that reopening restores the original appearance.

## Larger motions

Sit-to-stand and stand-to-sit transitions have not passed visual review. Joint placement, skinning weights, proxy geometry, coverage of occluded regions, and Gaussian deformation transfer may all affect the result. Adding more bones alone does not guarantee a fix.

I'm focusing on volume preservation at folded joints, connections around the hind legs and pelvis, stretched fur Gaussians, and consistency between covariance transformation and sorting. Comparisons should use the same asset and camera before and after deformation to isolate these factors.

## Discussion

Research links, implementation experience, and visible comparison results are welcome in Issues. Including the camera angle, motion phase, and expected change makes it easier to discuss a specific problem.

## Mathematical background

See the illustrated [3D Gaussian Splatting primer](gaussian-splatting-primer.md) for representation, projection, compositing, and deformation mathematics.
