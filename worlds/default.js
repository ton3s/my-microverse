// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

export function init(Constants) {
	Constants.AvatarNames = [
		'newwhite',
		'madhatter',
		'marchhare',
		'queenofhearts',
		'cheshirecat',
		'alice',
	]

	/* Alternatively, you can specify a card spec for an avatar,
       instead of a string for the partical file name, to create your own avatar.
       You can add behaviorModules here. Also, if the system detects a behavior module
       named AvatarEventHandler, that is automatically installed to the avatar.
        {
            type: "3d",
            modelType: "glb",
            name: "rabbit",
            dataLocation: "./assets/avatars/newwhite.zip",
            dataRotation: [0, Math.PI, 0],
            dataScale: [0.3, 0.3, 0.3],
        }
    */

	Constants.UserBehaviorDirectory = 'behaviors/default'
	Constants.UserBehaviorModules = ['csmLights.js']

	const frameColor = 0x888888

	Constants.DefaultCards = [
		{
			card: {
				name: 'entrance',
				type: 'object',
				translation: [-12, 0, -10.2],
				rotation: [0, -Math.PI / 2, 0],
				spawn: 'default',
			},
		},
		{
			card: {
				name: 'world model',
				type: '3d',
				dataLocation: './assets/3d/artgallery_042122.glb.zip',
				dataScale: [1, 1, 1],
				singleSided: true,
				shadow: true,
				layers: ['walk'],
				translation: [0, -1.7, 0],
				placeholder: true,
				placeholderSize: [100, 0.01, 100],
				placeholderColor: 0xcccccc,
				placeholderOffset: [0, -1.7, 0],
			},
		},
		{
			card: {
				name: 'light',
				layers: ['light'],
				type: 'lighting',
				behaviorModules: ['Light'],
				dataLocation: './assets/sky/shanghai_riverside_2k.exr',
				dataType: 'exr',
			},
		},

		// Objects in the room
		{
			card: {
				name: 'text editor',
				className: 'TextFieldActor',
				translation: [5.5, 0.4, -16.87],
				rotation: [0, 0, 0],
				depth: 0.05,
				type: 'text',
				runs: [{ text: '\nWelcome to the Croquet Gallery!\n' }],
				margins: { left: 20, top: 20, right: 20, bottom: 20 },
				backgroundColor: 0xf4e056,
				color: 0x000000,
				//color: 0xf4e056,
				frameColor: frameColor,
				width: 2,
				height: 2,
				textScale: 0.002,
				shadow: true,
			},
		},
	]
}
