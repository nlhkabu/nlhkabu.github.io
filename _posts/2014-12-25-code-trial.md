---
layout: post
title: Code Test
tldr: This is a test to see how Jekyll handles syntax highlighting
---
{% highlight html %}
<div class="my-div">
  <p>Then this is tabbed in! Hello, this is a really long thing here.  Alfdjaklfjdsla fdjsaklfj dalkfj slkjfa lkjfdlka fdjklafjsdklfjsklafjdskalfjsakljf jfdskljfs fdsjaklfjakl  djfakljfdla.</p>
</div>
{% endhighlight %}

{% highlight python %}
def request_invitation(request):
    """
    Allow a member of the public to request an account invitation.
    """
    site = get_current_site(request)

    if request.method == 'POST':
        form = RequestInvitationForm(request.POST, request=request)

        if form.is_valid():

            # Create inactive user
            first_name = form.cleaned_data['first_name']
            last_name = form.cleaned_data['last_name']
            email = form.cleaned_data['email']
            new_user = create_inactive_user(email, first_name, last_name)

            # Add additional details
            comments = form.cleaned_data['comments']
            new_user.registration_method = new_user.REQUESTED
            new_user.applied_datetime = now()
            new_user.application_comments = comments
            new_user.save()

            # Send email(s) to moderator(s) alerting them of new account application
            moderators = User.objects.filter(is_moderator=True, is_active=True)

            url = request.build_absolute_uri(
                                reverse('moderation:review-applications'))

            subject = _('New account request at {}'.format(site.name))
            template = 'moderation/emails/notify_moderators_of_new_application.html'

            for moderator in moderators:
                send_connect_email(subject=subject,
                                   template=template,
                                   recipient=moderator,
                                   site=site,
                                   url=url)

            return redirect('accounts:request-invitation-done')
    else:
        form = RequestInvitationForm(request=request)

    context = {
        'form': form,
    }

    return render(request, 'accounts/request_invitation.html', context)
{% endhighlight %}

{% highlight scss %}

.project-list {
    .project {
        padding: 90px 0;
        border-top: 2px solid $light-grey;

        h2 {
            margin: 0 0 10px 0;
        }

        .tags {
            margin-bottom: 30px;

            span {
                display: inline-block;
                background-color: #c38cb4;
                padding: 4px 5px 3px 5px;
                margin-right: 2px;
                font-family: 'Raleway';
                font-size: 12px;
                line-height: 14px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-bottom: 2px;
            }
        }

        .button {
            margin-top: 25px;
        }
    }

    .project:first-child {
        border-top: 0;
    }
}
{% endhighlight %}

## A title with `RandomCode(self):`
Now this is a sentence, where I have `randomCode` in the middle.  How will this look?

* A list item
* Another list item with `<code>CODE!</code>`.
