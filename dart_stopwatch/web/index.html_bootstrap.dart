library app_bootstrap;

import 'package:polymer/polymer.dart';

import 'tute_stopwatch.dart' as i0;
import 'index.html.0.dart' as i1;
import 'package:smoke/smoke.dart' show Declaration, PROPERTY, METHOD;
import 'package:smoke/static.dart' show useGeneratedCode, StaticConfiguration;
import 'tute_stopwatch.dart' as smoke_0;
import 'package:polymer/polymer.dart' as smoke_1;
import 'package:observe/src/metadata.dart' as smoke_2;
abstract class _M0 {} // PolymerElement & ChangeNotifier

void main() {
  useGeneratedCode(new StaticConfiguration(
      checkedMode: false,
      getters: {
        #counter: (o) => o.counter,
        #reset: (o) => o.reset,
        #start: (o) => o.start,
        #stop: (o) => o.stop,
      },
      setters: {
        #counter: (o, v) { o.counter = v; },
      },
      parents: {
        smoke_0.TuteStopwatch: _M0,
        _M0: smoke_1.PolymerElement,
      },
      declarations: {
        smoke_0.TuteStopwatch: {
          #counter: const Declaration(#counter, String, kind: PROPERTY, annotations: const [smoke_2.reflectable, smoke_2.observable]),
        },
      },
      names: {
        #counter: r'counter',
        #reset: r'reset',
        #start: r'start',
        #stop: r'stop',
      }));
  configureForDeployment([
      () => Polymer.register('tute-stopwatch', i0.TuteStopwatch),
    ]);
  i1.main();
}
