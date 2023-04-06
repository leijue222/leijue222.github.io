import{_ as e,W as i,X as n,a1 as s}from"./framework-b5ea9e64.js";const l={},a=s(`<h1 id="ddp-test" tabindex="-1"><a class="header-anchor" href="#ddp-test" aria-hidden="true">#</a> DDP Test</h1><ol><li>DDP每张卡计算特征</li><li>把每张卡返回的结果进行gather，返回List列表</li><li>把gather的结果放在主卡用于指标评估</li></ol><p>gather代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>def all_gather(data):
    &quot;&quot;&quot;
    Run all_gather on arbitrary picklable data (not necessarily tensors)
    Args:
        data: any picklable object
    Returns:
        list[data]: list of data gathered from each rank
    &quot;&quot;&quot;
    world_size = comm.world_size
    if world_size == 1:
        return [data]

    # serialized to a Tensor
    buffer = pickle.dumps(data)
    storage = torch.ByteStorage.from_buffer(buffer)
    tensor = torch.ByteTensor(storage).to(&quot;cuda&quot;)

    # obtain Tensor size of each rank
    local_size = torch.LongTensor([tensor.numel()]).to(&quot;cuda&quot;)
    size_list = [torch.LongTensor([0]).to(&quot;cuda&quot;) for _ in range(world_size)]
    dist.all_gather(size_list, local_size)
    size_list = [int(size.item()) for size in size_list]
    max_size = max(size_list)

    # receiving Tensor from all ranks
    # we pad the tensor because torch all_gather does not support
    # gathering tensors of different shapes
    tensor_list = []
    for _ in size_list:
        tensor_list.append(torch.ByteTensor(size=(max_size,)).to(&quot;cuda&quot;))
    if local_size != max_size:
        padding = torch.ByteTensor(size=(max_size - local_size,)).to(&quot;cuda&quot;)
        tensor = torch.cat((tensor, padding), dim=0)
    dist.all_gather(tensor_list, tensor)

    data_list = []
    for size, tensor in zip(size_list, tensor_list):
        buffer = tensor.cpu().numpy().tobytes()[:size]
        data_list.append(pickle.loads(buffer))

    return data_list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d=[a];function t(r,o){return i(),n("div",null,d)}const v=e(l,[["render",t],["__file","ddp.html.vue"]]);export{v as default};
