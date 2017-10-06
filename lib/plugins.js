'use strict';

var webpack = require('webpack');

var plugin = function plugin(name, optimize) {
  var Plugin = (optimize ? webpack.optimize : webpack)[name];
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new (Function.prototype.bind.apply(Plugin, [null].concat(args)))();
  };
};

var plugins = {
  normalModuleReplacement: plugin('NormalModuleReplacementPlugin'),
  contextReplacement: plugin('ContextReplacementPlugin'),
  ignore: plugin('IgnorePlugin'),
  watchIgnore: plugin('WatchIgnorePlugin'),
  banner: plugin('BannerPlugin'),
  prefetch: plugin('PrefetchPlugin'),
  automaticPrefetch: plugin('AutomaticPrefetchPlugin'),
  provide: plugin('ProvidePlugin'),
  hotModuleReplacement: plugin('HotModuleReplacementPlugin'),
  sourceMapDevTool: plugin('SourceMapDevToolPlugin'),
  evalSourceMapDevTool: plugin('EvalSourceMapDevToolPlugin'),
  evalDevToolModule: plugin('EvalDevToolModulePlugin'),
  cache: plugin('CachePlugin'),
  extendedAPI: plugin('ExtendedAPIPlugin'),
  externals: plugin('ExternalsPlugin'),
  jsonpTemplate: plugin('JsonpTemplatePlugin'),
  libraryTemplate: plugin('LibraryTemplatePlugin'),
  loaderTarget: plugin('LoaderTargetPlugin'),
  memoryOutputFile: plugin('MemoryOutputFileSystem'),
  progress: plugin('ProgressPlugin'),
  setVarMainTemplate: plugin('SetVarMainTemplatePlugin'),
  umdMainTemplate: plugin('UmdMainTemplatePlugin'),
  noErrors: plugin('NoErrorsPlugin'),
  noEmitOnErrors: plugin('NoEmitOnErrorsPlugin'),
  newWatching: plugin('NewWatchingPlugin'),
  environment: plugin('EnvironmentPlugin'),
  dll: plugin('DllPlugin'),
  dllReference: plugin('DllReferencePlugin'),
  loaderOptions: plugin('LoaderOptionsPlugin'),
  namedModules: plugin('NamedModulesPlugin'),
  namedChunks: plugin('NamedChunksPlugin'),
  hashedModuleIds: plugin('HashedModuleIdsPlugin'),
  moduleFilenameH: plugin('ModuleFilenameHelpers'),

  aggressiveMergingPlugin: plugin('AggressiveMergingPlugin', true),
  aggressiveSplittingPlugin: plugin('AggressiveSplittingPlugin', true),
  commonsChunkPlugin: plugin('CommonsChunkPlugin', true),
  chunkModuleIdRangePlugin: plugin('ChunkModuleIdRangePlugin', true),
  dedupePlugin: plugin('DedupePlugin', true),
  limitChunkCountPlugin: plugin('LimitChunkCountPlugin', true),
  minChunkSizePlugin: plugin('MinChunkSizePlugin', true),
  occurrenceOrderPlugin: plugin('OccurrenceOrderPlugin', true)
};

module.exports = plugins;