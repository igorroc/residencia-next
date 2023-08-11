/** @type {import('next').NextConfig} */

const BUILD = true

const nextConfigBuild = {
	output: "export",
	distDir: "dist",
}

const nextConfigDev = {}

module.exports = BUILD ? nextConfigBuild : nextConfigDev
