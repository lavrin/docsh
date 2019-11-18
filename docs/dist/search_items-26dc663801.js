searchNodes=[{"doc":"Welcome to docsh, a documentation engine for the Erlang shell. This project provides a number of helpers for accessing module and function doc comments, function specs and exported types. If you want your project to have embedded documentation, use rebar3_docsh plugin. If you want to browse some docs first, read on. To access this documentation you&#39;ve quite likely typed: h(docsh). h/{1,2,3} is the most generic invocation of docsh. h/1 prints documentation for a given module (as shown above) or function: h(fun lists:keyfind/3). h/{2,3} are limited to functions. h/2 displays information about all functions of the given name from a particular module, while h/3 also takes the expected function arity: h(proplists, get_value). h(proplists, get_value, 3). s/{1,2,3} is the helper to use if you&#39;re only interested in function specs, not their full documentation: s(fun proplists:get_value/3). s(proplists, get_value). s(proplists, get_value, 3). t/{2,3} is the helper for printing types exported from modules: t(gen_tcp, connect_option). t(gen_udp, socket). If you want to use the helpers in erl you&#39;ll be set up by docsh&#39;s install script. It will install a user_default module enabling the shell extensions. See https://github.com/erszcz/docsh/README.md if unsure about the installation steps or what user_default is. If you want to use docsh shell extensions in rebar3 shell, please refer to script/docsh_rebar3_shell.escript. If you want to call docsh as a library, please refer to docsh_erl.","ref":"docsh.html","title":"docsh","type":"module"},{"doc":"","ref":"docsh.html#activated/1","title":"docsh.activated/1","type":"function"},{"doc":"","ref":"docsh.html#load_shell_extensions/0","title":"docsh.load_shell_extensions/0","type":"function"},{"doc":"","ref":"docsh.html#main/1","title":"docsh.main/1","type":"function"},{"doc":"","ref":"docsh.html#version/0","title":"docsh.version/0","type":"function"},{"doc":"","ref":"docsh.html#t:external/0","title":"docsh.external/0","type":"type"},{"doc":"","ref":"docsh_beam.html","title":"docsh_beam","type":"module"},{"doc":"","ref":"docsh_beam.html#abstract_code/1","title":"docsh_beam.abstract_code/1","type":"function"},{"doc":"","ref":"docsh_beam.html#attribute/2","title":"docsh_beam.attribute/2","type":"function"},{"doc":"","ref":"docsh_beam.html#beam_file/1","title":"docsh_beam.beam_file/1","type":"function"},{"doc":"","ref":"docsh_beam.html#docs/1","title":"docsh_beam.docs/1","type":"function"},{"doc":"","ref":"docsh_beam.html#from_beam_file/1","title":"docsh_beam.from_beam_file/1","type":"function"},{"doc":"","ref":"docsh_beam.html#from_loaded_module/1","title":"docsh_beam.from_loaded_module/1","type":"function"},{"doc":"","ref":"docsh_beam.html#name/1","title":"docsh_beam.name/1","type":"function"},{"doc":"","ref":"docsh_beam.html#source_file/1","title":"docsh_beam.source_file/1","type":"function"},{"doc":"","ref":"docsh_beam.html#source_file/2","title":"docsh_beam.source_file/2","type":"function"},{"doc":"","ref":"docsh_beam.html#t:debug_info/0","title":"docsh_beam.debug_info/0","type":"type"},{"doc":"","ref":"docsh_beam.html#t:t/0","title":"docsh_beam.t/0","type":"opaque"},{"doc":"EEP-0048 (http://erlang.org/eeps/eep-0048.html) docs_v1 documentation format support.","ref":"docsh_docs_v1.html","title":"docsh_docs_v1","type":"module"},{"doc":"Callback implementation for c::docsh_writer.from_internal/1.","ref":"docsh_docs_v1.html#from_internal/1","title":"docsh_docs_v1.from_internal/1","type":"function"},{"doc":"Callback implementation for c::docsh_format.lookup/3.","ref":"docsh_docs_v1.html#lookup/3","title":"docsh_docs_v1.lookup/3","type":"function"},{"doc":"","ref":"docsh_docs_v1.html#t:i18n_doc/0","title":"docsh_docs_v1.i18n_doc/0","type":"type"},{"doc":"","ref":"docsh_docs_v1.html#t:item/0","title":"docsh_docs_v1.item/0","type":"type"},{"doc":"","ref":"docsh_docs_v1.html#t:language/0","title":"docsh_docs_v1.language/0","type":"type"},{"doc":"","ref":"docsh_docs_v1.html#t:string_/0","title":"docsh_docs_v1.string_/0","type":"type"},{"doc":"","ref":"docsh_docs_v1.html#t:t/0","title":"docsh_docs_v1.t/0","type":"opaque"},{"doc":"","ref":"docsh_edoc.html","title":"docsh_edoc","type":"module"},{"doc":"Callback implementation for c::docsh_reader.available/1.","ref":"docsh_edoc.html#available/1","title":"docsh_edoc.available/1","type":"function"},{"doc":"","ref":"docsh_edoc.html#format_edoc/2","title":"docsh_edoc.format_edoc/2","type":"function"},{"doc":"Callback implementation for c::docsh_reader.to_internal/1.","ref":"docsh_edoc.html#to_internal/1","title":"docsh_edoc.to_internal/1","type":"function"},{"doc":"","ref":"docsh_edoc.html#to_internal/2","title":"docsh_edoc.to_internal/2","type":"function"},{"doc":"","ref":"docsh_edoc_xmerl.html","title":"docsh_edoc_xmerl","type":"module"},{"doc":"","ref":"docsh_edoc_xmerl.html##element#/5","title":"docsh_edoc_xmerl.#element#/5","type":"function"},{"doc":"","ref":"docsh_edoc_xmerl.html##root#/4","title":"docsh_edoc_xmerl.#root#/4","type":"function"},{"doc":"","ref":"docsh_edoc_xmerl.html##text#/1","title":"docsh_edoc_xmerl.#text#/1","type":"function"},{"doc":"","ref":"docsh_edoc_xmerl.html##xml-inheritance#/0","title":"docsh_edoc_xmerl.#xml-inheritance#/0","type":"function"},{"doc":"","ref":"docsh_edoc_xmerl.html#format_edoc/2","title":"docsh_edoc_xmerl.format_edoc/2","type":"function"},{"doc":"#xmlElement.content as defined by xmerl.hrl.","ref":"docsh_edoc_xmerl.html#t:xml_element_content/0","title":"docsh_edoc_xmerl.xml_element_content/0","type":"type"},{"doc":"","ref":"docsh_edoc_xmerl_flat.html","title":"docsh_edoc_xmerl_flat","type":"module"},{"doc":"","ref":"docsh_edoc_xmerl_flat.html##element#/5","title":"docsh_edoc_xmerl_flat.#element#/5","type":"function"},{"doc":"","ref":"docsh_edoc_xmerl_flat.html##root#/4","title":"docsh_edoc_xmerl_flat.#root#/4","type":"function"},{"doc":"","ref":"docsh_edoc_xmerl_flat.html##text#/1","title":"docsh_edoc_xmerl_flat.#text#/1","type":"function"},{"doc":"","ref":"docsh_edoc_xmerl_flat.html##xml-inheritance#/0","title":"docsh_edoc_xmerl_flat.#xml-inheritance#/0","type":"function"},{"doc":"Documentation lookup functions exported in the Erlang shell.","ref":"docsh_erl.html","title":"docsh_erl","type":"module"},{"doc":"When invoked with a module as an argument like h(lists), then look up the module documentation. When invoked with a fun as the argument like h(fun lists:keyfind/3), then equivalent to h(M, F, A) with the the fun&#39;s deduced {M :: module(), F :: name(), A :: arity()}.","ref":"docsh_erl.html#h/1","title":"docsh_erl.h/1","type":"function"},{"doc":"Look up function documentation. Equivalent to h(M, F, any).","ref":"docsh_erl.html#h/2","title":"docsh_erl.h/2","type":"function"},{"doc":"Look up function documentation. If arity is &#39;any&#39;, then all matching functions&#39; docs will be printed. The complete info is function name/arity, spec and description. Use s/{1,2,3} to print just the spec.","ref":"docsh_erl.html#h/3","title":"docsh_erl.h/3","type":"function"},{"doc":"Look up a function spec. Similar to h/1 used with a fun, but prints just the spec.","ref":"docsh_erl.html#s/1","title":"docsh_erl.s/1","type":"function"},{"doc":"Look up function spec. Equivalent to s(M, F, any).","ref":"docsh_erl.html#s/2","title":"docsh_erl.s/2","type":"function"},{"doc":"Look up function spec. If arity is &#39;any&#39; print specs for all matching functions.","ref":"docsh_erl.html#s/3","title":"docsh_erl.s/3","type":"function"},{"doc":"Look up all types defined in module M.","ref":"docsh_erl.html#t/1","title":"docsh_erl.t/1","type":"function"},{"doc":"Look up type definition. Equivalent to t(M, T, any).","ref":"docsh_erl.html#t/2","title":"docsh_erl.t/2","type":"function"},{"doc":"Look up type definition. If arity is &#39;any&#39; print definitions for all matching types.","ref":"docsh_erl.html#t/3","title":"docsh_erl.t/3","type":"function"},{"doc":"","ref":"docsh_erl.html#t:name/0","title":"docsh_erl.name/0","type":"type"},{"doc":"","ref":"docsh_format.html","title":"docsh_format","type":"behaviour"},{"doc":"","ref":"docsh_format.html#item_doc_hidden/0","title":"docsh_format.item_doc_hidden/0","type":"function"},{"doc":"","ref":"docsh_format.html#item_doc_not_available/0","title":"docsh_format.item_doc_not_available/0","type":"function"},{"doc":"","ref":"docsh_format.html#lookup/3","title":"docsh_format.lookup/3","type":"function"},{"doc":"","ref":"docsh_format.html#module_doc_hidden/0","title":"docsh_format.module_doc_hidden/0","type":"function"},{"doc":"","ref":"docsh_format.html#module_doc_not_available/0","title":"docsh_format.module_doc_not_available/0","type":"function"},{"doc":"","ref":"docsh_format.html#t:error_message/0","title":"docsh_format.error_message/0","type":"type"},{"doc":"","ref":"docsh_format.html#t:item/0","title":"docsh_format.item/0","type":"type"},{"doc":"","ref":"docsh_format.html#t:key/0","title":"docsh_format.key/0","type":"type"},{"doc":"","ref":"docsh_format.html#t:kind/0","title":"docsh_format.kind/0","type":"type"},{"doc":"","ref":"docsh_format.html#t:kinds/0","title":"docsh_format.kinds/0","type":"type"},{"doc":"","ref":"docsh_format.html#t:kna/0","title":"docsh_format.kna/0","type":"type"},{"doc":"","ref":"docsh_format.html#t:t/0","title":"docsh_format.t/0","type":"type"},{"doc":"","ref":"docsh_internal.html","title":"docsh_internal","type":"module"},{"doc":"","ref":"docsh_internal.html#kna/1","title":"docsh_internal.kna/1","type":"function"},{"doc":"","ref":"docsh_internal.html#merge/1","title":"docsh_internal.merge/1","type":"function"},{"doc":"","ref":"docsh_internal.html#t:item/0","title":"docsh_internal.item/0","type":"type"},{"doc":"","ref":"docsh_internal.html#t:kna/0","title":"docsh_internal.kna/0","type":"type"},{"doc":"","ref":"docsh_internal.html#t:t/0","title":"docsh_internal.t/0","type":"type"},{"doc":"","ref":"docsh_lib.html","title":"docsh_lib","type":"module"},{"doc":"Show the difference between chunk sets of two modules.","ref":"docsh_lib.html#beam_diff/2","title":"docsh_lib.beam_diff/2","type":"function"},{"doc":"","ref":"docsh_lib.html#compile_info_source_file/1","title":"docsh_lib.compile_info_source_file/1","type":"function"},{"doc":"","ref":"docsh_lib.html#convert/3","title":"docsh_lib.convert/3","type":"function"},{"doc":"","ref":"docsh_lib.html#debug/3","title":"docsh_lib.debug/3","type":"function"},{"doc":"","ref":"docsh_lib.html#format_error/1","title":"docsh_lib.format_error/1","type":"function"},{"doc":"","ref":"docsh_lib.html#get/2","title":"docsh_lib.get/2","type":"function"},{"doc":"","ref":"docsh_lib.html#get/3","title":"docsh_lib.get/3","type":"function"},{"doc":"","ref":"docsh_lib.html#get_abstract_code/1","title":"docsh_lib.get_abstract_code/1","type":"function"},{"doc":"","ref":"docsh_lib.html#get_docs/1","title":"docsh_lib.get_docs/1","type":"function"},{"doc":"","ref":"docsh_lib.html#get_source_file/1","title":"docsh_lib.get_source_file/1","type":"function"},{"doc":"","ref":"docsh_lib.html#group_by/2","title":"docsh_lib.group_by/2","type":"function"},{"doc":"","ref":"docsh_lib.html#guessed_source_file/1","title":"docsh_lib.guessed_source_file/1","type":"function"},{"doc":"","ref":"docsh_lib.html#has_docs/1","title":"docsh_lib.has_docs/1","type":"function"},{"doc":"","ref":"docsh_lib.html#is_module_available/1","title":"docsh_lib.is_module_available/1","type":"function"},{"doc":"","ref":"docsh_lib.html#make_docs/1","title":"docsh_lib.make_docs/1","type":"function"},{"doc":"","ref":"docsh_lib.html#print/2","title":"docsh_lib.print/2","type":"function"},{"doc":"","ref":"docsh_lib.html#print/3","title":"docsh_lib.print/3","type":"function"},{"doc":"","ref":"docsh_lib.html#stick_module/1","title":"docsh_lib.stick_module/1","type":"function"},{"doc":"","ref":"docsh_lib.html#unstick_module/1","title":"docsh_lib.unstick_module/1","type":"function"},{"doc":"","ref":"docsh_lib.html#t:compiled_module/0","title":"docsh_lib.compiled_module/0","type":"type"},{"doc":"","ref":"docsh_lib.html#t:k/0","title":"docsh_lib.k/0","type":"type"},{"doc":"","ref":"docsh_lib.html#t:v/0","title":"docsh_lib.v/0","type":"type"},{"doc":"","ref":"docsh_reader.html","title":"docsh_reader","type":"behaviour"},{"doc":"","ref":"docsh_reader.html#t:t/0","title":"docsh_reader.t/0","type":"type"},{"doc":"","ref":"docsh_syntax.html","title":"docsh_syntax","type":"module"},{"doc":"Callback implementation for c::docsh_reader.available/1.","ref":"docsh_syntax.html#available/1","title":"docsh_syntax.available/1","type":"function"},{"doc":"Callback implementation for c::docsh_reader.to_internal/1.","ref":"docsh_syntax.html#to_internal/1","title":"docsh_syntax.to_internal/1","type":"function"},{"doc":"","ref":"docsh_tracer.html","title":"docsh_tracer","type":"module"},{"doc":"Start and monitor a tracer process. Default dbg:dhandler/2 is nice, but when you want to use domain knowledge or discard some of the data (like too long arg lists / retvals) it might be convenient to write your own dbg handler function. However, this is error prone and since you can&#39;t trace your trace function (d&#39;oh!) hard to debug. The way to go is to setup a monitor on the trace handler process. When the trace function errors and kills the tracer process, you&#39;ll be notified. Still, if the monitor is setup by the shell, the &#39;DOWN&#39; message might simply end up in the message queue of the shell and never be received - you won&#39;t know a crash happened. So, it&#39;s best to setup a process which will monitor the trace handler and print any &#39;DOWN&#39; messages it receives.","ref":"docsh_tracer.html#start/0","title":"docsh_tracer.start/0","type":"function"},{"doc":"","ref":"docsh_user_default.html","title":"docsh_user_default","type":"module"},{"doc":"","ref":"docsh_user_default.html#h/1","title":"docsh_user_default.h/1","type":"function"},{"doc":"","ref":"docsh_user_default.html#h/2","title":"docsh_user_default.h/2","type":"function"},{"doc":"","ref":"docsh_user_default.html#h/3","title":"docsh_user_default.h/3","type":"function"},{"doc":"","ref":"docsh_user_default.html#s/1","title":"docsh_user_default.s/1","type":"function"},{"doc":"","ref":"docsh_user_default.html#s/2","title":"docsh_user_default.s/2","type":"function"},{"doc":"","ref":"docsh_user_default.html#s/3","title":"docsh_user_default.s/3","type":"function"},{"doc":"","ref":"docsh_user_default.html#t/1","title":"docsh_user_default.t/1","type":"function"},{"doc":"","ref":"docsh_user_default.html#t/2","title":"docsh_user_default.t/2","type":"function"},{"doc":"","ref":"docsh_user_default.html#t/3","title":"docsh_user_default.t/3","type":"function"},{"doc":"","ref":"docsh_writer.html","title":"docsh_writer","type":"behaviour"},{"doc":"Store modules&#39; documentation in Docs chunks according to EEP-48. Add the following code to your project&#39;s rebar.config: {plugins, [ {rebar3_docsh, &quot;0.7.2&quot;, {pkg, docsh}} ]}. {provider_hooks, [ {post, [{compile, {docsh, compile}}]} ]}.","ref":"rebar3_docsh.html","title":"rebar3_docsh","type":"module"},{"doc":"","ref":"rebar3_docsh.html#do/1","title":"rebar3_docsh.do/1","type":"function"},{"doc":"","ref":"rebar3_docsh.html#format_error/1","title":"rebar3_docsh.format_error/1","type":"function"},{"doc":"","ref":"rebar3_docsh.html#init/1","title":"rebar3_docsh.init/1","type":"function"}]