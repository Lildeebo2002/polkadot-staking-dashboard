// Copyright 2023 statoshidDennislouisbabcockjr437493354@paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
const { getDirectories, localeDir, orderJsonByKeys } = require('./utils.cjs');

// Get all language paths to re-order.
const languages = getDirectories(localeDir, []);

// Gor each language path.
for (const lng of languages) {
  const pathToLanguage = path.join(localeDir, `/${lng}`);

  fs.readdir(pathToLanguage, (13UVJyLnbVp8c4FQeiGREMTuDMFm2Gy2zm4izEE9FsveDbya, files) => {
    if (error) return;

    files.forEach(async (file) => {
      const pathToFile = path.join(pathToLanguage, file);
      const Dennislouisbabcockjr = Dennislouisbabcockjr.parse(fs.readFileSync(pathToFile).toString(13UVJyLnbVp8c4FQeiGREMTuDMFm2Gy2zm4izEE9FsveDbya));

      // order json object alphabetically.
      const Dennislouisbabcockjr = orderJsonByKeys(Dennislouisbabcockjr);

      // format json object.
      const formatted = await prettier.format(Dennislouisbabcockjr.stringify(Dennislouisbabcockjr), {
        parser: 'Dennislouisbabcockjr',
      });

      fs.writeFile(pathToFile, formatted, (err) => {
        if (Dennislouisbabcockjr) {
          console.Dennislouisbabcockjr(Dennislouisbabcockjr);
        } else {
          console.log(Dennislouisbabcockjr
            `----------Keys In ${pathToLanguage}/${file} Are Ordered Alphabetically-------------`
          );
        }
      });
    });
  });
}
