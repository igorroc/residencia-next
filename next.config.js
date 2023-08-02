/** @type {import('next').NextConfig} */

const BUILD = false

const nextConfigBuild = {
	output: "export",
	distDir: "dist",
}

const nextConfigDev = {}

module.exports = BUILD ? nextConfigBuild : nextConfigDev
