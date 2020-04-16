When merge an object with a read stream, merge deep seems to keep it a stream,  but deepmerge doesn't?

deep merge by default will copy properties, which makes "special" objects go away.  merge deep keeps special things by default.

you can add a option to deep merge to keep special things
