// Module
import Config from './src/config.js';

const module_id = 'FoundryVTT-mausritter-DE';
const module_lang = 'de';
const module_sys = 'mausritter';

Hooks.once('init', () => {
    // Create settings
    Config.forEach((cfg) => {
        // Skip settings not applicable for this system version
        if ('onlyUntilSystemVersionIncluding' in cfg &&
            isNewerVersion(game.system.data.version,
                cfg.onlyUntilSystemVersionIncluding)) {
            return;
        } else {
            game.settings.register(module_id, cfg.name, cfg.data);
        }
    });

    // Register Babele compendium translations if module is present
    if (typeof Babele !== 'undefined' &&
        game.settings.get(module_id, 'enableCompendiumTranslation')) {
        Babele.get().register({
            module: module_id,
            lang: module_lang,
            dir: 'compendium'
        });
        Converters(module_id);
    }
});

Hooks.once('ready', function () {
    if (game.i18n.lang === module_lang &&
        game.system.id === module_sys &&
        game.settings.get(module_id, 'translationDialog')){
            Dialog();
        }
});
