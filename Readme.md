# QloApps User Guide

The online version of this documentation is hosted at [https://docs.qloapps.com](https://docs.qloapps.com/).

## Contribution guide

Contributions are more than welcome! To start contributing to this documentation, you need to deploy it locally and make the required changes. Here is how to deploy:

- Fork this repository.

- Clone your fork.

- Follow the [Install dependencies](#Install-dependencies) section.

Before making a contribution using a pull request make sure:

- If adding a new page, its topic has not been covered already.

- To use proper terminology as used in this documentation when referring to parts of QloApps.

- To use `kebab-case` when adding a new file. For example, `new-file-one.md`, `new-file-two.md` etc.

Follow VuePress official guide at [https://vuepress.vuejs.org/guide](https://vuepress.vuejs.org/guide/) for further help.

## Versions

Each QloApps version has its own folder, for example `docs/1.7.0/` and `docs/1.8.0/`. Pages are written inside the folder of the version they describe. The version dropdown in the navbar and the sidebars are generated from `docs/.vuepress/versions.js`.

To add a new version (for example 1.9.0):

- Copy the latest version folder: `cp -r docs/1.8.0 docs/1.9.0`.
- Copy its sidebar: `cp docs/.vuepress/sidebars/1.8.0.js docs/.vuepress/sidebars/1.9.0.js`.
- Add `{ label: '1.9.0', path: '/1.9.0/' }` at the top of the `versions` list in `docs/.vuepress/versions.js`.
- Set `latest` in the same file to `'1.9.0'` when the version is released. Links without a version (for example `/catalog/manage_room_types/`) are redirected to the latest version.
- Link to other pages of the same version using the version folder, for example `/1.9.0/hrs/general_settings/`.

Do not edit the folder of an old version except to fix mistakes.

## Install dependencies

- Clone the repository somewhere on your system:
  ```
  git clone https://github.com/Qloapps/user-guide.git
  ```

- Switch to the `user-guide` directory:
  ```
  cd user-guide
  ```

- Install all dependencies:
  ```
  npm install
  ```

- Build and deploy your repository:
  ```
  npm run docs:dev
  ```

- Open your browser and go to [http://localhost:8080](http://localhost:8080).
