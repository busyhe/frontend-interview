export default {
    "branches": [
        {
            "name": "main"
        }
    ],
    "plugins": [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        [
            "@semantic-release/changelog",
            {
                "changelogFile": "CHANGELOG.md"
            }
        ],
        ["@semantic-release/github"],
        [
            "@semantic-release/npm",
            {
                "npmPublish": false
            }
        ],
        [
            "@semantic-release/git",
            {
                "assets": [
                    "CHANGELOG.md",
                    "package.json"
                ],
                "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
            }
        ]
    ]
}