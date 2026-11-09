import MinimalTheme from '../main';

export function registerDarkSchemeCommands(plugin: MinimalTheme) {
  plugin.addCommand({
    id: 'toggle-minimal-arc-blueberry-dark',
    name: 'Switch dark color scheme to Arc Blueberry (dark)',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-arc-blueberry-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-atom-dark',
    name: 'Switch dark color scheme to Atom (dark)',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-atom-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-ayu-dark',
    name: 'Switch dark color scheme to Ayu (dark)',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-ayu-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-bearded-aquarelle-hydrangea-dark',
    name: 'Switch dark color scheme to Bearded Theme Aquarelle Hydrangea (dark)',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-bearded-aquarelle-hydrangea-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-bearded-black-amethyst-soft-dark',
    name: 'Switch dark color scheme to Bearded Theme Black & Amethyst Soft (dark)',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-bearded-black-amethyst-soft-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-bearded-black-emerald-dark',
    name: 'Switch dark color scheme to Bearded Theme Black & Emerald (dark)',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-bearded-black-emerald-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-bearded-black-gold-dark',
    name: 'Switch dark color scheme to Bearded Theme Black & Gold (dark)',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-bearded-black-gold-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-bearded-black-ruby-dark',
    name: 'Switch dark color scheme to Bearded Theme Black & Ruby (dark)',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-bearded-black-ruby-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-bearded-coffee-dark',
    name: 'Switch dark color scheme to Bearded Theme Coffee (dark)',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-bearded-coffee-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-bearded-hc-wonderland-wood-dark',
    name: 'Switch dark color scheme to Bearded Theme HC Wonderland Wood (dark)',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-bearded-hc-wonderland-wood-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-bearded-themanopia-dark',
    name: 'Switch dark color scheme to Bearded Themanopia (Experimental) (dark)',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-bearded-themanopia-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-bearded-vivid-purple-dark',
    name: 'Switch dark color scheme to Bearded Theme Vivid Purple (dark)',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-bearded-vivid-purple-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-catppuccin-dark',
    name: 'Switch dark color scheme to Catppuccin (dark)',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-catppuccin-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-dracula-dark',
    name: 'Switch dark color scheme to Dracula (dark)',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-dracula-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-default-dark',
    name: 'Switch dark color scheme to default (dark)',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-default-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-eink-dark',
    name: 'Switch dark color scheme to E-ink (dark)',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-eink-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-everforest-dark',
    name: 'Switch dark color scheme to Everforest (dark)',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-everforest-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-flexoki-dark',
    name: 'Switch dark color scheme to Flexoki (dark)',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-flexoki-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-gruvbox-dark',
    name: 'Switch dark color scheme to Gruvbox (dark)',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-gruvbox-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-macos-dark',
    name: 'Switch dark color scheme to macOS (dark)',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-macos-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-nord-dark',
    name: 'Switch dark color scheme to Nord (dark)',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-nord-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-one-dark-pro-dark',
    name: 'Switch dark color scheme to One Dark Pro (dark)',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-one-dark-pro-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-notion-dark',
    name: 'Switch dark color scheme to Sky (dark)',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-notion-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-rose-pine-dark',
    name: 'Switch dark color scheme to Rosé Pine (dark)',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-rose-pine-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-solarized-dark',
    name: 'Switch dark color scheme to Solarized (dark)',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-solarized-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-things-dark',
    name: 'Switch dark color scheme to Things (dark)',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-things-dark';
      void plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });

  plugin.addCommand({
    id: 'toggle-minimal-shades-of-purple-dark',
    name: 'Switch dark color scheme to Shades of Purple (dark)',
    callback: () => {
      plugin.settings.darkScheme = 'minimal-shades-of-purple-dark';
      plugin.saveData(plugin.settings);
      plugin.updateDarkScheme();
      plugin.updateDarkStyle();
    }
  });
}

